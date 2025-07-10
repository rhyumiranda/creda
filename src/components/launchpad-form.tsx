"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Rocket, Building2, Coins, Copy, Check } from "lucide-react";
import { pb } from "@/lib/utils";
import {toast} from "sonner";

const generateSecureApiKey = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);

  const base64 = btoa(String.fromCharCode.apply(null, Array.from(array)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  return `lnr_sk_${base64}`;
};

export function LaunchpadForm() {
  const basePrice = 0.1;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showHashedKey, setShowHashedKey] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>("");

  const [formDataOrganization, setFormDataOrganization] = useState({
    name: "",
    owner: "",
  });

  const [formDataToken, setFormDataToken] = useState({
    token_name: "",
    token_symbol: "",
    token_price: basePrice, // Initial price set to base price
    max_supply: 0,
    current_supply: 0,
    market_capitalization: 0,
    secret_key: generateSecureApiKey(),
  });

  // Update owner when auth state changes
  useEffect(() => {
    console.log("Auth check - authStore:", pb.authStore);
    console.log("Auth check - record:", pb.authStore?.record);
    console.log("Auth check - isValid:", pb.authStore?.isValid);

    const userId = pb.authStore?.record?.id || "";
    console.log("Auth check - userId:", userId);

    setFormDataOrganization((prev) => ({
      ...prev,
      owner: userId,
    }));

    // Listen for auth changes
    const unsubscribe = pb.authStore.onChange((token, record) => {
      console.log("Auth changed - token:", token);
      console.log("Auth changed - record:", record);

      const newUserId = record?.id || "";
      console.log("Auth changed - newUserId:", newUserId);

      setFormDataOrganization((prev) => ({
        ...prev,
        owner: newUserId,
      }));
    });

    return () => unsubscribe();
  }, []);

  // Update token price whenever max_supply or current_supply changes
  useEffect(() => {
    if (formDataToken.max_supply > 0 && formDataToken.current_supply > 0) {
      const calculatedPrice =
        basePrice * (formDataToken.max_supply / formDataToken.current_supply);
      setFormDataToken((prev) => ({
        ...prev,
        token_price: calculatedPrice,
        market_capitalization: calculatedPrice * formDataToken.current_supply,
      }));
    } else if (formDataToken.max_supply > 0) {
      // If only max_supply is set, use base price
      setFormDataToken((prev) => ({
        ...prev,
        token_price: basePrice,
        market_capitalization: basePrice * formDataToken.max_supply,
      }));
    }
  }, [formDataToken.max_supply, formDataToken.current_supply, basePrice]);

  useEffect(() => {
    console.log("Organization Form Data: ", formDataOrganization);
    console.log("Token Form Data: ", formDataToken);
  }, [formDataOrganization, formDataToken]);

  const regenerateApiKey = () => {
    const newKey = generateSecureApiKey();
    setFormDataToken((prev) => ({
      ...prev,
      secret_key: newKey,
    }));
    setShowHashedKey(false);
    setIsCopied(false);
    console.log("New API key generated:", newKey);
  };

  const hashSecretKey = (key: string): string => {
    if (key.length < 4) return key;
    const prefix = key.substring(0, 6); // "lnr_sk"
    const suffix = key.substring(key.length - 2); // last 2 characters
    const maskedMiddle = "*".repeat(12);
    return `${prefix}_${maskedMiddle}${suffix}`;
  };

  const copySecretKey = async () => {
    try {
      await navigator.clipboard.writeText(formDataToken.secret_key);
      setIsCopied(true);
      setShowHashedKey(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy secret key:", err);
    }
  };

  // const checkAuthState = () => {
  //   console.log("Manual auth check:");
  //   console.log("- authStore:", pb.authStore);
  //   console.log("- isValid:", pb.authStore?.isValid);
  //   console.log("- record:", pb.authStore?.record);
  //   console.log("- userId:", pb.authStore?.record?.id);

  //   // Force update the owner field
  //   const currentUserId = pb.authStore?.record?.id || "";
  //   setFormDataOrganization((prev) => ({
  //     ...prev,
  //     owner: currentUserId,
  //   }));

  //   alert(`Current User ID: ${currentUserId || "Not logged in"}`);
  // };

  const generateWalletAddress = (): string => {
    // Generate a random Ethereum-style address (0x + 40 hex characters)
    const array = new Uint8Array(20);
    crypto.getRandomValues(array);
    const hex = Array.from(array, (byte) =>
      byte.toString(16).padStart(2, "0")
    ).join("");
    return `0x${hex}`;
  };

  const handleConnectWallet = async () => {
    try {
      // First attempt to authenticate with GitHub
      const authData = await pb.collection("users").authWithOAuth2({
        provider: "github",
      });

      console.log("Auth successful:", authData);

      // Generate a wallet address for the user and store it in state
      const generatedAddress = generateWalletAddress();
      setWalletAddress(generatedAddress);
      console.log("Generated wallet address:", generatedAddress);

      // Update the owner field with the authenticated user ID
      setFormDataOrganization((prev) => ({
        ...prev,
        owner: authData.record?.id || "",
      }));

      // Show success toast
      toast.success("Wallet connected successfully!", {
        description: "You can now proceed with token creation.",
        duration: 3000,
      });
    } catch (error) {
      console.error("Wallet connection failed:", error);
      toast.error("Failed to connect wallet", {
        description: "Please try again or check your connection.",
        duration: 4000,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if wallet is connected
    if (!formDataOrganization.owner) {
      toast.error("Please connect your wallet before creating a token.", {
        description: "You need to connect your wallet to proceed with token creation.",
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Creating your token...", {
      description: "Setting up your organization and token on the blockchain.",
    });

    try {
      console.log("Starting token creation process...");

      // First, create the organization
      console.log("Creating organization:", formDataOrganization);
      const organizationResponse = await pb
        .collection("organizations")
        .create(formDataOrganization);
      console.log("Organization created successfully:", organizationResponse);

      // Then, create the token with reference to the organization
      const tokenDataWithOrgRef = {
        ...formDataToken,
        organization: organizationResponse.id, // Link token to organization
        created_by: formDataOrganization.owner,
      };

      console.log("Creating token:", tokenDataWithOrgRef);
      const tokenResponse = await pb
        .collection("tokens")
        .create(tokenDataWithOrgRef);
      console.log("Token created successfully:", tokenResponse);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show success toast
      toast.success("🚀 Token created successfully!", {
        description: `${formDataToken.token_symbol} token has been deployed. Organization ID: ${organizationResponse.id}`,
        duration: 6000,
        action: {
          label: "View Details",
          onClick: () => {
            window.location.href = "https://creda-demo-project.vercel.app";
            console.log("creda demo added") // Redirect to YouTube
            console.log("Viewing token details:", {
              organizationId: organizationResponse.id,
              tokenId: tokenResponse.id,
              symbol: formDataToken.token_symbol
            });
          }
        }
      });

      // Optional: Reset form or redirect
      // resetForm();
    } catch (error) {
      console.error("Error creating token:", error);
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show error toast with detailed message
      if (error instanceof Error) {
        toast.error("Failed to create token", {
          description: error.message,
          duration: 5000,
        });
      } else {
        toast.error("Token creation failed", {
          description: "Please check your connection and try again. Contact support if the issue persists.",
          duration: 5000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-gray-900/30 border-gray-800/50">
        <CardHeader className="text-center pb-8">
          <div className="mx-auto w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Launch Your Loyalty/Reward
          </CardTitle>
          <CardDescription className="text-gray-400">
            Fill in the details below to create and deploy your loyalty token
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-gray-400" />
                <h3 className="text-lg font-semibold">
                  Organization Information
                </h3>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="organizationName"
                  className="text-sm font-medium text-gray-300"
                >
                  Organization/Project Name
                </Label>
                <Input
                  id="organizationName"
                  type="text"
                  placeholder="Enter your organization name"
                  value={formDataOrganization.name}
                  onChange={(e) =>
                    setFormDataOrganization({
                      ...formDataOrganization,
                      name: e.target.value,
                    })
                  }
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
                  required
                />
              </div>

              {/* Wallet Connection Section */}
              {!formDataOrganization.owner ? (
                <div className="space-y-2 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Connect Your Project Wallet
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Connect your wallet to continue with loyalty/reward creation
                    </p>
                    <Button
                      type="button"
                      onClick={handleConnectWallet}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
                    >
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                  <Label className="text-sm font-medium text-green-300">
                    Connected Wallet
                  </Label>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <Input
                        value={walletAddress}
                        readOnly
                        className="bg-green-800/30 border-green-700 text-green-200 font-mono text-sm"
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={() => {
                        pb.authStore.clear();
                        setWalletAddress("");
                        setFormDataOrganization((prev) => ({
                          ...prev,
                          owner: "",
                        }));
                      }}
                      variant="outline"
                      size="sm"
                      className="border-green-700 text-green-300 hover:bg-green-800"
                    >
                      Disconnect
                    </Button>
                  </div>
                  <p className="text-xs text-green-400">
                    Wallet connected successfully. You can now create your
                    token.
                  </p>
                </div>
              )}
            </div>
            <Separator className="bg-gray-800/50" />
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Coins className="h-5 w-5 text-gray-400" />
                <h3 className="text-lg font-semibold">Token Description</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="tokenName"
                    className="text-sm font-medium text-gray-300"
                  >
                    Loyalty/Reward Name
                  </Label>
                  <Input
                    id="tokenName"
                    type="text"
                    placeholder="e.g., Loyalty Points"
                    value={formDataToken.token_name}
                    onChange={(e) =>
                      setFormDataToken({
                        ...formDataToken,
                        token_name: e.target.value,
                      })
                    }
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="tokenSymbol"
                    className="text-sm font-medium text-gray-300"
                  >
                    Loyalty/Reward Symbol
                  </Label>
                  <Input
                    id="tokenSymbol"
                    type="text"
                    placeholder="e.g., LPT"
                    value={formDataToken.token_symbol}
                    onChange={(e) =>
                      setFormDataToken((prev) => ({
                        ...prev,
                        token_symbol: e.target.value.toUpperCase(),
                      }))
                    }
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
                    maxLength={6}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="maxSupply"
                    className="text-sm font-medium text-gray-300"
                  >
                    Max Supply
                  </Label>
                  <Input
                    id="maxSupply"
                    type="number"
                    min="1"
                    placeholder="1000000"
                    value={formDataToken.max_supply || ""}
                    onChange={(e) =>
                      setFormDataToken((prev) => ({
                        ...prev,
                        max_supply: parseInt(e.target.value) || 0,
                      }))
                    }
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="currentSupply"
                    className="text-sm font-medium text-gray-300"
                  >
                    Current Supply
                  </Label>
                  <Input
                    id="currentSupply"
                    type="number"
                    min="0"
                    placeholder="500000"
                    value={formDataToken.current_supply || ""}
                    onChange={(e) =>
                      setFormDataToken((prev) => ({
                        ...prev,
                        current_supply: parseInt(e.target.value) || 0,
                      }))
                    }
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300">
                    Loyalty/Reward Price (USD)
                  </Label>
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-3">
                    <span className="text-white font-mono">
                      ${formDataToken.token_price.toFixed(4)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Calculated automatically based on supply
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-300">
                    Market Cap (USD)
                  </Label>
                  <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-3">
                    <span className="text-white font-mono">
                      ${formDataToken.market_capitalization.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Loyalty/Reward price × Current supply
                  </p>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label
                    htmlFor="secretKey"
                    className="text-sm font-medium text-gray-300"
                  >
                    API Secret Key
                  </Label>
                  <div className="flex space-x-2">
                    <Input
                      id="secretKey"
                      type="text"
                      value={
                        showHashedKey
                          ? hashSecretKey(formDataToken.secret_key)
                          : formDataToken.secret_key
                      }
                      readOnly
                      className="bg-gray-800/50 border-gray-700 text-white font-mono text-sm flex-1"
                    />
                    <Button
                      type="button"
                      onClick={copySecretKey}
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-white hover:bg-gray-800 px-3"
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      type="button"
                      onClick={regenerateApiKey}
                      variant="outline"
                      className="border-gray-700 text-white hover:bg-gray-800 px-4"
                    >
                      Regenerate
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    This key will be used to authenticate API requests for your
                    token. Keep it secure!
                  </p>
                </div>
              </div>
            </div>

            <Separator className="bg-gray-800/50" />

            <div className="pt-4">
              <Button
                type="submit"
                onSubmit={handleSubmit}
                className="w-full bg-white text-black hover:bg-gray-100 font-medium py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Token...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Rocket className="h-4 w-4" />
                    <span>Create Token</span>
                  </div>
                )}
              </Button>
            </div>

            <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-gray-300">Note:</strong> Once created,
                your token will be deployed to the blockchain. Make sure all
                information is correct before proceeding. Gas fees may apply for
                deployment.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

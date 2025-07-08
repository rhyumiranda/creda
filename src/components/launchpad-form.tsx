"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Rocket, Building2, Coins } from "lucide-react"

export function LaunchpadForm() {

  const [formDataOrganization, setFormDataOrg] = useState({
    name: "",
    owner: "",
  })

  const [formDataToken, setFormDataToken] = useState({
    token_name: "",
    token_symbol: "",
    token_price: "",
    max_supply: "",
    current_supply: 0,
    market_capitalization: 0,
    secret_key: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-gray-900/30 border-gray-800/50">
        <CardHeader className="text-center pb-8">
          <div className="mx-auto w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Launch Your Token</CardTitle>
          <CardDescription className="text-gray-400">
            Fill in the details below to create and deploy your loyalty token
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Organization Information Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-gray-400" />
                <h3 className="text-lg font-semibold">Organization Information</h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organizationName" className="text-sm font-medium text-gray-300">
                  Organization Name
                </Label>
                <Input
                  id="organizationName"
                  type="text"
                  placeholder="Enter your organization name"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
                  required
                />
              </div>
            </div>

            <Separator className="bg-gray-800/50" />

            {/* Token Description Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Coins className="h-5 w-5 text-gray-400" />
                <h3 className="text-lg font-semibold">Token Description</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tokenName" className="text-sm font-medium text-gray-300">
                    Token Name
                  </Label>
                  <Input
                    id="tokenName"
                    type="text"
                    placeholder="e.g., Loyalty Points"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tokenSymbol" className="text-sm font-medium text-gray-300">
                    Token Symbol
                  </Label>
                  <Input
                    id="tokenSymbol"
                    type="text"
                    placeholder="e.g., LPT"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
                    maxLength={6}
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="maxSupply" className="text-sm font-medium text-gray-300">
                    Max Supply
                  </Label>
                  <Input
                    id="maxSupply"
                    type="number"
                    min="1"
                    placeholder="1000000"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
                    required
                  />
                </div>
              </div>
            </div>

            <Separator className="bg-gray-800/50" />

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 font-medium py-3 text-base"
              >
                <div className="flex items-center space-x-2">
                  <Rocket className="h-4 w-4" />
                  <span>Create Token</span>
                </div>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-gray-300">Note:</strong> Once created, your token will be deployed to the
                blockchain. Make sure all information is correct before proceeding. Gas fees may apply for deployment.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

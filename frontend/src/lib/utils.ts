import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Pocketbase from "pocketbase";

export const pb = new Pocketbase(process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

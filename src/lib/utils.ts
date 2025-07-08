import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Pocketbase from "pocketbase";

export const pb = new Pocketbase("http://127.0.0.1:8090");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

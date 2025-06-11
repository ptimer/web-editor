import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sortBlocksByOrder = (blocks: BlockData[]) => blocks.sort((a, b) => a.order - b.order);
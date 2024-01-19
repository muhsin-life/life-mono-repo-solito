import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImageAspectRatio = ({
  width,
  height,
}: {
  width: number | null | undefined
  height: number | null | undefined
}) => {
  return (width ?? 1400) / (height ?? 500)
}

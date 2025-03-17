import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * クラス名を結合するユーティリティ関数
 * clsxでクラス名を結合し、tailwind-mergeで競合するTailwindクラスを解決する
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

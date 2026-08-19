/**
 * A simple class name utility that conditionally joins class names.
 * Filters out falsy values and trims whitespace.
 */
export function cn(
  ...inputs: (string | undefined | null | false | 0)[]
): string {
  return inputs.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

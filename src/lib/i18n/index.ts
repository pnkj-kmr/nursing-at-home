import { writable } from "svelte/store";

// Import language data
import en from "./locales/en.json";
import hi from "./locales/hi.json";

// Create a writable store for the current locale
export const currentLocale = writable("en");

// Create a derived store that provides the current language data
export const t = writable(en);

// Function to switch language
export function switchLanguage(locale: string) {
  if (locale === "en" || locale === "hi") {
    currentLocale.set(locale);
    t.set(locale === "en" ? en : hi);

    // Save to localStorage if available
    if (typeof window !== "undefined") {
      localStorage.setItem("language", locale);
    }
  }
}

// Initialize language on mount
export function initLanguage() {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("language");
    if (saved && (saved === "en" || saved === "hi")) {
      switchLanguage(saved);
    }
  }
}

// Export the language data for direct access
export { en, hi };

// Ensure proper prerendering
export const prerender = true;

// Add a simple load function to help with prerendering
export function load() {
  return {
    title: "Nursing Care at Home in Dehradun",
    description:
      "Professional nursing care at home services in Dehradun",
  };
}

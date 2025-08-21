import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore favicon and apple-touch-icon 404s
				if (path === '/favicon.ico' || path === '/apple-touch-icon.png') {
					return;
				}
				throw new Error(message);
			},
			handleMissingId: ({ path, id, referrers, message }) => {
				// Ignore missing IDs on apple-touch-icon.png and similar
				if (path === '/apple-touch-icon.png' || path === '/favicon.ico') {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;

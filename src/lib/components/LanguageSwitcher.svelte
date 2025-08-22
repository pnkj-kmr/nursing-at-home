<script>
  import { currentLocale, switchLanguage } from '$lib/i18n';
  import { createEventDispatcher, onMount } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  onMount(() => {
    // Initialize language on mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved && (saved === 'en' || saved === 'hi')) {
        switchLanguage(saved);
      }
    }
  });
  
  function toggleLanguage() {
    const newLocale = $currentLocale === 'en' ? 'hi' : 'en';
    switchLanguage(newLocale);
    dispatch('languageChanged', { locale: newLocale });
  }
</script>

<button
  class="relative flex items-center bg-gray-200 rounded-full p-1 w-20 h-8 transition-all duration-300 ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  on:click={toggleLanguage}
  aria-label={$currentLocale === 'en' ? 'Switch to Hindi' : 'Switch to English'}
>
  <!-- Toggle slider -->
  <div
    class="absolute w-8 h-6 bg-blue-600 rounded-full shadow-md transform transition-transform duration-300 ease-in-out {$currentLocale === 'hi' ? 'translate-x-10' : 'translate-x-0'}"
  ></div>
  
  <!-- Language labels -->
  <span
    class="flex-1 text-xs font-medium text-center z-10 transition-colors duration-300 {$currentLocale === 'en' ? 'text-white' : 'text-gray-600'}"
  >
    EN
  </span>
  <span
    class="flex-1 text-xs font-medium text-center z-10 transition-colors duration-300 {$currentLocale === 'hi' ? 'text-white' : 'text-gray-600'}"
  >
    हिं
  </span>
</button>

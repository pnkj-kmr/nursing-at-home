<script>
  import '../app.css';
  import '../lib/i18n';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  import { t } from '$lib/i18n';
  
  // Mobile menu functionality
  let mobileMenuOpen = false;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<svelte:head>
  <title>{$t.meta.title}</title>
  <meta name="description" content={$t.meta.description} />
  <meta name="keywords" content={$t.meta.keywords} />
  <meta name="author" content={$t.meta.author} />
  <meta name="robots" content="index, follow" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$t.meta.canonical} />
  <meta property="og:title" content={$t.meta.ogTitle} />
  <meta property="og:description" content={$t.meta.ogDescription} />
  <meta property="og:image" content="https://nursingathome.in/og-image.jpg" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={$t.meta.canonical} />
  <meta property="twitter:title" content={$t.meta.ogTitle} />
  <meta property="twitter:description" content={$t.meta.ogDescription} />
  <meta property="twitter:image" content="https://nursingathome.in/og-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href={$t.meta.canonical} />
</svelte:head>

<header class="bg-white shadow-sm sticky top-0 z-50">
  <nav class="container-custom">
    <div class="flex items-center justify-between h-16 px-2">
      <div class="flex items-center">
        <a href="/" class="text-2xl font-bold text-blue-600">{$t.nav.brand}</a>
      </div>
      
      <div class="hidden md:flex items-center space-x-8">
        <a href="#services" class="text-gray-700 hover:text-blue-600 transition-colors">{$t.nav.services}</a>
        <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors">{$t.nav.about}</a>
        <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">{$t.nav.contact}</a>
        <LanguageSwitcher />
        <a href="#contact" class="btn-primary">{$t.nav.getStarted}</a>
      </div>
      
      <!-- Mobile menu button -->
      <button class="md:hidden p-2" on:click={toggleMobileMenu} aria-label="Toggle mobile menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    
    <!-- Mobile menu -->
    <div class="md:hidden {mobileMenuOpen ? '' : 'hidden'}" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
        <a href="#services" class="block px-3 py-2 text-gray-700 hover:text-blue-600" on:click={closeMobileMenu}>{$t.nav.services}</a>
        <a href="#about" class="block px-3 py-2 text-gray-700 hover:text-blue-600" on:click={closeMobileMenu}>{$t.nav.about}</a>
        <a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-blue-600" on:click={closeMobileMenu}>{$t.nav.contact}</a>
        <div class="px-3 py-2">
          <LanguageSwitcher />
        </div>
        <a href="#contact" class="block px-3 py-2 btn-primary text-center" on:click={closeMobileMenu}>{$t.nav.getStarted}</a>
      </div>
    </div>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="bg-gray-900 text-white">
  <div class="container-custom section-padding">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-xl font-bold text-blue-400 mb-4">{$t.nav.brand}</h3>
        <p class="text-gray-300">{$t.footer.tagline}</p>
      </div>
      
      <div>
        <h4 class="font-semibold mb-4">{$t.footer.services}</h4>
        <ul class="space-y-2 text-gray-300">
          <li><a href="#elderly-care" class="hover:text-blue-400">{$t.footer.elderlyCare}</a></li>
          <li><a href="#post-surgery" class="hover:text-blue-400">{$t.footer.postSurgery}</a></li>
          <li><a href="#chronic-care" class="hover:text-blue-400">{$t.footer.chronicCare}</a></li>
          <li><a href="#palliative" class="hover:text-blue-400">{$t.footer.palliative}</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-semibold mb-4">{$t.footer.contact}</h4>
        <ul class="space-y-2 text-gray-300">
          <li>📞 +91-96500 97115</li>
          <li>📧 info@nursingathome.in</li>
          <li>📍 Available 24/7</li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-semibold mb-4">{$t.footer.followUs}</h4>
        <div class="flex space-x-4">
          <a href="https://nursingathome.in" class="text-gray-300 hover:text-blue-400" aria-label="Follow us on Twitter">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="https://nursingathome.in" class="text-gray-300 hover:text-blue-400" aria-label="Follow us on Pinterest">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>{$t.footer.copyright}</p>
    </div>
  </div>
</footer>



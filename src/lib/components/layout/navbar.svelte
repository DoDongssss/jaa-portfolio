<script lang="ts">
  import { page } from '$app/stores';

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
</script>

<header class="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-sm border-b border-white/10">
  <a href="/" class="text-lg font-semibold">yourname.</a>

  <nav class="flex items-center gap-6">
    {#each links as link}
      <a href={link.href} class="text-sm text-gray-400 hover:text-white transition">
        {link.label}
      </a>
    {/each}
  </nav>
</header>
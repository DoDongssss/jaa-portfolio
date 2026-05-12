<script lang="ts">
  const socials = [
    { label: 'GitHub', href: 'https://github.com/yourusername' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
    { label: 'Twitter', href: 'https://twitter.com/yourusername' },
  ];
</script>

<footer class="w-full px-6 py-8 border-t border-white/10 flex flex-col items-center gap-4">
  <div class="flex items-center gap-6">
    {#each socials as social}
      <a href={social.href} target="_blank" rel="noopener noreferrer" class="text-sm text-gray-400 hover:text-white transition">
        {social.label}
      </a>
    {/each}
  </div>

  <p class="text-xs text-gray-600">© {new Date().getFullYear()} yourname. All rights reserved.</p>
</footer>
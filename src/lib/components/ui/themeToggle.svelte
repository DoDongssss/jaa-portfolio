<script lang="ts">
  import { theme } from '$lib/stores/theme.svelte';
  import { Sun, Moon } from '@lucide/svelte/icons';
</script>

<button
  onclick={() => theme.toggle()}
  class="group p-1.5 rounded-sm transition-colors duration-200
         text-fg-muted dark:text-fg-muted-dark
         hover:text-yellow-400 dark:hover:text-yellow-300
         aria-label='Toggle theme'"
  aria-label="Toggle theme"
>
  {#if theme.isDark}
    <Sun
      class="w-4 h-4 text-yellow-400
             transition-all duration-500
             group-hover:rotate-90 group-hover:scale-110"
    />
  {:else}
    <Moon
      class="w-4 h-4 text-slate-500
             transition-all duration-500
             group-hover:-rotate-12 group-hover:scale-110"
    />
  {/if}
</button>
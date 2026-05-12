<script lang="ts">
  import SectionWrapper from '$lib/components/ui/SectionWrapper.svelte';
  import { theme } from '$lib/stores/theme.svelte';
</script>

<SectionWrapper id="hero">
  <!-- 
  : Image
  : Full name + status
  : Location
  : buttons (CV, Email, Contacts) 
  -->
  <div>
    <!-- basic information -->

    <!-- Temp: Theme Toggle -->
    <button
      onclick={() => theme.toggle()}
      class="px-4 py-2 rounded-full text-sm border
             border-border dark:border-border-dark
             text-fg-muted dark:text-fg-muted-dark
             hover:text-primary hover:border-primary transition"
      aria-label="Toggle theme"
    >
      {#if theme.isDark}
        Light Mode
      {:else}
        Dark Mode
      {/if}
    </button>
  </div>

  <div>
    <!-- about me -->
  </div>
</SectionWrapper>
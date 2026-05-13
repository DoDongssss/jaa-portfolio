<script lang="ts">
  interface Props {
    variant?: 'full' | 'fade-right' | 'fade-left';
    height?: number;
    class?: string;
  }

  let { variant = 'full', height = 1.5, class: className = '' }: Props = $props();

  const variants = {
    'full':       'bg-border dark:bg-border-dark',
    'fade-right': 'bg-gradient-to-r from-border dark:from-border-dark to-transparent',
    'fade-left':  'bg-gradient-to-l from-border dark:from-border-dark to-transparent',
  };
</script>

<div
  style="height: {height}px;"
  class="w-full rounded-full {variants[variant]} {className}"
></div>
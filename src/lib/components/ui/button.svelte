<script lang="ts">
  interface Props {
    href?: string;
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    onclick?: () => void;
    children: import('svelte').Snippet;
  }

  let {
    href,
    variant = 'outline',
    size = 'md',
    class: className = '',
    onclick,
    children,
  }: Props = $props();

  const base = 'inline-flex items-center justify-center gap-2 rounded-sm font-medium transition cursor-pointer';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-soft',
    outline: 'border border-border dark:border-border-dark text-fg dark:text-fg-dark hover:border-primary hover:text-primary',
    ghost:   'text-fg-muted dark:text-fg-muted-dark hover:text-primary',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  let classes = $derived(`${base} ${variants[variant]} ${sizes[size]} ${className}`);
</script>

{#if href}
  <a {href} class={classes}>
    {@render children()}
  </a>
{:else}
  <button {onclick} class={classes}>
    {@render children()}
  </button>
{/if}
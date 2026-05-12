<script lang="ts">
  interface Props {
    id?: string;
    class?: string;
    children: import('svelte').Snippet;
  }

  let { id, class: className = '', children }: Props = $props();
</script>

<section
  {id}
  class="w-full max-w-3xl mx-auto flex flex-col
         bg-bg-soft dark:bg-bg-soft-dark
         border border-border dark:border-border-dark
         rounded-sm p-4 {className}"
>
  {@render children()}
</section>
<script lang="ts">
  import SectionWrapper from '$lib/components/ui/sectionWrapper.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import profile from '$lib/assets/profile.jpg';
  import ThemeToggle from '../ui/themeToggle.svelte';

  import { BadgeCheck, MapPin, Download, Mail, Phone, Sun, Moon } from '@lucide/svelte/icons';
    import Divider from '../ui/divider.svelte';
</script>

<SectionWrapper id="hero">

  <!-- Basic Information -->
  <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-stretch">

    <!-- Profile Image — stretches to match the info div height -->
    <div class="shrink-0 self-stretch">
      <div class="h-full w-30 sm:w-32 rounded-sm bg-bg-soft dark:bg-bg-soft-dark border border-border dark:border-border-dark overflow-hidden">
        <img src={profile} alt="Johnny A Asumbra" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Name, Location, Role, Buttons -->
    <div class="flex flex-col justify-between w-full">

      <!-- Top row: Name + Location + Dark mode toggle -->
      <div class="flex items-start justify-between gap-2">
        <div class="flex flex-col gap-0.5">

          <!-- Name + Verified -->
          <div class="flex items-center gap-1.5">
            <h1 class="text-lg sm:text-2xl font-bold text-fg dark:text-fg-dark leading-tight">
              Johnny A. Asumbra
            </h1>
            <BadgeCheck class="w-4 h-4 text-blue-500 shrink-0" />
          </div>

          <!-- Location -->
          <div class="flex items-center gap-1 text-xs text-fg-muted dark:text-fg-muted-dark">
            <MapPin class="w-3 h-3" />
            Tampakan, South Cotabato
          </div>

        </div>

        <!-- Theme Toggle -->
        <ThemeToggle />

      </div>

      <!-- Role -->
      <h2 class="text-md text-fg font-semibold dark:text-fg-muted-dark">
        Full-stack Web Developer
      </h2>

      <!-- Action Buttons -->
      <div class="flex flex-wrap gap-2">
        <Button href="/cv.pdf" variant="primary" size="sm">
          <Download class="w-3.5 h-3.5" />
          Download CV
        </Button>

        <Button href="mailto:johnny@email.com" variant="outline" size="sm">
          <Mail class="w-3.5 h-3.5" />
          Send Email
        </Button>

        <Button href="tel:+639123456789" variant="outline" size="sm">
          <Phone class="w-3.5 h-3.5" />
          Call Me
        </Button>
      </div>

    </div>
  </div>

  <Divider variant="full" class="mt-4"/>

  <!-- About Me -->
  <div class="mt-4 pt-4 border-border dark:border-border-dark">
    <p class="text-sm text-fg-muted dark:text-fg-muted-dark leading-relaxed">
      <!-- about me content -->
    </p>
  </div>

</SectionWrapper>
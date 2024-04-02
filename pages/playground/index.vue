<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center md:max-w-[540px]">
      <h1 class="mb-6">
        {{ $t('playground.title') }}
      </h1>

      <p class="mb-6">
        {{ $t('playground.description') }}
      </p>

      <PlaygroundSynthwaveCard />

      <PlaygroundTechnologiesComponent :techStack="websiteStack" />

      <PlaygroundHackerLetters />

    </div>
  </div>
</template>

<script setup>
const websiteStack = [
  {
    name: 'Bun',
    icon: 'devicon-plain:bun',
    color: '#fef3c7',
    darkModeOnly: true,
  }
]
</script>

<style>

</style>
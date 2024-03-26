<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center md:max-w-[540px]">
      <h1 class="mb-6">
        {{ $t('playground.title') }}
      </h1>

      <p class="mb-6">
        {{ $t('playground.description') }}
      </p>

      <p class="mb-6">
        {{ $t('playground.description2') }}
      </p>

      <PlaygroundTechnologiesComponent :techStack="websiteStack" />

      <PlaygroundHackerLetters />

    </div>
  </div>
</template>

<script setup>
import { websiteStack } from '../../constants/tech-stack.js'

</script>

<style>

</style>
<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center md:max-w-[540px]">
      <h1>
        {{ $t('projects.title') }}
      </h1>

      <h2 class="mt-8">
        {{ $t('projects.website') }}
      </h2>

      <p class="mt-4">
        {{ $t('projects.websiteDescription') }}
      </p>

      <p class="mt-4" v-html="$t('projects.websiteRepo', { link: websiteRepoLink }) " />

      <TechnologiesComponent :techStack="websiteStack" />
    </div>
  </div>
</template>

<script setup>
import { websiteStack } from '../../constants/tech-stack.js'

const colorMode = useColorMode()
const urlColor = colorMode.value === 'light' ? 'text-cyan-400' : 'text-red-500'

const websiteRepoLink = ref(`<a href='https://github.com/vitorCamarotto/ranaDev' target='_blank' class='${urlColor}'>Website GitHub's repository</a>`)
</script>
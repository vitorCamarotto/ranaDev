<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center md:max-w-[540px]">
      <h1>
        {{ $t('about.title') }}
      </h1>

      <h2 class="mt-8">
        {{ $t('about.me') }}
      </h2>

      <p class="mt-4">
        {{ $t('about.description1') }}
      </p>

      <p class="mt-2">
        {{ $t('about.description3') }}
      </p>

      <p class="mt-2" v-html="$t('about.description4', { link: universityLink })" />

      <h2 class="mt-12">
        {{ $t('about.professionalExp') }}
      </h2>

      <div class="flex justify-center mt-4" :class="themeColor">
        <v-chip style="font-weight: 600; width: 100%;">
          {{ $t('about.professionalChip') }}
        </v-chip>
      </div>

      <div class="mt-4">
        <p v-html="$t('about.professionalDescription', { link: capimLink })" />

        <p class="mt-2">
          {{ $t('about.professionalDescription2') }}
        </p>
      </div>

      <TechnologiesComponent
        :techStack="capimStack"
      />
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const urlColor = colorMode.value === 'light' ? 'text-cyan-400' : 'text-red-500'

const themeColor = computed(() => {
  return colorMode.value === 'light' ? 'text-red-400' : 'text-cyan-500'
})

const universityLink = ref(`<a href='https://edurank.org/engineering/la/' target='_blank' class='${urlColor}'>#1 University in Latin America</a>`)
const capimLink = ref(`<a href='https://capim.com.br' target='_blank' class='${urlColor}''>Fintech Startup in the Dental Industry</a>`)

import { capimStack } from '../../constants/capim-stack.js'
</script>

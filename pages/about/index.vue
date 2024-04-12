<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center md:max-w-[540px]">
      <h1 class="flex flex-col items-center">
        {{ $t('about.title') }}
      </h1>

      <div class="group w-auto mt-8 flex flex-col items-center">
        <div
          class="
            text-center flex items-center h-20 w-20 border-l-2 rounded-full
            group-hover:rotate-[270deg] transition-all duration-[5000ms]
          "
          :class="handleMoonClass"
        >
          <h2 class="ms-1 group-hover:-rotate-[270deg] transition-all duration-[5000ms] ">
            {{ $t('about.me') }}
          </h2>
        </div>

        <div class="opacity-0 group-hover:opacity-100 h-0 group-hover:h-full group-hover:mb-48 transition-all duration-[1000ms]">
          <p class="mt-4">
            {{ $t('about.description1') }}
          </p>

          <p class="mt-2">
            {{ $t('about.description3') }}
          </p>

          <p class="mt-2 h-0 group-hover:h-fit" v-html="$t('about.description4', { link: universityLink })" />
        </div>
      </div>

      <div class="group w-fit mt-8 flex flex-col items-center">
        <div
          class="
            text-center flex items-center h-20 w-20 border-l-2 rounded-full
            group-hover:rotate-[270deg] transition-all duration-[5000ms]
          "
          :class="handleMoonClass"
        >
          <h2 class="ms-1 group-hover:-rotate-[270deg] transition-all duration-[5000ms] ">
            {{ $t('about.professionalExp') }}
          </h2>
        </div>

        <div class="opacity-0 group-hover:opacity-100 transition-all duration-[1000ms]">
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

const moonDarkClass = 'border-white group-hover:shadow-inner group-hover:shadow-orange-600'
const moonLightClass = 'border-black group-hover:shadow-inner group-hover:shadow-cyan-500'

const handleMoonClass = computed(() => {
  return colorMode.value === 'light' ? moonLightClass : moonDarkClass
})
</script>

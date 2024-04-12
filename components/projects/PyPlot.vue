<template>
  <div class="w-full flex flex-col items-center">
    <h2
      ref="heading"
      @click="toggleVisibility"
      class="
        transition-width px-3 text-center mt-8 border-x-2
        rounded-3xl cursor-pointer select-none
      "
      :class="borderColor"
      :style="{ width: currentWidth }"
    >
      {{ $t('projects.PyPlot.title') }}
    </h2>
    <Transition name="slide-fade">
      <div v-if="isVisible" class="flex flex-col justify-center items-center mb-10">
        <p class="mt-5" :class="textColor">
          {{ $t('projects.PyPlot.description') }}
        </p>

        <p class="mt-4 self-start" v-html="$t('projects.PyPlot.repo', { link: websiteRepoLink }) " />

        <TechnologiesComponent :techStack="pyPlotHeat" />

        <NuxtImg
          src="/pyplot-graph.png"
          class="max-w-[340px] md:max-w-[400px] mt-5 justify-center"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { pyPlotHeat } from '../../constants/tech-stack.js'
const colorMode = useColorMode()
const urlColor = colorMode.value === 'light' ? 'text-cyan-400' : 'text-red-500'
const borderColor = computed(() => {
  return colorMode.value === 'light' ? 'border-cyan-400' : 'border-red-500'
})

const websiteRepoLink = ref(`<a href='https://github.com/vitorCamarotto/OrdinaryDifferentialEquations-pyPlot' target='_blank' class='${urlColor}'>GitHub's repository</a>`)

const isVisible = ref(false)
const heading = ref(null)
const initialContentWidth = ref('auto')
const currentWidth = ref('auto')

onMounted(() => {
  if (heading.value) {
    initialContentWidth.value = `${heading.value.offsetWidth}px`
    currentWidth.value = initialContentWidth.value
  }
})

function toggleVisibility() {
  isVisible.value = !isVisible.value
  currentWidth.value = isVisible.value ? '100%' : initialContentWidth.value
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease;
  overflow: hidden;

}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.transition-width {
  transition: width .3s ease-in-out;
}

</style>
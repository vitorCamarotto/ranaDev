<template>
  <div class="w-full flex flex-col items-center">
    <div
      class="transition-all duration-[1200ms] hover:mb-32 flex flex-col items-center"
      :class="containerHoverClass"
    >
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
        {{ $t('projects.PythonNeural.title') }}
      </h2>
      <Transition name="slide-fade">
        <div v-if="isVisible">
          <p class="mt-5" :class="textColor">
            {{ $t('projects.PythonNeural.description') }}
          </p>

          <p class="mt-4" v-html="$t('projects.PythonNeural.repo', { link: websiteRepoLink }) " />

          <TechnologiesComponent :techStack="pythonNeuralStack" />
        </div>

      </Transition>
    </div>
  </div>
</template>

<script setup>
import { pythonNeuralStack } from '../../constants/tech-stack.js'
const colorMode = useColorMode()
const urlColor = colorMode.value === 'light' ? 'text-cyan-400' : 'text-red-500'
const borderColor = computed(() => {
  return colorMode.value === 'light' ? 'border-black' : 'border-white'
})

const containerHoverClass = computed(() => {
  return isVisible.value ? '' : 'hover:mb-32 hover:mt-4'
})

const websiteRepoLink = ref(`<a href='https://github.com/vitorCamarotto/PyArtificialNeuralNetworks' target='_blank' class='${urlColor}'>GitHub's repository</a>`)

const isVisible = ref(false)
const heading = ref(null)
const initialContentWidth = ref('auto')
const currentWidth = ref('auto')

onMounted(() => {
  if (heading.value) {
    initialContentWidth.value = `${heading.value.offsetWidth}px`
    currentWidth.value = initialContentWidth.value
    console.log(heading.value.offsetWidth)
  }
})

function toggleVisibility() {
  isVisible.value = !isVisible.value
  currentWidth.value = isVisible.value ? '100%' : initialContentWidth.value
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1.2s ease;
  overflow: hidden;

}
.slide-fade-leave-active {
  transition: all 1.2s ease;
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
  transition: width 1.2s ease-in-out;
}

</style>
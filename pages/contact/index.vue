<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center flex items-center flex-col">
      <h1 class="text-center">
        {{ $t('contact.title') }}
      </h1>

      <div
        class="
          flex justify-center items-center mt-10 border-t-2
          rounded-full h-20 w-20 rotate-180 transition-all duration-[1000ms]
        "
        :class="hoverClass"
        @click="copyEmailToClipboard"
        @mouseenter="activateSun"
        @mouseleave="deActivateSun"
      >
        <Icon
          name="material-symbols-light:mail-outline-rounded"
          class="rotate-180"
          size="40px"
        />
      </div>

      <p :class="showCopiedTextClass" class="opacity-0 transition-all duration-1000">
        Email copied
      </p>

      <div
        class="mt-8 h-4 w-4 rounded-full transition-all duration-[2000ms]"
        :class="centerSunClass"
      ></div>

      <div class="flex justify-center gap-24">
        <div class="flex flex-col mt-10">
          <div class="self-center justify-self-center">
            <div
              class="border-t-2 rounded-full h-20 w-20 rotate-45 p-2 transition-all duration-[1000ms]"
              :class="hoverClass"
              @mouseenter="activateSun"
              @mouseleave="deActivateSun"
            >
              <a href="https://github.com/vitorCamarotto" target="_blank">
                <Icon
                  name="ph:github-logo-thin"
                  class="cursor-pointer w-full -rotate-45"
                  size="50px"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-10">
          <div class="self-center justify-self-center">
            <div
              class="border-t-2 rounded-full h-20 w-20 -rotate-45 p-2 transition-all duration-[1000ms]"
              :class="hoverClass"
              @mouseenter="activateSun"
              @mouseleave="deActivateSun"
            >
              <a href="https://www.linkedin.com/in/vitor-rana-camarotto/" target="_blank">
                <Icon
                  name="uit:linkedin-alt"
                  class="cursor-pointer w-full rotate-45"
                  size="50px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const showCopiedText = ref(false)
const sunActivated = ref(false)

const darkHoverClass = 'border-white hover:shadow-lg hover:shadow-orange-700 hover:text-orange-600 hover:border-orange-600'
const lightHoverClass = 'border-black hover:shadow-lg hover:shadow-cyan-400 hover:text-cyan-400 hover:border-cyan-400'

const hoverClass = computed(() => {
  return colorMode.value === 'light' ? lightHoverClass : darkHoverClass
})

const centerSunClass = computed(() => {
  if (sunActivated.value) {
    return colorMode.value === 'light' ? 'shadow-cyan-400 shadow-inner' : 'shadow-orange-700 shadow-inner'
  }

  return colorMode.value === 'light' ? 'bg-black' : 'bg-white'
})

const activateSun = () => {
  sunActivated.value = true
}

const deActivateSun = () => {
  sunActivated.value = false
}

const showCopiedTextClass = computed(() => {
  return showCopiedText.value ? 'opacity-100' : 'opacity-0'
})

const copyEmailToClipboard = () => {
  navigator.clipboard.writeText('vitorranacamarotto@gmail.com')
  showCopiedText.value = true

  setTimeout(() => {
    showCopiedText.value = false
  }, 2000)
}
</script>

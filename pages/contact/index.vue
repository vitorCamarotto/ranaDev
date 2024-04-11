<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center">
      <h1 class="text-center">
        {{ $t('contact.title') }}
      </h1>

      <div
        class="mt-4 flex flex-col items-center px-6 border-x-2 border-transparent transition-all duration-500"
        :class="emailHoverClass"
      >
        <Icon
          name="material-symbols-light:mail-outline-rounded"
          class=""
          size="40px"
        />
        <p>
          vitorranacamarotto@gmail.com
        </p>
      </div>

      <div class="flex justify-center gap-8">
        <div class="flex flex-col mt-10">
          <div class="self-center justify-self-center">
              <a href="https://github.com/vitorCamarotto" target="_blank">
              <Icon
                name="akar-icons:github-outline-fill"
                class="cursor-pointer w-full px-2 border-x-2 border-transparent transition-all duration-500"
                :class="hoverClass"
                size="50px"
              />
            </a>
              </div>
          </div>

          <div class="flex flex-col mt-10">
            <div class="self-center justify-self-center">
              <a href="https://www.linkedin.com/in/vitor-rana-camarotto/" target="_blank">
              <Icon
                name="uit:linkedin-alt"
                class="cursor-pointer w-full px-2 border-x-2 border-transparent transition-all duration-500"
                :class="hoverClass"
                size="50px"
              />
            </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const fillColor = computed(() => {
  if (colorMode.value === 'light') {
    return 'black'
  } else {
    return 'white'
  }
})

const hoverClass = computed(() => {
  const darkHoverClass = 'hover:border-red-500 hover:rounded-2xl hover:text-red-500'
  const lightHoverClass = 'hover:border-cyan-400 hover:rounded-2xl hover:text-cyan-400'

  return colorMode.value === 'light' ? lightHoverClass : darkHoverClass
})

const emailHoverClass = computed(() => {
  const darkHoverClass = 'hover:border-red-500 hover:rounded-2xl'
  const lightHoverClass = 'hover:border-cyan-400 hover:rounded-2xl'

  return colorMode.value === 'light' ? lightHoverClass : darkHoverClass
})
</script>

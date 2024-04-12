<template>
  <div class="p-2 flex flex-col items-center">
    <div class="flex flex-col items-center md:max-w-[540px]">
      <h1>
        <HomeHackerLetters />
      </h1>
      <h1 class="w-[320px]">
      </h1>

      <p class="">
        Fullstack Developer
      </p>

      <div class="group flex flex-col items-center">
        <div
          class="w-full transition-all duration-[2000ms] opacity-0
                  group-hover:opacity-100 delay-[3000ms]"
        >
          <p class="mt-20 mb-4 text-center">
            Check out my Projects
          </p>
        </div>
        <div
          class="h-20 w-20 border-b-2 rounded-full transition-all duration-[3000ms]"
          :class="handleMoonClass"
        >
        </div>

        <div
          class="mt-4 h-[200px] w-[200px] border-t-2 rounded-full transition-all duration-[3000ms]"
          :class="handleSunClass"
        ></div>
      </div>

    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const moonDarkClass = 'border-white group-hover:border-red-500 group-hover:shadow-white group-hover:shadow-2xl'
const moonLightClass = 'border-black group-hover:border-cyan-600 group-hover:shadow-cyan-600 group-hover:shadow-2xl'

const handleMoonClass = computed(() => {
  return colorMode.value === 'light' ? moonLightClass : moonDarkClass
})

const sunDarkClass = 'border-white group-hover:border-red-500 group-hover:shadow-orange-500/50 group-hover:shadow-xl'
const sunLightClass = 'border-black group-hover:border-cyan-600 group-hover:shadow-cyan-600/50 group-hover:shadow-xl'

const handleSunClass = computed(() => {
  return colorMode.value === 'light' ? sunLightClass : sunDarkClass
})

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center">
      <h1 class="text-center">
        <HomeHackerLetters />
      </h1>

      <p class="text-center">
        <transition name="slide-fade" mode="out-in">
          <span :key="currentText">
            {{ currentText }}
          </span>
        </transition>
      </p>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

let interval = ref(null)
const currentIndex = ref(0)

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % englishTexts.length
  }, 3000)
})

const englishTexts = ['Full Stack Developer', 'Creator', 'Engineer']
const portugueseTexts = ['Desenvolvedor Full Stack', 'Criador', 'Engenheiro']

const currentText = computed(() => {
  if(locale.value === 'en') {
    return englishTexts[currentIndex.value]
  } else {
    return portugueseTexts[currentIndex.value]
  }
})

onUnmounted(() => {
  clearInterval(interval)
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

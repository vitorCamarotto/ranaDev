<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center">
      <h1 class="text-2xl text-center">
        Vitor Rana Camarotto
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
let interval = ref(null)
const currentIndex = ref(0)

const currentText = computed(() => texts[currentIndex.value])

const texts = ['Full Stack Developer', 'Creator', 'Problem Solver']

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % texts.length
  }, 4000)
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

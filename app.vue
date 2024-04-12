<template>
  <div>
    <NuxtLayout
      class="transition-all duration-1000 ease-in-out"
    >
      <NuxtPage
        :class="handleClass"
        class="h-full mb-24 transition-all duration-1000 ease-in-out"
      />
    </NuxtLayout>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const handleClass = computed(() => {
  if (colorMode.value === 'light') {
    return 'bg-white text-black'
  } else {
    return 'bg-black text-white'
  }
})

useHead({
  title: 'ranaDev'
})

</script>

<style>
.page-enter-active {
  transition: filter 0.6s;

}
.page-leave-active {
  transition: filter 0.1s;
}
.page-enter-from,
.page-leave-to {
  filter: brightness(0%);
}
</style>

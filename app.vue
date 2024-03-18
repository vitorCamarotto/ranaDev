<template>
  <div>
    <NuxtLayout>
      <NuxtPage
        :class="handleClass"
        class="h-full"
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

</script>
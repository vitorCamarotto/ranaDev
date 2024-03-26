<template>
  <div>
    <NuxtLayout>
      <NuxtPage
        :class="handleClass"
        class="h-full mb-24"
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
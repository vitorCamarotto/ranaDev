<template>
  <div
    class="flex flex-col items-center mt-8"
    :class="themeColor"
  >
    <v-chip
      variant="outlined"
      rounded
      class=""
      style="font-weight: 600;"
    >
      {{ $t('components.techStack') }}
    </v-chip>

    <div class="flex gap-x-4 flex-wrap justify-center">
      <div
        v-for="tech in techStack"
        :key="tech.name"
      >
        <div class="mt-4 justify-start">
          <v-chip
            rounded
            :variant="darkModeOnly(tech.darkModeOnly) ? 'elevated' : 'tonal'"
            class="tech-chip cursor-default"
            :style="chipStyle(tech.color)"
          >
            <template v-slot:prepend>
              <Icon
                :name="tech.icon"
                class=""
                size="24px"
              />
            </template>

            <p class="ms-1">
              {{ $t(`components.technologies.${tech.name}`) }}
            </p>
          </v-chip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const props = defineProps({
  techStack: {
    type: Array,
    required: true
  }
})

const themeColor = computed(() => {
  return colorMode.value === 'light' ? 'text-cyan-400' : 'text-red-500'
})

const darkModeOnly = computed(() => (darkMode) => {
  const themeLight = colorMode.value === 'light'

  return darkMode === true && themeLight === true
})


const chipStyle = (color) => {
  return {
    color: color,
    fontWeight: 600,
    border: '3px solid transparent',
    transition: 'all 0.3s ease-in-out',
    '--chip-hover-border-color': `${color}33`,
    '--chip-hover-box-shadow': `0 0 16px ${color}`
  };
}

</script>

<style scoped>
.tech-chip:hover {
  border-color: var(--chip-hover-border-color);
  box-shadow: var(--chip-hover-box-shadow);
}
</style>

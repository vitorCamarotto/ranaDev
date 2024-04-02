<template>
  <div class="flex flex-col items-center mt-8">
    <div :class="themeColor">
      <v-chip
        variant="outlined"
        rounded
        style="font-weight: 600;"
      >
        Pulsating effect
      </v-chip>
    </div>

    <p class="mt-2">
      Hover your mouse over the chip!
    </p>
    <div class="flex gap-x-4 flex-wrap justify-center">
      <div
        v-for="tech in techStack"
        :key="tech.name"
      >
        <div class="mt-4 justify-start">
          <v-chip
            rounded
            :variant="darkModeOnly(tech.darkModeOnly) ? 'elevated' : 'tonal'"
            class="tech-chip glow-effect"
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
    fontWeight: 800,
    transition: 'border-color 0.3s ease-in-out',
    '--chip-hover-border-color': `${color}33`,
    '--chip-glow-color': color,
  };
}
</script>

<style scoped>
@keyframes pulsate {
  0% {
    box-shadow: 0 0 4px var(--chip-glow-color);
  }
  50% {
    box-shadow: 0 0 20px var(--chip-glow-color);
  }
  100% {
    box-shadow: 0 0 4px var(--chip-glow-color);
  }
}

.tech-chip {
  --chip-glow-color: #000; /* Default color, will be overridden by Vue */
  transition: border-color 0.3s ease-in-out;
  border: 3px solid transparent;
}

.tech-chip:hover {
  animation: pulsate 1.5s infinite ease-in-out;
  border-color: var(--chip-hover-border-color);
}

</style>

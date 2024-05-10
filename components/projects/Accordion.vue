<template>
  <div class="w-full flex flex-col items-center">
    <div class="transition-all duration-1000 flex flex-col items-center">
      <div v-for="project in projects" :key="project.title">
        <h2
          ref="heading"
          @click="toggleVisibility(project.title)"
          class="
            transition-width px-3 min-w-[270px] text-center mt-8 border-x-2
            rounded-3xl cursor-pointer select-none mx-auto
          "
          :class="borderColor"
          :style="{ width: currentWidthFor(project.title) }"
        >
          {{ $t(`projects.${project.title}.title`) }}
        </h2>

        <Transition name="slide-fade">
          <div v-if="isProjectVisible(project.title)" class="flex flex-col items-center">
            <p class="mt-5">
              {{ $t(`projects.${project.title}.description`) }}
            </p>

            <div class="flex items-center mt-8">
              <p v-html="$t(`projects.${project.title}.repo`, { link: repoLink(project.repoLink) })" />

              <Icon
                name="material-symbols-light:open-in-new"
                class="ms-2 cursor-pointer text-white"
                size="20px"
              />
            </div>

            <div class="flex items-center mt-4" v-if="project.demoLink">
              <a
                :href="project.demoLink"
                :class="urlColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ project.demoLink }}
              </a>

              <Icon
                name="material-symbols-light:open-in-new"
                class="ms-2 cursor-pointer text-white"
                size="20px"
              />
            </div>

            <TechnologiesComponent :techStack="project.techStack" />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  projects: {
    type: Object,
    required: true,
  }
})

const colorMode = useColorMode()
const urlColor = colorMode.value === 'light' ? 'text-cyan-400' : 'text-red-500'
const borderColor = computed(() => {
  return colorMode.value === 'light' ? 'border-black' : 'border-white'
})

function repoLink(repoLink: string) {
  return `<a href='${repoLink}' target='_blank' class='${urlColor}'>GitHub's repository</a>`
}

let visibleProject = ref('')

function isProjectVisible(projectTitle: string) {
  return visibleProject.value === projectTitle
}

function toggleVisibility(projectName: string) {
  if (visibleProject.value === projectName) {
    visibleProject.value = ''

    return
  }

  visibleProject.value = projectName
}

function currentWidthFor(projectName: string) {
  return visibleProject.value === projectName ? '100%' : '300px'
}

</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
  overflow: hidden;

}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.transition-width {
  transition: width 0.5s ease-in-out;
}
</style>
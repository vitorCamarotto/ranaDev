<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center md:max-w-[540px]">
      <h1 class="text-center">
        {{ $t('projects.title') }}
      </h1>

      <ProjectsAccordion :projects="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import projects from '@/lib/utils/projects/projects'
</script>
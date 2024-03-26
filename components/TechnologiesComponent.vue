<template>
  <div class="flex flex-col items-center mt-8">
    <v-chip
      variant="outlined"
      rounded
      style="
        color: #EF4444;
        font-weight: 600;
      "
    >
      {{ $t('projects.techStack') }}
    </v-chip>

    <div class="flex gap-x-4 flex-wrap justify-center">
      <div
        v-for="tech in techStack"
        :key="tech.name"
      >
        <div class="mt-4 justify-start">
          <v-chip
            rounded
            :style="`
              color: ${tech.color};
              font-weight: 600;`
            "
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
const props = defineProps({
  techStack: {
    type: Array,
    required: true
  }
})

</script>

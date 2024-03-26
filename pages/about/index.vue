<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center md:max-w-[540px]">
      <h1>
        {{ $t('about.title') }}
      </h1>

      <h2 class="mt-16">
        {{ $t('about.me') }}
      </h2>

      <p class="mt-4">
        {{ $t('about.description1') }}
      </p>

      <p class="mt-2">
        {{ $t('about.description2') }}
      </p>

      <p class="mt-2">
        {{ $t('about.description3') }}
      </p>

      <p class="mt-2" v-html="$t('about.description4', { link: universityLink })" />

      <h2 class="mt-12">
        {{ $t('about.professionalExp') }}
      </h2>

      <v-chip
        variant="outlined"
        class="mt-4"
        style="
          color: #EF4444;
          font-weight: 600;
        "
      >
        {{ $t('about.professionalChip') }}
      </v-chip>


      <div class="mt-4">
        <p v-html="$t('about.professionalDescription', { link: capimLink })" />

        <p class="mt-2">
          {{ $t('about.professionalDescription2') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const universityLink = ref("<a href='https://edurank.org/engineering/la/' target='_blank' class='text-red-500'>#1 University in Latin America</a>")
const capimLink = ref("<a href='https://capim.com.br' target='_blank' class='text-red-500'>Fintech Startup in the Dental Industry</a>")

</script>

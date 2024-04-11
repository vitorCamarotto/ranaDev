<template>
  <div class="p-2 flex flex-col">
    <div class="self-center justify-self-center">
      <h1 class="text-center">
        {{ $t('contact.title') }}
      </h1>

      <div class="mt-4 flex flex-col items-center">
        <Icon
          name="material-symbols-light:mail-outline-rounded"
          class=""
          size="50px"
        />
        <p>
          vitorranacamarotto@gmail.com
        </p>
      </div>

      <div class="flex justify-center gap-6">
        <div class="flex flex-col mt-10">
          <div class="self-center justify-self-center">
              <a href="https://github.com/vitorCamarotto" target="_blank">
              <Icon
                name="akar-icons:github-outline-fill"
                class="icon-hover-effect cursor-pointer hover:text-red-500"
                size="50px"
              />
            </a>
              </div>
          </div>

          <div class="flex flex-col mt-10">
            <div class="self-center justify-self-center">
              <a href="https://www.linkedin.com/in/vitor-rana-camarotto/" target="_blank">
              <Icon
                name="uit:linkedin-alt"
                class="self-center cursor-pointer border-2 border-white rounded hover:text-red-500 hover:border-red-500"
                size="50px"
              />
            </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const fillColor = computed(() => {
  if (colorMode.value === 'light') {
    return 'black'
  } else {
    return 'white'
  }
})
</script>

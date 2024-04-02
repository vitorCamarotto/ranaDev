<template>
  <div class="flex flex-col items-center mt-16">
    <div :class="themeColor">
      <v-chip
        variant="outlined"
        rounded
        style="font-weight: 600;"
      >
        Matrix letters
      </v-chip>
    </div>

    <p class="mt-2">
      Hover your mouse over the text!
    </p>
    <h1 class="mt-4" ref="heading">VITOR</h1>
  </div>
</template>

<script setup>
const heading = ref(null)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const name = ['VITOR', 'RANA', 'CAMAROTTO', 'DEV']
let iterationLimit = ref(0)
let nameIndex = ref(0)

onMounted(() => {
  heading.value.onmouseover = event => {
    nameIndex.value = (nameIndex.value + 1) % name.length

    let iterations = 0
    iterationLimit.value = name[nameIndex.value].length

    const interval = setInterval(() => {
      event.target.innerText = name[nameIndex.value].split("").map(
        (letter, index) => {
          if (index < iterations) {
            return name[nameIndex.value][index]
          }
          return letters[Math.floor(Math. random() * 26)]
        }
      ).join("")

      iterations += 1/12

      if (iterations > iterationLimit.value) clearInterval(interval)
    }, 20);

  }
})

const colorMode = useColorMode()
const themeColor = computed(() => {
  return colorMode.value === 'light' ? 'text-cyan-400' : 'text-red-500'
})
</script>

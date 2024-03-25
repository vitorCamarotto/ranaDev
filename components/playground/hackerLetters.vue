<template>
  <div>
    <h1 ref="heading">VITOR</h1>
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

      iterations += 1/2

      if (iterations > iterationLimit.value) clearInterval(interval)
    }, 20);

  }
})
</script>

<style>
  body {
    background: black;
  }

  h1 {
    display: grid;
    place-items: center;
    color: white;
    font-size: 5rem;
    font-family: "Space Mono", monospace;
  }

</style>
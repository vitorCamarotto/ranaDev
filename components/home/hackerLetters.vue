<template>
  <div>
    <h1 ref="heading">Vitor Rana Camarotto</h1>
  </div>
</template>

<script setup>

const heading = ref(null)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const name = ['Vitor Rana Camarotto ', 'DEV']
let iterationLimit = ref(0)
let nameIndex = ref(0)
let changeLettersInterval
let animationLimit = ref(0)

onMounted(() => {
  iterationLimit.value = name[0].length
  animateLettersChange()

  changeLettersInterval = setInterval(() => {
    nameIndex.value = (nameIndex.value + 1) % name.length
    iterationLimit.value = name[nameIndex.value].length

    animateLettersChange()

    animationLimit.value += 1

    if (animationLimit.value > 1) {
      clearInterval(changeLettersInterval)
    }
  }, 4000);

  function animateLettersChange() {
    let iterations = 0
    const interval = setInterval(() => {

      if (!heading.value) return
      heading.value.innerText = name[nameIndex.value].split("").map(
        (letter, index) => {
          if (index < iterations) {
            return name[nameIndex.value][index]
          }
          return letters[Math.floor(Math.random() * letters.length)]
        }
      ).join("")

      iterations += 1/3

      if (iterations > iterationLimit.value) clearInterval(interval)
    }, 30);
  }
})

onUnmounted(() => {
  clearInterval(changeLettersInterval)
})

</script>

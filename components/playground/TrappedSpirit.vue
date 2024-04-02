<template>
  <div class="flex flex-col items-center mt-8">
    <div :class="themeColor">
      <v-chip
        variant="outlined"
        rounded
        style="font-weight: 600;"
      >
        Trapped spirit
      </v-chip>
    </div>
    <div ref="container" class="container w-full mt-4 h-[320px]">

      <div
        v-for="i in 40"
        :key="i"
        class="circle"
      ></div>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const themeColor = computed(() => {
  return colorMode.value === 'light' ? 'text-cyan-400' : 'text-red-500'
})

const container = ref(null);

onMounted(() => {
  const coords = { x: 0, y: 0 }
  const circles = document.querySelectorAll('.circle')

  const colors = [
    "#00fff2",
    "#00ecea",
    "#00dae0",
    "#00c7d6",
    "#00b5ca",
    "#00a3bd",
    "#0091ae",
    "#00809f",
    "#006f8f",
    "#005e7f",
    "#004e6d",
    "#003f5c",
  ]

  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;

    circle.style.background = colors[index % colors.length];
  })

  if (container.value) {
    container.value.addEventListener('mousemove', function(e) {
      const rect = container.value.getBoundingClientRect();
      coords.x = e.clientX - rect.left;
      coords.y = e.clientY - rect.top;
    })
  }


  function animateCircles() {
    let x = coords.x
    let y = coords.y

    const rect = container.value.getBoundingClientRect();

    x = Math.min(rect.width - 24, Math.max(0, x - 12)) + rect.left;
    y = Math.min(rect.height - 24, Math.max(0, y - 12)) + rect.top;

    circles.forEach(function (circle, index) {
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      circle.style.scale = 1 - index / circles.length;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];

      x += (nextCircle.x - circle.x) * .3;
      y += (nextCircle.y - circle.y) * .3;

    })

    requestAnimationFrame(animateCircles)
  }

  animateCircles();

})

</script>

<style scoped>
.container {
  border: 2px solid #00fff2;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 8px 2px #00fff2;
}

.circle {
  height: 24px;
  width: 24px;
  border-radius: 24px;
  background-color: white;
  position: absolute;
  top: 0px;
  left: 0px;
  pointer-events: none;
}
</style>
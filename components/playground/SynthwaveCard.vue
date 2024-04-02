<template>
  <div class="flex flex-col items-center mt-8">
    <div :class="themeColor">
      <v-chip
        variant="outlined"
        rounded
        style="font-weight: 600;"
      >
        CSS animated card
      </v-chip>
    </div>

    <div class="card mt-4">
      <div
        class="image"
      />
      <div class="card-overlay"></div>

    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const themeColor = computed(() => {
  return colorMode.value === 'light' ? 'text-cyan-400' : 'text-red-500'
})

</script>

<style scoped>
@keyframes pan-overlay {
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 0% -100%;
  }
}

.card {
  position: relative;
  width: 300px;
  border: 3px solid #047857;
  border-radius: 20px;
  background-color: #dcfce7;
  aspect-ratio: 10/16;
  overflow: hidden;
}

.card-overlay {
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 0px;

  background: linear-gradient(
    rgba(1, 128, 17, 0.71),
    rgba(1, 128, 17, 0.71) 3px,
    transparent 3px,
    transparent 9px
  );
  background-size: 100% 9px;
  width: 100%;
  height: 100%;
  animation: pan-overlay 60s linear infinite;
}

.image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('star-jungle.jpg');
  background-size: 200%;
  background-position: center;
  filter: sepia(100%) hue-rotate(77deg);
  opacity: 0.7;
  animation: pan-image 60s linear infinite;
}

@keyframes pan-image {
  0% {
    background-position: 20% 10%;
  }

  25% {
    background-position: 50% 60%;
  }

  50% {
    background-position: 30% 80%;
  }

  75% {
    background-position: 10% 40%;
  }

  100% {
    background-position: 20% 10%;
  }
}
</style>
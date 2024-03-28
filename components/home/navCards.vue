<template>
  <div class="mt-10">
    <div
      v-for="card in navCards"
      :key="card.name"
    >
      <v-row>
        <v-col cols="12">
          <v-card
            class="mt-6"
            :class="`card card--${theme}`"
            rounded
          >
            <NuxtLink
              :to="card.to"
              class="text-decoration-none"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="text-white"
                  >
                  <p :class="theme === 'dark' ? 'text-white' : 'text-black'">
                    {{ $t(card.name) }}
                  </p>
                  </v-card-title>
                </div>
              </div>
            </NuxtLink>
            </v-card>
          </v-col>

      </v-row>
    </div>
  </div>
</template>

<script setup>
import navCards from '../../constants/nav-cards.js'
const colorMode = useColorMode()

const theme = computed(
 () => colorMode.value === 'light' ? 'light' : 'dark'
)

</script>

<style lang="scss" scoped>
.card {
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(127,29,29,1) 85%, rgba(0,0,0,1) 100%);
  width: 90vw;
  height: 80px;
  max-width: 540px;
  border-radius: 30px;
  border-left: 1px solid #7f1d1d;
  border-top: 1px solid #7f1d1d;


  &--light {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(165,243,252,1) 85%, rgba(255,255,255,1) 100%);
    border-left: 1px solid #a5f3fc;
    border-top: 1px solid #a5f3fc;
  }
}

</style>

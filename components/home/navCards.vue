<template>
  <div class="mt-20">
    <div
      v-for="card in navCards"
      :key="card.name"
    >
      <v-row>
        <v-col cols="12">
          <v-card class="card-class" rounded>
            <NuxtLink
              :to="card.to"
              class="text-decoration-none"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="text-white"
                  >
                  <p>
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

</script>

<style scoped>
.card-class {
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(127,29,29,1) 85%, rgba(0,0,0,1) 100%);
  width: 90vw;
  height: 80px;
  max-width: 540px;
  border-radius: 30px;
  border-left: 1px solid #7f1d1d;
  border-top: 1px solid #7f1d1d;
}
</style>
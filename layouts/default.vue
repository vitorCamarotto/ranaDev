<template>
  <div>
    <v-app>
      <v-app-bar
        app
        elevation="5"
        class="navbar text-white"
        data-test="navbar"
      >
        <v-spacer />

      </v-app-bar>

      <v-main>
        <slot />
      </v-main>
    </v-app>
  </div>
</template>

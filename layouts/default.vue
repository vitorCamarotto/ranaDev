<template>
  <div>
    <v-app>
      <v-app-bar
        app
        elevation="3"
        class="navbar text-white"
        data-test="navbar"
      >
        <v-spacer />

        <Icon
          @click="openDrawer"
          name="material-symbols:menu"
          color="black"
          size="28px"
          class="me-6"
        />
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
      >
        <v-list
          :items="items"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
          >
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <slot />
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
const drawer = ref(false)
const items = [
  { title: 'Home', icon: 'mdi-home', to: '/'},
  { title: 'About', icon: 'mdi-account', to: '/about'},
  { title: 'Projects', icon: 'mdi-briefcase', to: '/projects'},
  { title: 'Contact', icon: 'mdi-email', to: '/contact'},
]


function openDrawer() {
  drawer.value = !drawer.value
}
</script>
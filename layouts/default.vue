<template>
  <div>
    <v-app>
      <v-app-bar
        app
        elevation="8"
        :class="handleClass"
        data-test="navbar"
      >
        <Icon
          name="mdi:theme-light-dark"
          :class="handleClass"
          class="ms-3 cursor-pointer"
          size="28px"
          @click="handleTheme"
        />

        <v-spacer />

        <Icon
          @click="toggleDrawer"
          name="material-symbols:menu"
          :class="handleClass"
          size="28px"
          class="me-6 cursor-pointer"
        />
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="right"
        :class="handleClass"
        temporary
      >
        <v-list
          :items="items"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
          >
            <v-list-item-title>
              <nuxt-link
                :to="item.to"
                :class="isActiveRoute(item)"
              >
                {{ item.title }}
              </nuxt-link>
            </v-list-item-title>
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
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'About', icon: 'mdi-account', to: '/about' },
  { title: 'Projects', icon: 'mdi-briefcase', to: '/projects' },
  { title: 'Contact', icon: 'mdi-email', to: '/contact' },
]

function toggleDrawer() {
  drawer.value = !drawer.value
}

const colorMode = useColorMode()

function handleTheme() {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}

const handleClass = computed(() => {
  if (colorMode.value === 'light') {
    return 'bg-white text-black'
  } else {
    return 'bg-black text-white'
  }
})

const route = useRoute() // Use useRoute to access the current route

const isActiveRoute = (item) => {
  return route.path === item.to ? 'text-red-500 cursor-default' : '' // Replace 'text-red-500' with your red text class
}
</script>
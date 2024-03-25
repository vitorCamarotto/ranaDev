<template>
  <div>
    <v-app>
      <v-app-bar
        app
        elevation="8"
        :class="handleClass"
        data-test="navbar"
      >

        <NuxtLink :to="'/'">
          <div class="md:flex ms-3">
            <Icon
              name="material-symbols:code-rounded"
              :class="handleClass"
              class="me-3 cursor-pointer"
              size="28px"
            />
          </div>
      </NuxtLink>

      <v-spacer />

        <div>
          <Icon
            name="mdi:theme-light-dark"
            :class="handleClass"
            class="me-3 cursor-pointer"
            size="28px"
            @click="handleTheme"
          />
        </div>

        <ClientOnly>
          <div>
            <Icon
              :name="`game-icons:${country}-flag`"
              :class="handleClass"
              class="me-3 cursor-pointer"
              size="28px"
              @click="changeLanguage"
            />
          </div>

        </ClientOnly>




        <div
          class="md:hidden"
        >
          <Icon
            @click="toggleDrawer"
            name="material-symbols:menu"
            :class="handleClass"
            size="28px"
            class="me-6 cursor-pointer"
          />
        </div>

        <div class="hidden md:flex">
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-title>
              <nuxt-link :to="localePath(item.to)" :class="isActiveRoute(item)">
                {{ item.title }}
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </div>
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
                :to="localePath(item.to)"
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

const route = useRoute()

const isActiveRoute = (item) => {
  return route.path === item.to ? 'text-red-500 cursor-default' : ''
}

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const country = computed(() => {
  if (locale.value === 'en') {
    return 'brazil'
  } else {
    return 'usa'
  }
})

function changeLanguage() {
  if (locale.value === 'en') {
    setLocale('pt')
  } else {
    setLocale('en')
  }
}

</script>
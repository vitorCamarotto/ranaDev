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

        <div>
          <Icon
            :name="`game-icons:${country}-flag`"
            :class="handleClass"
            class="me-3 cursor-pointer"
            size="28px"
            @click="changeLanguage"
          />
        </div>

        <div class="md:hidden">
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
                {{ $t(item.title) }}
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </div>
      </v-app-bar>

      <MobileNavDrawer
        :class="handleClass"
        :visible="drawerVisible"
      />

      <v-main>
        <slot />
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
import items from '../constants/paths.js'

const colorMode = useColorMode()
const route = useRoute()
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const drawerVisible = ref(false)

const handleClass = computed(() => {
  if (colorMode.value === 'light') {
    return 'bg-white text-black'
  } else {
    return 'bg-black text-white'
  }
})

const country = computed(() => {
  if (locale.value === 'en') {
    return 'brazil'
  } else {
    return 'usa'
  }
})

const isActiveRoute = (item) => {
  return route.path === item.to ? 'text-red-500 cursor-default' : ''
}

function toggleDrawer() {
  drawerVisible.value = !drawerVisible.value
}

function handleTheme() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}

function changeLanguage() {
  if (locale.value === 'en') {
    setLocale('pt')
  } else {
    setLocale('en')
  }
}

</script>
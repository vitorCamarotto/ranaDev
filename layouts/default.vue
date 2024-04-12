<template>
  <div>
    <v-app>
      <v-app-bar
        app
        elevation="0"
        style="transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 1000ms;
        "
        :class="handleClass"
        data-test="navbar"
      >
        <NuxtLink :to="localePath('/')">
          <div class="md:flex ms-3">
            <Icon
              name="material-symbols:code-rounded"
              :style="codeIconStyle"
              class="me-3 cursor-pointer"
              size="28px"
            />
          </div>
        </NuxtLink>

        <v-spacer />

        <div>
          <Icon
            :name="`solar:${themeIcon}-bold-duotone`"
            class="me-3 cursor-pointer"
            size="28px"
            @click="handleTheme"
          />
        </div>

        <div>
          <Icon
            :name="`game-icons:${countryIcon}-flag`"
            class="me-3 cursor-pointer"
            size="28px"
            @click="changeLanguage"
          />
        </div>

        <div class="md:hidden">
          <Icon
            @click="toggleDrawer"
            name="material-symbols:menu"
            size="28px"
            class="me-6 cursor-pointer"
          />
        </div>

        <div class="hidden md:flex">
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-title>
              <nuxt-link
                :to="localePath(item.to)"
                :class="isActiveRoute(item) + hoverClass"
                class="px-1 underline decoration-transparent underline-offset-0
                  hover:underline transition-all duration-300 font-medium
                "
              >
                {{ $t(item.title) }}
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </div>
      </v-app-bar>

      <MobileNavDrawer :visible="drawerVisible" />

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

const countryIcon = computed(() => {
  if (locale.value === 'en') {
    return 'brazil'
  } else {
    return 'usa'
  }
})

const themeIcon = computed(() => {
  if (colorMode.value === 'light') {
    return 'moon'
  } else {
    return 'sun'
  }
})

const isActiveRoute = (item) => {
  const basePath = locale.value === 'pt' ? '/pt' : ''

  const matchedPath = basePath + (item.to === '/' && basePath ? '' : item.to)

  const themeColor = colorMode.value === 'light' ? 'text-cyan-400' : 'text-red-500'

  const twClass = `${themeColor} ${hoverClass} cursor-default`

  return route.path === matchedPath ? twClass : ''
}

const hoverClass = computed(() => {
  const darkHoverClass = 'hover:decoration-red-500 hover:decoration-1 hover:underline-offset-4'
  const lightHoverClass = 'hover:decoration-cyan-300 hover:decoration-1 hover:underline-offset-4'

  const hoverClass = colorMode.value === 'light' ? lightHoverClass : darkHoverClass

  return hoverClass
})

const codeIconStyle = computed(() => {
  const isPlayground = route.path.endsWith('/') || route.path.endsWith('/pt')

  const themeColor = colorMode.value === 'light' ? '#22d3ee ': '#EF4444'

  return `color: ${isPlayground ? themeColor : 'inherit'};`
})


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
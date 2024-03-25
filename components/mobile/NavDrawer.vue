<template>
  <div>
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
              {{ $t(item.title) }}
            </nuxt-link>
          </v-list-item-title>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import items from '../constants/paths.js'

const localePath = useLocalePath()
const route = useRoute()
const colorMode = useColorMode()

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const drawer = ref(props.visible)

watch(() => props.visible, (value) => {
  drawer.value = value
})

const handleClass = computed(() => {
  if (colorMode.value === 'light') {
    return 'bg-white text-black'
  } else {
    return 'bg-black text-white'
  }
})


const isActiveRoute = (item) => {
  return route.path === item.to ? 'text-red-500 cursor-default' : ''
}
</script>

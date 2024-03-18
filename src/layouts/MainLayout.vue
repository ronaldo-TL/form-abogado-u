<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Herramientas
        </q-toolbar-title>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary text-white"
    >
      <q-list>

        <q-img 
          src="/src/assets/herramientas.png"
          spinner-color="white"
          style="height: 50px; max-width: 220px; margin: 20px 20px 20px 20px;"
        />
        <q-separator color="white" />
        <!-- <q-item to="/Matricula" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="school"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item> -->
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

import {defineComponent, ref} from 'vue'


const linksList = [
  {
    title: 'Matricula',
    caption: 'Actualiza matricula de abogado',
    icon: 'school',
    link: '/Matricula'
  },
  {
    title: 'Prueba de componente',
    caption: 'Componenete de Prueba',
    icon: 'favorite',
    link: '/'
  },
  {
    title: 'Not Found',
    caption: 'Pagina de Errores',
    icon: 'chat',
    link: '-'
  },
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,

  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>
  .fa-beat{
    animation: fa-beat 5s ease infinite;
  }

  @keyframes fa-beat{
    0% {
      transform: scale(1);
    }
    5% {
      transform: scale(1.25);
    }
    20% {
      transform: scale(1);
    }
    30% {
      transform: scale(1);
    }
    35% {
      transform: scale(1.25);
    }
    50% {
      transform: scale(1);
    }
    55% {
      transform: scale(1.25);
    }
    70% {
      transform: scale(1);
    }
  }

</style>

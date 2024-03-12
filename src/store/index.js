import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import globalModule from './global'

export default store(function () {
  const Store = createStore({
    modules: {
      global: globalModule // Agrega tu módulo global aquí
    },

    strict: process.env.DEBUGGING
  })

  return Store
})

import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'

const message = {
    success: (message) => {
      Notify.create({
        color: 'white',
        message,
        icon: 'check_circle',
        position: 'top-right',
        classes: 'q-pa-md text-weight-bold positive_border',
        textColor: 'positive',
        actions: [
          {
            textColor: 'positive',
            icon: 'close'
          }
        ]
      })
    },
    error: (message) => {
      Notify.create({
        color: 'white',
        message,
        icon: 'error',
        position: 'top-right',
        classes: 'q-pa-md text-weight-bold negative_border',
        textColor: 'negative',
        actions: [
          {
            textColor: 'negative',
            icon: 'close'
          }
        ]
      })
    }
  }

  export default boot(({ app }) => {
    app.config.globalProperties.$message = message
    app.provide('message', message)
  })
<<<<<<< HEAD

  export { message }
=======
  
  export { message }
  
>>>>>>> 05c7101714f7b8170b91ad7d199fc7f1c24efa72

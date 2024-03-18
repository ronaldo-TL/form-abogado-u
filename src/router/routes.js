import { createRouter, createWebHashHistory} from 'vue-router'



const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/IndexPage.vue') 
      },
      { 
        path: 'matricula', 
        component: () => import('../pages/FormReset.vue') 
      },
      
      
    ]
  },
  // {
  //   path: '/forms',
  //   component: () => import('../components/Formularios/layouts/FormularioLayout'),
  //   children: [
  //     {
  //       path: 'form-prueba',
  //       name: 'form-prueba',
  //       component: () => import('../components/Formularios/pages/ActualizarPrueba')
  //     },
  //     {
  //       path: 'form-matricula',
  //       name: 'form-matricula',
  //       component: () => import('../components/Formularios/pages/ActualizarMatricula')
  //     }

  //   ]
  // },
  


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

export default routes

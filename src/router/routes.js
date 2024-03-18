const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'Matricula', component: () => import('pages/FormReset.vue') },
      // Añadir nuevos path - herramientas
      // { path: '', component: () => import('') },
    ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

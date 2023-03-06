import { createRouter, createWebHistory } from 'vue-router'
import ConsultaView from '../views/ConsultaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/consulta',
      name: 'Consulta',
      component: ConsultaView
    },
  ]
})

export default router

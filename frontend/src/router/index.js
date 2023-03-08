/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'
import ConsultaView from '../views/ConsultaView.vue'
import CadastroClienteView from '../views/CadastroClienteView.vue'
import EditarClienteView from '../views/EditarClienteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/consulta',
      name: 'Consulta',
      component: ConsultaView
    },
    {
      path: '/cadastrocliente',
      name: 'Cadastro',
      component: CadastroClienteView
    },
    {
      path: '/editarCliente',
      name: 'EditarCliente',
      component: EditarClienteView
    },
  ]
})

export default router

/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'
import ConsultaView from '../views/ConsultaView.vue'
import CadastroClienteView from '../views/CadastroClienteView.vue'
import ConsultaPetView from '../views/ConsultaPetView.vue'
import EditarCliente from '../views/EditarCliente.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/consulta/cliente',
      name: 'Consulta',
      component: ConsultaView
    },
    {
      path: '/cadastro/cliente',
      name: 'Cadastro',
      component: CadastroClienteView
    },
    {
      path: '/consulta/petshop',
      name: 'ConsultarPet',
      component: ConsultaPetView
    },
    {
      path: '/editar/cliente',
      name: 'Editar',
      component: EditarCliente
    },

  ]
})

export default router

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
      path: '/consultaCliente',
      name: 'Consulta',
      component: ConsultaView
    },
    {
      path: '/cadastrocliente',
      name: 'Cadastro',
      component: CadastroClienteView
    },
    {
      path: '/consultaPet',
      name: 'ConsultarPet',
      component: ConsultaPetView
    },
    {
      path: '/editarC',
      name: 'Editar',
      component: EditarCliente
    },

  ]
})

export default router

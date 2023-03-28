/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'
import ConsultaView from '../views/ConsultaView.vue'
import CadastroClienteView from '../views/CadastroClienteView.vue'
import ConsultaPetView from '../views/ConsultaPetView.vue'
import EditarCliente from '../views/EditarCliente.vue'
import EditarPetshop from '../views/EditarPetshop.vue'
import CadastroPet from '../views/CadastroPet.vue'
import Login from '../views/Login.vue'
import EsqueciSenha from '../views/EsqueciSenha.vue'
import Home from '../views/Home.vue'


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
      name: 'EditarCliente',
      component: EditarCliente
    },
    {
      path: '/editar/petshop',
      name: 'EditarPetshop',
      component: EditarPetshop
    },
    {
      path: '/cadastro/pet',
      name: 'CadastroPet',
      component: CadastroPet
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/esqueci/senha',
      name: 'EsqueciSenha',
      component: EsqueciSenha
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }

  ]
})

export default router

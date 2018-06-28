import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import Evolution from '@/pages/Evolution.vue'
import Auth from '@/pages/Auth.vue'
import Register from '@/pages/Register.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'evolution',
        name: 'Evolution',
        component: Evolution
      },
      {
        path: 'auth',
        name: 'Auth',
        component: Auth
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  }
]

export default routes

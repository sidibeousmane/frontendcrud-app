// router/index.js

// Import des fonctions de création de router et d'historique web
import { createRouter, createWebHistory } from 'vue-router'

// Import des composants Vue
import RegisterComponent from '@/components/RegisterComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import DashboardComponent from '@/components/DashboardComponent.vue'
import Employee from '@/components/Employee.vue'

// Définition des routes
const routes = [
  { path: '/register', component: RegisterComponent },
  { path: '/', component: LoginComponent },
  { path: '/employee', component: Employee },
  { path: '/dashboard', component: DashboardComponent, meta: { requiresAuth: true } },
]

// Création du router avec l'historique web
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // Utilisation des routes définies ci-dessus
})

// Export du router
export default router

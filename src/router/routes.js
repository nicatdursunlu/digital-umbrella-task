const Layout = () => import('@/shared/Layout/index.vue')
const Home = () => import('@/views/Home/index.vue')

const routes = [
  {
    path: '/',
    component: Layout,
    meta: {
      requiresAuth: true,
      isOnlyPublic: false
    },
    children: [
      {
        path: '/',
        component: Home,
        name: 'Home',
        meta: {
          requiresAuth: true,
          isOnlyPublic: false
        }
      }
    ]
  }
]

export default routes

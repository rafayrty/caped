import { createRouter,createWebHistory  } from 'vue-router'
import Home from './pages/Home.vue';
import Product from './pages/Product.vue';
import Products from './pages/Products.vue';

const routes = [
    { path: '/', component: Home,name:'home' },
    { path: '/product/:id', component: Product ,name:'product',meta: { transition: 'product' }},
    { path: '/products', component: Products ,name:'products'},


  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

  export default router;
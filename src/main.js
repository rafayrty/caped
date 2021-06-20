import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'


const app = createApp(App);

app.use(router);
app.use(PerfectScrollbar)





// router.beforeEach((to, from, next) => {
//         console.log("from before",document.querySelector(".product-image"));

//         next();
// });
// router.afterEach((to, from) => {
//     if(to.meta.transition == "product"){
//         console.log(document.querySelector(".product-image"));

//     }
//     // const toDepth = to.path.split('/').length
//     // const fromDepth = from.path.split('/').length
//   })


app.mount('#app')

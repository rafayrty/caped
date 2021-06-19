import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';


const app = createApp(App);

app.use(router);





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

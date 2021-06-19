<template>
<div class="app-container">
      <Header ref="header"/>

  <div class="grid-container grid">
    <Sidebar @closeMenu="closeMenu"/>
    <Cart/>
<main>
  <router-view v-slot="{ Component, route }">
  <!-- Use any custom transition and fallback to `fade` -->
  <transition :name="'fade'" mode="out-in"   @beforeLeave="beforeLeave"  @enter="enter"  @afterEnter="afterEnter">
    <component :is="Component" />
  </transition>
</router-view>


  <!-- <router-view></router-view> -->
  </main>

</div>



<footer class="container py-4 xl:pb-2">
  <p class="text-gray-500 text-center xl:text-right text-sm">Developed With Vue3/Tailwind By © <span class="font-bold"> Abdul Rafay</span></p>
</footer>

</div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
     transition-duration:0.3s;
  transition-property: height, opacity;
   transition-timing-function: ease;
  overflow: hidden;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
<script>
import Header from './components/Header.vue'
import Cart from './components/Cart.vue'
import Sidebar from './components/Sidebar.vue'
import { App as CapApp } from '@capacitor/app';
import { useRouter } from 'vue-router';
import { StatusBar, Style } from '@capacitor/status-bar';

import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
export default{
  components:{
     Sidebar,
     Header,
     Cart
  },
   setup () {
const router = useRouter()

let currentRoute = router.currentRoute.value.name; 
 return {currentRoute}
  },
  data(){
    return{
prevHeight:0
    }
  },

  created(){
    StatusBar.setBackgroundColor({
        color:'#FAFAFA'
      })
const setStatusBarStyleLight = async () => {
  await StatusBar.setStyle({ style: Style.Light });
};
      setStatusBarStyleLight();

    CapApp.addListener('backButton', () => {
    if(this.currentRoute!="home"){
      this.$router.go(-1)
    }else{
      CapApp.exitApp();
    }
});

  },
  methods:{
    closeMenu(){
      this.$refs.header.closeMenu();
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  }

}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

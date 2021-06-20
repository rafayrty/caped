<template>
    
    
<header class="py-6">
  <div class="container header-container grid items-center justify-between">
<div class="left flex items-center">

  <div class="menu-icon xl:hidden">
    <a href="#" @click.prevent="openMenu">
<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H16V2H0V0ZM0 5H16V7H0V5ZM0 10H16V12H0V10Z" fill="black"/>
</svg>
</a>
  </div>

<div class="logo "  @mouseover="mousePos($event)" @mouseleave="outmousePos($event)">

<router-link to="/">
  <h2 class="font-medium ml-6"><span class="relative"><div class="circle bg-yellow-500 rounded-full absolute"></div>C</span> 
    <span class="aped">aped</span></h2>
    </router-link>
</div>
  
</div>


    <div class="search mt-6 md:mt-0 bg-white py-2 px-6 rounded-lg shadow-md flex items-center justify-center">
      <div class="search-icon">
        <a href="javascript:void(0);">
          
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8723 16.8116C19.1996 15.2436 20 13.2153 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.2153 20 15.2436 19.1996 16.8116 17.8723L19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L17.8723 16.8116ZM18.5 11C18.5 15.1421 15.1421 18.5 11 18.5C6.85786 18.5 3.5 15.1421 3.5 11C3.5 6.85786 6.85786 3.5 11 3.5C15.1421 3.5 18.5 6.85786 18.5 11Z" fill="black"/>
</svg>

        </a>
        </div>
           <input @focus="showbg" @blur="hidebg" class="w-full ml-2 outline-none placeholder-gray-400 font-regular bg-transparent" type="text" placeholder="Search store">
    </div>




<div class="right flex  items-center">
  <a @click="openCart()" href="javascript:void(0);">
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.69865 5L8.09725 0.784674C9.16095 -0.234702 10.839 -0.234703 11.9027 0.784674L16.3013 5H18.847C19.4555 5 19.923 5.53899 19.8369 6.14142L18.368 16.4243C18.1568 17.9022 16.8911 19 15.3981 19H4.6019C3.10895 19 1.84318 17.9022 1.63205 16.4243L0.16307 6.14142C0.0770085 5.53899 0.544471 5 1.15302 5H3.69865ZM9.13511 1.86766C9.61861 1.4043 10.3814 1.4043 10.8649 1.86766L14.1334 5H5.86658L9.13511 1.86766ZM1.72952 6.5L3.11697 16.2121C3.22254 16.9511 3.85542 17.5 4.6019 17.5H15.3981C16.1446 17.5 16.7775 16.9511 16.883 16.2121L18.2705 6.5H1.72952Z" fill="black"/>
</svg>
</a>
  <a href="javascript:void(0);" class="ml-6">

<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.5C13.933 10.5 15.5 8.933 15.5 7C15.5 5.067 13.933 3.5 12 3.5C10.067 3.5 8.5 5.067 8.5 7C8.5 8.933 10.067 10.5 12 10.5ZM12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.75C6.65279 15.75 4.75 17.6528 4.75 20V21C4.75 21.4142 4.41421 21.75 4 21.75C3.58579 21.75 3.25 21.4142 3.25 21V20C3.25 16.8244 5.82436 14.25 9 14.25H15C18.1756 14.25 20.75 16.8244 20.75 20V21C20.75 21.4142 20.4142 21.75 20 21.75C19.5858 21.75 19.25 21.4142 19.25 21V20C19.25 17.6528 17.3472 15.75 15 15.75H9Z" fill="black"/>
</svg>

</a>

</div>

    </div>
<transition :name="'fade'" mode="out-in">
<div class="searchbg" v-if="searching"></div>
</transition>
</header>
    <Cart ref="cartComponent"/>

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
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import Cart from './Cart.vue';


export default{
  data(){
       return{
       searching:false
       }
    
  },
     components:{
         Cart
       },
methods:{
  showbg(){
      this.searching = true;
      document.querySelector('.search').style.zIndex = '8';
  },
  hidebg(){
      this.searching = false;
      document.querySelector('.search').style.zIndex = '1';
  },
  mousePos(e){
    if(window.innerWidth>1280){
    gsap.registerPlugin(CSSRulePlugin);


var rule = CSSRulePlugin.getRule(".logo h2 .aped"),
  rule2 = CSSRulePlugin.getRule(".logo h2 .aped:after");
        gsap.to(rule2,{transform:"scaleX(0)",duration:.3,ease:"power3.easeIn"})
    document.querySelector(".logo .circle").style.transform  = `translateX(80%)`;
    console.log(e.clientX,e.clientY);
    }
  },
  outmousePos(e){
        if(window.innerWidth>1280){
    var rule = CSSRulePlugin.getRule(".logo h2 .aped"),
  rule2 = CSSRulePlugin.getRule(".logo h2 .aped:after");
        gsap.to(rule2,{transform:"scaleX(1)",duration:.3,ease:"power3.easeIn"})
    document.querySelector(".logo .circle").style.transform  = `translate(0,0)`;
        }
  },
  closeMenu(e){
    let tl = gsap.timeline();
    tl.to('.menubg',{autoAlpha:0,duration:.3,ease:'power3.easeIn'});
    tl.to('aside',{left:'-100%',duration:.5,ease:'power1.easeInOut'},'-=.3');
    tl.set('.menubg',{display:'none'});

    
  },
  openMenu(){

    let tl = gsap.timeline();
        tl.set('.menubg',{display:'block'});
                tl.to('.menubg',{autoAlpha:1,duration:.3,ease:'power3.easeIn'});
    tl.to('aside',{left:'0%',duration:.5,ease:'power1.easeInOut'},'-=.3');

  },
  openCart(){
    this.$refs.cartComponent.openCart();
  }
}

}
</script>
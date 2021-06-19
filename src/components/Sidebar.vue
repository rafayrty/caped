<template>
    <aside class="shadow-md xl:shadow-none p-4 py-6 px-6">
<div class="top xl:hidden flex items-center">

<div class="close-icon">
<a href="javascript:void(0)" @click="closeMenu()">

<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.64341 6.99901L13.6552 1.99813C13.8747 1.77862 13.998 1.48091 13.998 1.17048C13.998 0.860046 13.8747 0.562331 13.6552 0.342824C13.4358 0.123318 13.1381 0 12.8277 0C12.5173 0 12.2196 0.123318 12.0002 0.342824L7 5.35536L1.99983 0.342824C1.78036 0.123318 1.48268 -2.31288e-09 1.1723 0C0.861913 2.31288e-09 0.56424 0.123318 0.344765 0.342824C0.125289 0.562331 0.00198911 0.860046 0.00198911 1.17048C0.00198911 1.48091 0.125289 1.77862 0.344765 1.99813L5.35659 6.99901L0.344765 11.9999C0.235521 12.1083 0.148811 12.2372 0.0896384 12.3792C0.0304655 12.5213 0 12.6736 0 12.8275C0 12.9814 0.0304655 13.1338 0.0896384 13.2758C0.148811 13.4179 0.235521 13.5468 0.344765 13.6552C0.453117 13.7644 0.582027 13.8512 0.724059 13.9103C0.866091 13.9695 1.01843 14 1.1723 14C1.32616 14 1.47851 13.9695 1.62054 13.9103C1.76257 13.8512 1.89148 13.7644 1.99983 13.6552L7 8.64265L12.0002 13.6552C12.1085 13.7644 12.2374 13.8512 12.3795 13.9103C12.5215 13.9695 12.6738 14 12.8277 14C12.9816 14 13.1339 13.9695 13.2759 13.9103C13.418 13.8512 13.5469 13.7644 13.6552 13.6552C13.7645 13.5468 13.8512 13.4179 13.9104 13.2758C13.9695 13.1338 14 12.9814 14 12.8275C14 12.6736 13.9695 12.5213 13.9104 12.3792C13.8512 12.2372 13.7645 12.1083 13.6552 11.9999L8.64341 6.99901Z" fill="black"/>
</svg>

</a>
</div>


<div class="logo ml-2" >


  <h2 class="font-medium ml-6"><span class="relative"><div class="circle bg-yellow-500 rounded-full absolute"></div>C</span> 
    <span class="aped">aped</span></h2>
</div>


</div>
<div class="main-menu w-9/12 xl:w-full mx-auto">

<div class="menu mt-8 xl:mt-0">
<h1 class="text-3xl font-bold">Explore</h1>
<ul class="mt-6 main">
  <li class="flex items-center"> <span><img src="../images/menu/new.png" class="w-full" alt=""></span> <router-link @click="closeMenu()" class="ml-2" to="/products"><span>New In</span></router-link>  </li>
  <li class="flex items-center"> <span><img src="../images/menu/clothing.png" class="w-full" alt=""></span> <router-link @click="closeMenu()" to="/products" class="ml-2" ><span>Clothing</span></router-link>  </li>
  <li class="flex items-center"> <span><img src="../images/menu/shoes.png" class="w-full" alt=""></span> <router-link @click="closeMenu()" to="/products" class="ml-3" ><span>Shoes</span></router-link>  </li>
  <li class="flex items-center"> <span><img src="../images/menu/accessories.png" class="w-full" alt=""></span> <router-link @click="closeMenu()" to="/products" class="ml-3" ><span>Accessories</span></router-link>  </li>
  <li class="flex items-center"> <span><img src="../images/menu/activewear.png" class="w-full" alt=""></span> <router-link @click="closeMenu()" to="/products" class="ml-2" ><span>Activewear</span></router-link>  </li>
  <li class="flex items-center"> <span><img src="../images/menu/gifts.png" class="w-full" alt=""></span> <router-link @click="closeMenu()" to="/products" class="ml-2" ><span>Gifts & Living</span></router-link>  </li>
  <li class="flex items-center"> <span><img src="../images/menu/inspiration.png" class="w-full" alt=""></span> <router-link @click="closeMenu()" to="/products" class="ml-1" ><span>Inspiration</span></router-link>  </li>

</ul>

<div class="mob-content mt-8">
<ul>
  <li> <a href="#"><span>products</span></a> </li>
    <li> <a href="#"><span>story</span></a> </li>
  <li> <a href="#"><span>manufacturing</span></a> </li>

</ul>

</div>

</div>



<div class="bottom flex items-center">
<div class="icon">
  
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.562 13.7444C17.7093 13.4335 17.8373 13.1167 17.9468 12.7947H17.9187C19.8369 7.1564 15.8029 1.23051 9.84746 0.941974C9.84756 0.942282 9.84736 0.941666 9.84746 0.941974C4.72323 0.705501 0.465652 4.81316 0.465652 9.90775C0.465652 14.8534 4.47961 18.8772 9.41667 18.8844C10.7558 18.8826 12.0394 18.5939 13.2363 18.0253C17.9083 18.9503 17.544 18.8845 17.6513 18.8845C18.1368 18.8845 18.4995 18.439 18.4047 17.9642L17.562 13.7444Z" fill="black"/>
</svg>

</div>
  
  <a href="#" class="ml-4">Help Center</a>

</div>


</div>

</aside>
<div class="menubg" @click="closeMenu()"></div>

</template>
<script>
export default {
    methods:{
        closeMenu(){
            this.$emit('closeMenu');
        }
    }
}
</script>
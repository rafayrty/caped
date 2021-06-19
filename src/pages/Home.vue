<template>

  <div class="container main-container">

  <div class="first mt-3">
    
<img src="../images/first.svg" class="w-full" alt="">

  </div>

<div class="col col1  mt-3 grid grid-cols-2 gap-x-4 items-center">
    <div class=" relative product-image">
<img @click="product($event,1)" src="/images/image1.jpg" alt="">
<div class="heart ">


<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>



</div>

  </div>
  <div class="third relative product-image">
<img src="/images/image2.jpg" @click="product($event,2)" alt="">
<div class="heart ">

<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>



</div>
  </div>
</div>

<div class="second mt-3">
<img src="../images/second.svg" class="w-full" alt="">
</div>

<div class="trending mt-3 py-8 px-8">
  <div class="trending-text">

  <h1 class="text-2xl  text-klein-blue-500 font-bold">Trending & Hot</h1>
  <p class="font-semibold">
    A collection of most trending items.
  </p>

  </div>

</div>

<div class="time mt-3 py-8 px-8">
  <div class="time-text">

  <h1 class="text-2xl  text-red-orange-500 font-bold">Buy it for the first time</h1>
  <p class="font-semibold">
    New in store. Try it before anyone else.
  </p>

  </div>

</div>

<div class="col2 col lg:pb-0  mt-3 grid grid-cols-2 gap-x-4 items-center">
    <div class="fifth relative product-image">
    
<img @click="product($event,3)" src="/images/image3.jpg" alt="">
<div class="heart ">


<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>



</div>

  </div>
  <div class="sixth relative product-image">
    

<img src="/images/image4.jpg" @click="product($event,4)" alt="">
<div class="heart ">


<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>




</div>
  </div>
</div>

  </div>

</template>
<script>
import { illusory, IllusoryElement } from 'illusory' // If you use npm


export default{
    data(){
        return{

        }
    },
methods:{
    product(e,id){
                window.scroll({top: 0, left: 0, behavior: 'smooth'});
        setTimeout(() => {
              const position = e.target.getBoundingClientRect()
        this.$router.push({name:'product',params: {
			position: JSON.stringify(position),
            id:id
            
		}
        })
        }, 100);
      
    }
}
}
</script>
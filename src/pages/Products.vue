<template>
    <div class="products-page">
        <div class="container">
            <div class="products">
                <div class="products-container">
           
           <div class="product">

           <div class="prd-image relative">
                <img src="/images/image1.jpg" @click="product($event,1)" class="w-full " alt="">
                <div class="heart">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
            </div>
   <div class="product-info">
                <h2 class="text-xl font-bold mt-2">
                   LINEN UTILITY SUIT - RED
                </h2>
                <div class="product-buy flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between mt-1">
                <p class="price text-gray-500 font-semibold text-lg mb-1 lg:mb-0">$190.00</p>
                
                 <button @click="product($event,1)" class="text-sm rounded-md ml-0 lg:ml-4 w-full lg:w-auto bg-black text-white xl:ml-6 border-2 border-black p-2 px-8 focus:outline-none focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-black focus:ring-opacity-50">Buy Now</button>

                </div>
            </div>

                </div>

                           <div class="product ">

           <div class="prd-image relative">
                <img src="/images/image2.jpg" @click="product($event,2)" class="w-full " alt="">
                <div class="heart">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
            </div>
                <div class="product-info">
                <h2 class="text-xl font-bold mt-2">
                    FRAYED LUXE  - BLUE
                </h2>
                <div class="product-buy flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between mt-1">
                <p class="price text-gray-500 font-semibold text-lg mb-1 lg:mb-0">$150.00</p>
                
                 <button @click="product($event,2)" class="text-sm rounded-md ml-0 lg:ml-4 w-full lg:w-auto bg-black text-white xl:ml-6 border-2 border-black p-2 px-8 focus:outline-none focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-black focus:ring-opacity-50">Buy Now</button>

                </div>
            </div>


                </div>
                                     <div class="product">

           <div class="prd-image relative">
                <img src="/images/image3.jpg" @click="product($event,3)" class="w-full " alt="">
                <div class="heart">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
            </div>
               <div class="product-info">
                <h2 class="text-xl font-bold mt-2">
            BRODERIE TOP - INDIGO
                </h2>
                <div class="product-buy flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between mt-1">
                <p class="price text-gray-500 font-semibold text-lg mb-1 lg:mb-0">$180.00</p>
                
                 <button @click="product($event,3)" class="text-sm rounded-md ml-0 lg:ml-4 w-full lg:w-auto bg-black text-white xl:ml-6 border-2 border-black p-2 px-8 focus:outline-none focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-black focus:ring-opacity-50">Buy Now</button>

                </div>
            </div>


                </div>

                                                 <div class="product">

           <div class="prd-image relative">
                <img src="/images/image4.jpg" @click="product($event,4)" class="w-full " alt="">
                <div class="heart">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
            </div>
          <div class="product-info">
                <h2 class="text-xl font-bold mt-2">
                    BAMBOO DRESS  - PINK
                </h2>
                <div class="product-buy flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between mt-1">
                <p class="price text-gray-500 font-semibold text-lg mb-1 lg:mb-0">$120.00</p>
                
                 <button @click="product($event,4)" class="text-sm rounded-md ml-0 lg:ml-4 w-full lg:w-auto bg-black text-white xl:ml-6 border-2 border-black p-2 px-8 focus:outline-none focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-black focus:ring-opacity-50">Buy Now</button>

                </div>
            </div>

                </div>


     <div class="product">

           <div class="prd-image relative">
                <img src="/images/image5.jpg" @click="product($event,5)" class="w-full " alt="">
                <div class="heart">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
            </div>
            <div class="product-info">
                <h2 class="text-xl font-bold mt-2">
                    FRAYED LUXE FLEECY - BLACK
                </h2>
                <div class="product-buy flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between mt-1">
                <p class="price text-gray-500 font-semibold text-lg mb-1 lg:mb-0">$250.00</p>
                
                 <button @click="product($event,5)" class="text-sm rounded-md ml-0 lg:ml-4 w-full lg:w-auto bg-black text-white xl:ml-6 border-2 border-black p-2 px-8 focus:outline-none focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-black focus:ring-opacity-50">Buy Now</button>

                </div>
            </div>

                </div>

                </div>
                
      
            </div>
         
        </div>
    </div>
</template>
<style scoped>
.products-container{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-column-gap:1rem;
    grid-row-gap:1rem;
}
.product{
display:flex;
flex-direction: column;
justify-content: space-between;
}
.prd-image{
    height:100%;
    overflow:hidden;
    border-radius:20px;

}
.prd-image img{
    transform:scale(1);
    width:100%;
    height:100%;
    object-fit: cover;;
    cursor:pointer;
    transition:transform .3s ease-in-out;
}
.prd-image:hover img{
    transform:scale(1.1);
}
@media only screen and (min-width:1024px) {
    .products-container{
            display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-column-gap:1rem;
    }
    
}
</style>
<script>
import gsap from 'gsap';
export default {
    mounted(){

gsap.from('.products-container .product',{stagger:.1,duration:.6,autoAlpha:0,translateY:'20px',ease:'power4.easeInOut'})
      
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
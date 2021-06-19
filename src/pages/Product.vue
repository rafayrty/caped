<template>
<div class="product-page">

<div class="container product-container">

<div class="product-img relative">
<img :src="`/images/${image}`" class="w-full" alt="">
<div class="heart ">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
</div>

</div>


<div class="product-info mt-6">
    <h1 class="text-3xl font-bold">FRAYED LUXE FLEECY - RED</h1>
<div class="product-review flex items-center">
    <div class="stars">
<svg width="98" height="17" viewBox="0 0 98 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4182 5.98618L12.0222 5.21059L9.60999 0.374144C9.54411 0.241725 9.43572 0.134529 9.30183 0.0693701C8.96604 -0.0945772 8.55799 0.0420455 8.39009 0.374144L5.97791 5.21059L0.581865 5.98618C0.433096 6.0072 0.297079 6.07656 0.192941 6.18166C0.0670438 6.30964 -0.00233122 6.48181 5.98176e-05 6.66035C0.00245086 6.83888 0.0764123 7.00918 0.205692 7.13381L4.10981 10.8983L3.18744 16.214C3.16581 16.3376 3.17965 16.4648 3.22738 16.5811C3.27511 16.6973 3.35483 16.7981 3.4575 16.8718C3.56016 16.9456 3.68166 16.9894 3.80823 16.9983C3.9348 17.0072 4.06136 16.9809 4.17356 16.9223L9.00004 14.4127L13.8265 16.9223C13.9583 16.9917 14.1113 17.0148 14.258 16.9896C14.6277 16.9265 14.8764 16.5797 14.8126 16.214L13.8903 10.8983L17.7944 7.13381C17.9007 7.03082 17.9708 6.8963 17.992 6.74917C18.0494 6.38134 17.7901 6.04083 17.4182 5.98618V5.98618Z" fill="black"/>
<path d="M37.4182 5.98618L32.0222 5.21059L29.61 0.374144C29.5441 0.241725 29.4357 0.134529 29.3018 0.0693701C28.966 -0.0945772 28.558 0.0420455 28.3901 0.374144L25.9779 5.21059L20.5819 5.98618C20.4331 6.0072 20.2971 6.07656 20.1929 6.18166C20.067 6.30964 19.9977 6.48181 20.0001 6.66035C20.0025 6.83888 20.0764 7.00918 20.2057 7.13381L24.1098 10.8983L23.1874 16.214C23.1658 16.3376 23.1796 16.4648 23.2274 16.5811C23.2751 16.6973 23.3548 16.7981 23.4575 16.8718C23.5602 16.9456 23.6817 16.9894 23.8082 16.9983C23.9348 17.0072 24.0614 16.9809 24.1736 16.9223L29 14.4127L33.8265 16.9223C33.9583 16.9917 34.1113 17.0148 34.258 16.9896C34.6277 16.9265 34.8764 16.5797 34.8126 16.214L33.8903 10.8983L37.7944 7.13381C37.9007 7.03082 37.9708 6.8963 37.992 6.74917C38.0494 6.38134 37.7901 6.04083 37.4182 5.98618V5.98618Z" fill="black"/>
<path d="M57.4182 5.98618L52.0222 5.21059L49.61 0.374144C49.5441 0.241725 49.4357 0.134529 49.3018 0.0693701C48.966 -0.0945772 48.558 0.0420455 48.3901 0.374144L45.9779 5.21059L40.5819 5.98618C40.4331 6.0072 40.2971 6.07656 40.1929 6.18166C40.067 6.30964 39.9977 6.48181 40.0001 6.66035C40.0025 6.83888 40.0764 7.00918 40.2057 7.13381L44.1098 10.8983L43.1874 16.214C43.1658 16.3376 43.1796 16.4648 43.2274 16.5811C43.2751 16.6973 43.3548 16.7981 43.4575 16.8718C43.5602 16.9456 43.6817 16.9894 43.8082 16.9983C43.9348 17.0072 44.0614 16.9809 44.1736 16.9223L49 14.4127L53.8265 16.9223C53.9583 16.9917 54.1113 17.0148 54.258 16.9896C54.6277 16.9265 54.8764 16.5797 54.8126 16.214L53.8903 10.8983L57.7944 7.13381C57.9007 7.03082 57.9708 6.8963 57.992 6.74917C58.0494 6.38134 57.7901 6.04083 57.4182 5.98618V5.98618Z" fill="black"/>
<path d="M77.4182 5.98618L72.0222 5.21059L69.61 0.374144C69.5441 0.241725 69.4357 0.134529 69.3018 0.0693701C68.966 -0.0945772 68.558 0.0420455 68.3901 0.374144L65.9779 5.21059L60.5819 5.98618C60.4331 6.0072 60.2971 6.07656 60.1929 6.18166C60.067 6.30964 59.9977 6.48181 60.0001 6.66035C60.0025 6.83888 60.0764 7.00918 60.2057 7.13381L64.1098 10.8983L63.1874 16.214C63.1658 16.3376 63.1796 16.4648 63.2274 16.5811C63.2751 16.6973 63.3548 16.7981 63.4575 16.8718C63.5602 16.9456 63.6817 16.9894 63.8082 16.9983C63.9348 17.0072 64.0614 16.9809 64.1736 16.9223L69 14.4127L73.8265 16.9223C73.9583 16.9917 74.1113 17.0148 74.258 16.9896C74.6277 16.9265 74.8764 16.5797 74.8126 16.214L73.8903 10.8983L77.7944 7.13381C77.9007 7.03082 77.9708 6.8963 77.992 6.74917C78.0494 6.38134 77.7901 6.04083 77.4182 5.98618V5.98618Z" fill="black"/>
<path d="M97.4182 5.98618L92.0222 5.21059L89.61 0.374144C89.5441 0.241725 89.4357 0.134529 89.3018 0.0693701C88.966 -0.0945772 88.558 0.0420455 88.3901 0.374144L85.9779 5.21059L80.5819 5.98618C80.4331 6.0072 80.2971 6.07656 80.1929 6.18166C80.067 6.30964 79.9977 6.48181 80.0001 6.66035C80.0025 6.83888 80.0764 7.00918 80.2057 7.13381L84.1098 10.8983L83.1874 16.214C83.1658 16.3376 83.1796 16.4648 83.2274 16.5811C83.2751 16.6973 83.3548 16.7981 83.4575 16.8718C83.5602 16.9456 83.6817 16.9894 83.8082 16.9983C83.9348 17.0072 84.0614 16.9809 84.1736 16.9223L89 14.4127L93.8265 16.9223C93.9583 16.9917 94.1113 17.0148 94.258 16.9896C94.6277 16.9265 94.8764 16.5797 94.8126 16.214L93.8903 10.8983L97.7944 7.13381C97.9007 7.03082 97.9708 6.8963 97.992 6.74917C98.0494 6.38134 97.7901 6.04083 97.4182 5.98618V5.98618Z" fill="black"/>
</svg>
    </div><p class="ml-2 text-gray-500">1 review</p>
</div>

<div class="product-inputs mt-4 flex justify-between 2xl:justify-start">

<div class="input-container w-full 2xl:w-auto mr-12">
    <label for="size" class="block text-gray-500">Size:</label>
    <select name="" id="size" class="border w-full 2xl:w-auto bg-white text-black border-black rounded-md p-2 px-4">
        <option selected>Select A Size</option>
                <option>M</option>
    </select>
</div>
<div class="input-container w-full 2xl:w-auto">
    <label for="size" class="block text-gray-500">Colour:</label>
    <select name="" id="size" class="border w-full 2xl:w-auto bg-white text-black border-black rounded-md p-2 px-4">
        <option selected class="shadow-md text-black">Select A Colour</option>
    </select>
</div>

</div>

<div class="quantity mt-4">
    <label for="size" class="block text-gray-500">Quantity:</label>
<div class="quantity-input  flex items-center">

<button  @click="minus()" class="minus border border-black rounded-md p-1">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
</button>

<div class="quantity-num border border-black rounded-md px-12 p-1 mx-2">{{amount}}</div>

<button @click="add()" class="plus border border-black rounded-md p-1">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
</svg>
</button>

</div>

</div>

<div class="price mt-4">
    <h2 class="text-2xl font-bold">$153.00</h2>
    <p class="text-gray-400 font-regular text-sm">Tax included. Shipping calculated at checkout.</p>
</div>

<div class="product-action flex justify-between xl:justify-start mt-4">

<button class="text-lg rounded-md bg-transparent  border-2 border-black p-2 px-8 focus:outline-none focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-black focus:ring-opacity-50">Add To Cart</button>
<button class="text-lg rounded-md bg-black text-white xl:ml-6 border-2 border-black p-2 px-8 focus:outline-none focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-black focus:ring-opacity-50">Buy Now</button>

</div>



</div>

<div class="product-text text-gray-500 mt-6">
Endlessly versatile, this effortlessly stylish top delivers edgy raw finishes and a neat yet relaxed fit. Crafted from soft, breathable cotton, this top is the perfect style for at home, work, or play. Team up with our Classic Slouch Pant.
<br>
<ul class="list-disc ml-4">
    <li>100% Japanese Cotton </li>
    <li>100% Japanese Cotton </li>
    <li>100% Japanese Cotton </li>
    <li>100% Japanese Cotton </li>
    <li>100% Japanese Cotton </li>
    <li>100% Japanese Cotton </li>
    <li>100% Japanese Cotton </li>

</ul>
<!-- . Round Neckline
. Raw edge on side, arm, shoulder and back yoke.
. Long Length Sleeve
. Model size 12, height 175cm wears S/M
. Machine washable
. Made in Pakistan -->
</div>


</div>



</div>


</template>
<style scoped>
select{
    @apply focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-black focus:ring-opacity-50;
}
button{
        @apply focus:ring-offset-2 focus:ring-offset-white focus:ring-2 focus:ring-black focus:ring-opacity-50;
}
   .product-img{
       /* overflow:hidden; */
       border-radius:10px;
   }
   .product-info,.product-text{
       opacity:1;
   }
  .product-img img{
    /* transform:scale(1);
    transition:.3s ease-in-out; */
    border-radius:10px;
    cursor:pointer;
    width:100%;
    height:100%;
    object-fit: cover;
    transform-origin:center top;
      }
  .product-img:hover img{
    /* transform:scale(1.1); */
  }
@media only screen and (min-width:1024px){
.product-container{
margin-top:2rem;
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:auto auto;
grid-column-gap:4rem;
}
.product-text{
    grid-row:2 / 3;
    grid-column:1 / 3;
}

}
@media only screen and (min-width:1560px){

.product-container{
grid-template-columns:.6fr 1fr;
grid-template-rows:auto auto;
grid-column-gap:4rem;
}
.product-info{
    margin-top:1.5rem;
}



}
@media only screen and (min-width:1800px){
.product-info{
    margin-top:4rem;
}

}

</style>
<script>
import { useRoute } from 'vue-router';
import gsap from 'gsap';
export default {
setup(){
const route = useRoute();  
let position;
if(route.params.position!=undefined){
 position = JSON.parse(route.params.position); 
// read parameter id (it is reactive) 
}
const id = route.params.id;
const image = `image${id}.jpg`;


 return { position,image }

},
data(){
    return{
        amount:1
    }
},
mounted(){

//   window.scroll({top: 0, left: 0, behavior: 'smooth'});
  
    if(this.position!=undefined || this.position == ""){
    gsap.set('.product-info',{opacity:'0',translateY:'10px'});
    gsap.set('.product-text',{opacity:'0',translateY:'10px'});
    gsap.set('.heart',{opacity:'0'});
    let current_img = document.querySelector('.product-img').getBoundingClientRect();
    let scale = ((this.position.width) / (current_img.width)); // Scale Calcuation
    gsap.set('.product-img img',{scale:scale,translateX:`${this.position.x - current_img.x}px`,translateY:`${this.position.y - current_img.y}px`});
    let tl = gsap.timeline();

    tl.to('.product-img img',{delay:.05,duration:.4,scale:1,translateX:`0px`,translateY:`0px`,ease:'power3.easeInOut'})
    tl.to('.product-info',{duration:.6,autoAlpha:1,translateY:`0px`,ease:'power3.easeInOut'})
    tl.to('.product-text',{duration:.6,autoAlpha:1,translateY:`0px`,ease:'power3.easeInOut'},'-=.4')
    tl.to('.heart',{duration:.6,autoAlpha:1,ease:'power3.easeInOut'},'-=.4')

    }else{
    let tl = gsap.timeline();
    tl.to('.product-info',{delay:.5,autoAlpha:1,duration:.6,translateY:`0px`,ease:'power3.easeInOut'})
    tl.to('.product-text',{duration:.6,autoAlpha:1,translateY:`0px`,ease:'power3.easeInOut'},'-=.4')

    }


        // gsap.set('.product-img img',{display:'block'});

},
methods:{
    add(){
        if(this.amount!=10){
        this.amount += 1;
        }
    },
    minus(){
        if(this.amount!=1){
        this.amount  -= 1;
        }
    }
}

}
</script>
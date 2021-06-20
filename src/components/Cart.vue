<template>
<div class="cartbg" @click="closeCart()"></div>
    <div class="cart">


        <div class="cart-wrapper flex flex-col justify-between h-full">
            <div class="top-part">

                <div class="cart-header flex justify-between items-center">

                    <h1 class="text-3xl font-bold flex items-center">Cart

                        <svg class="ml-4" width="20" height="19" viewBox="0 0 20 19" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.69865 5L8.09725 0.784674C9.16095 -0.234702 10.839 -0.234703 11.9027 0.784674L16.3013 5H18.847C19.4555 5 19.923 5.53899 19.8369 6.14142L18.368 16.4243C18.1568 17.9022 16.8911 19 15.3981 19H4.6019C3.10895 19 1.84318 17.9022 1.63205 16.4243L0.16307 6.14142C0.0770085 5.53899 0.544471 5 1.15302 5H3.69865ZM9.13511 1.86766C9.61861 1.4043 10.3814 1.4043 10.8649 1.86766L14.1334 5H5.86658L9.13511 1.86766ZM1.72952 6.5L3.11697 16.2121C3.22254 16.9511 3.85542 17.5 4.6019 17.5H15.3981C16.1446 17.5 16.7775 16.9511 16.883 16.2121L18.2705 6.5H1.72952Z"
                                fill="black" />
                        </svg>

                    </h1>

                    <div @click="closeCart" class="close-cart">
                        <a href="javascript:void(0)">
                            <svg width="18" height="18" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.64341 6.99901L13.6552 1.99813C13.8747 1.77862 13.998 1.48091 13.998 1.17048C13.998 0.860046 13.8747 0.562331 13.6552 0.342824C13.4358 0.123318 13.1381 0 12.8277 0C12.5173 0 12.2196 0.123318 12.0002 0.342824L7 5.35536L1.99983 0.342824C1.78036 0.123318 1.48268 -2.31288e-09 1.1723 0C0.861913 2.31288e-09 0.56424 0.123318 0.344765 0.342824C0.125289 0.562331 0.00198911 0.860046 0.00198911 1.17048C0.00198911 1.48091 0.125289 1.77862 0.344765 1.99813L5.35659 6.99901L0.344765 11.9999C0.235521 12.1083 0.148811 12.2372 0.0896384 12.3792C0.0304655 12.5213 0 12.6736 0 12.8275C0 12.9814 0.0304655 13.1338 0.0896384 13.2758C0.148811 13.4179 0.235521 13.5468 0.344765 13.6552C0.453117 13.7644 0.582027 13.8512 0.724059 13.9103C0.866091 13.9695 1.01843 14 1.1723 14C1.32616 14 1.47851 13.9695 1.62054 13.9103C1.76257 13.8512 1.89148 13.7644 1.99983 13.6552L7 8.64265L12.0002 13.6552C12.1085 13.7644 12.2374 13.8512 12.3795 13.9103C12.5215 13.9695 12.6738 14 12.8277 14C12.9816 14 13.1339 13.9695 13.2759 13.9103C13.418 13.8512 13.5469 13.7644 13.6552 13.6552C13.7645 13.5468 13.8512 13.4179 13.9104 13.2758C13.9695 13.1338 14 12.9814 14 12.8275C14 12.6736 13.9695 12.5213 13.9104 12.3792C13.8512 12.2372 13.7645 12.1083 13.6552 11.9999L8.64341 6.99901Z"
                                    fill="black" />
                            </svg>
                        </a>


                    </div>

                </div>


                <div class="items-num mt-4">
                    <h2 class="text-xl font-semibold text-gray-400">(2) items</h2>

                </div>
<perfect-scrollbar>

                <div class="items mt-4">

                    <div class="item flex">
                        <div class="item-image relative">

                            <img src="/images/image1.jpg" class=" w-full object-cover rounded-lg" alt="">

                            <div class="close">
                                <a href="javscript:void(0)">

                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="19" height="19" rx="9.5" fill="#FF2952" />
                                        <path
                                            d="M10.1071 9.47952L13.1182 6.46843C13.1858 6.38942 13.2212 6.28778 13.2172 6.18382C13.2132 6.07987 13.1701 5.98126 13.0965 5.9077C13.023 5.83414 12.9243 5.79105 12.8204 5.78703C12.7164 5.78302 12.6148 5.81837 12.5358 5.88604L9.5247 8.89713L6.51361 5.88191C6.4346 5.81424 6.33296 5.77889 6.229 5.7829C6.12505 5.78692 6.02644 5.83001 5.95288 5.90357C5.87932 5.97713 5.83623 6.07574 5.83221 6.17969C5.8282 6.28365 5.86355 6.38529 5.93122 6.4643L8.94231 9.47952L5.92709 12.4906C5.88385 12.5276 5.84874 12.5732 5.82394 12.6244C5.79915 12.6757 5.78522 12.7315 5.78302 12.7884C5.78083 12.8453 5.79041 12.902 5.81118 12.955C5.83194 13.008 5.86344 13.0561 5.90369 13.0964C5.94395 13.1367 5.99208 13.1681 6.04509 13.1889C6.09809 13.2097 6.15482 13.2193 6.2117 13.2171C6.26858 13.2149 6.3244 13.2009 6.37564 13.1761C6.42689 13.1514 6.47245 13.1162 6.50948 13.073L9.5247 10.0619L12.5358 13.073C12.6148 13.1407 12.7164 13.176 12.8204 13.172C12.9243 13.168 13.023 13.1249 13.0965 13.0513C13.1701 12.9778 13.2132 12.8792 13.2172 12.7752C13.2212 12.6713 13.1858 12.5696 13.1182 12.4906L10.1071 9.47952Z"
                                            fill="white" />
                                    </svg>

                                </a>
                            </div>

                        </div>

                        <div class="item-text ml-4 mt-1">
                            <h1 class="text-xl font-bold leading-5">FRAYED LUXE FLEECY - RED</h1>
                            <p class="text-xs mt-1">M/L, <span>Red</span></p>

                            <div class="quantity">
                                <label for="size" class="block text-sm text-gray-500">Quantity:</label>
                                <div class="quantity-input  flex items-center">

                                    <button @click="minus()" class="minus border border-black rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                    <div class="quantity-num border border-black rounded-md px-10 mx-2">{{amount}}</div>

                                    <button @click="add()" class="plus border border-black rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                </div>

                            </div>

                            <div class="item-price">
                                <h3 class="text-2xl font-bold mt-1">$153.00</h3>
                            </div>


                        </div>


                        

                    </div>

                                        <div class="item flex">
                        <div class="item-image relative">

                            <img src="/images/image2.jpg" class=" w-full object-cover rounded-lg" alt="">

                            <div class="close">
                                <a href="javscript:void(0)">

                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="19" height="19" rx="9.5" fill="#FF2952" />
                                        <path
                                            d="M10.1071 9.47952L13.1182 6.46843C13.1858 6.38942 13.2212 6.28778 13.2172 6.18382C13.2132 6.07987 13.1701 5.98126 13.0965 5.9077C13.023 5.83414 12.9243 5.79105 12.8204 5.78703C12.7164 5.78302 12.6148 5.81837 12.5358 5.88604L9.5247 8.89713L6.51361 5.88191C6.4346 5.81424 6.33296 5.77889 6.229 5.7829C6.12505 5.78692 6.02644 5.83001 5.95288 5.90357C5.87932 5.97713 5.83623 6.07574 5.83221 6.17969C5.8282 6.28365 5.86355 6.38529 5.93122 6.4643L8.94231 9.47952L5.92709 12.4906C5.88385 12.5276 5.84874 12.5732 5.82394 12.6244C5.79915 12.6757 5.78522 12.7315 5.78302 12.7884C5.78083 12.8453 5.79041 12.902 5.81118 12.955C5.83194 13.008 5.86344 13.0561 5.90369 13.0964C5.94395 13.1367 5.99208 13.1681 6.04509 13.1889C6.09809 13.2097 6.15482 13.2193 6.2117 13.2171C6.26858 13.2149 6.3244 13.2009 6.37564 13.1761C6.42689 13.1514 6.47245 13.1162 6.50948 13.073L9.5247 10.0619L12.5358 13.073C12.6148 13.1407 12.7164 13.176 12.8204 13.172C12.9243 13.168 13.023 13.1249 13.0965 13.0513C13.1701 12.9778 13.2132 12.8792 13.2172 12.7752C13.2212 12.6713 13.1858 12.5696 13.1182 12.4906L10.1071 9.47952Z"
                                            fill="white" />
                                    </svg>

                                </a>
                            </div>

                        </div>

                        <div class="item-text ml-4 mt-1">
                            <h1 class="text-xl font-bold leading-5">FRAYED LUXE FLEECY - RED</h1>
                            <p class="text-xs mt-1">M/L, <span>Red</span></p>

                            <div class="quantity">
                                <label for="size" class="block text-sm text-gray-500">Quantity:</label>
                                <div class="quantity-input  flex items-center">

                                    <button @click="minus()" class="minus border border-black rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                    <div class="quantity-num border border-black rounded-md px-10 mx-2">{{amount}}</div>

                                    <button @click="add()" class="plus border border-black rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                </div>

                            </div>

                            <div class="item-price">
                                <h3 class="text-2xl font-bold mt-1">$153.00</h3>
                            </div>


                        </div>


                        

                    </div>


                    <div class="item flex">
                        <div class="item-image relative">

                            <img src="/images/image3.jpg" class=" w-full object-cover rounded-lg" alt="">

                            <div class="close">
                                <a href="javscript:void(0)">

                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="19" height="19" rx="9.5" fill="#FF2952" />
                                        <path
                                            d="M10.1071 9.47952L13.1182 6.46843C13.1858 6.38942 13.2212 6.28778 13.2172 6.18382C13.2132 6.07987 13.1701 5.98126 13.0965 5.9077C13.023 5.83414 12.9243 5.79105 12.8204 5.78703C12.7164 5.78302 12.6148 5.81837 12.5358 5.88604L9.5247 8.89713L6.51361 5.88191C6.4346 5.81424 6.33296 5.77889 6.229 5.7829C6.12505 5.78692 6.02644 5.83001 5.95288 5.90357C5.87932 5.97713 5.83623 6.07574 5.83221 6.17969C5.8282 6.28365 5.86355 6.38529 5.93122 6.4643L8.94231 9.47952L5.92709 12.4906C5.88385 12.5276 5.84874 12.5732 5.82394 12.6244C5.79915 12.6757 5.78522 12.7315 5.78302 12.7884C5.78083 12.8453 5.79041 12.902 5.81118 12.955C5.83194 13.008 5.86344 13.0561 5.90369 13.0964C5.94395 13.1367 5.99208 13.1681 6.04509 13.1889C6.09809 13.2097 6.15482 13.2193 6.2117 13.2171C6.26858 13.2149 6.3244 13.2009 6.37564 13.1761C6.42689 13.1514 6.47245 13.1162 6.50948 13.073L9.5247 10.0619L12.5358 13.073C12.6148 13.1407 12.7164 13.176 12.8204 13.172C12.9243 13.168 13.023 13.1249 13.0965 13.0513C13.1701 12.9778 13.2132 12.8792 13.2172 12.7752C13.2212 12.6713 13.1858 12.5696 13.1182 12.4906L10.1071 9.47952Z"
                                            fill="white" />
                                    </svg>

                                </a>
                            </div>

                        </div>

                        <div class="item-text ml-4 mt-1">
                            <h1 class="text-xl font-bold leading-5">FRAYED LUXE FLEECY - RED</h1>
                            <p class="text-xs mt-1">M/L, <span>Red</span></p>

                            <div class="quantity">
                                <label for="size" class="block text-sm text-gray-500">Quantity:</label>
                                <div class="quantity-input  flex items-center">

                                    <button @click="minus()" class="minus border border-black rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                    <div class="quantity-num border border-black rounded-md px-10 mx-2">{{amount}}</div>

                                    <button @click="add()" class="plus border border-black rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                </div>

                            </div>

                            <div class="item-price">
                                <h3 class="text-2xl font-bold mt-1">$153.00</h3>
                            </div>


                        </div>


                        

                    </div>




                    <div class="item flex">
                        <div class="item-image relative">

                            <img src="/images/image4.jpg" class=" w-full object-cover rounded-lg" alt="">

                            <div class="close">
                                <a href="javscript:void(0)">

                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="19" height="19" rx="9.5" fill="#FF2952" />
                                        <path
                                            d="M10.1071 9.47952L13.1182 6.46843C13.1858 6.38942 13.2212 6.28778 13.2172 6.18382C13.2132 6.07987 13.1701 5.98126 13.0965 5.9077C13.023 5.83414 12.9243 5.79105 12.8204 5.78703C12.7164 5.78302 12.6148 5.81837 12.5358 5.88604L9.5247 8.89713L6.51361 5.88191C6.4346 5.81424 6.33296 5.77889 6.229 5.7829C6.12505 5.78692 6.02644 5.83001 5.95288 5.90357C5.87932 5.97713 5.83623 6.07574 5.83221 6.17969C5.8282 6.28365 5.86355 6.38529 5.93122 6.4643L8.94231 9.47952L5.92709 12.4906C5.88385 12.5276 5.84874 12.5732 5.82394 12.6244C5.79915 12.6757 5.78522 12.7315 5.78302 12.7884C5.78083 12.8453 5.79041 12.902 5.81118 12.955C5.83194 13.008 5.86344 13.0561 5.90369 13.0964C5.94395 13.1367 5.99208 13.1681 6.04509 13.1889C6.09809 13.2097 6.15482 13.2193 6.2117 13.2171C6.26858 13.2149 6.3244 13.2009 6.37564 13.1761C6.42689 13.1514 6.47245 13.1162 6.50948 13.073L9.5247 10.0619L12.5358 13.073C12.6148 13.1407 12.7164 13.176 12.8204 13.172C12.9243 13.168 13.023 13.1249 13.0965 13.0513C13.1701 12.9778 13.2132 12.8792 13.2172 12.7752C13.2212 12.6713 13.1858 12.5696 13.1182 12.4906L10.1071 9.47952Z"
                                            fill="white" />
                                    </svg>

                                </a>
                            </div>

                        </div>

                        <div class="item-text ml-4 mt-1">
                            <h1 class="text-xl font-bold leading-5">FRAYED LUXE FLEECY - RED</h1>
                            <p class="text-xs mt-1">M/L, <span>Red</span></p>

                            <div class="quantity">
                                <label for="size" class="block text-sm text-gray-500">Quantity:</label>
                                <div class="quantity-input  flex items-center">

                                    <button @click="minus()" class="minus border border-black rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                    <div class="quantity-num border border-black rounded-md px-10 mx-2">{{amount}}</div>

                                    <button @click="add()" class="plus border border-black rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                </div>

                            </div>

                            <div class="item-price">
                                <h3 class="text-2xl font-bold mt-1">$153.00</h3>
                            </div>


                        </div>

                    </div>




                </div>
</perfect-scrollbar>


            </div>

            <div class="cart-footer mt-3 pb-8">


                <div class="total flex justify-between">
                    <h1 class="text-3xl font-bold">Total:</h1>
                    <h1 class="text-2xl  font-bold">$356.00</h1>
                </div>

                <div class="action-btns flex justify-between mt-2">

                    <button
                        class="bg-transparent border border-black text-black rounded-md px-8 py-2">Checkout</button>
                    <button class="bg-red-600 text-white rounded-md px-8 py-2">Empty Cart</button>

                </div>


            </div>


        </div>





    </div>


</template>

<style scoped>

.cart{
   background:#fff;
   width:100%;
   height:100%;
   overflow-y:auto;
   position:fixed;
   top:0;
   left:auto;
   right:0;
   transform:translateX(100%);
   bottom:0;
   z-index:6;
}
.cart-wrapper{
 max-width:88%;
 margin:0 auto;
 padding-top:2rem;
}
.items .item-image{
    flex-basis:50%;
}

.items .item-image img{
height:45vw;
}
.ps{
height:65vh;
}
.items{
    display:grid;
    grid-template-rows:1fr;
    width:100%;
    padding:5%;
    overflow-y:auto;
}
.item .close{
    position: absolute;
    top:-5%;
    left:-5%;
}
.items .item:not(:first-child){
    margin-top:1.5rem;
}
@media only screen and (min-width:620px) {
.cart-wrapper{
 max-width:70%;
 margin:0 auto;
 padding-top:2rem;
}
    
}

@media only screen and (min-width:768px) {
    .cart-wrapper{
 max-width:85%;
 margin:0 auto;
 padding-top:2rem;
}
.cart{
   background:#fff;
   width:70%;
   left:auto;
   height:100%;
}
.items .item-image{
    flex-basis:36%;
}
.items .item-image img{
height:25vw;
}

}

@media only screen and (min-width:1024px) {
.cart{
   width:55%;
}
.items .item-image{
    flex-basis:30%;
}
.items .item-image img{
height:18vw;
}
}
@media only screen and (min-width:1280px) {
.cart{
   width:40%;
}
.items .item-image{
    flex-basis:30%;
}
.items .item-image img{
height:14vw;
}
}

@media only screen and (min-width:1600px) {
.cart{
   width:30%;
}
.items .item-image{
    flex-basis:28%;
}
.items .item-image img{
height:10vw;
}

}

</style>

<script>
import gsap from 'gsap';

export default {
    data(){
        return{
            amount:1

        }
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
    },
    openCart(){
        let tl = gsap.timeline();
        tl.to('.cart',{duration:.5,translateX:'0',ease:'power4.easeIn'});
        tl.to('.cartbg',{duration:.5,display:'block',autoAlpha:1,ease:'power1.easeIn'},'-=.4');
    //   tl.from('.items',{stagger:.2,duration:.6,autoAlpha:0,ease:'power4.easeInOut'},'-=.2')

    },
    closeCart(){
                let tl = gsap.timeline();

       tl.to('.cart',{duration:.5,translateX:'100%',ease:'power4.easeOut'});
       tl.to('.cartbg',{duration:.5,autoAlpha:0,ease:'power1.easeOut'});
    //    gsap.set('.cartbg',{display:'none'});



    }
   
   
    }
}
</script>
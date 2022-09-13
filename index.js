Vue.component('product', {
    template: `
    <div class="productImg">
            <img v-bind:src="image">

            <div class="productInfo">
                <!-- Attribute1 Binding -->
                <h1> {{title}}</h1>

                <!-- Conditional Rendering -->
                <p v-if="inStock">In Stock</p>
                <p v-else class="outOfStock">Out of Stock</p>
                <a :href="link" target="_blank">More products similar to Vue Shirt</a>

                <!-- List Rendering -->
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <!-- Event Handling, Style Binding -->
                <div class="colorBox" v-for="(variant,index) in variants" :key="variant.variantId"
                    :style="{backgroundColor: variant.variantColor}" v-on:mouseover="updateProduct(index)">
                </div>
                <br>
                <!-- Event Handling -->
                <button v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">
                    Add to cart
                </button>
                <!-- <button v-on:click="removeFromCart">Remove from cart</button> -->

                <div class="cart">
                    <p>Cart({{cart}})</p>
                </div>

            </div>

        </div>
    `,
    data() {
        return {
            brand: "Vue",
            product: "Shirt",
            selectVariant: 0,
            onSale: true,
            instock: true,
            link: "https://www.redbubble.com/shop/vue+js+t-shirts",
            details: ["80% cotton", "20% polyster", "Gender-neutral"],
            variants: [
                {
                    variantId: 1,
                    variantColor: "black",
                    variantImage: "./shirt-black.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2,
                    variantColor: "white",
                    variantImage: "./shirt-white.jpg",
                    variantQuantity: 0

                },
                {
                    variantId: 3,
                    variantColor: "blue",
                    variantImage: "./shirt-blue.jpg",
                    variantQuantity: 0

                }
            ],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!'
            }
            return this.brand + ' ' + this.product + ' are not on sale'
        }
    }
})








var app = new Vue({
    el: ".app",

});


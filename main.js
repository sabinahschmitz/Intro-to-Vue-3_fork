const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart (id){
            this.cart.push(id)
        },

        emptyCart (id){
            this.cart.splice(id)
        }
    }

})

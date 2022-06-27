const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'}
            ],
            sizes: [
                {num: 1123, foot:'36'},
                {num: 1124, foot:'37'},
                {num: 1125, foot:'38'},
                {num: 1126, foot:'39'},
                {num: 1127, foot:'40'}
            ]
        }
    }
})

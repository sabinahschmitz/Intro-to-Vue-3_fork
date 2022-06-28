app.component('product-details',{
    props: {
        details: {
            type: String,
            required: true
        }
    },
    template:
    /*html*/
`
<h3> More </h3>

`,

computed: {
    moreInfo() {
    
            return 'Lorem Ipsum'
        
    }
}
})


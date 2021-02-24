const app = Vue.createApp({

data() {
    return {
        BoxSelectedA = false,
        BoxSelectedB = false,
        BoxSelectedC = false
    }
},
methods: {
    boxSelected(box) {
        if (box === 'A') {
            this.BoxSelectedA = true
        } else if (box == 'B') {
            this.BoxSelectedB = true
        } else {
            this.BoxSelectedC = true
        }
    }
},



})

app.mount('#styling')

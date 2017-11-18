var app =new Vue({
    el: '#app',
    data: {
        message: 'One-armed Bandit',
        number1:'0',
        number2:'1',
        number3:'2',
    },
    methods: {
        getRandomInt: function (){
            this.number1 = Math.floor(Math.random() * (9 + 1));
            this.number2 = Math.floor(Math.random() * (9 + 1));
            this.number3 = Math.floor(Math.random() * (9 + 1))
        }
    }
});

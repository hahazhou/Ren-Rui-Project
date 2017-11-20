// register the grid component
Vue.component('grid', {
    template: '#grid-template',
    replace: true,
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function () {
        var sortOrders = {};
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        });
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    computed: {
        filteredData: function () {
            var sortKey = this.sortKey;
            var filterKey = this.filterKey && this.filterKey.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var data = this.data;
            if (filterKey) {
                data = data.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                })
            }
            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return data
        }
    },
    filters: {
        capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1
        }
    }
});

// bootstrap the demo
var demo = new Vue({
    el: '#project',
    data: {
        searchQuery: '',
        gridColumns: ['name', 'rate'],
        gridData: [
            { name:'Alistar', rate: 0.285 },
            { name:'Ashe',rate:0.666 },
            { name:'Blitzcrank',rate:0.25 },
            { name:'Braum',rate:0.4 },
            { name:'Caitlyn',rate:0.6 },
            { name:'Camille',rate:0.428 },
            { name:'Cassiopeia',rate:0.533 },
            { name:'Chogath',rate:0.482 },
            { name:'Corki',rate:0.407 },
            { name:'Elise',rate:0.2 },
            { name:'Ekko',rate:0.5 },
            { name:'Ezreal',rate:0.5 },
            { name:'Fizz',rate:0.75 },
            { name:'Galio',rate:0.7 },
            { name:'Gnar',rate:0.7 },
            { name:'Gragas',rate:0.633 },
            { name:'Graves',rate:0.666 },
            { name:'Ivern',rate:0.5 },
            { name:'Janna',rate:0.741 },
            { name:'Jarvin',rate:0.545 },
            { name:'Jax',rate:0.25 },
            { name:'Jayce',rate:0.625 },
            { name:'Kalista',rate:0.8 },
            { name:'Karma',rate:0.312 },
            { name:'Kassadin',rate:0.5 },
            { name:'Kayn',rate:0.25 },
            { name:'Kennan',rate:0.5 },
            { name:'Khazix',rate:0.75 },
            { name:'Kog Maw',rate:0.444 },
            { name:'Lambo',rate:0.461 },
            { name:'LeBlanc',rate:0.666 },
            { name:'Lee Sin',rate:0.333 },
            { name:'Leona',rate:0.666 },
            { name:'Lucian',rate:0.142 },
            { name:'Lulu',rate:0.387 },
            { name:'Malzahar',rate:0.818 },
            { name:'Maokai',rate:0.395 },
            { name:'Morgana',rate:0.333 },
            { name:'Nasus',rate:1 },
            { name:'Nautilus',rate:0.666 },
            { name:'Nidalee',rate:0.4 },
            { name:'Nocturne',rate:0.5 },
            { name:'Olaf',rate:0.5 },
            { name:'Orianna',rate:0.416 },
            { name:'Rakan',rate:0.606 },
            { name:'Reksai',rate:0.421 },
            { name:'Renekton',rate:0.25 },
            { name:'Ryze',rate:0.354 },
            { name:'Sejuani',rate:0.475 },
            { name:'Shen',rate:0.468 },
            { name:'Singed',rate:1 },
            { name:'Sivir',rate:0.333 },
            { name:'Sol',rate:0.666 },
            { name:'Soraka',rate:0.6 },
            { name:'Syndra',rate:0.463 },
            { name:'Tahm',rate:1 },
            { name:'Taliyah',rate:0.6 },
            { name:'Taric',rate:0.428 },
            { name:'Thresh',rate:0.4 },
            { name:'Tristana',rate:0.5 },
            { name:'Trundle',rate:0.545 },
            { name:'Twitch',rate:0.625 },
            { name:'Urgot',rate:0.5 },
            { name:'Varus',rate:0.424 },
            { name:'Vayne',rate:0.6 },
            { name:'Xayah',rate:0.511 },
            { name:'Yasuo',rate:0.25 },
            { name:'Zac',rate:0.2 }
        ]
    }
});

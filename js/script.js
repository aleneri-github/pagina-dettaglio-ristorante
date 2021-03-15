var root = new Vue(
  {
    el: '#root',
    data: {
      userInput: "",
      bool: false,
      cart: [],
      array: [],
      foodRestaurant: [
        {
          img: 'https://res.cloudinary.com/glovoapp/w_680,h_240,c_fit,f_auto,q_auto/Products/q7se94f5guzalr2cua8k',
          name: 'Baby Back Ribs',
          description: 'Costolette di maiale condite con il nostro mix di spezie, glassate con la nostra salsa barbecue fatta in casa e grigliate alla perfezione, servite con patatine fritte, coleslaw e fagioli ranch-style' ,
          price: '€22,00'
        },
        {
          img: 'https://res.cloudinary.com/glovoapp/w_600,h_500,c_fit,f_auto,q_auto/Products/elyyyln5xyt7hxpin3ez',
          name: 'Grilled Norwegian Salmon',
          description: '227g di filetto di salmone grigliato, con una noce di burro alle erbe e salsa barbecue fatta in casa, servito con verdure di stagione e patatine fritte' ,
          price: '€19,75'
        },
        {
          img: 'https://res.cloudinary.com/glovoapp/w_600,h_500,c_fit,f_auto,q_auto/Products/iq72rvvqcepqh8lwcotl',
          name: 'Single Bundle',
          description: '1 Original Legendary Burger 1 Patatine Fritte 1 Bevanda a scelta' ,
          price: '€15,20'
        },
        {
          img: 'https://res.cloudinary.com/glovoapp/w_600,h_500,c_fit,f_auto,q_auto/Products/fdcnqu15ayli1usvgfgz',
          name: 'Veggie burger',
          description: 'Linda McCartney patty vegano, ricoperto con formaggio Cheddar e un’anello di cipolla croccante, servito con lattuga e pomodoro fresco' ,
          price: '€10,95'
        },
        {
          img: 'https://res.cloudinary.com/glovoapp/w_600,h_500,c_fit,f_auto,q_auto/Products/jb8fsedwjk3sesjmjg5c',
          name: 'Barbecue bacon cheeseburger',
          description: 'Hamburger con carne black angus steak, glassato con la nostra salsa barbecue fatta in casa e il nostro famoso mix di spezie, guarnito con sfilacci di cipolla croccante, formaggio cheddar, bacon affumicato, lattuga fresca e pomodoro fresco' ,
          price: '€11,95'
        },
        {
          img: 'https://res.cloudinary.com/glovoapp/w_600,h_500,c_fit,f_auto,q_auto/Products/twdbkljgh57j4rm58w17',
          name: 'Family Wings',
          description: 'Una grande porzione di 25 alette di pollo arrostite lentamente e condite con classica salsa Buffalo o Barbecue e servite con sedano e salsa blue cheese' ,
          price: '€22,50'
        },
        {
          img: 'https://res.cloudinary.com/glovoapp/w_600,h_500,c_fit,f_auto,q_auto/Products/k99usfeej4pq6nuaw5ei',
          name: 'Tupelo Chicken Tenders',
          description: 'Croccanti filetti di pollo serviti con salsa honey mustard e salsa barbecue fatta in casa' ,
          price: '€11,75'
        },
        {
          img: 'https://res.cloudinary.com/glovoapp/w_600,h_500,c_fit,f_auto,q_auto/Products/xnzrfo5uw2vunzngbmjy',
          name: 'All American Sliders',
          description: 'Tre mini hamburger Grass-Fed, guarniti con formaggio Americano fuso, anello di cipolla croccante, serviti su una cremosa coleslaw su pan brioche tostato.' ,
          price: '€15,50'
        },

      ],
    },
    methods: {
      addToCart: function(item) {
        // if(!this.bool) {
        //   var newCart = {
        //     id: item.id,
        //     name: item.name,
        //     quantity: 1,
        //   }
          // newCart.total = item.price * newCart.quantity;
        // }
        // console.log(newCart);

        if(!this.orders.some(order => order.name === item.name)){
          
          this.items.push(this.item);
        } else {
          this.item.quantity++;
          this.item.price = this.prezzo * this.item.quantity;
        }
        console.log(item);
        const input = this.userInput;

          this.cart.push(input);
      },
    },
    mounted: function() {
      axios.get(`http://localhost:8000/api/restaurants`).then(response => {
          this.array = response.data;
          console.log(this.array);
        });
    }
  }
)

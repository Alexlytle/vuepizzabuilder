Vue.createApp({
    data() {
      return {
        pizza:[
            {
           
              id:1,
              image:'./assets/images/toppings/pepperoni.jpg',
              pizza:'PEPPERONI',
              whole:{selected:false,amount:['regular','extra']},
              left:{selected:false,amount:['regular','extra']},
              right:{selected:false,amount:['regular','extra']},
            },
            { 
                id:2,
                image:'./assets/images/toppings/cheese.jpg',
                pizza:'EXTRA CHEESE',
                whole:{selected:false,amount:['regular','extra']},
                left:{selected:false,amount:['regular','extra']},
                right:{selected:false,amount:['regular','extra']},
            },
            { 
              id:3,
              image:'./assets/images/toppings/motz.png',
              pizza:'FRESH MOZZARELLA',
              whole:{selected:false,amount:['regular','extra']},
              left:{selected:false,amount:['regular','extra']},
              right:{selected:false,amount:['regular','extra']},
            },
            { 
              id:4,
              image:'./assets/images/toppings/itailian.jpg',
              pizza:'ITALIAN SAUSAGE',
              whole:{selected:false,amount:['regular','extra']},
              left:{selected:false,amount:['regular','extra']},
              right:{selected:false,amount:['regular','extra']},     
            },
            { 
               id:5,
               image:'./assets/images/toppings/bacon.jpg',
               pizza:'BACON',
               whole:{selected:false,amount:['regular','extra']},
               left:{selected:false,amount:['regular','extra']},
               right:{selected:false,amount:['regular','extra']},
            },
            { 
              id:6,
              image:'./assets/images/toppings/ham.jpg',
              pizza:'SMOKY HAM', 
              whole:{selected:false,amount:['regular','extra']},
              left:{selected:false,amount:['regular','extra']},
              right:{selected:false,amount:['regular','extra']},
            },
            { 
              id:7,
              image:'./assets/images/toppings/mushrooms.jpg',
              pizza:'MUSHROOMS',
              whole:{selected:false,amount:['regular','extra']},
              left:{selected:false,amount:['regular','extra']},
              right:{selected:false,amount:['regular','extra']},
            },
            { 
              id:8,
              image:'./assets/images/toppings/onions.jpg',
              pizza:'ONIONS', 
              whole:{selected:false,amount:['regular','extra']},
              left:{selected:false,amount:['regular','extra']},
              right:{selected:false,amount:['regular','extra']},
            },
            {
              id:9,
              image:'./assets/images/toppings/greenpeppers.jpg',
              pizza:'GREEN PEPPERS',
              whole:{selected:false,amount:['regular','extra']},
              left:{selected:false,amount:['regular','extra']},
              right:{selected:false,amount:['regular','extra']}, 
            },
            {   
                id:10,
                image:'./assets/images/toppings/olives.jpg',
                pizza:'BLACK OLIVES',
                whole:{selected:false,amount:['regular','extra']},
               left:{selected:false,amount:['regular','extra']},
               right:{selected:false,amount:['regular','extra']}, 
            },
            { 
              id:11,
              image:'./assets/images/toppings/pineapple.jpg',
              pizza:'PINEAPPLE',
              whole:{selected:false,amount:['regular','extra']},
              left:{selected:false,amount:['regular','extra']},
              right:{selected:false,amount:['regular','extra']},  
            },
            { 
              id:12,
              image:'./assets/images/toppings/bananas_peppers.jpg',
              pizza:'BANANA PEPPERS',
              whole:{selected:false,amount:['regular','extra']},
              left:{selected:false,amount:['regular','extra']},
              right:{selected:false,amount:['regular','extra']}, 
             },
             { 
                id:13,
                image:'./assets/images/toppings/beef.jpg',
                pizza:'SEASONED BEEF', 
                whole:{selected:false,amount:['regular','extra']},
                left:{selected:false,amount:['regular','extra']},
                right:{selected:false,amount:['regular','extra']}, 
            },
          
        ],
        categories: [
          "TOPPING LIST", 
          "MORE OPTIONS", 
        ],
        active:0,
        message:true,
        empty:true,
        crust:'round',
        crustOptions: [
          { text: 'Round', value: 'round' },
          { text: 'Thin Crust', value: 'thin-crust' },
          { text: 'Stuff Crust Round', value: 'stuff-crust-round' },
          { text: 'Detriot-Style Deep Dish', value: 'deep-dish' }
        ],
        baking:'well-done',
        bake:[
          {text:'Well done',val:'well-done'},
          {text:'Normal Bake',val:'normal-back'}
        ],
        cheeseRadio:'cheese',
        cheeese:[
          {text:'Cheese',val:'cheese'},
          {text:'No Cheeese',val:'no-cheese'},
          {text:'Light Cheeese',val:'light-cheese'}
        ],
        sauceRadio:'normal-sauce',
        sauce:[
          {text:'Light Sauce',val:'light-sauce'},
          {text:'Normal Sauce',val:'normal-sauce'},
          {text:'Extra Suace',val:'extra-sauce'},
          {text:'No Suace',val:'no-sauce'}
        ], 
        cutRadio:'standard-cut',
        cut:[
          {text:'Standard Cut',val:'standard-cut'},
          {text:'No Cut',val:'no-cut'},
        ]
      }
    },
    methods:{

        activate(index){
          this.active = index
        },
        handleWholePizza(e){

        //  console.log(e.currentTarget.getAttribute('data-id'))
            let wholePizzaFilter = this.pizza.filter((item)=>{
                return item.id == e.currentTarget.getAttribute('data-id')
            })

            if( wholePizzaFilter[0].whole.selected == true){
              wholePizzaFilter[0].whole.selected = false
              wholePizzaFilter[0].left.selected = false
              wholePizzaFilter[0].right.selected = false
            }else{
              wholePizzaFilter[0].whole.selected = true
              wholePizzaFilter[0].left.selected = true
              wholePizzaFilter[0].right.selected = true
            }

            this.emptyVal()

        },
        handleLeftPizza(e){
          let leftPizzaFilter = this.pizza.filter((item)=>{
              return item.id == e.currentTarget.getAttribute('data-id')
          })
          if( leftPizzaFilter[0].left.selected == false &&  leftPizzaFilter[0].whole.selected == false && leftPizzaFilter[0].right.selected == false){
            leftPizzaFilter[0].whole.selected = false
            leftPizzaFilter[0].left.selected = true
            leftPizzaFilter[0].right.selected = false
          }else{
         
            if( leftPizzaFilter[0].whole.selected == true &&  leftPizzaFilter[0].left.selected == true &&  leftPizzaFilter[0].right.selected == true){
              leftPizzaFilter[0].whole.selected = false
              leftPizzaFilter[0].left.selected = false
              leftPizzaFilter[0].right.selected = true
            }else if(leftPizzaFilter[0].whole.selected == false &&  leftPizzaFilter[0].left.selected == false &&  leftPizzaFilter[0].right.selected == true){
              leftPizzaFilter[0].whole.selected = true
              leftPizzaFilter[0].left.selected = true
              leftPizzaFilter[0].right.selected = true
            }else{
              leftPizzaFilter[0].whole.selected = false
              leftPizzaFilter[0].left.selected = false
              leftPizzaFilter[0].right.selected = false
            }
          }
          this.emptyVal()

        },
        handleRightPizza(e){
        
                let rightPizzaFilter = this.pizza.filter((item)=>{
                  return item.id ==e.currentTarget.getAttribute('data-id')
              })

            

              if( rightPizzaFilter[0].left.selected == false &&  rightPizzaFilter[0].whole.selected == false && rightPizzaFilter[0].right.selected == false){
                rightPizzaFilter[0].whole.selected = false
                rightPizzaFilter[0].left.selected = false
                rightPizzaFilter[0].right.selected = true
              }else{

                if(rightPizzaFilter[0].left.selected == true &&  rightPizzaFilter[0].whole.selected == true && rightPizzaFilter[0].right.selected == true){
                  rightPizzaFilter[0].whole.selected = false
                  rightPizzaFilter[0].left.selected = true
                  rightPizzaFilter[0].right.selected = false
                }else if(rightPizzaFilter[0].left.selected == true &&  rightPizzaFilter[0].whole.selected == false && rightPizzaFilter[0].right.selected == false){
                  rightPizzaFilter[0].whole.selected = true
                  rightPizzaFilter[0].left.selected = true
                  rightPizzaFilter[0].right.selected = true
                }else{
                  rightPizzaFilter[0].whole.selected = false
                  rightPizzaFilter[0].left.selected = false
                  rightPizzaFilter[0].right.selected = false
                }
              
              }

              this.emptyVal()
        },
        removePizza(e){
          let pizzaFilter = this.pizza.filter((item)=>{
            return item.id == e.currentTarget.getAttribute('data-id')
          })
          pizzaFilter[0].whole.selected = false;
          pizzaFilter[0].left.selected = false;
          pizzaFilter[0].right.selected = false;
          this.emptyVal()
        }
      ,
        emptyVal(){
          this.empty = false
          let values = []
          this.pizza.forEach(element => {
            if(element.whole.selected == true){
              values.push(element.whole.selected)
            }
            if(element.left.selected == true){
              values.push(element.left.selected)
            }
            if(element.right.selected == true){
              values.push(element.right.selected)
            }
          });
          if(values.length == 0){
            this.empty = true
          }

          console.log(values)
        }
    }
  }).mount('#app')
// synchronous
// console.log(" I ")
// console.log(" eat ")
// console.log(" icecream ")
// console.log(" with a ")
// console.log(" spoon ")

// Asynchronous
// console.log(" I ")
// console.log(" eat ")

// setTimeout(() => {
//     console.log(" icecream ")
// }, 4000)

// console.log(" with a ")
// console.log(" spoon ")

// Callback
// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"]
// }

// console.log(stocks.Fruits[2])

// let stocks = {
//     Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
//     liquid : ['water', 'ice'],
//     holder : ['cone', 'cup', 'stick'],
//     toppings : ['chocolate', 'peanuts']
// }


// let order = (Fruit_name, call_production) => {
//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`)
//         call_production()
//     }, 2000)
// }

// Callback Hell

// let production = () => {
//     setTimeout(() => {
//         console.log('Production has started')

//         setTimeout(() => {
//             console.log('The fruit has been chopped')

//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

//                 setTimeout(() => {
//                     console.log('the machine has been started')

//                     setTimeout(() => {
//                         console.log(`ice cream was placed on ${stocks.holder[0]}`)

//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} was added as toppings`)

//                             setTimeout(() => {
//                                 console.log('Serve Ice Cream')
//                             }, 2000)

//                         }, 3000)

//                     }, 2000)

//                 }, 1000)

//             }, 1000)

//         }, 2000)

//     }, 0000)
// }

// order(0, production)

// Promises
// let stocks = {
//     Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
//     liquid : ['water', 'ice'],
//     holder : ['cone', 'cup', 'stick'],
//     toppings : ['chocolate', 'peanuts']
// }

// let is_shop_open = true

// let order = (time, work) => {
//     return new Promise( (resolve, reject) => {
//         if(is_shop_open){
//             setTimeout(() => {
//                 resolve(work())
//             }, time)
//         }else{
//             reject(console.log('Our shop is closed'))
//         }
//     })
// }

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

// .then(() => {
//     return order(0000, ()=> console.log('Production has Started'))
// })

// .then(() => {
//     return order(2000, () => console.log('The Fruit was Chopped'))
// })

// .then(() => {
//     return order(1000, ()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
//     })
// })

// .then(() => {
//     return order(1000, ()=>{
//         console.log('Start the Machine')
//     })
// })

// .then(()=>{
//     return order(2000, ()=>{
//         console.log(`Ice Cream placed on ${stocks.holder[0]}`)
//     })
// })

// .then(()=>{
//     return order(3000, ()=>{
//         console.log(`${stocks.toppings[0]} was selected`)
//     })
// })

// .then(()=>{
//     return order(2000, ()=> console.log('Ice Cream was Served'))
// })

// .catch(() => {
//     console.log('Customer left')
// })

// .finally(() => {
//     console.log('Day ended, Shop is Closed')
// })

// Async / Await
// let stocks = {
//     Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
//     liquid : ['water', 'ice'],
//     holder : ['cone', 'cup', 'stick'],
//     toppings : ['chocolate', 'peanuts']
// }

// let is_shop_open = true

// let toppings_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(
//                 console.log('which topping would you love? ')
//             )
//         },3000)
//     })
// }

// async function kitchen(){
//     console.log('A')
//     console.log('B')
//     console.log('C')
//     await toppings_choice()
//     console.log('D')
//     console.log('E')
// }

// kitchen()

// console.log('cleaning the dishes')
// console.log('cleaning the tables')
// console.log('taking others orders')


// let stocks = {
//     Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
//     liquid : ['water', 'ice'],
//     holder : ['cone', 'cup', 'stick'],
//     toppings : ['chocolate', 'peanuts']
// }

// let is_shop_open = true

// function time(ms){
//     return new Promise((resolve, reject) => {
//         if(is_shop_open){
//             setTimeout(resolve, ms)
//         }else{
//             reject(console.log('Shop is Closed'))
//         }
//     })
// }

// async function kitchen(){
//     try{
//         await time(2000)
//         console.log(`${stocks.Fruits[0]} was Selected`)

//         await time(0000)
//         console.log('Start the Production')

//         await time(2000)
//         console.log('cut the fruit')

//         await time(1000)
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

//         await time(1000)
//         console.log('Start the Machine')

//         await time(2000)
//         console.log(`Ice cream placed on ${stocks.holder[0]}`)

//         await time(3000)
//         console.log(`${stocks.toppings[0]} was selected`)

//         await time(2000)
//         console.log('Ice cream was Served <3')

//     }
//     catch(error){
//         console.log('Customer left', error)
//     }
//     finally{
//         console.log('Day ended, shop is closed')
//     }
// }

// kitchen() 
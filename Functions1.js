        //  let jonSnowHealth = 100
         // How to convert this to a string? what js method you can use?

// jonSnowHealth = String(jonSnowHealth)

// console.log( typeof jonSnowHealth)


// jonSnowHealth = Boolean(jonSnowHealth) 

// console.log(jonSnowHealth)

           // DECLARE THE WINNER!

// let theWinnerIs = 'Jamie is the winner'        
//         //  JS METHOD TO 'REPLACE' SOMETHING

// let newWinner = theWinnerIs.replace('Jamie', 'John')
// console.log(newWinner)

//       CONVERT TO NUMBER 

// let jonSnowHealth = 100
// jonSnowHealth = + jonSnowHealth
// console.log(jonSnowHealth)

//    CHECK IF NEW WINNER STRING 'INCLUDES' JOHN WHAT METHOD WOULD WE US

// let theWinnerIs = 'Jamie is the winner'    
// let newWinner = theWinnerIs.replace('Jamie', 'John')

// if (newWinner.includes('John')) {
//     console.log('yes')
// } else {
//     console.log('no')
// }


//    CHANGING TO UPPER CASE

// let upperCaseWinner = theWinnerIs.toUpperCase()
// console.log(upperCaseWinner)


//       FUNCTIONS 
//  SEEING IF JONSNOW IS ALIVE

// let jonSnowHealth = 100 

// function isJonAlive() {
//     if (jonSnowHealth > 0) {
//         console.log('he is alive');
// } else {
//     console.log('jon is dead');
// }
// }       
// isJonAlive()
             // have to call the function thats why you put isJonAlive() at the end 

            //  ARROW FUNCTIONS

// const isJonAlive = () => {
//     if (jonSnowHealth > 0) {
//                 console.log('he is alive');
//         } else {
//             console.log('jon is dead');
//         }
//         }       
//         isJonAlive()
    
//      ONE LINE ARROW

// const giveMeFive = () => console.log(5)
// giveMeFive()

//       SCOPE

let purse = 20

function calclateTotal(item1, item2) {
    return item1 + item2
}
 purse -= calclateTotal(6.59, 9.99) // 16.58

 console.log(purse)
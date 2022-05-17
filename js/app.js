'strict'

let hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

function getRandomInt(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  }


let seattle = {
  store: 'Seattle',
  minCust: 23,
  maxCust: 65,
  cookieSale: 6.3,
  projSale: 0,
  randCust: function() {
    this.projSale = `${getRandomInt(23, 65)} * ${this.cookieSale.floor}`
    for (let i = 0; i < hours.length; i++) {
      return (`${hours[0]}: ${this.projSale} cookies` )
    }
  }
};

//dom manipulation//
// render: function(){

//   let art
// }





getRandomInt(23, 65);
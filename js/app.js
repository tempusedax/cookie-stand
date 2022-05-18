'strict'

let storeLocation = document.getElementById('store-profiles');
let salesTable = document.getElementById('sales-info')
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am:", "1pm:", "2pm:", "3pm:", "4pm:", "5pm:", "6pm:", "7pm:"];
let stores = [];


function getRandomInt(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


function Store(name, minCust, maxCust, cookieSale,){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookieSale = cookieSale;
  this.cookieSaleHour = [];
  this.cookieSaleAll = 0;
  stores.push(this);
}

Store.prototype.totalSold = function(){
  for (let i = 0; i < hours.length; i++){
    let randCust = getRandomInt(this.minCust, this.maxCust);
    this.cookieSaleHour.push(Math.round(randCust * this.avgCookie));
  }
}
function thead(){
  
  let trElem1 = document.createElement('tr'); 
  salesTable.appendChild(trElem1);

  let thElem = document.createElement('th');
  thElem.textContent = 'City'; 
  trElem1.appendChild(thElem);

  for (let i = 0; i < hours.length; i++){ 
    thElem = document.createElement('th');
    thElem.textContent = hours[i];
    trElem1.appendChild(thElem);
  }
  thElem.textContent = 'Store Total';
  trElem1.appendChild(thElem);
}
thead();

Store.prototype.render = function(){
  let articleElem = document.createElement('article');
  storeLocation.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  articleElem.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  let trElem2 = document.createElement('tr');
  tableElem.appendChild(trElem2);

  
  for(let i = 0; i < this.cookieSaleHour.length; i++){ 
    tdElemSeattle = document.createElement('td');
    tdElemSeattle.textContent = this.cookieSaleHour[i];
    trElem2.appendChild(tdElemSeattle);
  }
  
    tdElemSeattle.textContent = this.totalCookiesSold;
    trElem2.appendChild(tdElemSeattle);
  }

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);


function renderAllStores(){
  for(let i = 0; i < stores.length; i++){
    stores[i].totalSold();
    stores[i].render();
  }
}

renderAllStores();



  




//   store: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   cookieSale: 6.3,
//   projSale: 0,
//   randCust: function() {
//     this.projSale = `${getRandomInt(23, 65)} * ${this.cookieSale.floor}`
//     for (let i = 0; i < hours.length; i++) {
//       return (`${hours[0]}: ${this.projSale} cookies` )
// //     }
//   }
// };


//dom manipulation//
// render: function(){

//   let art
// }





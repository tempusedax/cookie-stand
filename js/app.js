'strict'

let storeLocation = document.getElementById('store-profiles');
let salesTable = document.getElementById('sales-info')
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am:", "1pm:", "2pm:", "3pm:", "4pm:", "5pm:", "6pm:", "7pm:", "8pm:"];
let stores = [];
let tableFooter = document.createElement('tfoot');


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.cookieSaleHour = [];
  this.cookieSaleAll = 0;
  stores.push(this);
}

Store.prototype.totalSoldHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let randCust = getRandomInt(this.minCust, this.maxCust);
    this.cookieSaleHour.push(Math.round(randCust * this.avgSale));
    this.cookieSaleAll += this.cookieSaleHour[0]
  }
}

Store.prototype.render = function () {
  let tableRow = document.createElement('tr')
  salesTable.appendChild(tableRow)

  let cityNameCell = document.createElement('th')
  cityNameCell.textContent = this.name;
  tableRow.appendChild(cityNameCell)

  for( let i = 0; i < hours.length; i++){
    let soldCityHour = document.createElement('td')
    soldCityHour.textContent = this.cookieSaleHour[i]
    tableRow.appendChild(soldCityHour)
  }
}



new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);
console.log(stores)

function renderAllStores() {
  for (let i = 0; i < stores.length; i++) {
    stores[i].totalSoldHour();
    stores[i].render();
  }
}

function displayHeader() {
  let row = document.createElement('tr');
  tableElem.appendChild(row);

  let space = document.createElement('th');
  row.appendChild(space);

  for (let i = 0; i < hours.length; i++) {
    let hoursElem = document.createElement('th');
    hoursElem.textContent = hours[i];
    row.appendChild(hoursElem);
  }
}
function footerRow() {
  let row = document.createElement('tr');
  tableFooter.appendChild(row);
  
  let tableHeadElem = document.createElement('th');
  tableHeadElem.textContent = 'Total Cookies';
  row.appendChild(tableHeadElem);

  let grandTotal = 0;

  for(let i = 0; i < hours.length; i++) {
    let timeTotal = 0;
    for(let j = 0; j < locations.length; j++){
      let numb = locations[j].cookies[i]
      timeTotal+=numb;
    }
    grandTotal += timeTotal;
    let tableDataElem = document.createElement('td');
    tableDataElem.textContent = timeTotal;
    row.appendChild(tableDataElem);
  }

  let grandTotalElem = document.createElement('td');
  grandTotalElem.textContent = grandTotal;
  row.appendChild(grandTotalElem);
}


function handleSubmit(event) {
  event.preventDefault();

  let name = event.target.location.value;
  let minCust = event.target.minCustomer.value;
  let maxCust = event.target.maxCustomer.value;
  let avgSale = event.target.avgSale.value;
  
  
  let newStoreInput = new Store(name, minCust, maxCust, avgSale);
  
  newStoreInput.getTotalCookies();
  newStoreInput.render();
  
  tableFooter.innerHTML = '';
  footerRow();
}

renderAllStores();
displayHeader();
footerRow();
myForm.addEventListener('submit', handleSubmit)









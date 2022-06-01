let stock = {
  macbook: 2,
  iphone: 4
};

function processPayment(itemName) {
  stock[itemName] -= 1;
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`)
  console.log(`Payment is not being processed`)
}

function processOrder(itemName, callbackPayment, callbackError) {
  itemName = itemName.toLowerCase();
  console.log(`Verifying the stock of ${itemName}`);
  if (stock[itemName] <= 0){
  callbackError(itemName);
  } else {
  callbackPayment(itemName);
  }
}

while (stock.iphone > 0 || stock.macbook > 0) {
  let ask = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
  let itemName = ask.toLowerCase();
  processOrder(itemName, processPayment, processError);
}

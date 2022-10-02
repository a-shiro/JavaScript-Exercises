function solve() {
   let products = {};

   let buttons = Array.from(document.getElementsByClassName('product-add'));
   let textArea = document.getElementsByTagName('textarea')[0];

   for (let button of buttons) {
      button.addEventListener('click', addProduct);
   }

   function addProduct (event) {
      let product = event.target.parentElement.parentElement;

      let productName = product.querySelector('.product-title').textContent;
      let productPrice = Number(product.querySelector('.product-line-price').textContent);

      if (!Object.keys(products).includes(productName))
         products[productName] = 0;
      products[productName] += productPrice;

      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   let checkoutButton = document.getElementsByClassName('checkout')[0];
   checkoutButton.addEventListener('click', sumTotalExpenses);

   function sumTotalExpenses() {
      let total = Object.values(products).reduce((total, value) => total + value, 0);

      textArea.textContent += `You bought ${Object.keys(products).join(', ')} for ${total.toFixed(2)}.`;

      let allButtons = Array.from(document.getElementsByTagName('button'));

      allButtons.forEach(button => button.disabled = true);
   }
}


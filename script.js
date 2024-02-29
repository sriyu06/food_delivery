// Sample menu items
const menuItems = [
    { name: 'Pizza', price: 10.99, image: 'https://www.shutterstock.com/image-photo/supreme-pizza-lifted-slice-1-600nw-84904912.jpg' },
    { name: 'Burger', price: 8.99, image: 'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg' },
    { name: 'Sushi', price: 12.99, image: 'https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg' }
  ];
  
  // Display menu items
  const menuContainer = document.getElementById('menu-items');
  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price.toFixed(2)}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    `;
    menuContainer.appendChild(menuItem);
  });
  
  // Shopping cart functionality
  const cartItems = [];
  const cartContainer = document.getElementById('cart-items');
  const totalPriceSpan = document.getElementById('total-price');
  
  menuContainer.addEventListener('click', event => {
    if (event.target.classList.contains('add-to-cart-btn')) {
      const menuItem = event.target.parentElement;
      const itemName = menuItem.querySelector('h3').textContent;
      const itemPrice = parseFloat(menuItem.querySelector('p').textContent.slice(1));
  
      cartItems.push({ name: itemName, price: itemPrice });
      displayCart();
    }
  });
  
  function displayCart() {
    cartContainer.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartContainer.appendChild(li);
      total += item.price;
    });
    totalPriceSpan.textContent = total.toFixed(2);
  }
  
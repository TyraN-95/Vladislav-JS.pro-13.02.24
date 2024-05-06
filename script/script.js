let selectedProduct; 

function showProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = `<h2>Список товаров - ${category}</h2>`;

    products[category].forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `<strong>${product.name}</strong>`;
        productItem.onclick = () => showProductDetails(product);
        productList.appendChild(productItem);
    });

    const productDetails = document.getElementById('product-details');
    productDetails.innerHTML = `<h2>Информация о товаре</h2>`;
}

function showProductDetails(product) {
    const productDetails = document.getElementById('product-details');
    productDetails.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Цена: ${product.price} грн</p>
        <button onclick="toggleOrderForm()">Купить</button>
    `;
    selectedProduct = product;
}

function toggleOrderForm() {
    const orderForm = document.getElementById('order-form');
    orderForm.style.display = orderForm.style.display === 'none' ? 'block' : 'none';
}

function submitOrder() {
    const fullname = document.getElementById('fullname').value;
    const city = document.getElementById('city').value;
    const delivery = document.getElementById('delivery').value;
    const payment = document.getElementById('payment').value;
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;

    if (fullname && city && delivery && payment && quantity) {
        const order = {
            id: new Date().getTime(),
            date: new Date().toLocaleString(),
            product: selectedProduct,
            fullname,
            city,
            delivery,
            payment,
            quantity,
            comment
        };

        saveOrder(order);

        document.getElementById('fullname').value = '';
        document.getElementById('city').value = '';
        document.getElementById('delivery').value = '';
        document.getElementById('payment').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('comment').value = '';

        alert('Ваш заказ подтвержден!');
        cancelOrder();
    } else {
        alert('Пожалуйста, заполните все обязательные поля!');
    }
}

function saveOrder(order) {
    const savedOrders = localStorage.getItem('orders');
    let orders = savedOrders ? JSON.parse(savedOrders) : [];

    orders.push(order);

    localStorage.setItem('orders', JSON.stringify(orders));
}

function cancelOrder() {
    const orderForm = document.getElementById('order-form');
    orderForm.style.display = 'none';
}

function showCategories() {
    document.getElementById('categories').style.display = 'block';
    document.getElementById('product-list').style.display = 'block';
    document.getElementById('product-details').style.display = 'block';

    document.getElementById('order-list').style.display = 'none';
    document.getElementById('back-button').style.display = 'none';
}

function showOrders() {
    document.getElementById('categories').style.display = 'none';
    document.getElementById('product-list').style.display = 'none';
    document.getElementById('product-details').style.display = 'none';
    document.getElementById('order-list').style.display = 'block';
    document.getElementById('back-button').style.display = 'block';

    const savedOrdersDiv = document.getElementById('saved-orders');
    savedOrdersDiv.innerHTML = '';

    const savedOrders = localStorage.getItem('orders');
    const orders = savedOrders ? JSON.parse(savedOrders) : [];

    if (orders.length === 0) {
        savedOrdersDiv.innerHTML = '<p>У вас еще нет заказов.</p>';
    } else {
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <strong>${order.date}</strong> - ${order.product.name}, общая цена: ${order.product.price * order.quantity} грн
                <button class="delete-button" onclick="deleteOrder(${order.id})">Удалить</button>
            `;
            orderItem.onclick = () => showOrderDetails(order);
            savedOrdersDiv.appendChild(orderItem);
        });
    }
}

function showOrderDetails(order) {
    const productDetails = document.getElementById('product-details');
    productDetails.style.display = 'block';

    const details = `
        <h2>Детали заказа</h2>
        <p>Дата: ${order.date}</p>
        <p>Покупатель: ${order.fullname}</p>
        <p>Город: ${order.city}</p>
        <p>Склад Новой почты: ${order.delivery}</p>
        <p>Способ оплаты: ${order.payment}</p>
        <p>Товар: ${order.product.name}</p>
        <p>Описание товара: ${order.product.description}</p>
        <p>Количество: ${order.quantity}</p>
        <p>Коментарий: ${order.comment}</p>
    `;

    productDetails.innerHTML = details;
}

function deleteOrder(orderId) {
    const savedOrders = localStorage.getItem('orders');
    let orders = savedOrders ? JSON.parse(savedOrders) : [];

    orders = orders.filter(order => order.id !== orderId);

    localStorage.setItem('orders', JSON.stringify(orders));

    showOrders();
}


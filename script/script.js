let selectedProduct; 

    function showProducts(category) {
        const productList = document.getElementById('product-list');
        const productDetails = document.getElementById('product-details');
        const orderForm = document.getElementById('order-form');

        productList.innerHTML = `<h2>Список товаров - ${category}</h2>`;
        productDetails.innerHTML = `<h2>Информация про товар</h2>`;
        orderForm.style.display = 'none';

        products[category].forEach(product => {
            const productItem = document.createElement('div');
            productItem.innerHTML = `<strong>${product.name}</strong>`;
            productItem.onclick = () => showProductDetails(product);
            productList.appendChild(productItem);
        });
    }

    function showProductDetails(product) {
        const productDetails = document.getElementById('product-details');
        const orderForm = document.getElementById('order-form');

        productDetails.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Цена: ${product.price} грн</p>
            <button onclick="toggleOrderForm()">Купить</button>
        `;
        selectedProduct = product;
        orderForm.style.display = 'none';
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
            const orderInfo = `
                <h2>Информация о товаре:</h2>
                <p>Товар: ${selectedProduct.name}</p>
                <p>Описание: ${selectedProduct.description}</p>
                <p>Цена: ${selectedProduct.price} грн</p>
                <p>Количество: ${quantity}</p>
                <p>Покупатель: ${fullname}</p>
                <p>Город: ${city}</p>
                <p>Склад Новой почты: ${delivery}</p>
                <p>Способ оплаты: ${payment}</p>
                <p>Коментарий: ${comment}</p>
            `;
            const orderDetails = document.getElementById('order-details');
            orderDetails.innerHTML = orderInfo;
            alert('Ваш заказ подтвержден.');
        } else {
            alert('Пожалуйста, заполните все обязательные поля.');
        }
    }

    function cancelOrder() {
        const orderForm = document.getElementById('order-form');
        orderForm.style.display = 'none';
    }

    function resetState() {
        const productList = document.getElementById('product-list');
        const productDetails = document.getElementById('product-details');
        const orderForm = document.getElementById('order-form');

        productList.innerHTML = `<h2>Список товаров</h2>`;
        productDetails.innerHTML = `<h2>Информация о товаре</h2>`;
        orderForm.style.display = 'none';
    }
const products = {
    'Смартфоны': [
        { id: 1, name: 'Apple Iphone', description: 'Купить телефон Apple iPhone с доставкой по всей Украине.', price: 19000 },
        { id: 2, name: 'Samsung Galaxy', description: 'Откройте для себя инновационные смартфоны серии Galaxy, оснащенные системой искусственного интеллекта Galaxy AI', price: 21000 },
    ],
    'Ноутбуки': [
        { id: 3, name: 'Asus Rog', description: 'Ноутбуки Asus Rog - самые мощные игровые лэптопы. Высокие возможности и потрясающая мощь – это те черты, которыми обладают ноутбуки Asus серии Rog.', price: 44500 },
        { id: 4, name: 'Lenovo IdeaPad Gaming ', description: 'Lenovo IdeaPad Gaming — универсальный ноутбук для игры и выполнения стандартных повседневных задач сполна оправдывающий свою стоимость.', price: 28000 },
    ],
    'Бытовая техника': [
        { id: 5, name: 'Холодильник Samsung', description: 'Холодильники бренда Samsung отличаются высоким качеством сборки, надежностью и большим количеством функций.', price: 18000 },
        { id: 6, name: 'Посудомоечная машина Bosch', description: 'Посудомоечная машина Bosch отличается исключительной способностью мыть и сушить посуду. Именно то, чего вы хотите и заслуживаете от вашего ежедневного помощника.', price: 17000 },
    ]
};

function showProducts(category) {
    const productList = document.getElementById('product-list');
    const productDetails = document.getElementById('product-details');

    productList.innerHTML = `<h2>Список товаров - ${category}</h2>`;
    productDetails.innerHTML = `<h2>Информация о товаре</h2>`;

    products[category].forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `<strong>${product.name}</strong>`;
        productItem.onclick = () => showProductDetails(product);
        productList.appendChild(productItem);
    });
}

function showProductDetails(product) {
    const productDetails = document.getElementById('product-details');

    productDetails.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Цена от: ${product.price} грн</p>
        <button onclick="buyProduct()">Купить</button>
    `;
}

function buyProduct() {
    alert('Товар куплен!');
    resetState(); 
}


function resetState() {
    const productList = document.getElementById('product-list');
    const productDetails = document.getElementById('product-details');

    productList.innerHTML = `<h2>Список товаров</h2>`;
    productDetails.innerHTML = `<h2>Информация о товаре</h2>`;
}


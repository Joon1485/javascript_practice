<body>

    <p>상품선택</p>
    <form class="select-form">
        <select class="select-item">
            <option>고르세요 !</option>
            <option>셔츠</option>
            <option>바지</option>
            <option>모자</option>
            <option>장갑</option>
        </select>
        <select class="select-size">
        </select>
    </form>

    <div class="card-group container">
        <div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
                <h5 class="product_name">Card title</h5>
                <p>가격 : <span class="product_price">70000</span></p>
                <button class="btn buy-btn">주문하기</button>
            </div>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
                <h5 class="product_name">Card title</h5>
                <p>가격 : <span class="product_price">70000</span></p>
                <button class="btn buy-btn">주문하기</button>
            </div>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
                <h5 class="product_name">Card title</h5>
                <p>가격 : <span class="product_price">70000</span></p>
                <button class="btn buy-btn">주문하기</button>
            </div>
        </div>
    </div>

    <button class="sortByPriceBtn">가격순 정렬</button>
    <button class="sortByNameBtn">다나가순 정렬</button>
    <button class="filterBtn">6만원 이하 상품</button>
    <script>
        document.querySelector('.select-item').addEventListener('change', function () {
            document.querySelector('.select-size').classList.add('show-box');
        })

        let products = [{
                id: 0,
                price: 80000,
                title: 'Blossom Dress'
            },
            {
                id: 1,
                price: 50000,
                title: 'Springfield Shirt'
            },
            {
                id: 2,
                price: 60000,
                title: 'Black Monastery'
            }
        ];
        let nameIndex = document.querySelectorAll('.product_name');
        let priceIndex = document.querySelectorAll('.product_price');

        document.querySelector('.filterBtn').addEventListener('click', function () {
            let newProducts = products.filter(function (a) {
                return a.price <= 60000;
            });
            document.querySelector('.container').innerHTML = '';

            for (let i = 0; i < newProducts.length; i++) {
                document.querySelector('.container').innerHTML +=
                    `<div class="card">
                <img src="https://via.placeholder.com/600">
                <div class="card-body">
                <h5> ${newProducts[i].title}</h5>
                <p>가격 : ${newProducts[i].price}</p>
                <button class="btn buy-btn">주문하기</button>
                </div>
                </div>`;
            }
        })

        document.querySelector('.sortByNameBtn').addEventListener('click', function () {
            products.sort(function (a, b) {
                if (a.title < b.title) return 1;
                if (a.title > b.title) return -1;
                if (a.title === b.title) return 0;
            });
            document.querySelector('.container').innerHTML = '';

            for (let i = 0; i < products.length; i++) {
                document.querySelector('.container').innerHTML +=
                    `<div class="card">
                <img src="https://via.placeholder.com/600">
                <div class="card-body">
                <h5> ${products[i].title}</h5>
                <p>가격 : ${products[i].price}</p>
                <button class="btn buy-btn">주문하기</button>
                </div>
                </div>`;
            }
        });

        for (let i = 0; i < nameIndex.length; i++) {
            nameIndex[i].innerHTML = products[i].title;
            priceIndex[i].innerHTML = products[i].price;
        }

        let pants = '<option>28</option><option>30</option>'
        let elseCloth = '<option>95</option><option>100</option><option>105</option>'

        document.querySelector('.select-item').addEventListener('change', function () {
            let value = this.value;

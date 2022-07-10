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

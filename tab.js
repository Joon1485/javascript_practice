    <style>
        ul.list {
            list-style-type: none;
            margin: 0;
            padding: 0;
            border-bottom: 1px solid #ccc;
        }

        ul.list::after {
            content: '';
            display: block;
            clear: both;
        }

        .tab-button {
            display: block;
            padding: 10px 20px 10px 20px;
            float: left;
            margin-right: -1px;
            margin-bottom: -1px;
            color: grey;
            text-decoration: none;
            cursor: pointer;
        }

        .orange {
            border-top: 2px solid orange;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid white;
            border-left: 1px solid #ccc;
            color: black;
            margin-top: -2px;
        }

        .tab-content {
            display: none;
            padding: 10px;
        }

        .show {
            display: block;
        }
    </style>
<body>
    <div>
        <div class="button_container" style="display:flex;">
            <button id="london_btn">London</button>
            <button id="paris_btn">Paris</button>
            <button id="seoul_btn">Seoul</button>
        </div>
        <div id="main_content" style="width: 400px; height: 150px; background-color: bisque;">

        </div>


        <div class="container mt-5">
            <ul class="list">
                <li class="tab-button" id="products">Products</li>
                <li class="tab-button orange" id="information">Information</li>
                <li class="tab-button" id="shipping">Shipping</li>
            </ul>
            <div class="tab-content">
                <p>상품설명입니다. Product</p>
            </div>
            <div class="tab-content show">
                <p>스펙설명입니다. Information</p>
            </div>
            <div class="tab-content">
                <p>배송정보입니다. Shipping</p>
            </div>
        </div>
    </div>

    <script>
        let targetLink = document.querySelectorAll('.tab-button');
        let tabLink = document.querySelectorAll('.tab-content');

        for(let i=0; i<tabLink.length; i++) {
            targetLink[i].addEventListener('click', function (e) {
                for(let j=0; j<tabLink.length; j++) {
                    tabLink[j].classList.remove('show');
                }
                tabLink[i].classList.add('show');
            })
        }

        for(let i=0; i<targetLink.length; i++) {
            targetLink[i].addEventListener('click', function (e) {
                for(let j=0; j<targetLink.length; j++) {
                    targetLink[j].classList.remove('orange');
                }
                targetLink[i].classList.add('orange');
            });
        }
        
    </script>
</body>

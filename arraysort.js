    <script>
        let array = [7, 3, 6, 9, 40];
        array.sort(function(a,b) {      // sort -> 원본변형 O
            return b - a;
        });
        console.log(array);

        let newArray = array.filter(function (a) {      // filter -> 원본변형 X
            return a < 8
        });
        console.log(newArray);

        let array2 = ['a', 'c', 'd', 'b'];
        array2.sort(function (a, b) {
            if(a < b) return 1;
            if(a > b) return -1;
            if(a === b) return 0;
        });
        console.log(array2);

        let products = [
            { price : 70000, title : 'dress'},
            { price : 50000, title : 'shirt'},
            { price : 60000, title : 'pants'},
        ]
        products.sort(function (a, b) {
            return a.price - b.price;
        })
        console.log(products);
    </script>

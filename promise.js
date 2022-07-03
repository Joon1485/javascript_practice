<body>
    <img id="test" src="https://codingapple1.github.io/kona.jpg">

    <script>
        let usingPromise = new Promise(function (success, failed) {
            if (document.querySelector('#test').addEventListener('load', function () {
                success();
            }));
            else if (document.querySelector('#test').addEventListener('error', function () {
                failed();
            }));
        });


        usingPromise.then(function () {
            console.log('성공했어요!');
        }).catch(function () {
            console.log('실패했어요ㅠㅠ');
        })

    </script>
</body>

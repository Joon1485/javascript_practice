<body>
    <button class="btn">누르세오</button>
    <script>
        let checking = new Promise((success, failed) => {
            document.querySelector('.btn').addEventListener('click', function () {
                success();
            })
        })

        async function pressBtn() {
            let result = await checking;
            console.log('성공했어요');
        }

        pressBtn();
    </script>
</body>

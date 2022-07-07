<body>
    
    <script>
        function comparison(arr, score) {
            let sumOfScore = 0;
            for(let i=0; i<arr.length; i++) {
                sumOfScore += arr[i];
            }
            let avgOfScore = sumOfScore / arr.length;
            if(avgOfScore >= score) console.log(`평균보다 ${avgOfScore-score}점이 올랐어요!`);
            else console.log(`평균보다 ${avgOfScore-score}점이 떨어졌네요 다시 공부 추천,,`);
        }
    </script>
</body>

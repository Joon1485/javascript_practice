
    <script>
        var pants = 0;
        var socks = 100;


        function deconstruction(words, variable1, variable2) {
            if (variable1 === 0) {
                console.log(`바지 안팔아요 ${words[1]} ${variable2}`);
                return;
            }
            }
            console.log(`${words[0]} ${variable1} ${words[1]} ${variable2}`);
        };

        deconstruction`바지${pants} 양말${socks}`;
    </script>

        let count = 0;
        document.querySelector('.bg-dark').addEventListener('click', function () {
            count += 1;
            if (count % 2 == 1) {
                document.querySelector('.bg-dark').innerHTML = 'Light 🔄';
                document.querySelector('.bg-dark').style.background = 'black';
                document.querySelector('.bg-dark').style.color = 'white';
                document.querySelector('.box').style.background = 'black';
                document.querySelector('.box').style.color = 'white';
            } else {
                document.querySelector('.bg-dark').innerHTML = 'Dark 🔄'
                document.querySelector('.bg-dark').style.background = 'white';
                document.querySelector('.bg-dark').style.color = 'black';
                document.querySelector('.box').style.background = 'bisque';
                document.querySelector('.box').style.color = 'black';
            }
        })

        window.addEventListener('scroll', function () {
            if(window.pageYOffset > 40) {
                document.querySelector('.navbar_brand').style.fontSize='22px';
            }
            else {
                document.querySelector('.navbar_brand').style.fontSize='35px';
            }
        });

    document.querySelector('.scroll_test').addEventListener('scroll', function () {
        let scroll_amount = document.querySelector('.scroll_test').scrollTop;
        if(scroll_amount >= 310) {
            alert('다 읽었네용');
        }
    });

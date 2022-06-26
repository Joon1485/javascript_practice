        document.querySelector('.openModal').addEventListener('click', function () {
            document.querySelector('.black_bg').classList.add('show-bg');
        })
        document.querySelector('.btn-close2').addEventListener('click', function () {
            document.querySelector('.black_bg').classList.remove('show-bg');
        })

        document.querySelector('.openModal').addEventListener('click', function () {
            document.querySelector('.modal').classList.add('show-modal');
        });

        document.querySelector('.btn-close2').addEventListener('click', function () {
            document.querySelector('.modal').classList.remove('show-modal');
        });

        document.querySelector('.black_bg').addEventListener('click', function (e) {
            if(e.target == document.querySelector('.black_bg'))
            document.querySelector('.black_bg').classList.remove('show-bg');
        })

        document.querySelector('.black_bg').addEventListener('click', function () {
            document.querySelector('.modal').classList.remove('show-modal');
        })
        document.querySelector('.btn-primary').addEventListener('click', function (e) {
            if (/[A-Z+]/.test(document.querySelector('.pw-form').value) == false) {
                alert('대문자를 입력해주세요!!');
                e.preventDefault();
            }
        });

        document.querySelector('.btn-primary').addEventListener('click', function (e) {
            if (document.getElementById('id').value == '' || document.querySelector('.pw-form').value == '')
                alert('아이디나 패스워드를 입력해주세요!!!');
            e.preventDefault();
        });

        document.querySelector('.btn-primary').addEventListener('click', function (e) {
            if (document.querySelector('.pw-form').value.length < 6)
                alert('비밀번호를 6자 이상 입력해주세요!!!');
            e.preventDefault();
        })

        //css
        <!-- .list-group {
            display: none;
        }
        
        .black_bg {
            width: 100%;
            height: 100%;
            position: fixed;
            background-color: darkgrey;
            z-index: 1;
            padding:30px;
            opacity: 0.3;
            visibility: hidden;
            transition: all 1s;
        }
        
        .modal {
            display: none;
            opacity: 0;
            z-index: 2;
        }
        .show-modal {
            display: block;
            opacity: 1;
        }
        
        .show-bg {
            visibility: visible;
            opacity: 0.7;
        } -->

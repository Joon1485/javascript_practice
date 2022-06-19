
    <div class="black_bg"></div>

    <button class="openModal" style="margin:30px;">로그인</button>

    <div class="modal" tabindex="-1" style=" width:500px;height: 245px; border: 1px; overflow:visible; position:relative; margin:auto;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">로그인</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form action="success.html">
                    <div class="my-3">
                        <span style="margin-right: 16px;">아이디</span>
                        <input type="text" class="id-form" id="id">
                    </div>
                    <div class="my-3">
                        <span>비밀번호</span>
                        <input type="password" class="pw-form">
                    </div>
                    <button type="submit" class="btn btn-primary">확인</button>
                    <button type="button" class="btn btn-close2" id="close">닫기</button>
                </form>
            </div>
            </div>
        </div>

    <script>

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
// .list-group {
//   display: none;
// }

// .black_bg {
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   background-color: darkgrey;
//   z-index: 1;
//   padding:30px;
//   opacity: 0.3;
//   visibility: hidden;
//   transition: all 1s;
// }

// .modal {
//   display: none;
//   opacity: 0;
//   z-index: 2;
// }
// .show-modal {
//   display: block;
//   opacity: 1;
// }

// .show-bg {
//   visibility: visible;
//   opacity: 0.7;
// }

<nav class="navbar_brand" style="font-size: 35px; position: fixed; transition: all 1s;">JJShop</nav>

<button class="badge bg-dark" id="bg-dark" style='margin-left: 600px; margin-top: 20px; margin-bottom:10px; border:0.1;'>Dark 🔄</button>

<div class="box" style="background-color:bisque; width:80%; height: 300px;">
    J
</div>

<div class="scroll_test" style="width: 100px; height: 200px; overflow:scroll;">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloribus est ipsam vitae amet odio, corrupti vero quibusdam eaque praesentium nihil velit. Harum nobis vitae laudantium explicabo excepturi ducimus architecto!
</div>

<div style="height: 1500px;"></div>


<script>
    

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

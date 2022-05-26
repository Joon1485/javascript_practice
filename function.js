function iterate(num, action) {
    for(let i=1; i<=num; i++) {
        action(i);
    }
}
    function allShow(num) {
        console.log(num);
    }
    function multiple(num) {
        console.log(num*2);
    }

    setTimeout(() => {
        console.log(`2초가 지나서 함수가 실행됐어요!`);
    }, 2000);

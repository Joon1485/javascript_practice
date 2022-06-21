  셀렉터로찾은이미지.addEventListener('load', function(){ // 이미지 같은 것이 load되면 이벤트가 발생함
  //이미지 로드되면 실행할 코드 
})

// 외부 자바스크립트 파일에 코딩하면 JS파일보다 이미지가 먼저 로드되는 경우 이벤트 발생을 체크하지 못함.
window.addEventListener('load', function(){
  //document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드

  // ready와의 차이는, .ready()는 DOM 생성만을 체크하는 함수인 반면,
  // load함수는 모든 파일과 이미지의 로드상태를 체크!
})

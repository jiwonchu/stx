$(document).ready(function(){
  //안내창 기능
  //추가 기능 : 스크롤바 없애기
  $('html').css('overflow','hidden');
  let modalWrap = $('.modal-wrap');
  let modalClose=  $('.modal-close');
  modalClose.click(function(){
    modalWrap.stop().fadeOut(500);

  $('html').css('overflow','auto');
  });
  let modalMain = $('.modal-main');
  //내용 배경 클릭
  modalMain.click(function(event){
    //클릭 정보 전달 막기
    event.stopPropagation();
  })
  //전체 배경 클릭
  modalWrap.click(function(event){
    modalWrap.stop().fadeOut(100);

  $('html').css('overflow','auto');
  });
  });


$(document).ready(function () {
  // html 태그의 lang 을 알아보자.
 let lang = $('nav').attr('class');
 //두번째 자리는 값을 바꾸는 자리
 
 //찾아진 속성의 값에 무엇이 담겨져 있는지 알 수 있다.
 //속성 값을 알아낼때 사용

 //lang,en 으로 적을 경우
 //en으로 바뀜


 console.log(lang);
  //.header를 저장한다.
  let header = $('.header');
  let gnb = $('.gnb');
  //펼쳐졌을때의 높이값
  let gnbMaxHeight = gnb.outerHeight();
  //닫혔을때의 높이값
  let gnbMinHeight = header.outerHeight();
  //기본 header 의 높이값 적용
  header.css('height',gnbMinHeight)
  // = header height :80px 
  console.log(gnbMaxHeight);
  console.log(gnbMinHeight);



  console.log( gnb. height() );
  //콘솔창에 높이값인 436이 뜬다.
  console.log( gnb. outerHeight() );
  //보더 마진 패딩 포함한 값 출력

  gnb.mouseenter(function () {
    header.css('height',gnbMaxHeight);
  });
  gnb.mouseleave(function () {
    header.css('height',gnbMinHeight);
    depth_1_Li.eq(1).find('>a').addClass('depth1-focus');
  });
  //주메뉴 포커스 기능
  let depth_1_Li = $('.depth1 >li');
  //두번째 것에 a 태그를 찾고 depth 1 포커스에 유지
  $.each(depth_1_Li, function (index) {
    $(this).mouseenter(function () {
      depth_1_Li.find('>a').removeClass('depth1-focus');
      //li의 > a를 찾는다.
      // $(this).find('>a').css('color','#ed1c24'); 추천하지않는방법
      $(this).find('>a').addClass('depth1-focus');

    });
    $(this).mouseleave(function () {
      // $(this).find('>a').css('color','#000');
      $(this).find('>a').removeClass('depth1-focus');
    });
  })
  // 컨텐츠 이동 버튼
  let visualBt = $('.visual-bt');
  // .part 영역이 html 상단으로부터 
  // 어느만큼 떨어진 위치인지의 px 값
  let partY = $('.part').offset().top;
  
  visualBt.click(function () {
$('html').stop().animate({
  scrollTop:partY
//스크롤탑 - 스크롤바 이동
});
//애니메이션을 할것이다

//몇픽셀 이동 했느냐
//scrollleft 좌우 이동했느냐

  });
  //part 배경 배치
  let partListLi = $('.part-list li');
  let partListW = 1200 / partListLi.length;
  $.each(partListLi, function (index) {
    let tgX = partListW * index;
    tgX = -1 * tgX;
$(this).css('background-position-x',tgX);
  });
  // .part-list li 중에 첫번째 것을 선택한다.
  // let first = partListLi.eq(0);
  // let last = partListLi.eq(4);
  // first.prepend(last)

  //선택된 내용의 앞쪽 , ::before 처럼 바뀐다.
  // 실제 html이 바뀐다.

 // append 
  //선택된 내용의 뒷쪽 , ::after 인것처럼 바뀐다.

//코드 재활용
});

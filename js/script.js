$(document).ready(function () {
  //.header를 저장한다.
  let header = $('.header');
  let gnb = $('.gnb');
  gnb.mouseenter(function () {
    header.addClass('header-open')
  });
  gnb.mouseleave(function () {
    header.removeClass('header-open');
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
  visualBt.click(function () {

  });
  //part 배경 배치
  let partListLi = $('.part-list li');
  let partListW = 1200 / partListLi.length;
  $.each(partListLi, function (index) {
    let tgX = partListW * index;
    tgX = -1 * tgX;
$(this).css('background-position-x',tgX);
  });

});
window.onload = function () {

}
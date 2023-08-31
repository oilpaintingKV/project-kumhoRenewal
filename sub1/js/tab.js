$(document).ready(function(){
var tabCnt=$('.tabNav li').size();  //탭메뉴 개수 ***

    // $(window).on('scroll', function(){ // 지도 로드 시에 display none으로 인해 api를 불러오지 못하는 오류 잡는법
    //     var scroll = $(window).scrollTop();
    //     console.log(scroll);
    //     if(scroll>0){
    //         $('.map').hide();
    //     };

    // });
    $('.map:eq(0)').show(); // 첫번째 탭 내용만 열기
    $('.tabNav .tab1').css('background','#c01').css('color','#fff'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

    $('.tab').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

          var ind = $(this).index('.tab');  // 클릭시 해당 index를 뽑아준다
          //console.log(ind);

          $(".map").hide(); //모든 탭내용을 안보이게...
          $(".map:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').css('background','#fff').css('color', '#333'); //모든 탭메뉴를 비활성화
          $(this).css('background','#c01').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

    });

});
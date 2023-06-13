$(function(){
//페이지 로딩 시 제일 상단으로 스크롤 이동
// $("body,html").stop().animate({"scrollTop":0},1500,"swing");		

//모바일 메뉴
$(".hamburger").click(function(){
$("#menu").animate({marginRight:"100%"},1000);
});
$("#menu >ul >li> a").click(function(){
if($(this).next().is(":visible")){
$(this).next().stop().slideUp(500);
}else{
$(".sub").stop().slideUp(500);
$(this).next().stop().slideDown(500);
};	
})
$(".cross").click(function(){
$("#menu").animate({marginRight:"0%"},1000);	
});	

//모바일배너 슬라이드
$("#m_indi li a").click(function() {
var strName = ( $(this).parent().attr("id") );
slideTarget( strName.substr(3,1) );   
return false;
});					
				
function  slideTarget(n){
var pos = Number( n ) * - 100+'%';
$("#m_main ul.m_main").animate({left:pos},500,
function(){
$("#m_indi img").attr("src","img/p_off.png");
$("#m_indi img").eq(n).attr("src","img/p_on.png");	
});
};

var btnNum=0;
setInterval(function(){ 
btnNum++;
if(btnNum>=4) btnNum=0;
$("#m_indi li a").eq(btnNum).trigger("click")
},3000);

//제품
$("ul.mpanel >li:not("+$("ul.mbtn li a.selected").attr("href")+")").hide();
//=  ul.panel li:not("#tab1).hide(); 탭1빼고 다 숨겨라
$("ul.mbtn li a").click(function(){
  $("ul.mbtn li a").removeClass("selected");
  $(this).addClass("selected");
  $("ul.mbtn li a").css("background","none");
    $("ul.mbtn li a").css("color","#000");
  $(this).css("background","#99b78a");
    $(this).css("color","#fff");
 $("ul.mpanel >li").hide();
  $($(this).attr("href")).show();
  return false; //본래의 a속성 막아주는 거 
 });

//리뷰
$(".review").slick({
 dots:true,
 autoplay:true,
 infinite:true,
 autoplaySpeed:1000,
 slidesToShow:5,   
 slidesToScroll:1,  
 responsive:[
 {
 breakpoint:1920,
 settings:{
  slidesToShow:3,
  slidesToScroll:1
 }
 },
  {
 breakpoint:769, 
 settings:{
  slidesToShow:2,
  slidesToScroll:1
 }
 }
 ]
 }); 
 
 //$('.review a').colorbox();
 
 //top버튼
 $("#top").click(function(){
 $("html,body").animate({scrollTop:0},"slow");
 return false;
});  
});
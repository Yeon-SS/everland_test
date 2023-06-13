$(function(){
//pc메뉴
$(".MENUa >li >a").mouseenter(function(){
$("#MENUb").stop().slideDown(500);
});
$("#MENUb").mouseleave(function(){
$("#MENUb").stop().slideUp(500); 
});

//검색바
$("#search_trigger").click(function(){
$("#search_input").toggleClass("search_input_open");
$(".form_search_input").focus();
});

//pc배너 슬라이드
$("#p_indi li a").click(function() {
var strName = ( $(this).parent().attr("id") );
slideTarget( strName.substr(3,1) );   
return false;
});					
				
function  slideTarget(n){
var pos = Number( n ) * - 100+'%';
$("#p_main ul.p_main").animate({left:pos},500,
function(){
$("#p_indi img").attr("src","img/p_off.png");
$("#p_indi img").eq(n).attr("src","img/p_on.png");	
});
};

var btnNum=0;
setInterval(function(){ 
btnNum++;
if(btnNum>=4) btnNum=0;
$("#p_indi li a").eq(btnNum).trigger("click")
},3000);

//제품
$("ul.ppanel >li:not("+$("ul.pbtn li a.selected").attr("href")+")").hide();
//=  ul.panel li:not("#tab1).hide(); 탭1빼고 다 숨겨라
$("ul.pbtn li a").click(function(){
  $("ul.pbtn li a").removeClass("selected");
  $(this).addClass("selected");
  $("ul.pbtn li a").css("background","none");
    $("ul.pbtn li a").css("color","#000");
  $(this).css("background","#99b78a");
    $(this).css("color","#fff");
 $("ul.ppanel >li").hide();
  $($(this).attr("href")).show();
  return false; //본래의 a속성 막아주는 거 
 });
 
 //header 고정
 $("#header").each(function(){
header=$(this);
headerOffsetTop = header.offset().top;		
$(window).on("scroll",function(){
if($(window).scrollTop() > headerOffsetTop){
header.addClass("sticky");
}else{
header.removeClass("sticky");
}
});
});
});
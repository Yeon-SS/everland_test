$(function(){
//태블릿배너 슬라이드
$("#t_indi li a").click(function() {
var strName = ( $(this).parent().attr("id") );
slideTarget( strName.substr(3,1) );   
return false;
});					
				
function  slideTarget(n){
var pos = Number( n ) * - 100+'%';
$("#t_main ul.t_main").animate({left:pos},500,
function(){
$("#t_indi img").attr("src","img/p_off.png");
$("#t_indi img").eq(n).attr("src","img/p_on.png");	
});
};

var btnNum=0;
setInterval(function(){ 
btnNum++;
if(btnNum>=4) btnNum=0;
$("#t_indi li a").eq(btnNum).trigger("click")
},3000); 

//제품
$("ul.tpanel >li:not("+$("ul.tbtn li a.selected").attr("href")+")").hide();
//=  ul.panel li:not("#tab1).hide(); 탭1빼고 다 숨겨라
$("ul.tbtn li a").click(function(){
  $("ul.tbtn li a").removeClass("selected");
  $(this).addClass("selected");
  $("ul.tbtn li a").css("background","none");
    $("ul.tbtn li a").css("color","#000");
  $(this).css("background","#99b78a");
    $(this).css("color","#fff");
 $("ul.tpanel >li").hide();
  $($(this).attr("href")).show();
  return false; //본래의 a속성 막아주는 거 
 });

});
/* 사전지식 */
// Math.random() => 0 ~ 1보다 작은 실수 0.2314532153245
// Math.round(4.4) => 4	반올림
// Math.round(4.6) => 5
// Math.ceil(4.2) => 5 올림
// Math.floor(4.7) => 4 버림
// 문제 (0 ~ 255)사이의 정수를 랜덤하게 만드시오.
// 1. Math.random() * 255 => 0 ~ 254.234789239084
// 2. Math.ceil(Math.random() * 255) => 0 ~ 255
var r, g, b;
for(var i=0; i<$(".box").length; i++) {
	r = Math.ceil(Math.random() * 255);
	g = Math.ceil(Math.random() * 255);
	b = Math.ceil(Math.random() * 255);
	$(".box").eq(i).css('background-color', 'rgb('+r+','+g+','+b+')');
}
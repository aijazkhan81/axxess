var initialNumber = 10;
var zero = 0;
$('#number').val(initialNumber);
$('#counter').val(zero);
var number = Number($('#number').val());
var counter = Number($('#counter').val());
var show = $('#show');

console.log('initial value of number is ' + number);
console.log(typeof number);
console.log('initial value of counter is ' + counter);

show.click(function(){
	var varName = function(){
		if(counter < number) {
			counter++;
			console.log(counter);
			$('#counter').val(counter);
		} else {
			clearInterval(varName);
		}
	};
	setInterval(varName, 500);
});
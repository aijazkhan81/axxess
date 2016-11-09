var zero = 0;
$('#number').val(zero);
$('#counter').val(zero);
var show = $('#show');
var reset = $('#reset');
var toe = $('#toe');
var finger = $('#finger');
var countUp = null;

function runCounter(){
    $('#counter').val(zero);
    var run = function(){
        var number = Number($('#number').val());
        var counter = Number($('#counter').val());
        if(counter < number) {
        	show.text("Restart");	
            counter++;
            $('#counter').val(counter);
            if(counter % 3 === 0){
            	finger.addClass('newclass');
            }
            else{
            	finger.removeClass('newclass');
            };
            if(counter % 5 === 0){
            	toe.addClass('newclass');
            }
            else{
            	toe.removeClass('newclass');
            };
            if((counter % 3 === 0) && (counter % 5 === 0)){
            	toe.addClass('newclass');
            	finger.addClass('newclass');
            }
        } else {
            clearInterval(countUp);
            finger.removeClass('newclass');
            toe.removeClass('newclass');
        }
    };
    
    if (countUp != null) {
        clearInterval(countUp);
    };
    countUp = setInterval(run, 1000);
};

show.click(runCounter);

reset.click(function(){
    $('#number').val(zero);
    $('#counter').val(zero);
    show.text("Start");
});
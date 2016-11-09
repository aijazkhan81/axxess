var zero = 0,
	start = $('#start'),
	reset = $('#reset'),
	toe = $('#toe'),
	finger = $('#finger'),
	countUp = null,
	bnum = $('#number'),
	cntr = $('#counter');
cntr.val(zero);

function runCounter(){
    var run = function(){
    	var number = Number(bnum.val());
    	var counter = Number(cntr.val());
    	if(counter < number) {
    		start.text("Restart");	
    		counter++;
    		cntr.val(counter);
    		if(counter % 3 === 0){
    			finger.addClass('highlight');
    		}
    		else{
    			finger.removeClass('highlight');
    		};
    		if(counter % 5 === 0){
    			toe.addClass('highlight');
    		}
    		else{
    			toe.removeClass('highlight');
    		};
    		if((counter % 3 === 0) && (counter % 5 === 0)){
    			toe.addClass('highlight');
    			finger.addClass('highlight');
    		}
    	} else {
    		clearInterval(countUp);
    		finger.removeClass('highlight');
    		toe.removeClass('highlight');
    	}
    };
    
    if (countUp != null) {
    	clearInterval(countUp);
    };
    countUp = setInterval(run, 1000);
};

start.click(runCounter);

reset.click(function(){
	bnum.val(zero);
	cntr.val(zero);
	start.text("Start");
});


bnum.keydown(function(e) {
	if (e.which == 13) {
		runCounter();
		this.blur();
		start.addClass('highlight');
		setTimeout(function(){
			start.removeClass('highlight');
		}, 300)
}
});
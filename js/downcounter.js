function downcount(end,element,callback){
	this.flag = false;
	var timer; 
	var end1;
	var count=0;
	var seconds= 1000;
	var minutes= seconds * 60;
	var hours= minutes * 60;
	var days= hours * 24;
	var delta,data,idata,idelta,inew;
    var date2;
    var endtime;
    var now;
    this.setInitial= function(){
    	end1=end;
       if(!isNaN(end)){
       idata = {
			'days' : Math.floor(end/days),
			'hours' : Math.floor((end%days)/hours),
			'minutes' : Math.floor((end%hours)/minutes),
			'seconds' : Math.floor((end%minutes)/seconds)

		}
		for(x in element){
				var x= element[x];
				idata[x]=(('00'+idata[x]).slice(-2));
				document.getElementById(x).innerHTML=idata[x];

			}
		}
		else{
			alert("Enter a valid number");
		}
		
    
}
	function update(){
		now= new Date();
		delta= endtime-now.getTime()+20;
		if(delta<=0){
			clearInterval(timer);
			callback();
			console.log('finished');


		}
		else{
		data = {
			'days' : Math.floor(delta/days),
			'hours' : Math.floor((delta%days)/hours),
			'minutes' : Math.floor((delta%hours)/minutes),
			'seconds' : Math.floor((delta%minutes)/seconds)

		}
		if(element.length){
			for(x in element){
				var x= element[x];
				data[x]=(('00'+data[x]).slice(-2));
				document.getElementById(x).innerHTML=data[x];

			}
		
	    }
    }
    
    }
	this.start = function(){
        date2=new Date();
		endtime=date2.getTime()+end1;
		if(!this.flag){
			this.flag= true;
			if(!timer){
			timer=setInterval(update,seconds);
			}
			
		}
		};
	this.stop = function() {
		clearInterval(timer);
		timer=null;
		var diff=now.getTime()-date2.getTime();
		end1=end1-diff;
		this.flag=false;

	};
	this.reset = function() {
		end1=end;
		clearInterval(timer);
		timer=null;
		this.flag=false;
		for(x in element){
				var x= element[x];
				idata[x]=(('00'+idata[x]).slice(-2));
				document.getElementById(x).innerHTML=idata[x];

			}
		
	};
}
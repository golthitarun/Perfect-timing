function upcount(end,element,callback){
	this.flag = false;
	var pause = false;
	var timer,store; 
	var end1;
	var count=0;
	var seconds= 1000;
	var minutes= seconds * 60;
	var hours= minutes * 60;
	var days= hours * 24;
	var endtime;
    var starttime,now,s ;
    this.setInitial= function(){
    	end1=end;
    	idata = {
			'days2' : '0',
			'hours2' : '0',
			'minutes2' : '0',
			'seconds2' : '0'

		}
		for(x in element){

				var x= element[x];
				idata[x]=(('00'+idata[x]).slice(-2));
				document.getElementById(x).innerHTML=idata[x];

			}
		}
	function update(){
		now= new Date();
		if(!pause){
			delta=now.getTime()-starttime;}
		else{
			delta=now.getTime()-starttime+store;
			
		}

		if(delta>end1+50){
			clearInterval(timer);
			callback();
			pause=false;
			console.log('finished');
			
             
		}
		else{
		data = {
			'days2' : Math.floor(delta/days),
			'hours2' : Math.floor((delta%days)/hours),
			'minutes2' : Math.floor((delta%hours)/minutes),
			'seconds2' : Math.floor((delta%minutes)/seconds)

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
    this.start2= function(){
    	s=new Date();
		starttime=s.getTime();

	
		endtime=starttime+end1;
		if(!this.flag){
			this.flag= true;
			if(!timer){
			timer=setInterval(update,seconds);
			}
			
		}
		
    }    
    this.stop2 = function() {
		clearInterval(timer);
		timer=null;
		store=delta;
		this.flag=false;
		pause=true;
		
		

	};
	this.reset2 = function() {
		end1=end;
		clearInterval(timer);
		timer=null;
		this.flag=false;
		pause=false;
		
		for(x in element){

				var x= element[x];
				idata[x]=(('00'+idata[x]).slice(-2));
				document.getElementById(x).innerHTML=idata[x];

			}
		
	};
    }
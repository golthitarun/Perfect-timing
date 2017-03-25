  <script type="text/javascript" src="js/downcounter.js"></script>
  var obj1= new downcount(60000,['days','hours','minutes','seconds'], function(){ console.log('Finished')});
  var togglebutton = document.getElementById('toggle');
  var resetbutton = document.getElementById('reset');
  togglebutton.addEventListener('click', function(){
  	if(obj1.flag){
  		obj1.stop();
  	}
  	else{
        obj1.start();
  	}
  });
  resetbutton.addEventListener('click',function(){
  	obj1.reset();
  });
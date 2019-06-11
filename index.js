var app = new Vue({ 
    el: '#app',
    data:{
    	target:false, 
    	raised:false 
    },
    methods: {
	    
	    formatValue: function(value, format) {
	    	if (isNaN(value) || value ===false ){
	    		return '';
	    	}else{
		        var myNumeral = numeral(value);
		        return myNumeral.format(format);
		    }
	    },	 
	    getPercentWidthStyle: function(raised, target ) {
	    	if (!isNaN(target) && !isNaN(raised) && raised >0 && target > 0 ){
	        	return  raised/target*100 + '%';
	        }else{
	        	return 0;
	        }
	    }
	},
	mounted() {
		var url_string = window.location.href;
		var url = new URL(url_string);
		var success = url.searchParams.get("success");
		if (success == 1){
			$('.donation-success').removeClass('hide');
		}
		var self = this
		//$.getJSON('http://dev.coop.com/test.php' , function(data){
		$.getJSON('https://coop-mock-test-api.herokuapp.com/' , function(data){
			if ( data.hasOwnProperty('status') && data.status=='OK' ){
				if (data.hasOwnProperty('raised') && !isNaN(data.raised) ){
					self.raised = data.raised;
				}else{
					self.raised = 0;
				}
				if (self.hasOwnProperty('target') && !isNaN(data.target) ){
					self.target = data.target;
				}else{
					self.target = 0;
				}
			}else{
				$('.alert-danger').removeClass('hide');
			}
		}).fail(function(error) {
   			$('.alert-danger').removeClass('hide');
	   
	  	});
	 }
});
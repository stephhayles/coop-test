var app = new Vue({ 
    el: '#app',
    data:{
    	target:false, 
    	raised:false,
    	success:false,
    	donation:0
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
	    getDisplay : function(value){
	    	if (isNaN(value) || value ===false ){
	    		return 'none';
	    	}else{
		        var myNumeral = numeral(value);
		        return 'block';
		    }

	    },	 
	    getPercentWidthStyle: function(raised, target ) {
	    	if (!isNaN(target) && !isNaN(raised) && raised >0 && target > 0 ){
	        	return  raised/target*100 + '%';
	        }else{
	        	return 0;
	        }
	    },
	    donate: function(event) {
            event.preventDefault();
            var self = this;

            // send get request
            $.ajax({
            	type: "POST",
	           	url: 'http://dev.coop.com/donate.php', 
	           	data: $('form').serialize(),  

	           	success: function(response){

		            // set data on vm
		            var data = JSON.parse(response);
		            if ( data.hasOwnProperty('status') && data.status=='OK' ){
						
					
						if (self.hasOwnProperty('donation') && !isNaN(data.donation) ){
							self.donation = data.donation;
						}else{
							self.donation = 0;
						}
					}else{
						$('.alert-danger').removeClass('hide');
					}
					$('#donation-success').fadeIn();
					$('#donation').val('');

	            },
	            error: function (data, status, request) {
	                $('.alert-danger').removeClass('hide');
	            }
	        });
        }
	},
	mounted() {
		
		
		var self = this;
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

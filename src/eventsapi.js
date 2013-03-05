// $('#foo').on('custom', function(event, param1, param2) {
//   alert(param1 + "\n" + param2);
// });

// var events = {
//   "click .me" : "alertMe"
// };

// var alertMe = function() {
//   $(this).remove();
// };

// $.each(events, function(key, val) {
//   var params = key.split(" ");
//   console.log(params[0]);
//   $(params[1]).on(params[0], alertMe);
// });


var events = {

	alertMe : function() {
		alert('hello');
	},

	events : {
		"click .me" : "alertMe"
	},

	setEv : function() {
		var thiz = this;
		$.each(events, function(key, val) { 
		  var params = key.split(" ");
		  console.log(params[0]);
		  $(params[1]).on(params[0], thiz.alertMe);
		});
	}

}

events.setEv();

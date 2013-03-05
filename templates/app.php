<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Knuckles MVC</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width">
</head>
<body>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="src/knuckles.js"></script>

<script type="text/javascript">
	
	var me = Knuckles.View.extend({

		initialize : function () {
			//console.log('hello world');
		},

		render : function() {
			var me = $('<div />').addClass('me').text('Hello World!');
			var text = this.el.append(me);
			$('body').append(text);
		},

		events : {
			"click .me" : "alertMe"
		},

		alertMe : function() {
			alert('OMG!');
			console.log('Event Fired!');
		}

	});

	var homeView = new me().render();


	var user = Knuckles.Model.extend({
		defaults : {
			'Name' : 'Username'
		}
	});

	var users = Knuckles.Collection.extend({
		url : '/users',
		model : user
	});


	var dash = new users().fetch();


</script>

</body>
</html>
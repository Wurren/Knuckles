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
<script src="js/lodash.js"></script>
<script src="src/knuckles.js"></script>
<script type="text/javascript">
	
	var user = Knuckles.Model.extend({
		defaults : {
			'Name' : 'Username'
		}
	});

	var users = Knuckles.Collection.extend({
		url : '/users',
		model : user
	});

	var userCollection = new users();

	var userView = Knuckles.View.extend({
		collection : userCollection,
		render : function() {
			userCollection.fetch().then(this.list);
		},
		list : function() {
			console.log(this.collection);
			_.each(this.collection.models, function(item, index) {
				var name = $('<div />').text(item.username);
				name.appendTo('body');
			});	
		}
	});

	var homeView = new userView().render();


</script>

</body>
</html>
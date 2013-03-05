
/*
* Knuckles MVC
* @author: Warren Haskins - @warrenhaskins
* @url: https://github.com/Wurren/knucklesMVC
* @documentation: https://github.com/Wurren/knucklesMVC
* @published: 23/01/2013
* @license Creative Commons Attribution Non-Commercial Share Alike 3.0 Licence
* http://creativecommons.org/licenses/by-nc-sa/3.0/
*/
 

;(function(window, document, $, undefined){


	var root = this,
		Knuckles = root.Knuckles = {};


	/*
	|--------------------------------------------------------------------------
	| EVENTS
	|--------------------------------------------------------------------------
	*/

	var Events = Knuckles.Events =  {

		events : {},

		setEv : function() {
			var thiz = this;
			$.each(this.events, function(key, val) { 
			  var params = key.split(" ");
			  $(thiz.el).on(params[0], params[1], thiz[val]);
			});
		}

	};



	/*
	|--------------------------------------------------------------------------
	| MODEL
	|--------------------------------------------------------------------------
	*/

	var Model = Knuckles.Model = function() {
		this.initialize();
		this.setEv();
	}

	$.extend(Model.prototype, Events, {

		initialize: function(){}

	});


	/*
	|--------------------------------------------------------------------------
	| COLLECTION
	|--------------------------------------------------------------------------
	*/


	var Collection = Knuckles.Collection = function(options) {
		this.initialize();
		this.setEv();
	}

	$.extend(Collection.prototype, Events, {

		model : Model,

		models : {},

		initialize: function(){},

		url : false,

		fetch : function() {

			var thiz = this;

			$.ajax({
				url: this.url,
				dataType : 'json',
				success : function(data) {
					$.each(data, function(id, model) {
						thiz.add(id, model);
					});
				}
			});


		},

		add : function(id, data) {
			// create each model and add them to the collection
			var model = new this.model(data);
			this.models[id] = model;
		}

	});



	/*
	|--------------------------------------------------------------------------
	| VIEW
	|--------------------------------------------------------------------------
	*/


	var View = Knuckles.View = function() {
		this.initialize();
		this.setEv();
	}

	$.extend(View.prototype, Events, {

		el : $('<div />'),

		render : function() {},

		initialize : function(){}

	});



	/*
	|--------------------------------------------------------------------------
	| EXTENDER
	|--------------------------------------------------------------------------
	*/


	var extend = function(protoProps) {

		var parent = this,
			child,
			hasProp = function(obj, key) {
				return hasOwnProperty.call(obj, key);
			};

		if (protoProps && hasProp(protoProps, 'constructor')) {
			child = protoProps.constructor;
		} else {
			child = function(){ return parent.apply(this, arguments); };
		}

		var Surrogate = function(){ this.constructor = child; };
		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate;

		if (protoProps) $.extend(child.prototype, protoProps);

		child.__super__ = parent.prototype;

		return child;

	};


	Model.extend = Collection.extend = View.extend = extend;


})(window, document, jQuery);
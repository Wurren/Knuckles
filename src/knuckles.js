
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
	| MODEL
	|--------------------------------------------------------------------------
	*/

	var Model = Knuckles.Model = function() {
		this.initialize();
	}

	$.extend(Model.prototype, {

		initialize: function(){ 
			console.log('Initialized...');
		}

	});




	/*
	|--------------------------------------------------------------------------
	| COLLECTION
	|--------------------------------------------------------------------------
	*/


	var Collection = Knuckles.Collection = function() {
		this.initialize();
	}

	$.extend(Collection.prototype, {

		initialize: function(){
			console.log('Initialized...');
		}

	});



	/*
	|--------------------------------------------------------------------------
	| VIEW
	|--------------------------------------------------------------------------
	*/


	var View = Knuckles.View = function() {
		this.initialize();
	}

	$.extend(View.prototype, {

		el : $('<div />'),

		render : function() {},

		initialize: function(){
			console.log('Initialized...');
		}

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
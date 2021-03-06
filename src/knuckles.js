
/*
* Knuckles MVC
* @author: Warren Haskins - @warrenhaskins
* @url: https://github.com/Wurren/knucklesMVC
* @documentation: https://github.com/Wurren/knucklesMVC
* @published: 23/01/2013
* @license Creative Commons Attribution Non-Commercial Share Alike 3.0 Licence
* http://creativecommons.org/licenses/by-nc-sa/3.0/
*/
 

;(function(window, document, undefined){


    var  root      = this,
        Knuckles  = root.Knuckles = {};


    /*
    |--------------------------------------------------------------------------
    | EVENTS
    |--------------------------------------------------------------------------
    */

    var Events = Knuckles.Events =  {

        events: {},

        listen: function() {
            var self = this;
            _.forIn(this.events, function(val, key) { 
                var params = key.split(" ");
                $(self.$el).on(params[0], params[1], $.proxy(self[val], self));
            });
        },

        unlisten: function() {
            var self = this;
            _.forIn(this.events, function(val, key) { 
                var params = key.split(" ");
                $(self.$el).undelegate(params[0], params[1], function(e) { console.log(e) });
            });
        },

        on: function(event, cb) {
            $(this).on(event, cb);
        },

        off: function(event, cb) {
            $(this).off(event, cb);
        },

        trigger: function(event) {
            $(this).trigger(event);
        }

    };



    /*
    |--------------------------------------------------------------------------
    | MODEL
    |--------------------------------------------------------------------------
    */

    var Model = Knuckles.Model = function(attributes) {
        this.attributes = attributes;
        _.assign(this.attributes, this.defaults);
        this.listen();
        this.initialize.apply(this, arguments);
    }

    _.extend(Model.prototype, Events, {

        defaults: {},

        attributes: {},

        initialize: function(){},

        get: function(key) {
            return this.attributes[key];
        },

        set: function(key, value) {
            return this.attributes[key] = value;
        }

    });


    /*
    |--------------------------------------------------------------------------
    | COLLECTION
    |--------------------------------------------------------------------------
    */


    var Collection = Knuckles.Collection = function(options) {
        _.assign(this, options);
        this.listen();
        this.initialize.apply(this, arguments);
    }

    _.extend(Collection.prototype, Events, {

        model: Model,

        models: [],

        initialize: function(){},

        url: false,

        fetch: function(cb) {

            var self = this;

            var xhr = $.ajax({
                url: this.url,
                dataType : 'json',
                success : function(data) {
                    self.addCollection(data);
                    self.trigger('synched');
                }
            });

            return xhr;

        },

        addCollection: function(data) {
            var self = this;
            _.each(data, function(item, index) {
                self.add(item);
            });
        },

        add: function(item) {
            this.models.push(new this.model(item));
        }

    });



    /*
    |--------------------------------------------------------------------------
    | VIEW
    |--------------------------------------------------------------------------
    */


    var View = Knuckles.View = function(options) {
        _.assign(this, options);
        this.setEl();
        this.listen();
        this.initialize.apply(this, arguments);
    }

    _.extend(View.prototype, Events, {

        el: 'div',

        model: false,

        render: function() {},

        initialize: function() {},

        setEl: function() {
            this.$el = $('<' + this.el + ' />');
        },

        remove: function() {
            this.$el.remove();
            this.unlisten();
            return this;
        }

    });



    /*
    |--------------------------------------------------------------------------
    | EXTENDER
    |--------------------------------------------------------------------------
    */


    var extend = function(protoProps) {

        var  parent = this,
            child,
            hasProp = function(obj, key) {
                return hasOwnProperty.call(obj, key);
            };

        if (protoProps && hasProp(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function() { return parent.apply(this, arguments); };
        }

        var Surrogate = function(){ this.constructor = child; };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;

        if (protoProps) _.extend(child.prototype, protoProps);

        child.__super__ = parent.prototype;

        return child;

    };


    Model.extend = Collection.extend = View.extend = extend;


})(window, document);
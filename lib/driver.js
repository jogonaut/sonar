(function(module) {
    var Driver, _;
    
    _ = require('underscore')._;
    
    /**
     * @constructor
     * @version 0.0.1
     */
    Driver = function() {
        this.routes = [];
    };
    
    /**
     * Adds an API method to the driver, binding it to the Driver scope.
     *
     * @param name String method name
     * @param method function
     */
    Driver.prototype.addApiMethod = function(name, method) {
        this[name] = _.bind(method, this);
    };
    
    /**
     * Defines an express route.
     * 
     * @param type String "public" "protected"
     * @param verb String "get" "put" "post" "delete" etc.
     * @param url String request path
     * @param method function callback to execute
     * @return void
     */
    Driver.prototype.addRoute = function(type, verb, url, method) {
        this.routes.push({
            type   : type   || 'public',
            verb   : verb   || 'get',
            url    : url    || '/',
            method : method || function() { }
        });
    };
    
    /**
     * Loads express, initializes routes, and listens to port
     */
    Driver.prototype.listen = function() {
        
    };
    module.exports = Driver;
}(module))
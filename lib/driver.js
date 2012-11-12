(function(module) {
    var Driver;
    
    /**
     * @constructor
     * @version 0.0.1
     */
    Driver = function() {
        this.routes = [];
    };
    
    /**
     * Defines an express route.
     * 
     * @param type String "public" "protected"
     * @param verb String "get" "put" "post" "delete" etc.
     * @param url String request path
     * @param method function callback to execute
     */
    Driver.prototype.addRoute = function(type, verb, url, method) {
        this.routes.push({
            type   : type   || 'public',
            verb   : verb   || 'get',
            url    : url    || '/',
            method : method || function() { }
        });
    };
    module.exports = Driver;
}(module))
debugVariableWriting = function (object, propertyName) {
    object['_' + propertyName] = object[propertyName]
    Object.defineProperty(object, propertyName, {
        get: function() {
            console.log('get!');
            return this['_' + propertyName];
        },
        set: function(val) {
            debugger;
            this['_' + propertyName] = val;
        }
    });
}

var _mn = _mn || {};

_mn.utils = (function() {
    var debounce = function(fn, ms) {
        var timeout;
        var then = Date.now();

        return function(){
            var now = Date.now();
            var ctx = this;
            var args = [].slice.call(arguments);
            var waitUntil = then + ms;
            var wait = waitUntil - then;

            if(now < waitUntil) {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    fn.apply(ctx, args);
                }, wait);
            } else {
                fn.apply(ctx, args);
            }
        };
    };

    return {
        debounce: debounce
    };
}());

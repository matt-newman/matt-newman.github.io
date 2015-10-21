var _mn = _mn || {};

_mn.dom = (function() {

    var ready = function(func) {
        if(document.readyState !== 'loading') {
            func();
        } else {
            document.addEventListener('DOMContentLoaded', func);
        }
    };

    return {
        ready: ready
    };
}());

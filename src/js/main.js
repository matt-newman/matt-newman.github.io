var _mn = _mn || {};

_mn.log = function(text) {
    console.log('_mn.log:', text);
};

var interval;

(function(dom, utils) {
    var scroll = function() {
        console.log('scroll');
    };

    dom.ready(function() {
        _mn.log('test');
        var debounced = utils.debounce(scroll, 100);
        debounced();
        interval = setInterval(function () {
            debounced();
        }, 40);
    });

}(_mn.dom, _mn.utils));

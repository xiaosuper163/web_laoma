(function(window){
    var EventUtil = {
        addEvent: function(element, type, handler, isCapture) {
            // make sure isCapture is a bool variable
            isCapture = isCapture ? true : false;
            // standard browser
            if (element.addEventListener) {
                element.addEventListener(type, handler, isCapture);

            // older IE version
            } else {
                element.attachEvent('on'+type, function(){
                    return handler.call(element, window.event);
                });
            }
        }
    };

    window.EventUtil = EventUtil;
})(window || {});

// window.EventUtil.addEvent(element, type, handler, isCapture);
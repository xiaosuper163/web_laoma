define([
    'jquery'
], function($) {
    'use strict';
    return {
        do: function() {
            $(function(){
                $(document.body).append("<h2>This was created dynamically!</h2>");
            });
        }
    }
});
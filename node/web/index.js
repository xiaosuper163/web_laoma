require.config({
    paths: {
        jquery: '../lib/jquery-1.12.4',
        show: './show'
    }
});
define([
    'jquery',
    'show'
], function($, show) {
    'use strict';
    $(function() {
        $('#box').html('<h1>First rj application</h1>');
        show.do();
    });
});
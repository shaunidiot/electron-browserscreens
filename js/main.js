var _ = require('lodash');

window.jQuery = window.$ = jQuery;

$(document).ready(function() {
    $('select').material_select();

    $('#button_take').on('click', function() {
        var url = $('#input_url').val();

        if (!isURL(url)) {
            console.log('Not a valid URL.');
            return;
        }

        var delay = parseInt($('#input_renderdelay').val());

        if (typeof delay == 'undefined' || !parseInt(delay) || delay === '') {
            delay = 0;
        }

        var screensize = $("#select_screensize option:selected").text();
        var size = {};

        switch (screensize) {
            case '640px':
            size.width = 640;
            size.height = 320;
            break;
            case '800px':
            size.width = 800;
            size.height = 400;
            break;
            case '1024px':
            size.width = 1024;
            size.height = 512;
            break;
            case '1280px':
            size.width = 1280;
            size.height = 640;
            break;
            case '1440px':
            size.width = 1440;
            size.height = 720;
            break;
            case '1600px':
            size.width = 1600;
            size.height = 800;
            break;
            default:
            size.width = 640;
            size.height = 320;
            break;
        }

        var selectedBrowsers = [];
        $('input:checkbox[id^="browser_"]').each(function () {
            var selected = (this.checked ? true : false);
            if (selected) {
                var key = $(this).attr('id');
                var ua = _.find(userAgentsList, function(o) {
                    return o.key == key;
                });

                if (typeof ua !== 'undefined') {
                    selectedBrowsers.push(ua);
                }
            }
        });

        if (selectedBrowsers.length < 1) {
            console.log('Please select one or many browser.');
            return;
        }

        $('#div_loading_spinner').css('visibility',' visible');
        var total = selectedBrowsers.length;
        var count = 0;
        takeShot(url, size, delay, selectedBrowsers, function(error) {
            count++;
            var percentage = Math.ceil(count/total*100);
            $('#loading_spinner').css('width', percentage + '%');
            
            if (count == total) {
                $('#loading_spinner').css('width', '0%');
                $('#div_loading_spinner').css('visibility',' hidden');
            }
        });
    });
});

function isURL(str) {
    var urlRegex = '(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})';
    var url = new RegExp(urlRegex, 'ig');
    return str.length < 2083 && url.test(str);
}

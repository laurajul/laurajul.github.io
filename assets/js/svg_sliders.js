// assets/js/svg_sliders.js

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Use the globally defined jekyllBaseurl to construct paths
var imageBase = jekyllBaseurl + '/assets/img/art/2018_multitouch/';

var j2017 = new Array();
j2017[0] = imageBase + 'jan17.svg';
j2017[1] = imageBase + 'feb17.svg';
j2017[2] = imageBase + 'mar17.svg';
j2017[3] = imageBase + 'apr17.svg';
j2017[4] = imageBase + 'may17.svg';
j2017[5] = imageBase + 'jun17.svg';
j2017[6] = imageBase + 'jul17.svg';
j2017[7] = imageBase + 'aug17.svg';
j2017[8] = imageBase + 'sep17.svg';
j2017[9] = imageBase + 'oct17.svg';
j2017[10] = imageBase + 'nov17.svg';
j2017[11] = imageBase + 'dec17.svg';

var j2018 = new Array();
j2018[0] = imageBase + 'jan18.svg';
j2018[1] = imageBase + 'feb18.svg';
j2018[2] = imageBase + 'mar18.svg';
j2018[3] = imageBase + 'apr18.svg';
j2018[4] = imageBase + 'may18.svg';
j2018[5] = imageBase + 'jun18.svg';
j2018[6] = imageBase + 'jul18.svg';
j2018[7] = imageBase + 'aug18.svg';
j2018[8] = imageBase + 'sep18.svg';
j2018[9] = imageBase + 'oct18.svg';
j2018[10] = imageBase + 'nov18.svg';
j2018[11] = imageBase + 'dec18.svg';

$(document).ready(function() {
    // Get the initial value of the 2017 slider and update the image and text
    var initial2017Value = $('#slider2017').val();
    $("#img2017").prop("src", j2017[initial2017Value]);
    $("#sliderStatus2017").html(months[initial2017Value]);

    // Get the initial value of the 2018 slider and update the image and text
    var initial2018Value = $('#slider2018').val();
    $("#img2018").prop("src", j2018[initial2018Value]);
    $("#sliderStatus2018").html(months[initial2018Value]);
});

$(document).on('input change', '#slider2017', function() {
    var v = $(this).val();
    $('#sliderStatus2017').html(months[v]);
    $("#img2017").prop("src", j2017[v]);
});

$(document).on('input change', '#slider2018', function() {
    var v = $(this).val();
    $('#sliderStatus2018').html(months[v]);
    $("#img2018").prop("src", j2018[v]);
});
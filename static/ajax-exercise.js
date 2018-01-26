"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', function (result) {
        $('#fortune-text').html(result);
    });

}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, function (result) {
        $('#weather-info').html(`Forecast: ${result['forecast']} Temp: ${result['temp']}`);
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    let formInput = {
        "qty": $("#qty-field").val(),
        "melon_type": $("#melon-type-field").val(),
    };

    $.post('/order-melons.json', formInput, function (result) {
        $('#order-status').html(`${result['code']}: ${result['msg']}`);

        if (result['code'] === 'ERROR') {
            $('#order-status').addClass('order-error');
        } else {
            $('#order-status').removeClass('order-error');
        }
    });
}

$("#order-form").on('submit', orderMelons);



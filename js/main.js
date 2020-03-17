$(document).ready(function() {
    // *** LOGIC ENGINE *** //

    // *** HANDLEBARS *** //
    var source = $("#square-template").html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < 36; i++) {
        $('.grid-container').append(template);
    };


    $(".square").click(function() {
        var squareClicked = $(this);
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(data) {
                var randomNumber = data.response;
                colorSquare(randomNumber, squareClicked);
                centeredNum(randomNumber, squareClicked);
            },
            error: function() {
                alert('ERROR');
            }
        });
    });

    // *** FUNCTIONS *** //

    function colorSquare(value, where) {
        if (value <= 5) {
            $(where).addClass("yellow").removeClass("green");
        } else {
            $(where).addClass("green").removeClass("yellow");
        }
    }

    function centeredNum(value, where) {
        $(where).children("p").text(value);
    }

    // NOT ASYNC FUNCTION
    // function remoteRandom(){
    //     var randomNumber = null;
    //     $.ajax({
    //         async: false,
    //         url: 'https://flynn.boolean.careers/exercises/api/random/int',
    //         method: 'GET',
    //         success: function (data) {
    //             randomNumber = data.response;
    //             console.log(randomNumber); //debug
    //         },
    //         error: function () {
    //             alert('ERROR');
    //         }
    //     });
    //     return randomNumber;
    // };
});

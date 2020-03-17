$(document).ready(function() {
    // *** LOGIC ENGINE *** //

    $(".square").click(function() {
        var squareClicked = $(this);
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(data) {
                var randomNumber = data.response;
                console.log(randomNumber); //debug
                if (randomNumber <= 5) {
                    $(squareClicked).removeClass("green");
                    $(squareClicked).addClass("yellow");
                } else {
                    $(squareClicked).removeClass("yellow");
                    $(squareClicked).addClass("green");
                }
                $(squareClicked).children("p").text(randomNumber);
            },
            error: function() {
                alert('ERROR');
            }
        });
    });

    // *** FUNCTIONS *** //

    // NOT ASYNC FUNCTION
    // function remoteRandom(){
    //     var randomNumber = null;
    //     $.ajax({
    //         async: false,
    //         url: 'https://flynn.boolean.careers/exercises/api/random/int',
    //         method: 'GET',
    //         success: function (data) {
    //             randomNumber = data.response;
    //         },
    //         error: function () {
    //             alert('ERROR');
    //         }
    //     });
    //     return randomNumber;
    // };









});

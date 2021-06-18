const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
var previewcontent = $( "#content" ).load("/posts/1/1.html p#post", function(){
    $(".img").remove();
    let text = $("#post").clone().remove().end().text();
    text = text.slice(0, 400);
    text += "...";
    $("#post").text(text);

    $(".latestpost").css({
        'background-color': 'rgb(20, 20, 20)',
        'position': 'relative',
        'text-align': 'left',
        'padding': '0 5% 0 1%',
        'top': '45vh',
        'font-size': '3vh'
    })
});

var previewtitle = $( "#title" ).load("/posts/1/1.html div.title-container", function(){
    $(".title-container").css({
        'padding': '3% 0'
    })
    $('.latestpost').prepend('<h1 class="latestpost-title">Latest Post</h1>');
    $('.latestpost-title').css({
        'position': 'relative',
        'left': '5vh',
        'text-align': 'center',
        'padding': '1%',
        'font-size': '7vh',
    })
})

// function getOutput() {
//     $.ajax({
//        url:'test.php',
//        complete: function (response) {
//            console.log("wow")
//        },
//        error: function () {
//            $('#output').html('Bummer: there was an error!');
//        }
//    });
//    return false;
//  }
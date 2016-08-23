$( document ).ready(function() {
    animate();
});

var lastId = 1;
var counter = 1;

function animate() {
    for (var i=0; i< 20; i++) {
        setTimeout(function() {
            $("#Frame"+lastId).css("display", "none");
            $("#Frame"+counter).css("display", "inline-block");
            lastId = counter;
            counter++;
        }, 20*i);
    }
};

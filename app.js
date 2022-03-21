document.getElementById("65").addEventListener("click",function(){
    console.log("click");
    $("audio[data-key='65']")[0].play();
        $("div[data-key='65']").addClass('playing');
        setTimeout(function () {
            $("div[data-key='65']").removeClass('playing');
        }, 90);
})

document.getElementById("83").addEventListener("click",function(){
    console.log("click");
    $("audio[data-key='83']")[0].play();
        $("div[data-key='83']").addClass('playing');
        setTimeout(function () {
            $("div[data-key='83']").removeClass('playing');
        }, 90);
})

document.getElementById("68").addEventListener("click",function(){
    console.log("click");
    $("audio[data-key='68']")[0].play();
        $("div[data-key='68']").addClass('playing');
        setTimeout(function () {
            $("div[data-key='68']").removeClass('playing');
        }, 90);
})

document.getElementById("70").addEventListener("click",function(){
    console.log("click");
    $("audio[data-key='70']")[0].play();
        $("div[data-key='70']").addClass('playing');
        setTimeout(function () {
            $("div[data-key='70']").removeClass('playing');
        }, 90);
})

document.getElementById("71").addEventListener("click",function(){
    console.log("click");
    $("audio[data-key='71']")[0].play();
        $("div[data-key='71']").addClass('playing');
        setTimeout(function () {
            $("div[data-key='71']").removeClass('playing');
        }, 90);
})

document.getElementById("72").addEventListener("click",function(){
    console.log("click");
    $("audio[data-key='72']")[0].play();
        $("div[data-key='72']").addClass('playing');
        setTimeout(function () {
            $("div[data-key='72']").removeClass('playing');
        }, 90);
})

document.getElementById("74").addEventListener("click",function(){
    console.log("click");
    $("audio[data-key='74']")[0].play();
        $("div[data-key='74']").addClass('playing');
        setTimeout(function () {
            $("div[data-key='74']").removeClass('playing');
        }, 90);
})

document.getElementById("75").addEventListener("click",function(){
    console.log("click");
    $("audio[data-key='75']")[0].play();
        $("div[data-key='75']").addClass('playing');
        setTimeout(function () {
            $("div[data-key='75']").removeClass('playing');
        }, 90);
})

document.getElementById("76").addEventListener("click",function(){
    console.log("click");
    $("audio[data-key='76']")[0].play();
        $("div[data-key='76']").addClass('playing');
        setTimeout(function () {
            $("div[data-key='76']").removeClass('playing');
        }, 90);
})



window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(function () {
        key.classList.remove("playing")
    }, 90);
});
    







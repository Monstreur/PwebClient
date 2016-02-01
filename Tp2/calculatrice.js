function modeCalculatrice (mode) {
  alert("Mode : "+mode);
}
function initButton() {
    var btn1 = document.getElementById('modeClassique');
    initEventHandlers(btn1, 'click', function() {modeCalculatrice(0);});
    var btn2 = document.getElementById('modeScientifique');
    initEventHandlers(btn2, 'click', function() {modeCalculatrice(1);});
} // initButton

function initEventHandlers(element, event, fx) {
    if (element.addEventListener)
        element.addEventListener(event, fx, false);
    else if (element.attachEvent)
        element.attachEvent('on' + event, fx);
} // observe

initEventHandlers(window, 'load', initButton);

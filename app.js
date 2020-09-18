var d = new Dashboard();

function init() {

    d.title(' Button Test');
    d.button('Test', 'btnPressed()');

}

function btnPressed() {
    alert('btn pressed');

}
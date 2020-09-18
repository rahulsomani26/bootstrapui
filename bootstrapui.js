var Bootstrap = function() {

    this.malert = function(msg) {
        alert(msg)
    };

    this.createElement = function(tag, id) {
        el = document.createElement(tag);
        if (id) {
            el.setAttribute('id', id);
        }
        return el;

    };

    // this.button = function(id, name, onclick) {
    //     el = document.createElement('button', id);
    //     // ml = document.createElement('div', id);
    //     // ml.setAttribute('class', name);
    //     el.setAttribute('onclick', onclick);
    //     if (typeof name == 'string') {
    //         el.innerHTML = name;
    //     } else {
    //         el.appendChild(name);
    //     }
    //     return el;

    // };
}
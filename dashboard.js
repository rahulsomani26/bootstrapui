var bui = Bootstrap();

var Dashboard = function() {
    this.title = function(content) {
        var el = document.getElementById('title');
        if (content) {
            alert('title is not empty');
            // console.log(el.innerHTML);
            el.innerHTML = '';

            if (typeof content == 'string') {
                el.innerHTML = content;
            } else {
                el.appendChild(content);
            }
            return el;

        }
    }




    this.button = function(name, onclick) {
        var btn = document.getElementById('button');
        btn.setAttribute('onclick', onclick);
        btn.innerHTML = name;
        return btn;
    }
}
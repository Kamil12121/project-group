var moverclass = {
    __init: function () {
        var elem = document.querySelector('.wrapper'),
            div = document.querySelector('.move'),
            x = 0,
            y = 0,
            mousedown = false;
        div.addEventListener('mousedown', function (e) {
            mousedown = true;
            x = div.offsetLeft - e.clientX;
            y = div.offsetTop - e.clientY;
        }, true);
        div.addEventListener('mouseup', function (e) {
            mousedown = false;
        }, true);
        elem.addEventListener('mousemove', function (e) {
            e.preventDefault();
            if (mousedown) {
                div.style.left = e.clientX + x + 'px';
                div.style.top = e.clientY + y + 'px';
            }
        }, true);
    }
};
moverclass.__init();
var moverclass = {
    __init: function () {

        var elem = document.querySelector('.wrapper'),
            div = document.querySelector('.move'),
            x = 0,
            y = 0,
            mousedown = false;
        div.addEventListener('mousedown', function (e) {
            mousedown = true;
            x = div.offsetLeft - e.clientX;
            y = div.offsetTop - e.clientY;
        }, true);
        div.addEventListener('mouseup', function (e) {
            mousedown = false;
        }, true);
        elem.addEventListener('mousemove', function (e) {
            e.preventDefault();
            if (mousedown) {
                div.style.left = e.clientX + x + 'px';
                div.style.top = e.clientY + y + 'px';
            }
        }, true);
    }
};
moverclass.__init();
var moverclass = {
    __init: function () {
        var elem = document.querySelector('.wrapper1'),
            div = document.querySelector('.move1'),
            x = 0,
            y = 0,
            mousedown = false;
        div.addEventListener('mousedown', function (e) {
            mousedown = true;
            x = div.offsetLeft - e.clientX;
            y = div.offsetTop - e.clientY;
        }, true);
        div.addEventListener('mouseup', function (e) {
            mousedown = false;
        }, true);
        elem.addEventListener('mousemove', function (e) {
            e.preventDefault();
            if (mousedown) {
                div.style.left = e.clientX + x + 'px';
                div.style.top = e.clientY + y + 'px';
            }
        }, true);
    }
};
moverclass.__init();
var moverclass = {
    __init: function () {
        var elem = document.querySelector('.wrapper2'),
            div = document.querySelector('.move2'),
            x = 0,
            y = 0,
            mousedown = false;
        div.addEventListener('mousedown', function (e) {
            mousedown = true;
            x = div.offsetLeft - e.clientX;
            y = div.offsetTop - e.clientY;
        }, true);
        div.addEventListener('mouseup', function (e) {
            mousedown = false;
        }, true);
        elem.addEventListener('mousemove', function (e) {
            e.preventDefault();
            if (mousedown) {
                div.style.left = e.clientX + x + 'px';
                div.style.top = e.clientY + y + 'px';
            }
        }, true);
    }
};
moverclass.__init();
var moverclass = {
    __init: function () {
        var elem = document.querySelector('.wrapper3'),
            div = document.querySelector('.move3'),
            x = 0,
            y = 0,
            mousedown = false;
        div.addEventListener('mousedown', function (e) {
            mousedown = true;
            x = div.offsetLeft - e.clientX;
            y = div.offsetTop - e.clientY;
        }, true);
        div.addEventListener('mouseup', function (e) {
            mousedown = false;
        }, true);
        elem.addEventListener('mousemove', function (e) {
            e.preventDefault();
            if (mousedown) {
                div.style.left = e.clientX + x + 'px';
                div.style.top = e.clientY + y + 'px';
            }
        }, true);
    }
};
moverclass.__init();


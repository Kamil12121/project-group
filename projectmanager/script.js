const wrapper = document.querySelector('.wrapper');
const wrapper1 = document.querySelector('.wrapper1');
const wrapper2 = document.querySelector('.wrapper2');
const wrapper3 = document.querySelector('.wrapper3');
const div = document.querySelector('.move');
const div1 = document.querySelector('.move1');
const div2 = document.querySelector('.move2');
const div3 = document.querySelector('.move3');

const moverclass = {
  init(elem, d) {
    let x = 0;
    let y = 0;
    let mousedown = false;
    d.addEventListener(
      'mousedown',
      function(e) {
        mousedown = true;
        x = d.offsetLeft - e.clientX;
        y = d.offsetTop - e.clientY;
      },
      true
    );
    d.addEventListener(
      'mouseup',
      function(e) {
        mousedown = false;
      },
      true
    );
    elem.addEventListener(
      'mousemove',
      function(e) {
        e.preventDefault();
        if (mousedown) {
          d.style.left = `${e.clientX + x}px`;
          d.style.top = `${e.clientY + y}px`;
        }
      },
      true
    );
  },
};
moverclass.init(wrapper, div);
moverclass.init(wrapper1, div1);
moverclass.init(wrapper2, div2);
moverclass.init(wrapper3, div3);

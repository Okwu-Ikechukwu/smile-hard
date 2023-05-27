
const ce = document.querySelectorAll('.click-enter div button');
const s1 = document.querySelector('#exampledatalist');
const s2 = document.querySelector('#exampledatalist2');

console.log(1);

ce.forEach(element => {
    element.onclick = () => {
        const arr = element.textContent.split('-');
        s1.value = arr[0];
        s2.value = arr[1];
    };
});



(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

const closeBtn = document.querySelector(".close");
const hello = document.querySelector(".hello");
const shadow = document.querySelector(".shadow");
closeBtn.onclick = ()=>{
  shadow.classList.add("d-none");
  hello.classList.add("d-none");
}
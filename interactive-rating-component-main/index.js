const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = parseInt(button.getAttribute('data-value'));
    
    count(button, value);
  });
});

let result;
function count(btn, num) {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.classList.remove('button-click');
  });

  btn.classList.add('button-click');
  
  result = num;

  console.log(result);
}
const submitBtn = document.querySelector('.js-submit');
submitBtn.addEventListener('click', function(){
  go();
});

function go(){
  window.location.href = 'http://127.0.0.1:5500/thank.html';
}


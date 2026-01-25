  function toggleVi() {
    document.querySelectorAll('.vi').forEach(el => {
      el.classList.toggle('hidden');
    });
  }

function toggleAnswer() {
  document.querySelectorAll('.answer')
    .forEach(el => el.classList.toggle('show'));

  document.querySelector('.fa-lightbulb')
    .classList.toggle('fa-circle-check');
}


function toggleVi(el) {
  const group = el.closest('.question-group');

  group.querySelectorAll('.vi').forEach(v => {
    v.classList.toggle('hidden');
  });
}



function toggleAnswer(el) {
  const group = el.closest('.question-group');
  const answer = group.querySelector('.answer');

  answer.classList.toggle('show');

  el.classList.toggle('fa-circle-check');
  el.classList.toggle('fa-lightbulb');
}



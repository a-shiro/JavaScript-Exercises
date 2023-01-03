function solve() {
  function hideSections(sections) {
    sections.forEach(section => section.classList.add('hidden'));
    sections.shift();
  }

  function nextQuestion(event) {
    const answers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
    const choice = event.target.textContent;

    if (answers.includes(choice)) {
      correctAnswers++;
    }

    hideSections(sections);

    if (sections.length === 0) {
      document.querySelector('.results-inner h1').textContent = correctAnswers === answers.length
        ? 'You are recognized as top JavaScript fan!'
        : `You have ${correctAnswers} right answars.`
      document.querySelector('#results').style.display = 'block'

      return;
    }

    sections[0].classList.remove('hidden');
  }

  let correctAnswers = 0;

  const sections = Array.from(document.querySelectorAll('section'));

  Array.from(document.querySelectorAll('p')).forEach(answer => {
    answer.addEventListener('click', nextQuestion)
  })
}

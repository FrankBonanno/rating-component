const ratingForm = document.querySelector('.rating-form');
const ratingComponent = document.querySelector('#rating-comp');
const resultComponent = document.querySelector('#result-comp');
const resultText = document.querySelector('#selected');

const handleSubmit = (e) => {
  e.preventDefault();

  const ratingValue = document.querySelector('input[name="rating"]:checked').value;

  resultText.textContent = `You selected ${ratingValue} out of 5`;

  ratingComponent.style.display = 'none';
  resultComponent.style.display = 'flex';
};

ratingForm.addEventListener('submit', (e) => handleSubmit(e));

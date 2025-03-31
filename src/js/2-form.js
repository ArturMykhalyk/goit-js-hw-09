const formDate = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';
const feedbackUser = document.querySelector('.feedback-form');

const savedForm = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
Object.assign(formDate, savedForm);

const input = feedbackUser.elements.email;
const textarea = feedbackUser.elements.message;
input.value = formDate.email ?? '';
textarea.value = formDate.message ?? '';

feedbackUser.addEventListener('input', event => {
  formDate[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formDate));
});

feedbackUser.addEventListener('submit', event => {
  event.preventDefault();
  if (!input.value.trim() || !textarea.value.trim()) {
    alert('Fill please all fields');
    return;
  }
  console.log(formDate);
  localStorage.removeItem(localStorageKey);
  formDate.email = '';
  formDate.message = '';

  feedbackUser.reset();
});

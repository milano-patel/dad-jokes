const jokeBtn = document.getElementById('jokeBtn');
const jokeEl = document.getElementById('joke');

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => (jokeEl.innerText = data.joke));
}

jokeBtn.addEventListener('click', generateJoke);


const input = document.querySelector('input')
const log = document.getElementById('log')

input.addEventListener('invalid', (e) => {
  log.appendChild(Object.assign(
    document.createElement('li'),
    { textContent: JSON.stringify(e.target.value) }
  ))
})
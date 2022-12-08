
/*const input = document.querySelector('input')
const log = document.getElementById('log')

input.addEventListener('invalid', (e) => {
  log.appendChild(Object.assign(
    document.createElement('li'),
    { textContent: JSON.stringify(e.target.value) }
  ))
})*/

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
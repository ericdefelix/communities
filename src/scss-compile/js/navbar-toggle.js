export function CustomToggleNavbar (selector) {
  selector.onclick = function (e) {
    e.preventDefault()
    const btn = e.currentTarget
    const target = document.getElementById(btn.getAttribute('data-target').split('#')[1])
    const body = document.querySelector('body')
    const height = document.querySelector('.hc-global-header').offsetHeight

    if (btn.classList.value.includes('is-active')) {
      btn.classList.remove('is-active')
      target.classList.remove('expanded')
      target.style.top = ''
      body.classList.remove('no-scroll')
    } else {
      btn.classList.add('is-active')
      target.classList.add('expanded')
      target.style.top = `${height}px`
      body.classList.add('no-scroll')
    }
  }
}

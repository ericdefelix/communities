export function CustomToggleNavbar(selector) {
  selector.onclick = function (e) {
    e.preventDefault();    
    const btn = e.currentTarget;
    btn.classList.value.includes('is-active') ? 
      btn.classList.remove('is-active') :
      btn.classList.add('is-active');
  }
};
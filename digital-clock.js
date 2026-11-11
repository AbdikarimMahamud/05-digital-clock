const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const toggle = document.getElementById('toggle');
let hour24 = true;
function pad(n) { return String(n).padStart(2, '0'); }
function tick() {
  const d = new Date();
  let h = d.getHours();
  let suffix = '';
  if (!hour24) {
    suffix = h >= 12 ? ' PM' : ' AM';
    h = h % 12 || 12;
  }
  timeEl.textContent = pad(h) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + suffix;
  dateEl.textContent = d.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
toggle.addEventListener('click', function () {
  hour24 = !hour24;
  toggle.textContent = hour24 ? 'Switch to 12-hour' : 'Switch to 24-hour';
  tick();
});
setInterval(tick, 1000);
tick();

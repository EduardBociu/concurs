let header = document.querySelector("div.header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > vhTOpx(20)) {
    header.style.top = `${window.pageYOffset}px`;
  } else {
    header.style.top = `${vhTOpx(20)}px`;
  }
});

var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName("body")[0],
  x = w.innerWidth || e.clientWidth || g.clientWidth,
  y = w.innerHeight || e.clientHeight || g.clientHeight;

function vhTOpx(value) {
  var result = (y * value) / 100;
  return result;
}

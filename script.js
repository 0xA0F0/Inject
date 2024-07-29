
function lolhack() {
  let fireScript = document.createElement('script');
fireScript.src = "https://cdn.jsdelivr.net/npm/fireworks-js@2.x/dist/index.umd.js";
document.head.append(fireScript);
  
let container = document.createElement('div');
container.style.width = '100%';
container.style.height = '100%';
container.style.position = 'fixed';
container.style.top = '0';
container.style.left = '0';
  container.style.zIndex = '9999';
  container.style.pointerEvents = 'none';
document.body.append(container);
fireScript.onload = function() {
  const fireworks = new Fireworks.default(container);
  fireworks.start()
}
}

lolhack();
document.addEventListener('turbolinks:load', lolhack);

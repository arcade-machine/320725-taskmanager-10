export function renderTemplate(container, template, where = `afterend`, timesToRender = 1) {
  let fragment = ``;
  const RENDER_COUNT = Array(timesToRender).fill(``);
  RENDER_COUNT.forEach(
      ()=> {
        fragment += template;
      });
  container.insertAdjacentHTML(where, fragment);
}

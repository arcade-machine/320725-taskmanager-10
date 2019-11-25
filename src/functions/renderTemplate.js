export function renderTemplate(container, template, where = `afterend`, timesToRender = 1) {
  let fragment = ``;
  for (let i = 0; i < timesToRender; i++) {
    fragment += template;
  }
  container.insertAdjacentHTML(where, fragment);
}

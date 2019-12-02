export function renderTemplate(container, template, where = `afterend`) {
  container.insertAdjacentHTML(where, template);
}

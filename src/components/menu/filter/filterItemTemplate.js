export const filterItemTemplate = (name) => {
  return `
  <input
    type="radio"
    id="filter__${name.toLowerCase()}"
    class="filter__input visually-hidden"
    name="${name.toLowerCase()}"
    checked
  />
  <label for="filter__${name.toLowerCase()}" class="filter__label">
    ${name} <span class="filter__${name.toLowerCase()}-count"></span></label
  >
  `;
};

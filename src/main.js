import { menuTemplate as menuTemplate } from "./components/menu/menuTemplate";
import { filterTemplate as filterTemplate } from "./components/menu/filterTemplate";
import { boardTemplate as boardTemplate } from "./components/content/boardTemplate";
import { loadMoreButtonTemplate as loadButtonTemplate } from "./components/content/loadMoreButtonTemplate";
import { cardTemplate as defaultCardTemplate } from "./components/menu/card-templates/cardTemplate";
import { editedCardTemplate as editCardTemplate } from "./components/menu/card-templates/editedCardTemplate";

import { renderTemplate as renderTemplate } from "./functions/renderTemplate";

function renderMenu() {
  const control = document.querySelector(`.control`);
  const controlTitle = control.querySelector(`.control__title`);

  renderTemplate(controlTitle, menuTemplate);
  renderTemplate(control, filterTemplate);
}

function renderFilter() {
  const filter = document.querySelector(`.filter`);

  renderTemplate(filter, boardTemplate);
}

function renderContent() {
  const board = document.querySelector(`.board`);
  const boardTasks = board.querySelector(`.board__tasks`);

  renderTemplate(boardTasks, editCardTemplate, `afterbegin`);
  renderTemplate(boardTasks, defaultCardTemplate, `beforeend`, 3);
  renderTemplate(boardTasks, loadButtonTemplate);
}

renderMenu();
renderFilter();
renderContent();

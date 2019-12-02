import { menuTemplate } from "./components/menu/menuTemplate";
import { filterTemplate } from "./components/menu/filterTemplate";
import { boardTemplate } from "./components/content/boardTemplate";
import { loadMoreButtonTemplate } from "./components/content/loadMoreButtonTemplate";
import { cardTemplate } from "./components/menu/card-templates/cardTemplate";
import { editedCardTemplate } from "./components/menu/card-templates/editedCardTemplate";

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

  renderTemplate(boardTasks, editedCardTemplate, `afterbegin`);
  renderTemplate(boardTasks, cardTemplate, `beforeend`, 3);
  renderTemplate(boardTasks, loadMoreButtonTemplate);
}

renderMenu();
renderFilter();
renderContent();

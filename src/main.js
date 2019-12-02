import { menuTemplate } from "./components/menu/menuTemplate";
import { filterTemplate } from "./components/menu/filter/filterTemplate";
import { filterItemTemplate } from "./components/menu/filter/filterItemTemplate";
import { boardTemplate } from "./components/content/boardTemplate";
import { loadMoreButtonTemplate } from "./components/content/loadMoreButtonTemplate";
import { cardTemplate } from "./components/content/card-templates/cardTemplate";
import { editedCardTemplate } from "./components/content/card-templates/editedCardTemplate";
import { tagTemplate } from "./components/content/card-templates/blocks/hashtagtemplate";

import { renderTemplate } from "./functions/renderTemplate";
import { getRandomNumber } from "./functions/commonFunctions";
import { getRandomDate } from "./functions/commonFunctions";
import { applyDaysToDate } from "./functions/commonFunctions";
import { getPrettyDate } from "./functions/commonFunctions";

const cardData = {
  "description": [
    `Извучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ],
  "dueDate": new Date(),
  "repeatingDays": {
    "mo": true,
    "tu": true,
    "we": true,
    "th": true,
    "fr": true,
    "sa": true,
    "su": true
  },
  "tags": [
    `homerwork`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
    `todo`,
    `personal`,
    `important`
  ],
  "color": [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ],
  "isFavorite": true,
  "isArchive": false
};

const filterData = {
  "title": [
    `All`,
    `Overdue`,
    `Today`,
    `Favorites`,
    `Repeating`,
    `Tags`,
    `Archive`
  ]
};

function renderMenu() {
  const control = document.querySelector(`.control`);
  const controlTitle = control.querySelector(`.control__title`);

  renderTemplate(controlTitle, menuTemplate);
  renderTemplate(control, filterTemplate());
}

function renderFilter() {
  const filter = document.querySelector(`.filter`);

  filterData.title.forEach((title) =>{
    renderTemplate(filter, filterItemTemplate(title), `beforeend`);
  });
  renderTemplate(filter, boardTemplate);
}

function renderContent() {
  const board = document.querySelector(`.board`);
  const boardTasks = board.querySelector(`.board__tasks`);
  const CARD_RENDER_COUNT = 7;

  renderTemplate(boardTasks, editedCardTemplate(
      cardData.color[getRandomNumber(0, cardData.color.length - 1)],
      cardData.description[getRandomNumber(0, cardData.description.length - 1)]
  ), `afterbegin`);
  for (let i = 0; i < CARD_RENDER_COUNT; i++) {
    const DAY_AND_MONTH = getPrettyDate(
        getRandomDate(
            applyDaysToDate(cardData.dueDate, 7), applyDaysToDate(cardData.dueDate, -7)
        ));
    renderTemplate(boardTasks, cardTemplate(
        cardData.color[getRandomNumber(0, cardData.color.length - 1)],
        cardData.description[getRandomNumber(0, cardData.description.length - 1)],
        DAY_AND_MONTH
    ), `beforeend`);
  }

  const hashtagLists = boardTasks.querySelectorAll(`.card__hashtag-list`);
  hashtagLists.forEach((list)=> {
    const HASHTAG_MAXIMUM_RENDER_COUNT = 3;
    for (let i = 0; i < getRandomNumber(0, HASHTAG_MAXIMUM_RENDER_COUNT); i++) {
      renderTemplate(list, tagTemplate(cardData.tags[getRandomNumber(0, cardData.tags.length - 1)]), `beforeend`);
    }
  });

  renderTemplate(boardTasks, loadMoreButtonTemplate);
}

renderMenu();
renderFilter();
renderContent();

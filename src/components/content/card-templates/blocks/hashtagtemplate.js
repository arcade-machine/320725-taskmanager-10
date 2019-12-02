export const tagTemplate = (hashtagText) => {
  return `
  <span class="card__hashtag-inner">
    <span class="card__hashtag-name">
      #${hashtagText}
    </span>
  </span>
  `;
};

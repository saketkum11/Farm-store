function sortData(state, items) {
  if (state.showSort && state.showSort === 'PRICE_LOW_TO_HIGH') {
    return [...items].sort((a, b) => a.price - b.price);
  }
  if (state.showSort === 'PRICE_HIGH_TO_LOW') {
    return [...items].sort((a, b) => b.price - a.price);
  }
  return items;
}

const compose = (state, items, ...restFuntions) => {
  return restFuntions.reduce((acc, current) => current(state, acc), items);
};

export {
  sortData,
  FilterCategoryData,
  FilterPriceData,
  FilterRatingData,
  compose,
};

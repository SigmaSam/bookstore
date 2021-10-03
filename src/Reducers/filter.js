import { CHANGE_FILTER } from '../Actions/index';

const filterReducer = (state = 'All', action) => {
  const { filter, type } = action;

  switch (type) {
    case CHANGE_FILTER:
      return filter;
    default:
      return state;
  }
};

export default filterReducer;

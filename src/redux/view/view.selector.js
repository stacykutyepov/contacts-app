import { createSelector } from 'reselect';

const getView = (state) => state.view;

export const selectView = createSelector([getView], view => view.view);
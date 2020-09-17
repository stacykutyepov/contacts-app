import ViewTypes from './view.types';

export const switchView = (view) => ({
    type: ViewTypes.SWITCH_VIEW, payload: view
})
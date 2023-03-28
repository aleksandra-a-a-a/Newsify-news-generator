import { setView } from './reducer';

export const toggleView = () => (dispatch, getState) => {
  const { app } = getState();
  const view = app.view === 'list' ? 'tile' : 'list';
  dispatch(setView(view));
};

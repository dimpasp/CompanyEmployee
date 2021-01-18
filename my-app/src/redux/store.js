import { configureStore } from '@reduxjs/toolkit';
import ActionsRedux from './actionsRedux';

export default configureStore({
  reducer: {
    actionsRedux: ActionsRedux,
  },
});

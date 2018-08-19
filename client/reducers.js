/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import lanes from './modules/Lane/LaneReducer';
import notes from './modules/Note/NoteReducer';
import intl from './modules/Intl/IntlReducer';
import kanban from './modules/Kanban/KanbanReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  lanes,
  notes,
  intl,
  kanban,
});

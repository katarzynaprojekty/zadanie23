import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import Edit from '../../components/Edit.js';
import * as noteActions from '../Note/NoteActions';

// Import Style
// import styles from './Notes.css';

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote, moveWithinLane}) => (
  <ul className={styles.Notes}>{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
      moveWithinLane={moveWithinLane}
      laneId={laneId}
    >
      <Edit
        editing={note.editing}
        value={note.task}
        onValueClick={() => editNote(note.id)}
        onUpdate={task => updateNote({
          ...note,
          task,
          editing: false,
        })}
        onDelete={() => deleteNote(note.id, laneId)}
      />
    </Note>
  )}</ul>
  );

Notes.propTypes = {
  deleteNoteRequest: PropTypes.func,
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  editNote: PropTypes.func,
  notes: PropTypes.array,
  laneId: PropTypes.string,
};

const mapDispatchToProps = {
  ...noteActions,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);

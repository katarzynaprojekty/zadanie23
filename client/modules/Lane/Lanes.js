import React from 'react';
import PropTypes from 'prop-types';
import Lane from './LaneContainer.js';

const Lanes = ({ lanes, moveNotes }) => {
  return (
    <div className="lanes">{lanes.map(lane =>
      <Lane className="lane" key={lane.id} lane={lane} moveNotes={moveNotes}/>
    )}</div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
  moveNotes: PropTypes.func,
};

export default Lanes;

import React from 'react';
import { connect } from 'react-redux';
import { add, toggle, set } from '../store/actions';

function Calculator({ value, id, title, add, toggle, set }) {
  return (
    <div>
      value : {value}
      id : {id}
      title : {title}
      <button onClick={() => add(5)}>Add 5</button>
      <button onClick={() => set(1)}>set</button>
    </div>
  );
}

const mapStateToProps = ({ value, userName, id, title }) => ({ value, userName, id, title });

const mapDispatchToprops = {
  add,
  toggle,
  set
};
export default connect(mapStateToProps, mapDispatchToprops)(Calculator);
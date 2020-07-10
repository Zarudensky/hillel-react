import React from 'react';
import { connect } from 'react-redux';
import { add } from '../store/actions';

function TodoItem({ item, onToggle }) {
  return (
    <li onClick={onToggle.bind(null, item)} style={getStyles(item)}>
      {item.title}test
    </li>
  );
}

function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

const mapDispatchToprops = {
  add,
};

export default connect(mapStateToProps, mapDispatchToprops)(TodoItem);

function getStyles(item) {
  return {
    backgroundColor: item.isDone ? 'green' : 'red',
  };
}
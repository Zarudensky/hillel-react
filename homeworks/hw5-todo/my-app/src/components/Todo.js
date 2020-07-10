import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { add, toggle, setTitle } from '../store/actions';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function Todo({ Todos, value, id, title, add, toggle, setTitle }) {
  const [todoItems, setTodoItems] = useState([]);
  const [title2, setTitle2] = useState('');

  useEffect(() => {
    console.log('test');
    // api.get().then(({ data }) => setTodoItems(data));
  //   Todos.get().then(({ data }) => setTodoItems(data));
  }, []);

  function toggleItem(item) {
    // api.put(item.id, { ...item, isDone: !item.isDone }).then(({ data }) =>
    //   setTodoItems(
    //     todoItems.map((item) => (item.id === data.id ? data : item))
    //   )
    // );
  }

  function onTitleChange(e) {
    setTitle(e.target.value);
  }

  function onSave() {
    console.log('onSave');
    // api.post('', {
    //   title,
    //   isDone: false,
    // }).then(({ data }) => setTodoItems([...todoItems, data]));
    
    console.log(Todos);
    
    setTitle('');
  }

  return (
    <>
      <ul>
        {todoItems.map((item) => (
          <TodoItem key={item.id} item={item} onToggle={toggleItem} />
        ))}
      </ul>
      value : {value}
      id : {id}
      title : {title}
      <TodoForm
        title={title}
        onTitleChange={onTitleChange}
        onSave={onSave}
      />
    </>
  );
}

const mapStateToProps = ({ Todos, value, id, title }) => ({ Todos, value, id, title });

const mapDispatchToprops = {
  add,
  toggle,
  setTitle,
};
export default connect(mapStateToProps, mapDispatchToprops)(Todo);
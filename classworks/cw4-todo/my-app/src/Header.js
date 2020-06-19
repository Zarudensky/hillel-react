import React, { useState } from 'react'

function Header(props) {
  const [greeting, setGreeting] = useState('Hellow');
  const [name, setName] = useState('');

  function onChange(e) {
    setName(e.target.value);
  }
  return (
    <div onClick={() => setGreeting('Hi')}>
      {greeting}, {name}
      <div>
        <input type="text" value={name} onChange={onChange}/>
      </div>
    </div>
  )
}

export default Header

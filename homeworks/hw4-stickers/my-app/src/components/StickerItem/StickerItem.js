import React from 'react';

import './StickerItem.css';

function StickerItem({ item, onToggle, onDelete }) {

  function onDeleteBtnClick() {
    onDelete(item);
  }

  return (
      <div 
        className="sticker"
      >
        {item.title}
        <div className="sticker__header">
          <button className="btn btn__drag">O</button>
          <button className="btn btn__delete" onClick={onDeleteBtnClick}>X</button>
        </div>
        <textarea placeholder="Write something">{item.description}</textarea>
      </div>
  );
}

export default StickerItem;
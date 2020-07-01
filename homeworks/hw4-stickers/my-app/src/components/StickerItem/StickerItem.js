import React from 'react';

import './StickerItem.css';

function StickerItem({ sticker, onChange, onDelete, onSave }) {

  let prevPosition = { x: 0, y: 0 };

  function onDeleteBtnClick() {
    onDelete(sticker);
  }
  
  function onValueChange(e) {
    onChange(sticker.id,  e.target.value );
  }

  function getStickerStyle() {
    const { x, y } = sticker;
    return {
      ...stickerStyle,
      top: y,
      left: x,
    };
  }

  function startDrag(e) {
    prevPosition = {
      x: e.clientX,
      y: e.clientY,
    };
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
  }

  function stopDrag(e) {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
  }

  function drag(e) {
    const { x, y } = sticker;

    onChange(sticker.id, {
      x: x + (e.clientX - prevPosition.x),
      y: y + (e.clientY - prevPosition.y),
    });
  }

  function saveSticker() {
    onSave(sticker.id);
  }

  return (
    <div 
      className="sticker"
      style={getStickerStyle()}
    >
      <div className="sticker__header">
        <button 
          className="btn btn__drag"
          onMouseDown={startDrag}
          onMouseUp={saveSticker}
        >O</button>
        <button className="btn btn__delete" onClick={onDeleteBtnClick}>X</button>
      </div>
      <textarea 
        placeholder="Write something"
        value={sticker.description}
        onChange={onValueChange}
        onBlur={saveSticker}
      ></textarea>
    </div>
  );
}

const stickerStyle = {
  position: 'absolute'
};

export default StickerItem;
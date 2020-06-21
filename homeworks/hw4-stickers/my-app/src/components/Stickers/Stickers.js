import React, { useState, useEffect } from 'react';
import StickerItem from '../StickerItem/StickerItem';
import api from '../../api';
import './Stickers.css';

function Stickers() {
  const [stickerItems, setStickerItems,] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    api.get().then(({ data }) => setStickerItems(data));
  }, []);

  function onDelete(item) {
    api.delete(item.id).then(({ data }) => setStickerItems(
      stickerItems.filter((item) => item.id !== data.id)
      )
    )
  }

  function onAddSticker() {
    api.post('', {description: ''}).then(({ data }) => setStickerItems([...stickerItems, data]));
  }
  // function onDescriptionChange(e) {
  //     setDescription(e.target.value);
  // }

  // function onSave() {
  //     api.post('', {
  //         description,
  //         isDone: false,
  //     }).then(({ data }) => setStickerItems([...todoItems, data]));

  //     setDescription('');
  // }

  return (
    <>
      <div className="header">
        <h1 className="title title__main">Stickers</h1>
        <button className="btn btn__add" onClick={onAddSticker}>Add Sticker</button>
      </div>
      <div className="stickers">
        {stickerItems.map((item) => (
          <StickerItem key={item.id} item={item} onDelete ={onDelete} />
        ))}
      </div>
    </>
  );
}

export default Stickers;
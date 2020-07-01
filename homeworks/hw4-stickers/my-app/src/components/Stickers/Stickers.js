import React, { useState, useEffect } from 'react';
import StickerItem from '../StickerItem/StickerItem';
import api from '../../api';
import './Stickers.css';

const EMPTY_STICKER = {
  description: '',
  x: 20,
  y: 100,
};

function Stickers() {
  const [stickerItems, setStickerItems,] = useState([]);

  useEffect(() => {
    api.get().then(({ data }) => setStickerItems(data));
  }, []);

  function onDelete(sticker) {
    api.delete(sticker.id).then(() => {
      setStickerItems(stickerItems.filter((el) => el !== sticker));
    });
  }

  function onAddSticker() {
    api.post('', EMPTY_STICKER).then(({ data }) => setStickerItems([...stickerItems, data]));
  }

  function changeSticker(id, updatedData) {
    console.log('changeSticker');
    console.log(id);
    console.log(updatedData);
    let sticker = stickerItems.find((el) => el.id === id);
    console.log(sticker);
    sticker = {
      ...sticker,
      ...updatedData,
    };

    const newStickers = stickerItems.map((el) =>
      el.id === sticker.id ? sticker : el
    );
    setStickerItems(newStickers);
  }

  function saveSticker(id) {
    const sticker = stickerItems.find((el) => el.id === id);

    api.put(id, sticker);
  }

  return (
    <>
      <div className="header">
        <h1 className="title title__main">Stickers</h1>
        <button className="btn btn__add" onClick={onAddSticker}>Add Sticker</button>
      </div>
      <div className="stickers">
        {stickerItems.map((sticker) => (
          <StickerItem 
            key={sticker.id}
            sticker={sticker}
            onDelete={onDelete}
            onChange={changeSticker}
            onSave={saveSticker}
          />
        ))}
      </div>
    </>
  );
}

export default Stickers;
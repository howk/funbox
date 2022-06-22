import './Item.scss';
import { useState } from 'react';
import cn from 'classnames';

export default function Item({ type, name, variant, weight, disabled, selectedText, description = null }) {

  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);

  const itemClass = cn('item featured__item', { 
    selected,
    hovered,
    disabled
  });

  const itemSubClass = cn('item-sub', { 
    disabled,
    hovered
  });

  function renderTypeText() {
    if (hovered === true && selected === true) {
      return 'Котэ не одобряет?';
    }
    return type;
  }

  function renderDescription(data) {
    if (data.length === 0) {
      return null;
    }
    const items = data.map(({ id, value }) => <li key={id} dangerouslySetInnerHTML={{__html:value}} />);
    return <ul className="item__description">{items}</ul>
  }

  function renderSubItemButton() {
    if (disabled !== true && selected !== true) {
      return (
        <button
          onClick={() => {
            setSelected(!disabled ? !selected : false);
            setHovered(false);
          }}
          onMouseEnter={() => {setHovered(!disabled ? true : false)}}
          onMouseLeave={() => {setHovered(false)}}          
          className="item-sub__button"
          tabIndex="-1"
          type="button">
          купи
        </button>
      );
    }
  }

  function renderSubItemText() {
    if (disabled === true) {
      return `Печалька, ${variant} закончился.`;
    }
    if (selected === true) {
      return selectedText;
    }
    return 'Чего сидишь? Порадуй котэ, ';
  }

  return (
    <>
      <div 
        onClick={() => {
          setSelected(!disabled ? !selected : false);
          setHovered(false);
        }}
        onMouseEnter={() => {setHovered(!disabled ? true : false)}}
        onMouseLeave={() => {setHovered(false)}}
        className={itemClass}
        tabIndex={disabled !== true ? 0 : -1}>
        <div className="item__inner">
          <div className="item__content">
            <div className="item__top">
              <p className="item__type">{renderTypeText()}</p>
              <p className="item__name">{name}</p>
              <p className="item__variant">{variant}</p>
              {renderDescription(description)}
            </div>
            <span className="item__photo-wrapper">
              <img className="item__photo" src="images/photo-cat.png" srcSet="images/photo-cat_2x.png 2x" alt="" />
            </span>
            <p className="item__weight"><strong>{weight}</strong> кг</p>
          </div>
        </div>
      </div>
      <p className={itemSubClass}>
        {renderSubItemText()} {renderSubItemButton()}
      </p>
    </>
  );
}

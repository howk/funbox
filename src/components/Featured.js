import './Featured.scss';
import Item from '../components/Item';

export default function Featured({ title }) {
  return (
    <div className="featured-wrapper">
      <h1 className="h1">Ты сегодня покормил кота?</h1>
      <div className="items-grid featured">
        <div className="items-grid__column">
          <Item
            selectedText="Печень утки разварная с артишоками."
            disabled={true}
            type="Сказочное заморское яство"
            name="Нямушка"
            variant="с фуа гра"
            weight="0.5"
            description={[
              {
                id: 0,
                value: '<strong>10</strong> порций'
              },
              {
                id: 1,
                value: 'мышь в подарок'
              }
            ]}   
          />
        </div>
        <div className="items-grid__column">
          <Item
            selectedText="Головы щучьи с чесноком да свежайшая сёмгушка"
            disabled={false}
            type="Сказочное заморское яство"
            name="Нямушка"
            variant="с рыбой"
            weight="2"
            description={[
              {
                id: 0,
                value: '<strong>40</strong> порций'
              },
              {
                id: 1,
                value: '<strong>2</strong> мыши в подарок'
              }
            ]}            
          />
        </div>
        <div className="items-grid__column">
          <Item
            selectedText="Филе из цыплят с трюфелями в бульоне"
            disabled={false}
            type="Сказочное заморское яство"
            name="Нямушка"
            variant="с курой"
            weight="5"
            description={[
              {
                id: 0,
                value: '<strong>100</strong> порций'
              },
              {
                id: 1,
                value: '<strong>5</strong> мышей в подарок'
              },
              {
                id: 2,
                value: 'заказчик доволен'
              }              
            ]}             
          />
        </div>                
      </div>
    </div>
  );
}

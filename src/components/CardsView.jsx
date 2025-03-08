import ShopCard from './ShopCard';

export default function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((card, idx) => (
        <ShopCard key={idx} card={card} />
      ))}
    </div>
  );
}


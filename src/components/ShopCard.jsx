export default function ShopCard({ card }) {
    return (
      <div className="shop-card">
        <img src={card.img} alt={card.name} />
        <h3>{card.name}</h3>
        <span>{card.color}</span>
        <div className="shop-card-footer">
          <button className="btn">{"$" + card.price} - Add to cart</button>
        </div>
      </div>
    );
  }
  
  
  
  
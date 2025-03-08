export default function ShopItem({ item }) {
    return (
      <div className="shop-item">
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <span>{item.color}</span>
        <span className="price">${item.price}</span>
        <button className="btn">Add to cart</button>
      </div>
    );
  }
  
  
  
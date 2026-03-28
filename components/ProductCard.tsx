export default function ProductCard({ product }: any) {
  return (
    <div className="card">
      <div className="image-box">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="card-content">
        <h2>{product.title}</h2>
        <p className="price">₹ {product.price}</p>
      </div>
    </div>
  );
}
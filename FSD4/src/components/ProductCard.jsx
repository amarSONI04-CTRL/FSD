export default function ProductCard({ item, onOpen }) {
return (
<article className="card" onClick={onOpen} role="button" tabIndex={0}>
<img src={item.image} alt={item.title} />
<div className="card-body">
<h3>{item.title}</h3>
<p className="price">₹{item.price.toLocaleString()}</p>
</div>
</article>
);
}
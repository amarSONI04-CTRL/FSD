import React, { useState } from 'react';
import products from './data/products';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import ErrorBoundary from './components/ErrorBoundary';


export default function App() {
const [selected, setSelected] = useState(null);
const [query, setQuery] = useState('');


const filtered = products.filter(p =>
p.title.toLowerCase().includes(query.toLowerCase())
);


return (
<div className="container">
<header className="header">
<h1>Product Gallery</h1>
<input
className="search"
placeholder="Search products..."
value={query}
onChange={e => setQuery(e.target.value)}
/>
</header>


<ErrorBoundary>
<section className="grid">
{filtered.map(item => (
<ProductCard key={item.id} item={item} onOpen={() => setSelected(item)} />
))}
</section>
</ErrorBoundary>


{selected && (
<ProductModal item={selected} onClose={() => setSelected(null)} />
)}


<footer className="footer">© {new Date().getFullYear()}</footer>
</div>
);
}
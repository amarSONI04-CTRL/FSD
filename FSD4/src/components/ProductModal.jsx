import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';


export default function ProductModal({ item, onClose }) {
const portalRoot = document.getElementById('portal-root');


useEffect(() => {
const onKey = e => e.key === 'Escape' && onClose();
document.addEventListener('keydown', onKey);
document.body.style.overflow = 'hidden';
return () => {
document.removeEventListener('keydown', onKey);
document.body.style.overflow = '';
};
}, [onClose]);


const modal = (
<div className="modal-backdrop" onClick={onClose}>
<div className="modal" onClick={e => e.stopPropagation()}>
<button className="close" onClick={onClose} aria-label="Close">×</button>
<img src={item.image} alt={item.title} />
<div className="modal-body">
<h2>{item.title}</h2>
<p className="price">₹{item.price.toLocaleString()}</p>
<p>{item.description}</p>
<button className="primary" onClick={onClose}>Add to Cart</button>
</div>
</div>
</div>
);


return createPortal(modal, portalRoot);
}
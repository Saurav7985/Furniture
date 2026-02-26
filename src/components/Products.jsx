import React from 'react'
import '../styles/product.scss'

const Products = () => {

    const products = [
  {
    id: 1,
    name: "Modern Sofa",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
  },
  {
    id: 2,
    name: "Wooden Dining Table",
    price: "₹18,499",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  {
    id: 3,
    name: "Luxury Armchair",
    price: "₹12,999",
    image: "https://plus.unsplash.com/premium_photo-1684863506867-4a33a434e940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29vZCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    name: "Minimal Study Desk",
    price: "₹9,499",
    image: "https://plus.unsplash.com/premium_photo-1680632914285-0bc6110e475c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29vZCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  }
];

  return (
     <section className="products">
      <h2 className="products__title">Our Collection</h2>

      <div className="products__grid">
        {products.map((item) => (
          <div key={item.id} className="products__card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
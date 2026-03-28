"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  // ✅ FETCH ON CLIENT SIDE
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("Using fallback data");

        setProducts([
          {
            id: 1,
            title: "Sample Product 1",
            price: 499,
            image: "https://via.placeholder.com/200",
            category: "electronics",
          },
          {
            id: 2,
            title: "Sample Product 2",
            price: 999,
            image: "https://via.placeholder.com/200",
            category: "men's clothing",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  let filtered = [...products];

  if (search) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (price === "low") filtered = filtered.filter((p) => p.price < 100);
  if (price === "mid")
    filtered = filtered.filter((p) => p.price >= 100 && p.price <= 500);
  if (price === "high") filtered = filtered.filter((p) => p.price > 500);

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading products...</p>;
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Filters</h2>

        <p>Category</p>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
        </select>

        <p>Price</p>
        <select onChange={(e) => setPrice(e.target.value)}>
          <option value="">All</option>
          <option value="low">Under ₹100</option>
          <option value="mid">₹100 - ₹500</option>
          <option value="high">Above ₹500</option>
        </select>
      </aside>

      <section className="content">
        <div className="top-bar">
          <input
            className="search-box"
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="sort-dropdown"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>

        <div className="grid">
          {filtered.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
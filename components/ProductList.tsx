"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: any) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    let temp = [...products];

    if (search) {
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category) {
      temp = temp.filter((p) => p.category === category);
    }

    if (price === "low") temp = temp.filter((p) => p.price < 100);
    if (price === "mid")
      temp = temp.filter((p) => p.price <= 500 && p.price >= 100);
    if (price === "high") temp = temp.filter((p) => p.price > 500);

    if (sort === "low") temp.sort((a, b) => a.price - b.price);
    if (sort === "high") temp.sort((a, b) => b.price - a.price);

    setFiltered(temp);
  }, [search, sort, category, price, products]);

  return (
    <div className="container">
      {/* Sidebar */}
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

      {/* Content */}
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
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

        <div className="grid">
          {filtered.map((item: any) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

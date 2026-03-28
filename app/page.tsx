import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Navbar />

      <main className="wrapper">
        <div className="page-header">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Explore premium items curated just for you</p>
        </div>

        <ProductList products={products} />
      </main>

      <Footer />
    </>
  );
}

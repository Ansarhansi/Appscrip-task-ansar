import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 }, // stable for deployment
    });

    if (!res.ok) throw new Error("Fetch failed");

    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    return []; // fallback
  }
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="wrapper">
        <div className="page-header">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Explore premium items curated just for you</p>
        </div>

        <ProductList />
      </main>

      <Footer />
    </>
  );
}

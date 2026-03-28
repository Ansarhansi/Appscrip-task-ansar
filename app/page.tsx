async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("API failed");

    return res.json();
  } catch (error) {
    console.log("Using fallback data");

   
    return [
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
      {
        id: 3,
        title: "Sample Product 3",
        price: 299,
        image: "https://via.placeholder.com/200",
        category: "women's clothing",
      },
    ];
  }
}
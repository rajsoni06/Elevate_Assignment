import { useState } from "react";
import { Banner, Header, Products, SideBar } from "./components";
import { useProducts } from "./context";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedProds, setSearchedProds] = useState([]);
  let products = useProducts();
  const categories = [...new Set(products.map((product) => product.category))];

  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleSearch = () => {
    let updatedProducts = [];
    if (searchTerm !== "") {
      updatedProducts = filteredProducts.filter(
        (item) =>
          item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    }

    setSearchedProds(updatedProducts);
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <Banner
        selectedCategory={selectedCategory}
        handleChange={handleChange}
        setOpenSideBar={setOpenSideBar}
        categories={categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <Products
        updatedProducts={searchTerm ? searchedProds : filteredProducts}
      />
    </div>
  );
}

export default App;

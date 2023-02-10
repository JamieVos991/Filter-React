import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Productpage from "./Pages/ProductPage";

import "./App.css";
const App = () => {
  const [collectionForProductPage, setCollectionFromProductPage] = useState([]);

  const onGalleryCardClicked = (collection) => {
    setCollectionFromProductPage(collection);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage onGalleryCardClicked={onGalleryCardClicked} />} />
        <Route path="/product/:type" element={<Productpage collection={collectionForProductPage} />} />
      </Routes>
    </>
  );
}

export default App;
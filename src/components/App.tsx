import React from "react";
import { Header } from "./Header";
import { Advert } from "./Advert";
import { Offer } from "./Offer";
import { Subscription } from "./Subscription";
import { Info } from "./Info";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="page">
      <Header />
      <Advert />
      <Offer />
      <Subscription />
      <Info />
      <Footer />
    </div>
  );
}

export default App;

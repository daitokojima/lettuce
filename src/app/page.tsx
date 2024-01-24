import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Sns from "./components/sns";
import PlantSection from "./components/plantSection copy";

function page() {
  return (
    <div>
      <Header/>
      <PlantSection/>
      <Sns />
      <Footer />
    </div>
  );
}

export default page;

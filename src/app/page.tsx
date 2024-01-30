import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Sns from "./components/sns";
import PlantSection from "./components/plantSection";
import PlantText from "./components/plantText";

function page() {
  return (
    <div>
      <Header/>
      <PlantText/>
      <PlantSection/>
      <Sns />
      <Footer />
    </div>
  );
}

export default page;

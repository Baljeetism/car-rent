import React from "react";
import Navbar from './component/navbar';
import Header from './component/header';
import About from './component/about';
import Footer from './component/footer';
import Feature from "./component/feature";
import Reviews from "./component/reviews";
import Faq from "./component/faq";


 function App(){
   return (<div>
     <Navbar />
     <Header />
     <About />
     <Feature />
     <Faq />
     <Reviews />
     
     <Footer />
     
   </div>);
 }
export default App;
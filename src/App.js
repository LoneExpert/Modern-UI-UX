import React from "react";
import styles from "./style";
import {Navbar,Hero,Footer,Stats,Testimonials,Billing,Buisness,CardDeal,Client,CTA} from "./Components";
import './App.css';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden scroll-container">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar/>
        </div>
      </div>

      <div className={`bg-primary  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>  
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>  
          <Stats/>
          <Buisness/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Client/>
          <CTA/>
          <Footer/>
        </div>
      </div>

    </div>
  );
};

export default App;

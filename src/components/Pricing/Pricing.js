import React from 'react';
import styles from '../Pricing/Pricing.module.css'
import priceData from '../../Assets/Data/Pricing.json'
const Pricing = () => {
    console.log("All Priceng : ",priceData)
    return (
      <div>
        <div>
          <div className={`${styles.PricingTitle}`}>
            <h3>
              Most <span>
              popular affordable pricing
                </span> per jurisdictions are brought to
              you to kick off your adventure.
            </h3>
          </div>
        </div>
      </div>
    );
};

export default Pricing;
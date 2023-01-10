import React from 'react';
import styles from '../AdvancedAndguide/AdvancedAndguide.module.css'
import BankImg from '../../Assets/Bank.png'
import Arrow from '../../Assets/Arrow.png'
import AdvancedGuideCard from '../AdvancedGuideCard/AdvancedGuideCard';
const AdvancedAndguide = () => {
    const leftCardOne = [
        {
      title: "Bank Account Setup",
      description:
        "There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parents strategies and have changed local requirements overnight in the past.But we are here to help you.",
        img:"https://i.ibb.co/qsw8ms1/Bank.png"
    },
        {
      title: "UAE Company Visas",
      description:
        "Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you.",
        img:"https://i.ibb.co/qBc1Fw6/Group-2.png"
    },

]
    const rightCardOne = [
        {
            title: "Advice & Guidance",
            description:
              "All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today.",
              img:"https://i.ibb.co/nwBs3rt/Group.png"
          },
      
        {
      title: "Registration Document Perparation",
      description:
        "Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process.",
        img:"https://i.ibb.co/5xxmBbf/Group-1.png"
    },
        
]
console.log("Testing data",leftCardOne)
    return (
      <div className={`${styles.AllCard}`}>
        <div className={`${styles.leftSide}`}>
          <div className={`${styles.leftSideHeaderText}`}>
            <h5>
              Learn the ways in which you can benefit from a UAE/Offshore
              Company. Then get started on fulfilling your UAE dream.
            </h5>
            <p>Claim a Free Quote</p>
          </div>

          {leftCardOne?.map((item) => {
            return (
              <AdvancedGuideCard key={item.id} item={item}></AdvancedGuideCard>
            );
          })}
        </div>
        <div className={`${styles.rightSide}`}>
          {rightCardOne?.map((item) => {
            return (
              <AdvancedGuideCard key={item.id} item={item}></AdvancedGuideCard>
            );
          })}

          <div className={`${styles.RightSideFooter}`}>
            <h3>
              We have gathered a team of professionals to craft adequate
              services you can rely on for a friction free setup in UAE.
            </h3>
            <div>
            <p>More about our services</p>
            <img src={Arrow} alt='..'/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdvancedAndguide;
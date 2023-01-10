import React from 'react';
import styles from '../AdvancedGuideCard/AdvancedGuideCard.module.css'
import BankImg from '../../Assets/Bank.png'
import Arrow from '../../Assets/Arrow.png'
const AdvancedGuideCard = ({item}) => {
    return (
        <div>
            <div className={`${styles.leftSideCardOne}`}>
            <img className={`${styles.imgOne}`} src={item.img} alt="cardIm" />
            <div className={`${styles.leftSideCardOneBody}`}>
            <h4>{item.title}</h4>
            <p className={`${styles.leftSideCardOneBodyDes}`}>
              {item.description}
            </p>
            </div>

            <div className={`${styles.leftSideCardOneBodyFooter}`}>
                <p>
                Learn more
                </p>
                <img src={Arrow} alt='footer'/>
            </div>
          </div>
        </div>
    );
};

export default AdvancedGuideCard;
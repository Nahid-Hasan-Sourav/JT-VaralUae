import React from 'react';
import styles from '../MissionCard/MissionCard.module.css'
const MissionCard = ({item}) => {
    return (
        <div>
            <div className={`${styles.card}`}>
                 <div className={`${styles.cardBody}`}>
                    <img src={item.img} alt='card'/>
                    <h2>{item.title}</h2>
                    <p className={`${styles.cardDescription}`}>{item.description}</p>
                    
                 </div>
                 <div>
                 <p className={`${styles.cardBtn}`}>{item.btnTitle}</p>
                 </div>
            </div>
        </div>
    );
};

export default MissionCard;
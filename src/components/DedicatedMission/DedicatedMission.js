import React from 'react';
import VideoIcon from '../../Assets/videoIcon.png'
import styles from '../DedicatedMission/DedicatedMission.module.css'
import borderLeft from '../../Assets/missionComponentBgRight.png'
import data from '../../Assets/Data/Data.json'
import MissionCard from '../MissionCard/MissionCard';
const DedicatedMission = () => {
    console.log("All Data",data)
    return (
      <div>
        <div>
        <div className={`${styles.MissionSubTitle}`}>
          <p>Watch the video about UAE or Offshore Company Registration</p>
          <img src={VideoIcon} alt="video-icon" />
        </div>
        <div className={`${styles.MissionTitle}`}>
          <h1 className={`${styles.MissionTitleH1}`}>Dedicated</h1>
          <h1>to our mission we are</h1>
        </div>
        <div className={`${styles.MissionBg}`}>
            <img src={borderLeft} alt='mission'/>
          <div className={`${styles.MissionDescription}`}>
            <p>
              Our services include Company Formation & Renewals, Trust &
              Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote
              Management, Stock Trading Platforms, Ownership Solutions.
            </p>
          </div>
        </div>
        </div>

        <div className={`${styles.missionAllCard}`}>
            {
                data?.map((item)=>{
                    return(
                        <MissionCard
                        key={data.id}
                        item={item}
                        ></MissionCard>
                    )
                })
            }
        </div>
      </div>
    );
};

export default DedicatedMission;
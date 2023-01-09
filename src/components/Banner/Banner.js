import React from 'react';
import styles from '../Banner/Banner.module.css'
import BannerImg from '../../Assets/BannerRightImg.png'
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
    return (
      <div>
        <div>
          <div className={`${styles.wrap}`}>
            <div className={`${styles.search}`}>
            <button type="submit" className={`${styles.searchButton}`}>
                <FaSearch/>
            </button>

              <input
                type="text"
                className={`${styles.searchTerm}`}
                placeholder="Search a Term | Topic"
              />
              
            </div>
          </div>
        </div>

        <div className={`${styles.BannerParentGrid}`}>
          <div className={`${styles.BannerLeftPart}`}>
            <p className={`${styles.paraOne}`}>Claim a Free Quote</p>
            <h1 className={`${styles.BannerTitle}`}>
              <span className={`${styles.BannerTitleBoderB}`}>Get started</span> on fulfilling your Dubai or UAE dream.
            </h1>
            <p className={`${styles.paraTwo}`}>UAE & Offshore Company</p>
            <h3 className={`${styles.paraThree}`}>
              We provide you with information about UAE or Offshore Company
              Registration & help you setup your company with a bank account and
              visas.
            </h3>
            <div className={`${styles.BannerTwoBtn}`}>
              <button
              className={`${styles.BannerBtnOne}`}
              >Start a Company</button>
              <button
              className={`${styles.BannerBtnTwo}`}
              >Start a Company</button>
            </div>
          </div>
          <div className={`${styles.BannerRightPart}`}>
            <img
              src={BannerImg}
              className={`${styles.BannerImage}`}
              alt="Italian Trulli"
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;
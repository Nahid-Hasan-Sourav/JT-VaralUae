
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from '../Navbar/navbar.module.css'
import logo from '../../Assets/logo.png'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(`${styles.responsive_nav}`);
	};

	return (
		<header>
			<div>
            <img src={logo}
            className={`${styles.NavLogo}`}
            alt='logo'/>
            </div>
		<div className={`${styles.navItem}`}>
          <div>
          <nav ref={navRef}>
				<a href="/#" className={`${styles.navItemColor}`}>Home</a>
				<a href="/#" className={`${styles.navItemColor}`}>My work</a>
				<a href="/#" className={`${styles.navItemColor}`}>Blog</a>
				<a href="/#" className={`${styles.navItemColor}`}>About me</a>
				<a href="/#" className={`${styles.startACompany}`}>Start A Company</a>
				<button
					className={`${styles.navBtn} ${styles.navClosesBtn}`}
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
          </div>
        </div>
			<button className={`${styles.navBtn}`} onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
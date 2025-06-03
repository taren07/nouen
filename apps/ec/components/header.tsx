"use client"; 
import React from 'react';
import Link from 'next/link';
import styles from './styles/header.module.css';
import clsx from 'clsx';

const Header: React.FC = () => {
	const [isHeaderActive, setIsHeaderActive] = React.useState(false);
	return (
			<header
				style={{
					padding: "1rem",
					background: "#f5f5f5",
					borderBottom: "1px solid #ddd",
				}}
			>
				<h1 className={styles.logo}>
					<a href="/" className={styles.logoLink}>
						{/* <Logo class={styles.logoImg} alt="Logo" /> */}
					</a>
				</h1>
				<div
					className={clsx(
						styles.hamburger,
						isHeaderActive && styles.hamburgerActive
					)}
					onClick={() => setIsHeaderActive((prev) => !prev)}
				>
					<span></span>
					<span></span>
				</div>
			</header>
		);
};

export default Header;
import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Card from '../Card/Card';
import SideIcons from '../SideIcons/SideIcons';
import TechStacks from '../TechStacks/TechStacks';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Button } from '../Button/Button';
import About from '../About/About';
import { projects } from '../../Utils/Projects';
import Contact from '../Contact/Contact';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import Experiences from '../Experiences/Experiences';

const Home = ({ scrollRef }) => {
	const [projectArray, setProjectArray] = useState(
		projects.slice(0, 4),
	);
	const { newTheme } = React.useContext(ThemeContext);
	const [offset, setOffset] = useState(0);
	const [location, setLocation] = useState(0);
	useEffect(() => {
		AOS.init();
	});

	const handleOffset = () => {
		setOffset(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleOffset);
		return () => window.removeEventListener('scroll', handleOffset);
	}, []);

	useEffect(() => {
		document.body.style.backgroundColor = newTheme.background;
	}, [newTheme]);

	const handleButton = () => {};

	console.log(offset);
	// const handleShowMoreBtn = () => {
	// 	if (projects.length === projectArray.length) {
	// 		setProjectArray(projects.slice(0, 4));
	// 		window.scrollTo(0, location);
	// 	} else {
	// 		setProjectArray(projects);
	// 		setLocation(offset)
	// 	}
	// };

	return (
		<div ref={scrollRef}>
			<SideIcons />
			<div
				id='home'
				className={styles.profile}
				style={{ backgroundColor: `${newTheme.imgBackground}` }}
			>
				<div
					data-aos='fade-zoom-out'
					className={styles.intro}
					style={{
						color: `${newTheme.para}`,
						transform: `translateX(-${offset * 2.5}px)`,
						opacity: `${
							offset > 300 ? '0' : offset > 160 ? '.5' : '1'
						}`,
					}}
				>
					<h1>
						<span>Hi, My name is</span>
						<div
							className={styles.name}
							style={{ color: `${newTheme.title}` }}
						>
							Abhishek Pandey
						</div>
					</h1>
					<h1>
					I am a goal-oriented, productive and aspiring MERN-Stack web developer. Excited to become an integral part of an organization. 
                    {/* and make a significant contribution to its innovations. */}
					</h1>
					<div className={styles.btn}>
						<a
							href='https://drive.google.com/file/d/1KrZTW9gm5Vw2iK2SCyLwCAKCKzUNYSRC/view?usp=sharing' // Resume
							target='blank'
						>
							<Button
								text={
									<span className={styles.resumeBtn}>
										<span>Resume</span>{' '}
										<i className='fas fa-file-download'></i>
									</span>
								}
								handleButton={handleButton}
							/>
						</a>
					</div>
				</div>

				<div
					style={{
						transform: `translateX(${offset * 2.5}px)`,
						opacity: `${
							offset > 300 ? '0' : offset > 160 ? '.5' : '1'
						}`,
					}}
					className={styles.profileImage}
				>
					<img
						src='https://lh3.googleusercontent.com/mkjSpnWlhQ1Pwz6tHndiLw0lxDzaLzE_QRZY6T3BdKkSaHdRVzpjoBu9pCokJRDsoo7QaI1RhO8S5ckg_y_BEDJCJC3tZcqTI8gF4PUmjPwcKBqawmSfFJyGULOAqQYQF10E2BGnuDicYbP-kSt3XYR4sAwB8kSholqNcyqMc_cdZNT8o6MYKEjoTS_o-Ie6POs0VvITKYI6kv4POZ2Ccu26V_3wgUQH7fggMjMAoQzyuXO3HAazRRwfOgslRMqq7hwDOzfpRJ3UI5OfaaS8nt5hJXt-Pp14lOmthgED88xxXGcXX2yDpjxl47uLzRcOVzAkc-lhtoZSUFr6_3Cz1PCSI9azzkXuKxdWgtvmw-ElKb7lGk17MTaSGVJ1FiNbvUqfmQw6W7p8hBsw3ZMvcJiwk0aCmUOl33PETx3EqM_oBG3ORUTr_34A_PzA5QX9V55h9TF91H77YXdMbU59grgg8UTcTGWIpb82Y1CoanPixIiPGSzYCH_TjVpU0vhUVMy3jnHp93RWDLEuFeUiG2KRahgiIbdmpDw62vCVXJZYi6NNd54QG5Eelvzqdoo6OonDWE5Mkh5sB7MxpBip217_HQEKKJ2oXzel6_vodWGNFAI0VKzVeC0HW4HcfgOQ9YHvSQZv6wQfkD6W2fIVg6wUtXKXpAeCM9C0_ZjlaYNRNWQ2ixnavTGFSUh4MMyYDZGGAAOqEZrIAfbYISxBRxCVWiARh__3hCUDBJA2F9aCrTopJS5aPc3XuL77NRHNg7aGsdEtCJQYec9BcwljzIG7F5Lk5uCDxocTUQ=s400-no?authuser=0'
					/>
				</div>
			</div>

			<div
				id='about'
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
				className={styles.experience}
			>
				<About />
			</div>

			<div id='techStacks' className={styles.techStacks}>
				<TechStacks />
			</div>

			<div
				id='education'
				className={styles.experience}
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
			>
				<div
					data-aos='fade-right'
					data-aos-offset='150'
					data-aos-easing='ease-in-sine'
					data-aos-duration='700'
					style={{ color: `${newTheme.para}` }}
				>
					<Experiences />
				</div>
			</div>

			{/* project section from here => */}
			<div id='projects' className={styles.projects}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					Things I've Developed
				</h1>
				<div className={styles.borderBottom} />
				<div>
					{projectArray.map((item, index) => (
						<Card key={index} {...item} />
					))}
				</div>
				{/* <Button
					text={
						projects.length == 3
							? 'Show More'
							: 'Show Less'
					}
					handleButton={handleShowMoreBtn}
				/> */}
			</div>
                 <div
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
			>
				<Contact />
			</div>
		</div>
	);
};

export default Home;

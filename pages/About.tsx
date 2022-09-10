import type { NextPage } from 'next'
import Link from 'next/link';
import styles from '../styles/About.module.scss'

const About: NextPage = () => {
	return (
		<>
		<div>
			<h1 className={styles.header}>Hello, Please Add something here!</h1>
			<Link href='posts/abc'>
				<a className={styles.link}>See post ABC</a>
			</Link>
			<Link href='posts/def'>
				<a className={styles.link}>See post DEF</a>
			</Link>
		</div>
		</>
	)
}

export default About;
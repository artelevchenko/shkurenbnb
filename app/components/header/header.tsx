import styles from './header.module.css'
import Image from 'next/image'

export default function Header(){
	return (
		<div className={styles.header}>
			<div className={styles.top}>
				<Image
      		src='/assets/images/airbnb.png'
      		width={50}
      		height={50}
      		alt="ShkurenBnB"
    		/>
				<div className={styles.logo}>shkurenBnB</div>
				<button className={styles.button}>
					<Image
						src='/assets/images/align.png'
						width={30}
						height={30}
						alt='align'
					/>
					<Image
						className={styles.img}
						src='/assets/images/avatar.png'
						width={30}
						height={30}
						alt='avatar'
					/>
				</button>
			</div>
		</div>
	)
}
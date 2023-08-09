import styles from './header.module.css'
import Image from 'next/image'
import shkurenBnB from '../../images/airbnb.png'
import align from '../../images/align.png'
import avatar from '../../images/avatar.png'

export default function Header(){
	return (
		<div className={styles.header}>
			<div className={styles.top}>
				<Image
      		src={shkurenBnB}
      		width={50}
      		height={50}
      		alt="ShkurenBnB"
    		/>
				<div className={styles.logo}>shkurenBnB</div>
				<button className={styles.button}>
					<Image
						src={align}
						width={30}
						height={30}
						alt='align'
					/>
					<Image
						className={styles.img}
						src={avatar}
						width={30}
						height={30}
						alt='avatar'
					/>
				</button>
			</div>
		</div>
	)
}
import styles from './carousel.module.css'
import Image from 'next/image'
import carrot from '../../images/carousel/carrot.png'
import lemon from '../../images/carousel/lemon.png'
import watermelon from '../../images/carousel/watermelon.png'

export default function Carousel() {
	return (
		<div className={styles.carousel}>
			<div className={styles.slide}>
				<Image
					src={carrot}
					width={30}
					height={30}
					alt='carrot'
				/>
				<div>Carrot</div>
			</div>
			<div className={styles.slide}>
				<Image
					src={lemon}
					width={30}
					height={30}
					alt='lemon'
				/>
				<div>Lemon</div>
			</div>
			<div className={styles.slide}>
				<Image
					src={watermelon}
					width={30}
					height={30}
					alt='watermelon'
				/>
				<div>Watermelon</div>
			</div>
		</div>
	)
}
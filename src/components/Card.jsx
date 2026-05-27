import styles from './Card.module.css';
import BorderGlow from './BorderGlow';
import CardBg from '../assets/card-bg.png';
import vgCircle from '../assets/vg-circle.png';

export default function Card({ title, image}) {
    return (
        <div className={styles.cardWrapper}>
            <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#0a0822"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={3}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
                <img src={CardBg} className={styles.cardBackground} />
                <img src={vgCircle} className={styles.vgCircle} />
                <div className={styles.card}>
                    <img src={image} className={styles.cardImage} />
                    <h2 className={styles.cardTitle}>{title}</h2>
                </div>
            </BorderGlow>
        </div>
    )
}
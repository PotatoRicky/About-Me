import styles from './Card.module.css';
import BorderGlow from './BorderGlow';

export default function Card({ title, image}) {
    return (
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
        <div className={styles.card}>
            <img src={image} alt={`${title} image`} className={styles.cardImage} />
            <h2 className={styles.cardTitle}>{title}</h2>
        </div>
        </BorderGlow>
    );
}
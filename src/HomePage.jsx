

import styles from './HomePage.module.css';
import vgCircle from './assets/vg-circle.png';
import Card from './components/Card.jsx';

const cards = [
    { title: 'About Me', image: 'https://via.placeholder.com/150' },
    { title: 'Hobbies', image: 'https://via.placeholder.com/150' },
    { title: 'Projects', image: 'https://via.placeholder.com/150' },
    { title: 'Work', image: 'https://via.placeholder.com/150' },
    { title: 'Contact', image: 'https://via.placeholder.com/150' },
];

export default function HomePage() {
    // Fanned out effect: center card is 0deg, others rotate left/right
    const fanAngles = [-20, -10, 0, 10, 20];
    const fanY = [35, 10, 0, 10, 35];
    return (
        <div className={styles.body}>
            <img src={vgCircle} className={styles.vgCircle} alt="VG Circle" />
            <div className={styles.cardFanContainer}>
                {cards.map((card, i) => (
                    <div
                        key={card.title}
                        className={styles.fanCardWrapper}
                        style={{
                            transform: `rotate(${fanAngles[i]}deg) translateY(${fanY[i]}px)`,
                            zIndex: 10 - Math.abs(i - 2),
                        }}
                    >
                        <Card title={card.title} image={card.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}
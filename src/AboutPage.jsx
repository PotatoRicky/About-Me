import vgCircle from './assets/vg-circle.png';
import pageStyles from './Pages.module.css';
import introPic from './assets/intro-pic.jpg';
import styles from './AboutPage.module.css';

export default function AboutPage() {
    return (
        <div className={pageStyles.aboutPage}>
            <img src={vgCircle} className={pageStyles.vgCircle} />
            <div className={pageStyles.textContainer}>
                <div>
                    <img src={introPic} className={styles.introPic}></img>
                    <h1>About Me</h1>
                </div>
            </div>
        </div>
    );
}
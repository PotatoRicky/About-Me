import vgCircle from './assets/vg-circle.png';
import pageStyles from './Pages.module.css';
import introPic from './assets/intro-pic.jpg';
import styles from './AboutPage.module.css';
import melbourne from './assets/Melbourne.jpg';
import { useNavigate } from 'react-router-dom';
import cardBg from './assets/card-bg.png';

export default function AboutPage() {
    const navigate = useNavigate();

    const aboutText = "Hello, my name is Ricky and I am a third year student studying Mechanical Engineering and Computer Science at UNSW \n \n I want this page to be like a fun puzzle, where you can find out more information about me as you explore each card";
    const funFact = "Fun fact about me, I am incredibly invested in playing competitive TCG (you know, like Pokemon) and now you might be able to tell where the inspiration for this website is derived";
    const campus = "There's a surprisingly high chance that you might have seen me on campus before, from mentoring to hosting events, I try to be as involved as possible!"
    const discovery = "Anyways, my idea for this page is for you to click around and discover more about me, sort of like a game. Maybe you can unlock some new cards on the homepage."

    const returnHome = () => {
        navigate('/');
    }

    return (
        <div className={pageStyles.aboutPage}>
            <img src={vgCircle} className={pageStyles.vgCircle} />
            <div className={pageStyles.textContainer}>
                <img src={cardBg} className={pageStyles.cardBg} />
                <div className={styles.block}>
                    <img src={introPic} className={styles.introPic}></img>
                    <h1 className={styles.intro}>{aboutText}</h1>
                </div>
            </div>
        </div>
    );
}
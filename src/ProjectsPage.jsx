import pageStyles from './Pages.module.css';
import styles from './ProjectsPage.module.css';
import { useNavigate } from 'react-router-dom';

import cardBg from './assets/card-bg.png';
import vgCircle from './assets/vg-circle.png';
import dolly from './assets/dolly.png';
import devsocQuiz from './assets/devsoc-quiz.png';
import csGacha from './assets/cs-gacha.png';

export default function ProjectsPage() {
    const navigate = useNavigate();
    const dollyUrl = "https://potatoricky.github.io/Flagship-Hackathon/";
    const dollyText = "This was the first project I made for a hackathon with one of my friends. It's basic and lacks functionality, but looking back, this was really the start of my journey"

    const devsocQuizUrl = "https://arshiasj.github.io/devsoc-quiz/";
    const devsocQuizText = <>This is a quiz I made for O-week where students could test their knowledge on DevSoc's projects. Pretty cool to see the people who took the quiz being stored in a backend</>
    
    const csGachaUrl = "https://codegacha-seven.vercel.app/landing.html";
    const csGachaText = "This is a gacha game like the one for Wikipedia where students can open packs, and battle each other with the questions inside. Though the multiplayer isn't perfect, it was one hell of a weekend spent making this"

    const projects = "More projects coming soon ...";

    const handleReturn = () => {
        navigate('/');
    }

    return (
        <div className={pageStyles.pageWrapper}>
            <img src={vgCircle} className={pageStyles.vgCircle} />
            <div className={pageStyles.textContainer}>
                <img src={cardBg} className={pageStyles.cardBg} />
                <div className={styles.project}>
                    <a href={devsocQuizUrl} target="_blank">
                        <img src={devsocQuiz} className={styles.projectImage} />
                    </a>
                    <p className={styles.projectText}>{devsocQuizText}</p>
                </div>
                <div className={styles.project}>
                    <a href={csGachaUrl} target="_blank">
                        <img src={csGacha} className={styles.projectImage} />
                    </a>
                    <p className={styles.projectText}>{csGachaText}</p>
                </div>
                <div className={styles.project}>
                    <a href={dollyUrl} target="_blank">
                        <img src={dolly} className={styles.projectImage} />
                    </a>
                    <p className={styles.projectText}>{dollyText}</p>
                </div>
                <div className={styles.return}>
                    <p className={styles.returnText}>{projects}</p>
                    <button onClick={handleReturn} className={styles.returnBtn}><b>Return to Home</b></button>
                </div>
            </div>
        </div>
    );
}
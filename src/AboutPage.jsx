import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import pageStyles from './Pages.module.css';
import styles from './AboutPage.module.css';

import vgCircle from './assets/vg-circle.png';
import introPic from './assets/intro-pic.jpg';
import melbourne from './assets/Melbourne.jpg';
import cardBg from './assets/card-bg.png';
import mog from './assets/mog.JPG';
import fireworks from './assets/fireworks.jpg';
import china from './assets/china.jpg';
import no from './assets/no.jpg';
import cake from './assets/cake.jpg';
import mero from './assets/mero.jpg';
import cat from './assets/cat.png';

export default function AboutPage() {
    const navigate = useNavigate();
    const [userGuess, setUserGuess] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [wrongGuess, setWrongGuess] = useState(false);
    const [alreadyGuessed, setAlreadyGuessed] = useState(false);

    const aboutText = <>Hello, my name is Ricky and I am a third year student studying Mechanical Engineering and Computer Science at UNSW <br/><br/> I want this page to be like a fun puzzle, where you can find out more information about me as you explore each card. <i>hint hint; click around</i></>
    const guess = <>So all the important info like projects and contacts are available, but if you care enough to search for other stuff, it might help if you explored. We can start by guessing what my biggest <s>timesink</s> hobby is right now?</>

    const alreadyUnlocked = localStorage.getItem('unlockedHobbies') === 'true';

    const returnHome = () => {
        navigate('/');
    }

    const handleGuess = () => {
        if (userGuess) {
            if (!alreadyUnlocked) {
                localStorage.setItem('unlockedHobbies', 'true');
                setShowPopup(true);
            } else {
                setAlreadyGuessed(true);
            }
        } else {
            setWrongGuess(true);
        }
    }

    const handleEmailInput = (e) => {
        const value = e.target.value.toLowerCase();
        if (value.includes('tcg') || value.includes('vanguard') || value.includes('card') || value.includes('vg')) {
            setUserGuess(true);
        } else {
            setUserGuess(false);
        }
    }

    useEffect(() => {
        if (wrongGuess) {
            const timer = setTimeout(() => setWrongGuess(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [wrongGuess]);

    useEffect(() => {
        if (alreadyGuessed) {
            const timer = setTimeout(() => setAlreadyGuessed(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [alreadyGuessed]);

    const handleReturn = () => {
        navigate('/');
    }

    return (
        <div className={pageStyles.pageWrapper}>
            {showPopup && (
                <div className={styles.overlay} onClick={() => setShowPopup(false)}>
                    <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                        <p>🎉 Congrats! You've discovered the Hobbies card!</p>
                        <p>Click anywhere to continue</p>
                    </div>
                </div>
            )}
            <img src={vgCircle} className={pageStyles.vgCircle} />
            <div className={pageStyles.textContainer}>
                <img src={cardBg} className={pageStyles.cardBg} />
                <div className={styles.block}>
                    <img src={introPic} className={styles.imgLeft}></img>
                    <p className={styles.intro}>{aboutText}</p>
                </div>
                <div className={styles.imageRow}>
                    <img src={fireworks} className={styles.rowImgH}></img>
                    <img src={china} className={styles.rowImgH}></img>
                    <img src={mog} className={styles.rowImgV}></img>
                </div>
                <div className={styles.guess}>
                    <p className={styles.guessText}>{guess}</p>
                    <div className={styles.guessContainer}>
                        <img src={no} className={`${styles.no} ${wrongGuess ? styles.visible : ''}`}></img>
                        <div className={styles.guessButtons}>
                            <input className={styles.guessInput} placeholder='hmmmm' onChange={(e) => handleEmailInput(e)}/>
                            <button onClick={handleGuess} className={styles.guessBtn}><b>Guess</b></button>
                        </div>   
                        <img src={cat} className={`${styles.cat} ${alreadyGuessed ? styles.visible : ''}`}></img>
                    </div>
                </div>
                <div className={styles.return}>
                    <img src={cake} className={styles.imgLeft}></img>
                    <button onClick={handleReturn} className={styles.returnBtn}><b>Return to Home</b></button>
                    <img src={mero} className={styles.imgRight}></img>
                </div>
            </div>
        </div>
    );
}
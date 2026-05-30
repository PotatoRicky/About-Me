import pageStyles from './Pages.module.css';
import styles from './HobbiesPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import cardBg from './assets/card-bg.png';
import vgCircle from './assets/vg-circle.png';

import anime from './assets/anime.jpg';
import beans from './assets/beans.jpeg';
import chess from './assets/chess.jpg';
import kafka from './assets/kafka.jpg';
import pika from './assets/pika.jpg';
import dontListen from './assets/dontlisten.m4a';

export default function HobbiesPage() {
    const navigate = useNavigate();
    const [wallClicked, setWallClicked] = useState(false);
    const [audioCovered1, setAudioCovered1] = useState(false);
    const [audioCovered2, setAudioCovered2] = useState(false);
    const [audioCovered3, setAudioCovered3] = useState(false);

    const introText = <>Congrats on discovering the unhinged section of this page</>;
    const normal = <>Just kidding! As you can see, I have some very normal hobbies. I play chess (wow look at those trophies :D)</>
    const beansText = <>I coped with high school by playing gacha games, and while I didn't spend any $$$ for 4 years, I did buy some merch (they're so cute though!)</>
    const wall = <>But aside from that, I'm pretty normal. It's not like I have some crazy stuff like art of anime girls on my wall<br/><br/></>
    const pikaText = <>Anyways here's a nice pikachu collection</>

    const cover1 = <>I warned you</>;
    const cover2 = <>Wait what are you doing?</>;
    const cover3 = <>Wow, a box</>;

    const pleaseGo = <>Please just leave ...</>

    const handleReturn = () => {
        navigate('/');
    }

    const handleReveal = () => {
        setWallClicked(true);
    }

    return (
        <div className={pageStyles.pageWrapper}>
            <img src={vgCircle} className={pageStyles.vgCircle} />
            <div className={pageStyles.textContainer}>
                <img src={cardBg} className={pageStyles.cardBg} />
                <div className={styles.intro}>
                    <p className={styles.text}>{introText}</p>
                </div>
                <div className={styles.block}>
                    <p className={styles.text}>{normal}</p>
                    <img src={chess} className={styles.imgRight} />
                </div>
                <div className={styles.block}>
                    <img src={beans} className={styles.imgLeft} />
                    <p className={styles.text}>{beansText}</p>
                </div>
                <div className={styles.block}>
                    <div className={styles.textCol}>
                        <p className={styles.text}>{wall}</p>
                        <p className={`${wallClicked ? styles.text : styles.hidden}`}>
                            Oh dear, how did that get there ..
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={anime} className={styles.hiddenImg} />

                        {!wallClicked && (
                            <div className={styles.cover} onClick={handleReveal}></div>
                        )}
                    </div>
                </div>
                
                <div className={styles.intro}>
                    <p className={styles.text}>{pikaText}</p>
                </div>
                <div className={styles.block}>
                    <img src={pika} className={styles.imgLeft} />
                    <div className={styles.audioContainer}>
                        <audio controls>
                        <source src={dontListen}></source>
                        </audio>
                        
                        {!audioCovered3 && (
                            <div className={styles.audioCover} onClick={() => setAudioCovered3(true)}>
                                {cover3}
                            </div>
                        )}

                        {audioCovered3 && !audioCovered2 && (
                            <div className={styles.audioCover} onClick={() => setAudioCovered2(true)}>
                                {cover2}
                            </div>
                        )}

                        {audioCovered2 && !audioCovered1 && (
                            <div className={styles.audioCover} onClick={() => setAudioCovered1(true)}>
                                {cover1}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.return}>
                    <p className={styles.returnText}>{pleaseGo}</p>
                    <button onClick={handleReturn} className={styles.returnBtn}><b>Return to Home</b></button>
                </div>
            </div>
        </div>
    );
}
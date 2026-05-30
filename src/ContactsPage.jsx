import pageStyles from './Pages.module.css';
import styles from './ContactsPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import cardBg from './assets/card-bg.png';
import vgCircle from './assets/vg-circle.png';
import instaLogo from './assets/insta.png';
import discordLogo from './assets/discord.jpg';
import facebookLogo from './assets/facebook.png';
import gmailLogo from './assets/gmail.png';
import linkedinLogo from './assets/linkedin.png';
import githubLogo from './assets/github.png';

const contacts = [
    { 
        name: 'Discord',
        funny: 'casual chat',
        logo: discordLogo,
        type: 'copy',
        link: 'potaage'
    },
    { 
        name: 'Instagram', 
        funny: 'peak content',      
        logo: instaLogo,
        type: 'link',
        link: 'https://instagram.com/pomme_tato' 
    },
    { 
        name: 'Facebook',  
        funny: 'for your parents',  
        logo: facebookLogo, 
        type: 'link',
        link: 'https://facebook.com/ricky.guan.351' 
    },
    { 
        name: 'Gmail',     
        funny: 'formal stuff',      
        logo: gmailLogo, 
        type: 'copy',
        link: 'rickyguan1@gmail.com', 
        whiteBg: true 
    },
    { 
        name: 'LinkedIn',  
        funny: 'job-maxxing',       
        logo: linkedinLogo, 
        type: 'link',
        link: 'https://linkedin.com/in/hai-tao-guan-632436302' 
    },
    { 
        name: 'GitHub',   
        funny: 'unfinished projects', 
        logo: githubLogo, 
        type: 'link',
        link: 'https://github.com/PotatoRicky', 
        whiteBg: true 
    },
];

export default function ContactsPage() {
    const navigate = useNavigate();

    const [index, setIndex] = useState(0);
    const active = contacts[index];
    const pct = (index / (contacts.length - 1)) * 100;

    const handleReturn = () => {
        navigate('/');
    }

    const handleLogoClick = () => {
        if (active.type === 'copy') {
            navigator.clipboard.writeText(active.link);
            alert(`${active.name} copied to clipboard!`);
        } else if (active.type === 'link') {
            window.open(active.link, '_blank');
        }
    }

    return (
        <div className={pageStyles.pageWrapper}>
            <img src={vgCircle} className={pageStyles.vgCircle} />
            <div className={pageStyles.textContainer}>
                <img src={cardBg} className={pageStyles.cardBg} />
                <div className={styles.inner}>
                    <button onClick={handleLogoClick} className={styles.logoBtn}>
                        <img src={active.logo} alt={active.name} className={`${styles.logoImg} ${active.whiteBg ? styles.whiteBg : ''}`} />
                    </button>

                    <div className={styles.scrubberWrap}>
                        <div className={styles.track}>
                            <div className={styles.fill} style={{ width: `${pct}%` }} />
                            <div className={styles.thumb} style={{ left: `${pct}%` }} />
                            <input
                                type="range"
                                min={0}
                                max={contacts.length - 1}
                                step={1}
                                value={index}
                                onChange={e => setIndex(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                            {contacts.map((c, i) => (
                                <span
                                    key={c.name}
                                    className={`${styles.tick} ${i % 2 === 0 ? styles.down : styles.up} ${i === index ? styles.act : ''}`}
                                    style={{ left: `${(i / (contacts.length - 1)) * 100}%` }}
                                >
                                    {c.funny}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.return}>
                    <button onClick={handleReturn} className={styles.returnBtn}><b>Return to Home</b></button>
                </div>
            </div>
        </div>
    );
}
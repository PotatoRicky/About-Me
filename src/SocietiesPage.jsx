import pageStyles from './Pages.module.css';
import styles from './SocietiesPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import cardBg from './assets/card-bg.png';
import vgCircle from './assets/vg-circle.png';

export default function ContactsPage() {
    const navigate = useNavigate();

    return (
        <div className={pageStyles.pageWrapper}>
            <img src={vgCircle} className={pageStyles.vgCircle} />
            <div className={pageStyles.textContainer}>
                <img src={cardBg} className={pageStyles.cardBg} />
            </div>
        </div>
    );
}
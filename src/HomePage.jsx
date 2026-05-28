import styles from './HomePage.module.css';
import vgCircle from './assets/vg-circle.png';
import Card from './components/Card.jsx';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();
    const circleRef = useRef(null);

    const hobbyUnlocked = localStorage.getItem('unlockedHobbies') === 'true';

    const cardsData = [
        { title: 'About Me', image: 'https://via.placeholder.com/150', path: '/about' },
        { title: 'Projects', image: 'https://via.placeholder.com/150', path: '/projects' },
        { title: 'Contact', image: 'https://via.placeholder.com/150', path: '/contact' },
        ...(hobbyUnlocked ? [{ title: 'Hobbies', image: 'https://via.placeholder.com/150', path: '/hobbies' }] : [])
    ];

    const [draggedIndex, setDraggedIndex] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isOverCircle, setIsOverCircle] = useState(false);
    const dragOffsetRef = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e, index) => {
        setDraggedIndex(index);

        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        dragOffsetRef.current = { x: offsetX, y: offsetY };

        setPosition({
            x: e.clientX - offsetX,
            y: e.clientY - offsetY,
        });
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (draggedIndex === null) return;

            setPosition({
                x: e.clientX - dragOffsetRef.current.x,
                y: e.clientY - dragOffsetRef.current.y,
            });

            if (circleRef.current) {
                const circleRect = circleRef.current.getBoundingClientRect();
                const isOver = (
                    e.clientX > circleRect.left &&
                    e.clientX < circleRect.right &&
                    e.clientY > circleRect.top &&
                    e.clientY < circleRect.bottom
                );
                setIsOverCircle(isOver);
            }
        };

        const handleMouseUp = () => {
            if (draggedIndex === null) return;

            if (isOverCircle) {
                navigate(cardsData[draggedIndex].path);
            }
            setDraggedIndex(null);
            setIsOverCircle(false);
        };

        if (draggedIndex !== null) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [draggedIndex, isOverCircle, navigate]);

    return (
        <div className={styles.body}>
            <div
                ref={circleRef}
                className={`${styles.circleContainer} ${isOverCircle ? styles.circleHovered : ''}`}  
            >
                <img src={vgCircle} className={styles.vgCircle}/>
            </div>
            <div className={styles.cardFanContainer}>
                {cardsData.map((card, i) => {
                    const isDragging = (draggedIndex === i);
                    const numCards = cardsData.length;
                    let angle, y;
                    if (numCards % 2 === 0) {
                        if (i < numCards / 2) {
                            angle = - (10 * ((numCards / 2) - i));
                            y = 10 * Math.abs((numCards / 2) - i);
                        } else {
                            angle = 10 * ((i - numCards / 2) + 1);
                            y = 10 * (Math.abs((numCards / 2) - i) + 1);
                        }
                    } else {
                        angle = - (10 * ((numCards - 1) / 2 - i));
                        y = 10 * Math.abs(((numCards - 1) / 2) - i);
                    }
                    return (
                        <div
                            key={card.title}
                            className={`${styles.fanCardWrapper} ${isDragging ? styles.dragging : ''}`}
                            style={{
                                transform: isDragging 
                                    ? 'none' 
                                    : `rotate(${angle}deg) translateY(${y}px)`,
                                zIndex: isDragging ? 9999 : 10 - Math.abs(i - 2),
                                left: isDragging ? `${position.x}px` : 'auto',
                                top: isDragging ? `${position.y}px` : 'auto',
                            }}
                            onMouseDown={(e) => handleMouseDown(e, i)}
                        >
                            <Card title={card.title} image={card.image} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
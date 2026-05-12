import styles from './HomePage.module.css';
import vgCircle from './assets/vg-circle.png';
import Card from './components/Card.jsx';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const cardsData = [
    { title: 'About Me', image: 'https://via.placeholder.com/150', path: '/about' },
    { title: 'Hobbies', image: 'https://via.placeholder.com/150', path: '/hobbies' },
    { title: 'Projects', image: 'https://via.placeholder.com/150', path: '/projects' },
    { title: 'Work', image: 'https://via.placeholder.com/150', path: '/work' },
    { title: 'Contact', image: 'https://via.placeholder.com/150', path: '/contact' },
];

export default function HomePage() {
    const navigate = useNavigate();
    const circleRef = useRef(null);

    const [draggedIndex, setDraggedIndex] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isOverCircle, setIsOverCircle] = useState(false);
    const dragOffsetRef = useRef({ x: 0, y: 0 });

    const fanAngles = [-20, -10, 0, 10, 20];
    const fanY = [35, 10, 0, 10, 35];

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
                <img src={vgCircle} className={styles.vgCircle} alt="VG Circle" />
            </div>
            <div className={styles.cardFanContainer}>
                {cardsData.map((card, i) => {
                    const isDragging = (draggedIndex === i);
                    return (
                        <div
                            key={card.title}
                            className={`${styles.fanCardWrapper} ${isDragging ? styles.dragging : ''}`}
                            style={{
                                transform: isDragging 
                                    ? 'none' 
                                    : `rotate(${fanAngles[i]}deg) translateY(${fanY[i]}px)`,
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
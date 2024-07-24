import React, { useState, useRef, useEffect } from 'react';
import './styles.css';
import { SelectedDot, UnSelectedDot } from '../assets';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [numDots, setNumDots] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 450) {
                setItemsPerView(1.5);
            } else if (window.innerWidth < 650) {
                setItemsPerView(2.5);
            } else {
                setItemsPerView(3);
            }
        };

        const updateNumDots = () => {
            if (carouselRef.current) {
                const containerWidth = carouselRef.current.clientWidth;
                const imageWidth = containerWidth / itemsPerView;
                const visibleImages = Math.floor(containerWidth / imageWidth);
                const dotsCount = Math.ceil(images.length / visibleImages);
                setNumDots(dotsCount);
            }
        };
        updateItemsPerView();
        updateNumDots();
        window.addEventListener('resize', updateItemsPerView);
        window.addEventListener('resize', updateNumDots);

        return () => {
            window.removeEventListener('resize', updateItemsPerView);
            window.removeEventListener('resize', updateNumDots);
        };
    }, [images]);

    useEffect(() => {
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.clientWidth;
            const imageWidth = containerWidth / itemsPerView;
            carouselRef.current.scrollTo({
                left: imageWidth * currentIndex,
                behavior: 'smooth'
            });
        }
    }, [currentIndex, itemsPerView]);

    const handleDotClick = (index) => {
        setCurrentIndex(index * itemsPerView);
    };

    return (
        <div className="relative flex flex-col gap-8">
            <div className="relative overflow-hidden">
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto scrollbar-hidden snap-x snap-mandatory"
                    style={{ scrollSnapType: 'x mandatory', padding: '0 10px' }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0"
                            style={{
                                width: window.innerWidth < 450 ? '180px' : window.innerWidth < 650 ? '180px' : '250px',
                                height: window.innerWidth < 450 ? '250px' : window.innerWidth < 650 ? '250px' : '300px',
                                paddingRight: '15px',
                                scrollSnapAlign: 'start'
                            }}
                        >
                            <img
                                src={image.image_url || ''}
                                alt={image.title}
                                className={`w-full h-full object-cover ${window.innerWidth < 450 ? 'rounded-[20px]' : 'rounded-[40px]'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row space-x-2 ml-auto">
                {Array.from({ length: numDots }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-4 h-4 md:w-8 md:h-8 rounded-full`}
                    >{
                            Math.floor(currentIndex / itemsPerView) === index ? <SelectedDot className="w-4 h-4 md:w-8 md:h-8" /> : <UnSelectedDot className="w-4 h-4 md:w-8 md:h-8" />
                        }</button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

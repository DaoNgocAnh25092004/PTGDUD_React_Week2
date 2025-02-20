import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Bai6.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

let cx = classNames.bind(styles);

const data = [
    {
        id: 1,
        image: images.food1,
    },
    {
        id: 2,
        image: images.food2,
    },
    {
        id: 3,
        image: images.food3,
    },
];

function Bai6() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showContainer, setShowContainer] = useState(true);

    return (
        showContainer && (
            <div className={cx('container')}>
                <h1>Discover Chefify</h1>
                <p>
                    Easy and delicious cooking instructions right here. Start
                    exploring now!
                </p>

                <div className={cx('slider')}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={cx('slide', {
                                active: index === currentSlide,
                            })}
                            style={{
                                transform: `translateX(-${
                                    currentSlide * 100
                                }%)`,
                            }}
                        >
                            <Image src={item.image} alt={`food-${item.id}`} />
                        </div>
                    ))}
                </div>

                <div className={cx('dots')}>
                    {data.map((_, index) => (
                        <div
                            key={index}
                            className={cx('dot', {
                                active: index === currentSlide,
                            })}
                            onClick={() => setCurrentSlide(index)} // Cập nhật currentIndex khi click
                        ></div>
                    ))}
                </div>

                <div className={cx('box-btn')}>
                    <Button
                        className={cx('btn-next')}
                        primary
                        large
                        onClick={() =>
                            setCurrentSlide((prev) =>
                                prev === data.length - 1 ? 0 : prev + 1,
                            )
                        }
                    >
                        Next
                    </Button>

                    <Button
                        className={cx('btn-skip')}
                        text
                        onClick={() => setShowContainer(false)}
                    >
                        Skip
                    </Button>
                </div>

                <FontAwesomeIcon
                    onClick={() => setShowContainer(false)}
                    icon={faXmark}
                    className={cx('icon-close')}
                />
            </div>
        )
    );
}

export default Bai6;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Tuan4.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import {
    faBookmark,
    faChevronRight,
    faSearch,
    faShare,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Tuan4() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Thực hiện yêu cầu GET bằng Fetch API
                const response = await fetch(
                    'https://67c7c637c19eb8753e7ab0ce.mockapi.io/che',
                );

                if (!response.ok) {
                    throw new Error('Phản hồi mạng không hợp lệ');
                }

                const result = await response.json();

                setData(result);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={cx('container')}>
            <div>
                <header className={cx('header')}>
                    <div className={cx('logo')}>
                        <div>
                            <Image src={images.logo} alt="logo" />
                        </div>
                        <div className={cx('search')}>
                            <input type="text" placeholder="Search" />
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <div className={cx('menu')}>
                        <ul>
                            <li>What to cook</li>
                            <li>Recipes</li>
                            <li>Ingredients</li>
                            <li>Occasions</li>
                            <li>About us</li>
                        </ul>
                        <div>
                            <div>
                                <Image
                                    src={images.archiveCheck}
                                    alt="archiveCheck"
                                />
                                <span>Your Recipe Box</span>
                            </div>

                            <div>
                                <Image src={images.avartar} alt="avartar" />
                            </div>
                        </div>
                    </div>
                </header>

                <main className={cx('main')}>
                    <div>
                        <span>Home</span>
                        <span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                        <span>Home</span>
                    </div>

                    <div className={cx('box-info')}>
                        <h1>Emma Gonzalez's Recipe Box</h1>
                        <div className={cx('info-detail')}>
                            <div className={cx('box-avatar')}>
                                <Image src={images.noImage} alt="Avatar" />
                            </div>
                            <div>
                                <div>
                                    lorem ipsum dolor sit amet, consectetur adip
                                    lorem ipsum dolor sit amet, consectetet
                                    lorem ipsum dolor sit amet, consectetur adip
                                    lorem ipsum dolor sit amet, consectetetlorem
                                    ipsum dolor sit amet, consectetur adip lorem
                                    ipsum dolor sit amet, consectetetlorem ipsum
                                    dolor sit amet, consectetur adip lorem ipsum
                                    dolor sit amet, consectetet
                                </div>
                                <div>
                                    <Button pink text>
                                        6.5k Subscribes
                                    </Button>

                                    <Button
                                        pink
                                        primary
                                        rightIcon={
                                            <FontAwesomeIcon icon={faShare} />
                                        }
                                    >
                                        Share
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className={cx('nav')}>
                            <div>Saved Recipes</div>
                            <div>Folders</div>
                            <div>Recipes by Genevieve</div>
                        </div>

                        <div className={cx('recipe-container')}>
                            <div className={cx('recipe-list')}>
                                {data.map((item) => (
                                    <div
                                        key={item.id}
                                        className={cx('recipe-card')}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className={cx('recipe-img')}
                                        />
                                        <div>
                                            <div className={cx('recipe-info')}>
                                                <h3>{item.name}</h3>
                                                <p>{item.time} minutes</p>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon
                                                    icon={faBookmark}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={cx('box-pagination')}>
                            <div className={cx('pagination')}>
                                <button className={cx('arrow')}>&lt;</button>
                                <button className={cx('page', 'active')}>
                                    1
                                </button>
                                <button className={cx('page')}>2</button>
                                <button className={cx('page')}>3</button>
                                <button className={cx('page')}>4</button>
                                <span className={cx('dots')}>...</span>
                                <button className={cx('page')}>10</button>
                                <button className={cx('page')}>11</button>
                                <button className={cx('arrow')}>&gt;</button>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className={cx('footer')}>
                    <div className={cx('box-footer')}>
                        <div>
                            <div className={styles.section}>
                                <h3>About Us</h3>
                                <p>
                                    Welcome to our website, a wonderful place to
                                    explore and learn how to cook like a pro.
                                </p>
                                <div className={styles.subscribe}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                    <button>Send</button>
                                </div>
                            </div>

                            <div className={styles.bottom}>
                                <div className={styles.logo}>
                                    <span className={styles.icon}>
                                        <Image src={images.logo} alt="logo" />
                                    </span>
                                </div>
                                <p>
                                    2023 Chefify Company &nbsp; | &nbsp; Terms
                                    of Service &nbsp; | &nbsp; Privacy Policy
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className={styles.section}>
                                    <h3>Learn More</h3>
                                    <ul>
                                        <li>Our Cooks</li>
                                        <li>See Our Features</li>
                                        <li>FAQ</li>
                                    </ul>
                                </div>

                                <div className={styles.section}>
                                    <h3>Shop</h3>
                                    <ul>
                                        <li>Gift Subscription</li>
                                        <li>Send Us Feedback</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.section}>
                                <h3>Recipes</h3>
                                <ul>
                                    <li>What to Cook This Week</li>
                                    <li>Pasta</li>
                                    <li>Dinner</li>
                                    <li>Healthy</li>
                                    <li>Vegetarian</li>
                                    <li>Vegan</li>
                                    <li>Christmas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Tuan4;

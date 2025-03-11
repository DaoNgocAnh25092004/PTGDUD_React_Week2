import classNames from 'classnames/bind';

import styles from './Bai1.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Bai1() {
    return (
        <div className={cx('container')}>
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

            <div className={cx('content')}>
                <aside>
                    <div className={cx('filter')}>
                        <Image src={images.menu} alt="menu" />
                        <span>FILTERS</span>
                    </div>

                    <div className={cx('arrow')}>
                        <p>Type</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className={cx('check-box')}>
                        <div>
                            <div>
                                <Image src={images.unchecked} alt="uncheck" />
                                <span>Breakfast</span>
                            </div>

                            <div>
                                <Image src={images.unchecked} alt="uncheck" />
                                <span>Breakfast</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src={images.checked} alt="checked" />
                                <span>Breakfast</span>
                            </div>

                            <div>
                                <Image src={images.checked} alt="checked" />
                                <span>Breakfast</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src={images.unchecked} alt="uncheck" />
                                <span>Breakfast</span>
                            </div>

                            <div>
                                <Image src={images.unchecked} alt="uncheck" />
                                <span>Breakfast</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src={images.unchecked} alt="uncheck" />
                                <span>Breakfast</span>
                            </div>

                            <div>
                                <Image src={images.unchecked} alt="uncheck" />
                                <span>Breakfast</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('arrow')}>
                        <p>Time</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>

                    <div className={cx('time')}>
                        <p>30 minutes</p>
                        <p>50 minutes</p>
                    </div>

                    <div className={cx('slider')}>
                        <Image src={images.slider} alt="slider" />
                    </div>

                    <div className={cx('arrow')}>
                        <p>Rating</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>

                    <div className={cx('star')}>
                        <div>
                            <div>
                                <Image src={images.unchecked} alt="unchecked" />
                            </div>

                            <div>
                                <Image src={images.star5} alt="star5" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src={images.unchecked} alt="unchecked" />
                            </div>

                            <div>
                                <Image src={images.star4} alt="star4" />
                            </div>
                        </div>

                        <div>
                            <div>
                                <Image src={images.checked} alt="checked" />
                            </div>

                            <div>
                                <Image src={images.star3} alt="star3" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src={images.checked} alt="checked" />
                            </div>

                            <div>
                                <Image src={images.star2} alt="star2" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image src={images.checked} alt="checked" />
                            </div>

                            <div>
                                <Image src={images.star1} alt="star1" />
                            </div>
                        </div>
                    </div>

                    <Button widthFull className={cx('btn-apply')}>
                        Apply
                    </Button>
                </aside>

                <main className={cx('main')}>
                    <h1>Sorry, no results were found for "ngocanh"</h1>
                    <div>
                        <Image src={images.home} alt="home" />
                    </div>

                    <p>We have all your independence Day sweets covered</p>
                    <div className={cx('box-btn')}>
                        <button>Sweet Cake</button>
                        <button>Back Cake</button>
                        <button>Pozole Verde</button>
                        <button>Heathy food</button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Bai1;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Tuan5.module.scss';
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

function Tuan5() {
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
        <div
            className={cx(
                'flex',
                'justify-center',
                'items-center',
                'm-5 border border-gray-300 rounded-lg',
            )}
        >
            <div>
                <header
                    className={cx(
                        'h-[65px] border-b border-gray-300 flex justify-between items-center p-5',
                    )}
                >
                    <div
                        className={cx(
                            'flex',
                            'justify-center',
                            'items-center',
                            'gap-5',
                        )}
                    >
                        <div>
                            <Image src={images.logo} alt="logo" />
                        </div>
                        <div
                            className={cx(
                                'relative w-[300px] rounded-md bg-gray-200 p-2.5',
                            )}
                        >
                            <input
                                className={cx(
                                    'w-full border-none bg-transparent pl-6 outline-none',
                                )}
                                type="text"
                                placeholder="Search"
                            />
                            <FontAwesomeIcon
                                className={cx(
                                    'absolute right-3.5 top-4 text-gray-500',
                                )}
                                icon={faSearch}
                            />
                        </div>
                    </div>
                    <div
                        className={cx(
                            'flex justify-between items-center gap-5',
                        )}
                    >
                        <ul className={cx('flex gap-5 list-none p-0 m-0')}>
                            <li
                                className={cx(
                                    'cursor-pointer transition-all duration-300 hover:text-red-500',
                                )}
                            >
                                What to cook
                            </li>
                            <li
                                className={cx(
                                    'cursor-pointer transition-all duration-300 hover:text-red-500',
                                )}
                            >
                                Recipes
                            </li>
                            <li
                                className={cx(
                                    'cursor-pointer transition-all duration-300 hover:text-red-500',
                                )}
                            >
                                Ingredients
                            </li>
                            <li
                                className={cx(
                                    'cursor-pointer transition-all duration-300 hover:text-red-500',
                                )}
                            >
                                Occasions
                            </li>
                            <li
                                className={cx(
                                    'cursor-pointer transition-all duration-300 hover:text-red-500',
                                )}
                            >
                                About us
                            </li>
                        </ul>
                        <div
                            className={cx(
                                'flex justify-center items-center gap-5',
                            )}
                        >
                            <div
                                className={cx(
                                    'flex justify-center items-center gap-3',
                                    'px-2.5 py-1.5',
                                    'bg-pink-100 text-pink-500 rounded-md',
                                )}
                            >
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

                <main className={cx('px-10 py-2.5')}>
                    <div className={cx('flex gap-4')}>
                        <span>Home</span>
                        <span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                        <span className={cx('text-pink-500')}>Home</span>
                    </div>

                    <div>
                        <h1 className={cx('my-5')}>
                            Emma Gonzalez's Recipe Box
                        </h1>
                        <div className={cx('flex gap-5')}>
                            <div
                                className={cx(
                                    'w-[20%] h-[150px] rounded-full overflow-hidden',
                                )}
                            >
                                <Image
                                    src={images.noImage}
                                    className={cx('w-full h-full object-cover')}
                                    alt="Avatar"
                                />
                            </div>
                            <div className={cx('flex justify-center flex-col')}>
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

                        <div className={cx('border-b border-gray-300 my-5')}>
                            <div
                                className={cx(
                                    'inline-block mr-5 px-5 py-2.5 rounded-t-md',
                                    'bg-pink-100 text-pink-500 font-b',
                                )}
                            >
                                Saved Recipes
                            </div>
                            <div
                                className={cx(
                                    'inline-block mr-5 px-5 py-2.5 rounded-t-md',
                                )}
                            >
                                Folders
                            </div>
                            <div
                                className={cx(
                                    'inline-block mr-5 px-5 py-2.5 rounded-t-md',
                                )}
                            >
                                Recipes by Genevieve
                            </div>
                        </div>

                        <div>
                            <div
                                className={cx(
                                    'flex justify-between items-center gap-5 flex-wrap',
                                )}
                            >
                                {data.map((item) => (
                                    <div
                                        key={item.id}
                                        className={cx(
                                            'bg-gray-100 rounded-lg w-[23%] overflow-hidden',
                                            ' text-center shadow-md transition-transform duration-300 hover:scale-105',
                                        )}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className={cx(
                                                'w-full h-[250px] object-cover',
                                            )}
                                        />
                                        <div
                                            className={cx(
                                                'flex  justify-between items-center gap-5 p-5',
                                            )}
                                        >
                                            <div className={cx('p-2')}>
                                                <h3
                                                    className={cx(
                                                        'text-lg text-gray-800',
                                                    )}
                                                >
                                                    {item.name}
                                                </h3>
                                                <p
                                                    className={cx(
                                                        'text-pink-500 font-bold',
                                                    )}
                                                >
                                                    {item.time} minutes
                                                </p>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon
                                                    className={cx(
                                                        'text-pink-500',
                                                    )}
                                                    icon={faBookmark}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={cx('flex justify-end py-5')}>
                            <div className={cx('flex items-center gap-2')}>
                                <button
                                    className={cx(
                                        'w-10 h-10 text-lg font-bold text-gray-600 bg-white rounded-md shadow-md transition hover:bg-gray-200',
                                    )}
                                >
                                    &lt;
                                </button>
                                <button
                                    className={cx(
                                        'w-10 h-10 text-lg font-bold text-white bg-pink-500 rounded-md shadow-lg',
                                    )}
                                >
                                    1
                                </button>
                                <button
                                    className={cx(
                                        'w-10 h-10 text-lg font-bold text-gray-600 bg-white rounded-md shadow-md transition hover:bg-gray-200',
                                    )}
                                >
                                    2
                                </button>
                                <button
                                    className={cx(
                                        'w-10 h-10 text-lg font-bold text-gray-600 bg-white rounded-md shadow-md transition hover:bg-gray-200',
                                    )}
                                >
                                    3
                                </button>
                                <button
                                    className={cx(
                                        'w-10 h-10 text-lg font-bold text-gray-600 bg-white rounded-md shadow-md transition hover:bg-gray-200',
                                    )}
                                >
                                    4
                                </button>
                                <span className={cx('text-gray-600')}>...</span>
                                <button
                                    className={cx(
                                        'w-10 h-10 text-lg font-bold text-gray-600 bg-white rounded-md shadow-md transition hover:bg-gray-200',
                                    )}
                                >
                                    10
                                </button>
                                <button
                                    className={cx(
                                        'w-10 h-10 text-lg font-bold text-gray-600 bg-white rounded-md shadow-md transition hover:bg-gray-200',
                                    )}
                                >
                                    11
                                </button>
                                <button
                                    className={cx(
                                        'w-10 h-10 text-lg font-bold text-gray-600 bg-white rounded-md shadow-md transition hover:bg-gray-200',
                                    )}
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="bg-[#14171f] text-white p-10">
                    <div className="flex justify-between gap-[250px] flex-wrap">
                        {/* Cột bên trái */}
                        <div className="flex justify-between flex-col flex-1">
                            <div className="mb-6">
                                <h3 className=" font-semibold mb-2">
                                    About Us
                                </h3>
                                <p className="text-base text-gray-400">
                                    Welcome to our website, a wonderful place to
                                    explore and learn how to cook like a pro.
                                </p>
                                <div className="flex gap-2 mt-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 p-2 rounded-md bg-gray-800 text-white border border-gray-700 outline-none"
                                    />
                                    <button className="bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 transition">
                                        Send
                                    </button>
                                </div>
                            </div>

                            {/* Logo + Điều khoản */}
                            <div className="flex justify-between items-center border-t border-gray-700 mt-8 pt-5">
                                <div className="flex items-center">
                                    <Image
                                        src={images.logo}
                                        alt="logo"
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <p className="text-sm text-gray-400">
                                    2023 Chefify Company &nbsp; | &nbsp; Terms
                                    of Service &nbsp; | &nbsp; Privacy Policy
                                </p>
                            </div>
                        </div>

                        {/* Cột bên phải */}
                        <div className="flex gap-[150px]">
                            <div>
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">
                                        Learn More
                                    </h3>
                                    <ul className="text-gray-400 space-y-1">
                                        <li className="hover:text-white cursor-pointer">
                                            Our Cooks
                                        </li>
                                        <li className="hover:text-white cursor-pointer">
                                            See Our Features
                                        </li>
                                        <li className="hover:text-white cursor-pointer">
                                            FAQ
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">
                                        Shop
                                    </h3>
                                    <ul className="text-gray-400 space-y-1">
                                        <li className="hover:text-white cursor-pointer">
                                            Gift Subscription
                                        </li>
                                        <li className="hover:text-white cursor-pointer">
                                            Send Us Feedback
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Recipes
                                </h3>
                                <ul className="text-gray-400 space-y-1">
                                    <li className="hover:text-white cursor-pointer">
                                        What to Cook This Week
                                    </li>
                                    <li className="hover:text-white cursor-pointer">
                                        Pasta
                                    </li>
                                    <li className="hover:text-white cursor-pointer">
                                        Dinner
                                    </li>
                                    <li className="hover:text-white cursor-pointer">
                                        Healthy
                                    </li>
                                    <li className="hover:text-white cursor-pointer">
                                        Vegetarian
                                    </li>
                                    <li className="hover:text-white cursor-pointer">
                                        Vegan
                                    </li>
                                    <li className="hover:text-white cursor-pointer">
                                        Christmas
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Tuan5;

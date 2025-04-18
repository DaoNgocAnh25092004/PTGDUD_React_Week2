import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import styles from './Overview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretUp,
    faCartShopping,
    faDollar,
    faLayerGroup,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Overview() {
    const [overview, setOverview] = useState([]);

    useEffect(() => {
        fetch('https://67eca9a6aa794fb3222e5fbe.mockapi.io/Overview')
            .then((res) => res.json())
            .then((data) => setOverview(data));
    }, []);

    return (
        <div className={cx('overview')}>
            <div className={cx('title')}>
                <p>
                    <FontAwesomeIcon icon={faLayerGroup} />
                </p>
                <p>Overview</p>
            </div>
            <div className={cx('list-overview')}>
                {overview.map((item, index) => {
                    const icons = [faCartShopping, faDollar, faUser];
                    return (
                        <div key={index}>
                            <div>
                                <p className={cx('overview-name')}>
                                    {item.title}
                                </p>
                                <p className={cx('overview-price')}>
                                    {index !== 2 ? <span>$</span> : null}
                                    {item.price}
                                </p>
                                <p className={cx('overview-description')}>
                                    <FontAwesomeIcon icon={faCaretUp} />
                                    <span>{item.period}</span> period of change
                                </p>
                            </div>
                            <div className={cx('overview-left')}>
                                <FontAwesomeIcon icon={icons[index]} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Overview;

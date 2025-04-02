import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';

import styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretUp,
    faCartShopping,
    faDollar,
    faLayerGroup,
    faNewspaper,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Table from './Component/Table/Table';
const cx = classNames.bind(styles);

DataTable.use(DT);

function Content() {
    const [overview, setOverview] = useState([]);
    const [table, setTable] = useState([]);

    useEffect(() => {
        fetch('https://67eca9a6aa794fb3222e5fbe.mockapi.io/Overview')
            .then((res) => res.json())
            .then((data) => setOverview(data));

        fetch('https://67eca9a6aa794fb3222e5fbe.mockapi.io/user')
            .then((res) => res.json())
            .then((data) => {
                const statuses = ['New', 'In-progress', 'Completed'];
                data.forEach((item) => {
                    item.status =
                        statuses[Math.floor(Math.random() * statuses.length)];
                });

                setTable(data);
            });
    }, []);

    return (
        <div className={cx('content')}>
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

            <div className={cx('title', 'title-table')}>
                <p>
                    <FontAwesomeIcon icon={faNewspaper} />
                </p>
                <p>Detailed report</p>
            </div>

            <Table data={table} />
        </div>
    );
}

export default Content;

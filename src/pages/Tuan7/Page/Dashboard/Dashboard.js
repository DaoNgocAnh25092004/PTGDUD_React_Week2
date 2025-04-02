import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';

import styles from './Dashboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileImport,
    faNewspaper,
    faUpload,
} from '@fortawesome/free-solid-svg-icons';

import Table from './Table';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

DataTable.use(DT);

function Dashboard() {
    const [table, setTable] = useState([]);

    useEffect(() => {
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
        <>
            <div className={cx('title')}>
                <div>
                    <p>
                        <FontAwesomeIcon icon={faNewspaper} />
                    </p>
                    <p>Detailed report</p>
                </div>
                <div>
                    <Button
                        pink
                        outline
                        leftIcon={<FontAwesomeIcon icon={faFileImport} />}
                    >
                        Import
                    </Button>
                    <Button
                        pink
                        outline
                        leftIcon={<FontAwesomeIcon icon={faUpload} />}
                    >
                        Upload
                    </Button>
                </div>
            </div>

            <Table data={table} />
        </>
    );
}

export default Dashboard;

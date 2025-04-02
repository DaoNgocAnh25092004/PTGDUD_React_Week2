import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretUp,
    faCartShopping,
    faDollar,
    faEdit,
    faLayerGroup,
    faNewspaper,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Content() {
    const [overview, setOverview] = useState([]);
    const [table, setTable] = useState([]);

    console.table(overview);

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
                                    ${item.price}
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

            <div className={cx('title')}>
                <p>
                    <FontAwesomeIcon icon={faNewspaper} />
                </p>
                <p>Detailed report</p>
            </div>

            <DataTable
                value={table.slice(0, 3)}
                showGridlines
                tableStyle={{ minWidth: '50rem' }}
                rowClassName={() => 'no-background'}
                headerStyle={{ backgroundColor: '#f5f5f5' }}
            >
                <Column
                    body={() => (
                        <div className={cx('box-check')}>
                            <input type="checkbox" />
                        </div>
                    )}
                ></Column>
                <Column
                    header="CUSTOMER NAME"
                    body={(rowData) => (
                        <div className={cx('box-user')}>
                            <Image
                                className={cx('img-avatar')}
                                src={rowData.img}
                                alt={rowData.name}
                            />
                            <p>{rowData.name}</p>
                        </div>
                    )}
                ></Column>
                <Column field="company" header="COMPANY"></Column>
                <Column field="orderValue" header="ORDER VALUE"></Column>
                <Column
                    field="orderDate"
                    header="ORDER DATE"
                    body={(rowData) => {
                        const formattedDate = new Date(
                            rowData.orderDate,
                        ).toLocaleDateString();
                        return <span>{formattedDate}</span>;
                    }}
                ></Column>

                <Column
                    body={() => (
                        <div className={cx('box-check')}>
                            <FontAwesomeIcon icon={faEdit} />{' '}
                        </div>
                    )}
                ></Column>
            </DataTable>
        </div>
    );
}

export default Content;

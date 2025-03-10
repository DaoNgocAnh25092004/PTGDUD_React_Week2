import classNames from 'classnames/bind';

import Sidebar from '~/Layouts/Components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('container-box')}>
                    <Sidebar />
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;

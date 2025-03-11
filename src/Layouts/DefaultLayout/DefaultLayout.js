import classNames from 'classnames/bind';

import Sidebar from '~/Layouts/Components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children, week }) {
    return (
        <>
            <div className={cx('container')}>
                <Sidebar week={week} />
                <div>{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;

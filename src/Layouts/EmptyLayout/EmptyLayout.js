import classNames from 'classnames/bind';
import styles from './EmptyLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return <>{children}</>;
}

export default DefaultLayout;

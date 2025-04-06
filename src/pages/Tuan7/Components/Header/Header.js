import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faQuestion,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import Image from '~/components/Image';
import { useLocation } from 'react-router';

const cx = classNames.bind(styles);

function Header() {
    const location = useLocation();
    console.log('🚀 ~ Header ~ location:', location);

    // Map đường dẫn tới tên trang
    const pageTitles = {
        '/week7/dashboard': 'Dashboard',
        '/week7/project': 'Project',
        '/week7/teams': 'Teams',
        '/week7/analytics': 'Analytics',
        '/week7/message': 'Messages',
        '/week7/integrations': 'Integrations',
    };

    // Lấy tên trang dựa trên đường dẫn hiện tại
    const currentPage = pageTitles[location.pathname] || 'Unknown Page';

    return (
        <header className={cx('header')}>
            <div>{currentPage}</div>
            <div>
                <div className={cx('box-input')}>
                    <input type="text" placeholder="Search..." />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faQuestion} />
                <div className={cx('box-avatar')}>
                    <Image src={images.avartar} alt="Avatar" />
                </div>
            </div>
        </header>
    );
}

export default Header;

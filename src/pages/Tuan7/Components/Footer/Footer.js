import Image from '~/components/Image';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <p>Made with</p>
            <p className={cx('box-img')}>
                <Image src={images.logo} alt="Logo" />
            </p>
        </footer>
    );
}

export default Footer;

import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Bai7.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import Button from '~/components/Button';
import { Google, Facebook } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Bai7() {
    const [showContainer, setShowContainer] = useState(true);

    return (
        showContainer && (
            <div className={cx('container')}>
                <div className={cx('box-left')}>
                    <Image src={images.food4} alt="food4" />
                </div>
                <div className={cx('box-right')}>
                    <h1>Login</h1>
                    <p>Enter your email to login</p>

                    <input
                        className={cx('input')}
                        type="text"
                        placeholder="Enter your email"
                    />

                    <Button primary widthFull className={cx('button')}>
                        Continue
                    </Button>

                    <div className={cx('or-divider')}>OR</div>

                    <p className={cx('terms')}>
                        By continuing you agree to the updated Terms of Sale,
                        Term of Service and Privacy Policy.
                    </p>

                    <Button outline widthFull leftIcon={<Google />}>
                        Continue with Google
                    </Button>

                    <Button
                        outline
                        widthFull
                        leftIcon={<Facebook />}
                        className={cx('btn-facebook')}
                    >
                        Continue with Facebook
                    </Button>

                    <Button
                        outline
                        widthFull
                        leftIcon={<FontAwesomeIcon icon={faApple} />}
                    >
                        Continue with Apple
                    </Button>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className={cx('icon-close')}
                        onClick={() => setShowContainer(false)}
                    />
                </div>
            </div>
        )
    );
}

export default Bai7;

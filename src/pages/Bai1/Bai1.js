import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Bai1.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Bai1() {
    const [text, setText] = useState('');
    const handlePrint = () => {
        console.log('Text: ', text);
    };
    return (
        <>
            <input className={cx('input')} value={text} type="text" onChange={(e) => setText(e.target.value)} />
            <Button leftIcon={<FontAwesomeIcon icon={faPrint} />} primary onClick={handlePrint}>
                Print
            </Button>
        </>
    );
}

export default Bai1;

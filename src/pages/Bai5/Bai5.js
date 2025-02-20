import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Bai5.module.scss';

let cx = classNames.bind(styles);

const data = [
    {
        id: 1,
        name: 'Điệp khúc',
        lyric: 'Vì yêu là nhớ, là mơ, là mong chờ. Dẫu cho ngày sau có thế nào, anh vẫn chờ. Một đời này, anh chỉ yêu mỗi em, người ơi!',
    },
    {
        id: 2,
        name: 'Lời 1',
        lyric: 'Mặt trời khuất sau ngọn đồi, hoàng hôn nhuộm tím chân trời. Dưới ánh đèn phố quen, anh nhớ em vô cùng. Ngày ấy đôi ta từng hứa bên nhau suốt đời, giờ đây chỉ mình anh với nỗi cô đơn.',
    },
    {
        id: 3,
        name: 'Tiền điệp khúc',
        lyric: 'Nhớ những tháng ngày đôi ta bên nhau thật đắm say. Những chiếc hôn dịu êm, những cái ôm nồng nàn. Giờ đây xa cách hai phương trời, lòng này vẫn mãi mong đợi.',
    },
    {
        id: 4,
        name: 'Cao trào',
        lyric: 'Dẫu cho tháng năm đổi thay, dẫu cho người chẳng trở lại. Anh vẫn yêu em mãi mãi, như ngày đầu tiên. Vì trái tim này, đã trót trao em một đời...',
    },
];

function Bai5() {
    const [activeTab, setActiveTab] = useState(data[0].id);

    return (
        <div className={cx('container')}>
            <div className={cx('menu')}>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={cx('menu-item', {
                            active: activeTab === item.id,
                        })}
                        onClick={() => setActiveTab(item.id)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className={cx('content')}>
                {data.find((item) => item.id === activeTab).lyric}
            </div>
        </div>
    );
}

export default Bai5;

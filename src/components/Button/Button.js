import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    widthFull = false,
    className,
    pink,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    //Biến Comp sẽ lưu tên component mà chúng ta sẽ sử dụng
    let Comp = 'button';

    //Các props cần truyền vào component Button
    const props = {
        onClick,
        ...passProps,
    };

    console.log('Button re-render');

    //Kiểm tra xem nếu disabled = true thì sẽ xóa đi props onClick
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });

        //Không cho nó chuyển trang
        to = undefined;
        href = undefined;
    }

    //Kiểm tra xem nếu có truyền vào to thì sẽ sử dụng component Link
    //Để chuyển hướng trang, còn nếu có truyền vào href thì sẽ sử dụng
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    //Kiểm tra xem có class nào được truyền vào không
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        text,
        large,
        disabled,
        rounded,
        'width-full': widthFull,
        pink,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

//Kiểm tra kiểu dữ liệu của props children phải là node và bắt buộc phải có
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default memo(Button);

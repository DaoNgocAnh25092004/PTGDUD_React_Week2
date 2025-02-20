function Bai3() {
    return (
        <>
            <input
                className={cx('input')}
                value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
            />
            <input
                className={cx('input')}
                value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
            />
        </>
    )
}

export default Bai3
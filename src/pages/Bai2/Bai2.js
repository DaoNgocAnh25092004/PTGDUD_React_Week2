import classNames from "classnames/bind";
import { useState } from "react";

import styles from './Bai2.module.scss'
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Bai2() {
    const [text, setText] =  useState("");
    const handlePrint = () => {
        console.log("Text: ", text)
    }
    return (
        <>
            <input
                className={cx('input')}
                value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                    leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    primary
                    onClick={handlePrint}
                >
                    Print
            </Button>
        </>
    )
}

export default Bai2
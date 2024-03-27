import React from 'react'
import CSS from './index.module.css';

// props.children
const LoginPageStyle = (props) => {
    return (
        <>
            <div className={CSS.left_box}>
                <div>LOGO</div>
                <div className={CSS.middle_box}>{props.children}</div>
                <div>Already Member login</div>
            </div>
            <div className={CSS.right_box}>
                jhjk
            </div>
        </>
    )
}

export default LoginPageStyle
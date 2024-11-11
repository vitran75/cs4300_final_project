import React from 'react';
import styles from './LoginPage.module.css';
import { X } from 'lucide-react';

function LoginPage({ onClose }) {
    return (
        <div className={styles.LoginPage}>
            <div className={styles.modal}>
                <button onClick = {onClose}><X/></button>
                <div className={styles.signupContainer}>
                    <h1>Signup</h1>
                    <form action="/submit" method="post">
                        <input type="email" id="input-email-su" placeholder="johndoe@email.com" />
                        <input type="text" id="input-password-su" placeholder="password" />
                        <button type="submit" id="signupButtonForm">Enter</button>
                    </form>

                    <h2>Login</h2>
                    <form action="/submit" method="post">
                        <input type="email" id="input-email-su" placeholder="johndoe@email.com" />
                        <input type="text" id="input-password-su" placeholder="password" />
                        <button type="submit" id="loginButtonForm">Enter</button>
                    </form>


                </div>
            </div>
        </div>
    );
}

export default LoginPage;

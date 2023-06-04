import { FC } from 'react'

interface IAuthForm {
    onCheckRegistered: () => void
}

export const AuthForm: FC<IAuthForm> = ({ onCheckRegistered }) => {
    // check if user is not registered in our service
    function detectUnregisteredUser() {
        // search in database

        // reset state
        if(true) {
            onCheckRegistered()
        }
    }

    return (
        <>
            <div id="auth-form">
                <h1>Авторизация</h1>
                <div>
                    <form method="get">
                        <p>
                            <label htmlFor="name">Введите имя: </label>
                            <input type="text" name="name" id="name" required></input>
                        </p>
                        <p>
                            <label htmlFor="email">Введите пароль: </label>
                            <input type="email" name="email" id="email" required></input>
                        </p>
                        <button type="submit" onClick={detectUnregisteredUser}>Войти</button>
                    </form>
                </div>
            </div>
        </>
    )
}
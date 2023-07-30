import { FC } from 'react'

interface IRegisterForm {
    onCheckRegistered: () => void
}

export const RegisterForm: FC<IRegisterForm> = ({ onCheckRegistered }) => {
    // check if user is already registered in our service
    function detectRegisteredUser() {
        // search in database

        // reset state
        if(true) {
            onCheckRegistered()
        }
    }

    return (
        <>
            <div id="register-form">
                <h1>Регистрация</h1>
                <div>
                    <form method="get">
                        <p>
                            <label htmlFor="name">Введите имя: </label>
                            <input type="text" name="name" id="name" required></input>
                        </p>
                        <p>
                            <label htmlFor="email">Введите email: </label>
                            <input type="email" name="email" id="email" required></input>
                        </p>
                        <p>
                            <label htmlFor="password">Введите пароль: </label>
                            <input type="text" name="password" id="password" required></input>
                        </p>
                        <p>
                            <label htmlFor="birthdate">Введите дата рождения: </label>
                            <input type="date" name="birthdate" id="birthdate" required></input>
                        </p>
                        <p>
                            <label htmlFor="gender">Введите пол: </label>
                            <input type="text" name="gender" id="gender" required></input>
                        </p>
                        <p>
                            <label htmlFor="photo">Загрузите фото профиля </label>
                            <input type="text" name="photo" id="photo" required></input>
                        </p>
                        <button type="submit" onClick={detectRegisteredUser}>Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </>
    )
}
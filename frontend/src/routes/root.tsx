import React from "react";

export default function Root() {
    return (
      <>
        <div id="main-form">
          <h1>Авторизация</h1>
          <div>
            <form action="" method="get">
                <p>
                    <label htmlFor="name">Введите имя: </label>
                    <input type="text" name="name" id="name" required></input>
                </p>
                <p>
                    <label htmlFor="email">Введите пароль: </label>
                    <input type="email" name="email" id="email" required></input>
                </p>
                <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
        <div id="detail"></div>
      </>
    );
  }
  
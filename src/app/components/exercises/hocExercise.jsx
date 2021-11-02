import React, { useState } from "react";
import CardWrapper from "../common/Card";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import PropTypes from "prop-types";

const withLogin = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    console.log(isAuth);
    const onLogIn = () => {
        localStorage.setItem("user", "user");
    };

    const onLogOut = () => {
        localStorage.removeItem("user", "user");
    };

    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogIn={onLogIn}
                onLogOut={onLogOut}
                {...props}
            />
        </CardWrapper>
    );
};

const SimpleComponent = ({ isAuth, onLogIn, onLogOut }) => {
    const [isLogin, setIsLogin] = useState(isAuth);
    console.log(isAuth);
    console.log(isLogin);
    const handleLogIn = () => {
        onLogIn();
        setIsLogin(isAuth);
    };

    const handleLogOut = () => {
        onLogOut();
        setIsLogin(null);
    };
    return (
        <>
            {isLogin ? (
                <button className="btn btn-danger" onClick={handleLogOut}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={handleLogIn}>
                    Войти
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogOut: PropTypes.func,
    onLogIn: PropTypes.func
};

const HocExercise = () => {
    const ComponentWithAuth = withLogin(SimpleComponent);
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                Вам необходимо реализовать компонент{" "}
                <code>SimpleComponent</code>, который:
            </p>
            <ul>
                <li>
                    Имеет параметры:<code>onLogin</code>, <code>onLogOut</code>,{" "}
                    <code>isAuth</code>
                </li>
                <li>
                    Отображайте кнопку <code>Войти</code>, если пользователь НЕ
                    авторизован.
                </li>
                <li>
                    Отображает кнопку с содержанием{" "}
                    <code>Выйти из системы</code>, если пользователь
                    авторизован.
                </li>
                <li>
                    При нажатии на кнопки вызываются методы <code>onLogin</code>{" "}
                    и <code>onLogOut</code>
                </li>
            </ul>
            <p className="mt-3">
                Вам необходимо <code>HOC</code>, который модицифицует компонент{" "}
                <code>SimpleComponent</code> следующим образом:
            </p>
            <ul>
                <li>
                    Добавляет обертку в виде карточки boostrap (использовать
                    существующий HOC)
                </li>
                <li>
                    Передает параметр <code>isAuth</code>, который является
                    результатом проверки наличия записи с названием{" "}
                    <code>user</code> в <code>localStorage</code>
                </li>
                <li>
                    Передает параметр <code>onLogin</code> и{" "}
                    <code>onLogOut</code> для управления записью с названием{" "}
                    <code>user</code> в <code>localStorage</code>
                </li>
            </ul>
            <Divider />
            <ComponentWithAuth />
        </CollapseWrapper>
    );
};

export default HocExercise;

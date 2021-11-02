import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentList = ({ children }) => {
    console.log("children", children);
    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            text: `${index + 1}.${child.props.text}`
        };
        return React.cloneElement(child, config);
    });
};
ComponentList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    console.log(<Component />);
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentList>
                <Component text="Компонент списка" />
                <Component text="Компонент списка" />
                <Component text="Компонент списка" />
            </ComponentList>
        </CollapseWrapper>
    );
};

const Component = ({ text }) => {
    return <div>{text}</div>;
};

Component.propTypes = {
    text: PropTypes.string
};

export default ChildrenExercise;

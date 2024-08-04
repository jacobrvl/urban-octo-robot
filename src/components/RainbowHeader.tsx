import styled from "@emotion/styled";

const StyledRainbowHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(
            to right,
            red,
            orange,
            yellow,
            green,
            blue,
            violet
    );
    z-index: 1;
    transition: height 150ms ease-in-out;

    & > span {
        opacity: 0;
        transition: opacity 150ms ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: white;
        text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 0 16px rgba(0, 0, 0, 0.1);
    }

    &:hover {
        height: 110px;
        background-size: 1000% 1000%;
        animation: expand 15s infinite;
    }

    &:hover > span {
        opacity: 1;
    }

    @keyframes expand {
        0% {
            background-position: 0 0;
        }

        50% {
            background-position: 100% 100%;
        }

        100% {
            background-position: 0 0;
        }
    }
`
export default StyledRainbowHeader;
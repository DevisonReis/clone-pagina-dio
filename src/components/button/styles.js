import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button `
    background: #565656;
    border-radius: 22px;
    border-style: none;
    position: relative;

    color:#fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    margin-right: 12px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    align-items: center;
    tex-align: center;
    cursor: pointer;

    ${({variant}) => variant !== "primary" && css `
        min-width: 167px;
        height: 33px;
        border: 1px solid #e4105d;
        margin-top: 10px;

        background: #e4105d;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`
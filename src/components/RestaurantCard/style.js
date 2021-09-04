import styled from "styled-components";

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 5px;
    padding: 16px;
    background-color: #fff;
    border-left: 5px solid transparent;
    :hover{
        border-left-color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.background};
    }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regularFont};
    color: ${(props) => props.theme.colors.text};
    font-size: 22px;
    font-weight: bold;
    line-height: 20px;
`;

export const Address = styled.span`
    font-family: ${(props) => props.theme.fonts.regularFont};
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 10px;
`;



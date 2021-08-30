import styled from 'styled-components';

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 16px;
`;

export const Logo = styled.img`
    width: 230px;
    padding-bottom: 10px;
    align-self: center;
`;
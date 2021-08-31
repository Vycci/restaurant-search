import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SearchColumn = styled.aside`
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
    margin-bottom: 10px;
    align-self: center;
`;

export const Map = styled.div`
    background-color: red;
    width: 500px;
`;

export const Carousel = styled(Slider)`
    .slick-slide{
        margin-right: 16px;
    }
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regularFont};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    margin-top: 16px;
`;


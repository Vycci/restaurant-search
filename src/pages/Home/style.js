import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SearchColumn = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 400px;
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

export const Carousel = styled(Slider)`
    width: 350px;
    .slick-slide{
        margin-right: 16px;
    }
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regularFont};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    margin: 16px 0;
    line-height: 29px;
`;


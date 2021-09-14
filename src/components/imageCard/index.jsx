import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Skeleton } from '../Skeleton';


const Card = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-image: cover;
    display: flex;
    justify-content: center;
`;

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regularFont};
    color: #fff;
    font-size: 16px;
    padding: 5px;
`;

const ImageCard = ({ photo, title }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onLoad = () => setImageLoaded(true);
    }, [photo]);

    return (
        <>
            {imageLoaded ? (
                <Card photo={photo}>
                    <Title>{title}</Title>
                </Card>
            ) : (
                <Skeleton width='90px' height='90px' />
            )}
        </>
    );
};
    
export default ImageCard;
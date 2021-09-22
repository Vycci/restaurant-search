import React, { useState } from "react";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./style";
import ReactStars from 'react-rating-stars-component';
import Restaurante from '../../assets/restaurante-fake.png';
import Skeleton from "../Skeleton";

const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto 
                imageLoaded={imageLoaded}
                src={restaurant.photos ? restaurant.photos[0].getUrl() : Restaurante} 
                alt="Foto do Restaurante" 
                onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && <Skeleton width='100px' height='100px' />}
        </Restaurant>  
    ); 
};

export default RestaurantCard;

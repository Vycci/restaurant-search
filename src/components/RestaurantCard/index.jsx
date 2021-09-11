import React from "react";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./style";
import ReactStars from 'react-rating-stars-component';
import Restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant }) => ( 
    <Restaurant>
        <RestaurantInfo>
            <Title>{/*restaurant.name*/}Restaurante</Title>
            <ReactStars count={5} value={/*restaurant.rating*/4} edit={false} isHalf activeColor="#e7711c" />
            <Address>{/*restaurant.vicinity || restaurant.formatted_address*/}Endereço</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={/*restaurant.photos ? restaurant.photos[0].getUrl() : */Restaurante} alt="Foto do Restaurante" />
    </Restaurant>   
);

export default RestaurantCard;
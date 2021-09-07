import React from "react";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./style";
import ReactStars from 'react-rating-stars-component';
import Restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => ( 
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars count={5} value={4} edit={false} isHalf activeColor="#e7711c" />
            <Address>Rua Rio de Janeiro</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={Restaurante} alt="Foto do Restaurante" />
    </Restaurant>   
);

export default RestaurantCard;
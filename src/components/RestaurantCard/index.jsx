import React from "react";
import { Restaurant, RestaurantInfo, Title, Address } from "./style";

const RestaurantCard = () => ( 
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <p>avaliação</p>
            <Address>endereço</Address>
        </RestaurantInfo>
    </Restaurant>   
);

export default RestaurantCard;
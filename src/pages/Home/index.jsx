import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Search, Logo, SearchColumn, CarouselTitle, Wrapper, Carousel} from './style';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants } = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
    };

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(inputValue);
        }
    }

    return(
        <Wrapper>
            <SearchColumn>
                <Search>
                    <Logo src={logo} alt="logo do restaurante"></Logo>
                    <TextField
                        label="Pesquisar Restaurantes"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    >
                        <Input
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={(event) => setInputValue(event.target.value)}
                        />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        {restaurants.map((restaurant) => (
                            <Card 
                                photo={restaurant.photos ? restaurant.photo[0].getUrl() : restaurante} 
                                title={restaurant.name}
                            />
                        ))}
                        <Card photo={restaurante} title="nome"/>
                        <Card photo={restaurante} title="nome"/>
                        <Card photo={restaurante} title="nome"/>
                        <Card photo={restaurante} title="nome"/>
                        <Card photo={restaurante} title="nome"/>
                        <Card photo={restaurante} title="nome"/>
                        <Card photo={restaurante} title="nome"/>
                        <Card photo={restaurante} title="nome"/>
                    </Carousel>
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard restaurant={restaurant} />
                ))}
                <RestaurantCard />
            </SearchColumn>
            <Map query={query} />
            <Modal open={modalOpened} onClose={() => setModalOpened(false)} />
        </Wrapper>
    );
};

export default Home;
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Search, Logo, SearchColumn, CarouselTitle, Wrapper, Carousel, ModalTitle, ModalContent} from './style';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants, selectedRestaurant } = useSelector((state) => state.restaurants);

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

    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpened(true);
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
                    {restaurants.lenght > 0 ? (
                        <>
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
                        </>
                    ) : (
                        <Loader />
                    )}
                    
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
                ))}
                <RestaurantCard onClick={() => handleOpenModal(1)} />
            </SearchColumn>
            <Map query={query} placeId={placeId} />
            <Modal open={modalOpened} onClose={() => setModalOpened(false)}>
                {selectedRestaurant ? (
                    <>
                        <ModalTitle>{selectedRestaurant?.name}</ModalTitle>
                        <ModalContent>{selectedRestaurant?.formatted_phone_number}</ModalContent>
                        <ModalContent>{selectedRestaurant?.formatted_address}</ModalContent>
                        <ModalContent>{selectedRestaurant?.opening_hours?.open_now 
                            ? 'Aberto' 
                            : 'Fechado'}
                        </ModalContent>
                    </>
                ) : (
                    <>
                        <Skeleton width='10px' height='10px' />
                        <Skeleton width='10px' height='10px' />
                        <Skeleton width='10px' height='10px' />
                        <Skeleton width='10px' height='10px' />
                    </>
                )}                
            </Modal>
        </Wrapper>
    );
};

export default Home;

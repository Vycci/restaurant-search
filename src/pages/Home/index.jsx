import React, { useState } from 'react';

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

    const settings = {
        dots: false,
        infinite: true,
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
                        <Card photo={restaurante} title="Titulo"/>
                        <Card photo={restaurante} title="Titulo"/>
                        <Card photo={restaurante} title="Titulo"/>
                        <Card photo={restaurante} title="Titulo"/>
                        <Card photo={restaurante} title="Titulo"/>
                        <Card photo={restaurante} title="Titulo"/>
                    </Carousel>
                </Search>
                <RestaurantCard/>
            </SearchColumn>
            <Map query={query} />
            <Modal open={modalOpened} onClose={() => setModalOpened(false)} />
        </Wrapper>
    );
};

export default Home;
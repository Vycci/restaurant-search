import React, { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';
import { Container , Search, Logo} from './style';
import logo from '../../assets/logo.svg'

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    return(
        <Container>
        <Search>
            <Logo src={logo} alt="logo do restaurante"></Logo>
            <TextField
                label="Pesquisar"
                outlined
            >
                <Input
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
            </TextField>
        </Search>
        </Container>
    );
};

export default Home;
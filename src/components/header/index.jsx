import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from '../button'
import logo  from '../../assets/logo-dio.png';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'


const Header = ({autenticado}) => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/login')
    }

    const handleRegister = () => {
        navigate('/cadastro')
    }

    const handleHome = () => {
        navigate('/')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da DIO' onClick={handleHome}/>
                {autenticado ? (
                    <>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
                </>) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/92283190?v=4"></UserPicture>
                ) : (
                <>
                    <MenuRight href='/'>Home</MenuRight>
                    <Button title="Entrar" onClick={handleSignIn}/>
                    <Button title="Cadastrar" onClick={handleRegister}/>
                </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
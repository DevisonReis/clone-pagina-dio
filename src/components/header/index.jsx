import React from 'react'
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
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da DIO'/>
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
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
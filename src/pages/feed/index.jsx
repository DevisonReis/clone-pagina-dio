// import { Link } from 'react-router-dom';

import bannerImage from '../../assets/banner.png';
import { Button } from '../../components/button';
import { Card } from '../../components/card';
import { Header } from '../../components/header';
import { UserInfo } from '../../components/userinfo';

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={35} nome="Devison" image="https://avatars.githubusercontent.com/u/92283190?v=4"/>
                    <UserInfo percentual={80} nome="Devison" image="https://avatars.githubusercontent.com/u/92283190?v=4"/>
                    <UserInfo percentual={25} nome="Devison" image="https://avatars.githubusercontent.com/u/92283190?v=4"/>
                    <UserInfo percentual={50} nome="Devison" image="https://avatars.githubusercontent.com/u/92283190?v=4"/>
                </Column>
            </Container>
        </>
    )
}

export { Feed }
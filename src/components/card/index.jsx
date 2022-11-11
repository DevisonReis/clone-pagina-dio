import React from 'react'

import {
    CardContainer, 
    HasInfo, 
    Content, 
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = () => {
  return (<>
    <CardContainer>
        <ImageBackground src="https://hermes.digitalinnovation.one/articles/cover/e4bffea2-6c90-4b61-92e5-bad7269112f6.png" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/92283190?v=4" />
                <div>
                    <h4>Devison Reis</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito com o curso de HTML e CSS no bootcamp DIO do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
    </>
  )
}

export { Card }
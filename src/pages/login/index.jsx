import { useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Header } from '../../components/header';

import { api } from '../../services/api'

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'

const schema = yup.object({
    email: yup.string().email('e-mail não é válido').required('Campo obrigatório!'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório!'),
}).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });


    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if (data.length === 1) {
                navigate('/feed')
            } else {
                alert('E-mail ou senha inválidos.')
            }
        } catch {
            alert('Ocoreu um erro. Tente novamente.')
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email"/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password"/>
                            <Button title="Cadastrar" variant='secondary' type="submit"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login }
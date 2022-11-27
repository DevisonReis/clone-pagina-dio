import { useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { api } from '../../services/api'

import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

import { Container, Wrapper, Column, Row, Title, TitleCadastro, SubtitleCadastro, InfoCadastro, PossuoSenha, FazerLogin } from './styles'

const schema = yup.object({
    email: yup.string().email('e-mail não é válido').required('Campo obrigatório!'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório!'),
}).required();


const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });


    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if (data.length && data[0].id) {
                navigate('/login')
                return
            }
        } catch {
            alert('Ocoreu um erro. Tente novamente.')
        }
    };

  return (
    <>
    <Header/>
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleCadastro>Comece agora grátis</TitleCadastro>
                <SubtitleCadastro>Crie sua conta e make the change_</SubtitleCadastro>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome completo"/>
                <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail"/>
                <Input name="senha" errorMessage={errors?.senha?.message} control={control} placeholder="Senha"/>
                <Button title="Cadastrar" variant='secondary' type="submit"/>
                </form>
                <Row>
                    <InfoCadastro>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</InfoCadastro>
                </Row>
                <Row>
                    <PossuoSenha>Já tenho conta.<FazerLogin>Fazer login</FazerLogin></PossuoSenha>
                </Row>
            </Wrapper>
        </Column>
    </Container>
    </>
  )
}

export { Cadastro }

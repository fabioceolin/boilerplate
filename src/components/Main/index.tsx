import * as S from './styles';
const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
}) => (
  <S.Wrapper>
    <S.Logo src="/img/react.svg" alt="logo do react" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor olhando para uma tela de código"
    />
  </S.Wrapper>
);

export default Main;

import { useRouter } from 'next/router'
import styled from 'styled-components'
import Main from './Main'
import Nav from './Nav'
import Quote from './Quote'
import Head from 'next/head'

export const Layout = ({ children }) => {
  const { pathname } = useRouter()
  const isLanding = pathname === '/'

  return (
    <SContainer id='SContainer' hasPaddingTop={!isLanding}>
      <Head>
        <title>Peiwen Li</title>
      </Head>
      <SBGDimmer id='SBGDimmer' lighten={isLanding} />
      <Nav />
      <Main show={!isLanding}>{children}</Main>
      <Quote show={isLanding} />
    </SContainer>
  )
}

const SContainer = styled.div`
  padding-top: ${({ hasPaddingTop }) => (hasPaddingTop ? '7vh' : '')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--bg-color);
  background-image: url('/bg.jpg');
  background-repeat: repeat-y;
  background-size: 100%;
  background-position: top;
`

const SBGDimmer = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
  background-color: ${({ lighten }) => (lighten ? '' : 'rgba(0, 0, 0, 0.4)')};
  background-image: linear-gradient(
    to bottom,
    rgba(150, 150, 150, 0.05),
    rgba(0, 0, 0, 0.5)
  );
`

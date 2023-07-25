import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`

const fadeOut = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`

const scaleIn = keyframes`
  from {transform: scale(0);}
  to {transform: scale(1);}
`

const scaleOut = keyframes`
  from {transform: scale(1);}
  to {transform: scale(0);}
`

type OverlayProps = {
  $isLeaving?: boolean
}

export const Overlay = styled.div<OverlayProps>`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: grid;
  place-items: center;

  animation: ${fadeIn} 300ms;

  ${({ $isLeaving }) => $isLeaving && css`animation: ${fadeOut} 300ms forwards;`}
`

type ModalProps = {
  $danger?: boolean
  $isLeaving?: boolean
}

export const Modal = styled.div<ModalProps>`
  background-color: #FFF;
  border-radius: 4px;
  padding: 2.4rem;
  font-size: 1.6rem;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  width: 100%;
  max-width: 45rem;

  animation: ${scaleIn} 300ms;
  ${({ $isLeaving }) => $isLeaving && css`animation: ${scaleOut} 300ms forwards;`}

  > h1 {
    font-size: 2.2rem;
    color: ${({ theme, $danger }) => (
      $danger
        ? theme.colors.danger.main
        : theme.colors.gray[900]
    )};
  }

  .modal-body {
    margin-top: 2.4rem;
  }
`

export const Footer = styled.footer`
  margin-top: 3.2rem;

  display: flex;
  justify-content: flex-end;
  gap: 2.4rem;

  .cancel {
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray[200]};

    &:disabled {
      cursor: not-allowed;
    }
  }
`

import { ToastMessage } from '../toast-message'
import * as S from './container-styles'

export function ToastContainer () {
  return (
    <S.Container>
      <ToastMessage message='Default toast' />
      <ToastMessage message='Error toast' type='error' />
      <ToastMessage message='Success toast' type='success' />
    </S.Container>
  )
}

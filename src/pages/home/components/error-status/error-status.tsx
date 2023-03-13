import * as S from './error-status-styles'
import sad from '@/ui/icons/sad.svg'
import { Button } from '@/ui/button'

type ErrorStatusProps = {
  onTryAgain: () => void
}

export function ErrorStatus ({ onTryAgain }: ErrorStatusProps) {
  return (
    <S.ErrorContainer>
      <img src={sad} alt='Rosto triste' />

      <div>
        <strong>Ocorreu um erro ao obter os seus contatos!</strong>

        <Button onClick={onTryAgain}>Tentar novamente</Button>
      </div>
    </S.ErrorContainer>
  )
}

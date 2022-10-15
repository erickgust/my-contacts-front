import arrow from '@/ui/icons/arrow.svg'
import * as S from './styles'

type PageHeaderProps = {
  title: string
}

export function PageHeader ({ title }: PageHeaderProps) {
  return (
    <div>
      <S.ReturnLink to="/">
        <img src={arrow} alt="Voltar" />
        <span>Voltar</span>
      </S.ReturnLink>

      <S.H1>{title}</S.H1>
    </div>
  )
}

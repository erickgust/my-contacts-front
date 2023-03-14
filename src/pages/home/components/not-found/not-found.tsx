import * as S from './not-found-styles'
import magnifierQuestion from '@/ui/icons/magnifier-question.svg'

type SearchNotFoundProps = {
  search: string
}

export function SearchNotFound ({ search }: SearchNotFoundProps) {
  return (
    <S.SearchNotFoundContainer>
      <img src={magnifierQuestion} alt='Lupa questionando' />

      <p>
        Nenhum resultado foi encontrado para <strong>”{search}”</strong>.
      </p>
    </S.SearchNotFoundContainer>
  )
}

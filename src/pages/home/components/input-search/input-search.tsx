import * as S from './input-search-styles'

type InputSearchProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputSearch ({ value, onChange }: InputSearchProps) {
  return (
    <S.Label>
      <S.Input
        placeholder='Pesquisar contato...'
        value={value}
        onChange={onChange}
      />
    </S.Label>
  )
}

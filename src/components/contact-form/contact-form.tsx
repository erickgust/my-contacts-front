import { FormGroup } from '@/components/form-group'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Select } from '@/ui/select'
import * as S from './contact-form-styles'

type ContactFormProps = {
  buttonLabel: string
}

export function ContactForm ({ buttonLabel }: ContactFormProps) {
  return (
    <form>
      <FormGroup>
        <Input placeholder='Nome' />
      </FormGroup>

      <FormGroup
        error='O formato do e-mail é inválido.'
      >
        <Input placeholder='E-mail' error />
      </FormGroup>

      <FormGroup>
        <Input placeholder='Telefone' />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button>{buttonLabel}</Button>
      </S.ButtonContainer>
    </form>
  )
}

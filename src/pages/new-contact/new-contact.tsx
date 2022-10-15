import { PageHeader } from '@/ui/page-header'
import { Input } from '@/ui/input'
import { Select } from '@/ui/select'
import { Button } from '@/ui/button'

export function NewContact () {
  return (
    <>
      <PageHeader title='Novo contato' />
      <Input/>
      <Select>
        <option value="instagram">Instagram</option>
      </Select>
      <Button disabled>Salvar alterações</Button>
      <Button>Salvar alterações</Button>
    </>
  )
}

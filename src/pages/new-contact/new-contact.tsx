import { PageHeader } from '@/ui/page-header'
import { Input } from '@/ui/input'
import { Select } from '@/ui/select'

export function NewContact () {
  return (
    <>
      <PageHeader title='Novo contato' />
      <Input/>
      <Select>
        <option value="instagram">Instagram</option>
      </Select>
    </>
  )
}

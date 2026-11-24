import { useState, type ChangeEvent, type FormEvent } from 'react'
import { gallery, services, type GalleryCategory } from './content'

export function useGalleryFilter() {
  const [filter, setFilter] = useState<'all' | GalleryCategory>('all')
  const visible = filter === 'all' ? gallery : gallery.filter((item) => item.category === filter)
  return { filter, setFilter, visible }
}

export type BookingValues = {
  name: string
  contact: string
  service: string
  date: string
  message: string
}

/**
 * Prototype-only form state. On submit it just shows a confirmation.
 * To receive real requests, post `values` to a form service or API inside `onSubmit`.
 */
export function useBookingForm() {
  const [values, setValues] = useState<BookingValues>({
    name: '',
    contact: '',
    service: services[0].id,
    date: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const reset = () => {
    setSent(false)
    setValues((v) => ({ ...v, message: '' }))
  }

  return { values, onChange, onSubmit, sent, reset }
}

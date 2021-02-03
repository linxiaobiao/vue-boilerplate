import Axios from '../request'
import { to } from '@/tools'

export function fetchDemoData (params = {}) {
  return to(
    Axios.get('/demo/', { params })
  )
}

export function fetchDemoData2 (data = {}) {
  return to(
    Axios.post('/demo2/', data)
  )
}

import { getAllUrlParams } from '@/tools/url'

const urlParams = getAllUrlParams(window.location.search)

export function getUrlParams () {
  return urlParams
}

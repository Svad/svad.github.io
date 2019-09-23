import { IPAddress } from './domain'
import { APIStackKey, APIStackUrl } from './config'

export async function resolveIP(url: string): Promise<IPAddress | null> {
  try {
    const body = await fetch(apiStackUrl(url)).then(res => res.json())
    return body.ip
  } catch (err) {
    console.error(err)
    return null
  }
}

function apiStackUrl(resolvableUrl: string) {
  return `${APIStackUrl}/${resolvableUrl}?access_key=${APIStackKey}`
}

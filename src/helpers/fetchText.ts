import { NotFoundError, UnauthorizedError } from './HTTPErrors'


export async function fetchText(url: string, init?: RequestInit) {
  const res = await fetch(url, init)
  switch(res.status) {
    case 404: throw new NotFoundError
    case 401: throw new UnauthorizedError
    default: break
  }
  return await res.text()
}

export default fetchText

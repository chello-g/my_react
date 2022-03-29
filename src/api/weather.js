import instance from '../axios/request.js'
import { BASE_URL } from '../axios/config.js'

export function getNowWeather(params) {
  return instance(
    {
      url: `${BASE_URL}`,
      methods: 'get',
      params
    }
  )
}
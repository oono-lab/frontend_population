import { useState, useEffect } from 'react'
import axios from 'axios'
//import { apiKey } from './api_code_key';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<
    { code: string; name: string }[]
  >([])

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const response = await axios.get(
          'https://opendata.resas-portal.go.jp/api/v1/prefectures',
          {
            headers: {
              'X-API-KEY': apiKey,
            },
          }
        )
        //
        const data = response.data.result

        setPrefectures(
          data.map((prefecture: any) => ({
            code: prefecture.prefCode,
            name: prefecture.prefName,
          }))
        )
      } catch (error) {
        console.error('Error fetching prefectures:', error)
      }
    }

    fetchPrefectures()
  }, [])

  return prefectures
}

export default usePrefectures

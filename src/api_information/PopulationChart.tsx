import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios'
import UI from './../UI_information/UI'
import { apiKey } from './api_code_key';
interface PopulationData {
  year: number
  value: number
}

interface Prefecture {
  code: string
  name: string
}

const title_Array: string[] = ['総人口', '年少人口', '生産年齢人口', '老年人口']

const PopulationChart: React.FC<{
  prefectureCodes: string[]
  prefectures: Prefecture[]
}> = ({ prefectureCodes, prefectures }) => {
  const [populationData, setPopulationData] = useState<{
    [key: string]: PopulationData[]
  }>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [newValue, setNewValue] = useState<number>(0)
  const [titleText, setTitleText] = useState<string>(title_Array[0])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const dataPromises = prefectureCodes.map(async (code) => {
          const response = await axios.get(
            `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${code}`,
            {
              headers: {
                'X-API-KEY':process.env.API_URL
              },
            }
          )
          return { code, data: response.data.result.data[newValue].data }
        })

        const allPopulationData = await Promise.all(dataPromises)
        const newData: { [key: string]: PopulationData[] } = {}
        allPopulationData.forEach(({ code, data }) => {
          newData[code] = data
        })

        setPopulationData(newData)
      } catch (error) {
        console.error('Error fetching population data:', error)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [prefectureCodes, newValue])

  useEffect(() => {
    setTitleText(title_Array[newValue])
  }, [newValue])

  const handleButtonClick = (newValue: number) => {
    setNewValue(newValue)
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  // prefectureCodesとprefecturesの関連付けを行う
  const prefectureNames: { [code: string]: string } = {}
  prefectures.forEach((prefecture) => {
    prefectureNames[prefecture.code] = prefecture.name
  })

  const chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: '#ffe0bd', // 背景色を肌色に設定
    },
    title: {
      text: titleText,
    },
    xAxis: {
      title: {
        text: '年度(年)',
      },
      categories: populationData[prefectureCodes[0]]
        ? populationData[prefectureCodes[0]].map((data) => data.year.toString())
        : [],
    },
    yAxis: {
      title: {
        text: '人口(人）',
      },
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
    },
    series: prefectureCodes.map((code) => ({
      name: prefectureNames[code], // prefectureNamesから直接都道府県名を取得
      type: 'line',
      data: populationData[code]
        ? populationData[code].map((data) => data.value)
        : [],
    })),
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <UI handleButtonClick={handleButtonClick} />
    </div>
  )
}

export default PopulationChart

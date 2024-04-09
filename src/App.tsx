import React, { useState } from 'react'
import PopulationChart from './api_information/PopulationChart'
import usePrefectures from './api_information/usePrefectures'
import './design/styles.css'
import './design/background-color.css'
const App: React.FC = () => {
  const prefectures = usePrefectures()
  //const [PrefecturesName, setPrefecturesName] = useState<string[]>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([])
  const [checked] = useState()
  const handleSelectPrefecture = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const prefectureCode = event.target.value

    setSelectedPrefectures((prevSelectedPrefectures) => {
      if (prevSelectedPrefectures.includes(prefectureCode)) {
        return prevSelectedPrefectures.filter((code) => code !== prefectureCode)
      } else {
        return [...prevSelectedPrefectures, prefectureCode]
      }
    })
  }

  // 選択された都道府県の名前のリストを作成

  return (
    <div>
      <div className="title_waku">
        <h1 className="title">都道府県別の総人口推移グラフ</h1>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>都道府県一覧</h1>
      </div>
      <div className="todouhuken_list">
        <div
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {prefectures.map((prefecture) => (
            <label
              key={prefecture.code}
              style={{ marginRight: 10, marginBottom: 10 }}
            >
              <input
                type="checkbox"
                value={prefecture.code}
                checked={checked}
                onChange={handleSelectPrefecture}
              />
              {prefecture.name}
            </label>
          ))}
        </div>
      </div>
      <div>
        <PopulationChart
          prefectureCodes={selectedPrefectures}
          prefectures={prefectures}
        />
      </div>
    </div>
  )
}

export default App

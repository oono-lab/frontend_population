import React from 'react'
import './UI.css' // UI.cssをインポート

interface UIProps {
  handleButtonClick: (newValue: number) => void // handleButtonClickの型を定義
}

const UI: React.FC<UIProps> = ({ handleButtonClick }) => {
  // propsを受け取るように変更
  return (
    <div className="button-container">
      <button onClick={() => handleButtonClick(0)} className="rounded-button">
        総人口
      </button>
      <button onClick={() => handleButtonClick(1)} className="rounded-button">
        年少人口
      </button>
      <button onClick={() => handleButtonClick(2)} className="rounded-button">
        生産年齢人口
      </button>
      <button onClick={() => handleButtonClick(3)} className="rounded-button">
        老年人口
      </button>
    </div>
  )
}

export default UI

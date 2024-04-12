# 都道府県別の総人口推移グラフ
## サイト
https://frontend-population.vercel.app/
## 起動方法
1. `コマンドプロンプトを開きます。`

2. `git clone https://github.com/oono-lab/frontend_population.git を入力`(ここでコマンドプロンプトのディレクトリ位置にfrontend_populationというファイルが作成されます。)

3. `cd frontend_population を入力`(ここでコマンドプロンプトのディレクトリ位置をfrontend_populationに設定)

4. `npm install を入力`

5. `if not exist .env copy nul .env を入力`(ここで作成されたfrontend_populationファイルに.envファイルが追加される)

6. `作成した.envファイルに REACT_APP_API_KEY = 'あなたのAPIキーをここにペーストしてください。' を追加`

7. `npm install axios を入力`(デフォルトでaxiosをインポートされていないため)

8. `npm start を入力`(これでウェブアプリが起動するはずです。)

※Windows上での環境のため、他の環境で行う場合は少し変更がございます。例えば、Lnux環境であれば5番目の手順をtouch .envと入力して、.envファイルが作成されます。作成されなかった場合は、直接frontend_populationファイルにアクセスし、手動で.envを作成する必要があります。


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

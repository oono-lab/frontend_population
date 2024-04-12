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

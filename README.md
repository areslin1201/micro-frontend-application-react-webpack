# micro-frontend-application-react-webpack

### 應用技術webpack 5 Module Federation [參考連結](https://webpack.docschina.org/concepts/module-federation/)

## 微前端 - projectChild

執行
```shell
npm run start
```
預設執行連結 [localhost:4000](http://localhost:4000)

1. 可於`src/components/Main.js`裡面預覽更改內容
2. 在`webpack.config.js`內使用`new ModuleFederationPlugin`匯出
3. 執行`npm run build`建構
4. 再執行`npm run start`將remoteEntry.js傳給`projectMain`

## 微前端 - projectMain

執行
```shell
npm run start
```
預設執行連結 [localhost:4001](http://localhost:4001)

1. `webpack.config.js`內引入remotes module，注意要`一樣的module name`
2. 在`src/components/App.js`內引入組件
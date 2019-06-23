# 餐廳清單

使用 Node.js + Express + MongoDB 打造的餐廳清單網站，可以新增、刪除、修改、顯示餐廳詳細的介紹。

## Features - 產品功能

- 使用者看到所有的餐廳清單
- 使用者可以點擊任何一個餐廳，會顯示個別餐廳詳細的介紹
- 使用者可以用中英文或大小寫，依照名稱、- 分類進行搜尋
- 使用者可以新增一家餐廳
- 使用者可以修改一家餐廳的資訊
- 使用者可以刪除一家餐廳

## Environment SetUp - 環境建置

- node.js v10.16.0
- express 4.17.1
- express-handlebars 3.1.0"
- mongoose 5.6.0"
- mongo DB

## Installing - 專案安裝流程

1. 安裝 [MongoDB](https://www.mongodb.com/download-center/community)

2. 安裝 ROBT 3T

3. 打開你的 terminal，Clone 此專案至本機電腦

```
 https://github.com/lesterhua/SEM3-S4-A6-restaurant-list-CRUD.git
```

4. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd restaurant_list
```

5. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

6. 建立種子資料

```
在 Terminal 裡 cd models/seeds
node restaurantSeeder.js
```

7. 執行專案

```
在 Terminal 輸入 npm run dev  指令
```

#### 安裝成功後，會在終端機看到訊息"Express is running on :http://localhost:2800

## 畫面 - Demo

![alt text](https://github.com/lesterhua/SEM3-S4-A6-restaurant-list-CRUD/blob/master/public/create.gif)
![alt text](https://github.com/lesterhua/SEM3-S4-A6-restaurant-list-CRUD/blob/master/public/edit.gif)
![alt text](https://github.com/lesterhua/SEM3-S4-A6-restaurant-list-CRUD/blob/master/public/show:delete.gif)

## 作者 - Authors

[Lester](https://github.com/lesterhua)

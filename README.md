```js 
// 打包流程：

rm -rf dist
yarn build:main
yarn build:render
yarn pack
```

```js
// 运行

先执行 yarn start:render
再执行 yarn start:main
```
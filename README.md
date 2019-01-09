## 说明

- 功能: 给 ctx 附带上一个全局唯一的`trackid`

## 依赖

> uuid

## 安装

```bash
$ npm i egg-full-trackid --save
```

## 使用

```js
/**
 * config/plugin.js
 * 本插件使用 app.config.coreMiddleware.unshift(MIDDLEWARE_NAME_TRACKID) 放置在最前面
 * 但为了避免其它插件也是用此方法放在最前面
 * 因此：“请把下面的配置放在 plugin.js 的最后面”
 */
exports.fullTrackId = {
  enable: true,
  package: 'egg-full-trackid',
};
```

## 配置

- 无需配置

## 使用

- 在后文中，直接使用`ctx.trackid`来获取这个全局唯一的标识符

## License

[MIT](LICENSE)

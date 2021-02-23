<!--
 * @file: file
 * @author: zhaojianpeng
-->

# 初始化项目

`npm init -y`

`npm i webpack webpack-cli typescript ts-loader -D`

`npm i html-webpack-plugin -D`

`npm i webpack-dev-server -D`

`npm i -D @babel/core @babel/preset-env babel-loader core-js`
配置`webpack`

## webpack配置支持ie浏览器

在babel配置中配置要兼容的浏览器

```js
{
    loader: 'babel-loader',
    options: {
        presets: [
            [
                // 指定环境的插件
                "@babel/preset-env",
                // 配置信息
                {
                    // 要兼容的浏览器
                    targets: {
                        "chrome": "80",
                        "ie": "11"
                    },
                    // core-js版本
                    "corejs": "3",
                    // 使用core-js方法，usage,按需加载
                    "useBuiltIns": "usage"
                }

            ]
        ]
    }
},
```

对ie中不支持箭头函数在`output`中配置

```js
environment: {
    // 告诉webpack不适用箭头函数
    arrowFunction: false
},
```

## 继承

如果在子类中谢了构造函数，在子类构造函数中必须对父类的构造函数进行调用--super();

## ts编译错误解决办法

### `TS2740: Type 'Element' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 107 more.`

源代码

```js
class Food {
    element: HTMLElement;

    constructor() {
        // this.element =<HTMLElement>document.querySelectorAll('.food')[0]!;
        // 这行报错
        this.element = document.querySelectorAll('.food')[0]!;
    }
}
```

因为ts默认用的是Element，需要声明为HTMLElement

```js
this.element = <HTMLElement>document.querySelectorAll('.food')[0]!;

```

或是下面这样

```js
this.element = document.querySelectorAll('.food')[0]! as HTMLElement;

```

### `TS1056: Accessors are only available when targeting ECMAScript 5 and higher.`

在tsconfig.json中配置

```json
{
    "compilerOption": {
        "module": "ES2015",
        "target": "ES2015",
    }
}
```

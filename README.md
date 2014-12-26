# [React](http://blog.cncounter.com/react) [![Build Status](https://travis-ci.org/facebook/react.svg?branch=master)](https://travis-ci.org/facebook/react)

React 是一款用于开发用户界面(UI)的 JavaScript 类库.

* **Just the UI:** 很多人将 React 用作 MVC 中的 **V**(View,视图,展示界面). 因为使用 React 不要求掌握其他的特定技能(makes no assumptions about the rest of your technology stack), 所以集成到一个现有项目上是很容易的.
* **Virtual DOM:** 为了暴高的性能(ultra-high performance), React 使用一个 *virtual DOM* 的不同实现(diff implementation). 也可以通过 Node.js 在服务端进行渲染 — 不再需要笨重的 browser DOM.
* **Data flow:** React 实现了单向(one-way)的数据流反应(reactive data flow),  这能减少样板文件(boilerplate),比起传统的数据绑定(traditional data binding)更容易推导和分析(reason about).

请参考: [React 快速入门.](http://blog.cncounter.com/react/docs/getting-started.html)

## 示例

在GitHub.io的[React项目Pages](http://blog.cncounter.com/react/)中有很多示例. 下面是第一个,可以帮你快速上手:

```js
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(
  <HelloMessage name="John" />,
  document.getElementById('container')
);
```

这个例子将 "Hello John" 渲染到页面中的一个容器里.

可以看到, 我们使用了一种类似HTML的语法(HTML-like syntax); [我们称之为 JSX](http://blog.cncounter.com/react/docs/jsx-in-depth.html). 在 React 中也可以不用 JSX, 但 JSX 让代码更具有可读性(readable), 而且书写起来就和HTML差不多. React中包含一个简单的转换程序, 允许将JSX转换成浏览器识别的原生JavaScript.

## 安装使用(Installation)

最简单的方式是引用 CDN 上的 JavaScript(也可以使用 [cdnjs](https://cdnjs.com/libraries/react) 或者 [jsdelivr](http://www.jsdelivr.com/#!react)):

```html
<!-- React 核心库 -->
<script src="http://fb.me/react-0.12.2.js"></script>
<!-- 在浏览器里执行的(In-browser) JSX 转换器(transformer), 如果已经预编译(pre-compiling)了JSX, 则移除即可. -->
<script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
```

如果你是第一次接触 React,可以参考我们编写的新手工具包: [starter kit](http://blog.cncounter.com/react/downloads/react-0.12.2.zip) . 里面包含一个web页面, 使用动态代码(live code, 实时响应)来演示React的使用.

如果使用 [bower](http://bower.io), 那也相当简单:

```sh
bower install --save react
```

## 帮助我们(Contribute)

这个仓库的主要目的是持续发展 React core, 使它更快, 更容易使用. 如果你有兴趣,请继续往下阅读. 如果现在对Contribute不感兴趣也没关系. :) 关于 React 的任何反馈我们都不胜感激.


### 编译自己的 React 代码

对 `react.js` 的整个编译过程都需要在 node.js 上运行, 要用到的很多库你可能已经非常熟悉了.

#### 准备条件(Prerequisites)

* 安装了 v0.10.0+ 版本以上的 `node` (在低版本应该也能运行,但我们没测试过).
* 熟悉 `npm`, 并了解在安装全局 package 的时候是否需要使用 `sudo` 来控制.
* 熟悉版本管理工具 `git` .

#### 编译(Build)

将仓库克隆完成后, 编译 `react.js` 那是相当的Easy.

```sh
# grunt 需要使用 grunt-cli; 必须先安装, 如果已经有则省略
npm install -g grunt-cli
npm install
grunt build
```

到这一步, React 所需要的一切都应该在 `build/` 目录中存在了. 示例也应该一切正常.

### Grunt

我们通过 grunt 来执行许多自动化任务. 可以通过 `grunt -h` 来查看完整的命令选项列表. 常用的包括下面这些:

```sh
# 构建并使用 PhantomJS 进行测试
grunt test
# 构建并在浏览器中进行测试
grunt test --debug
# 要节省时间, 还可以 fasttest 指令并且添加  --filter 选项来运行单个测试
grunt fasttest --filter=ReactIdentity
# 使用 JSHint 进行代码分析(Lint)
grunt lint
# 清理(Wipe out) 构建目录
grunt clean
```

### 许可协议(License)

React 受 [BSD license](./LICENSE) 保护. 我们还提供了一份附加的 [专利许可文件](./PATENTS).

React 文档使用的协议是“知识共享许可”: [Creative Commons licensed](./LICENSE-docs).

本仓库中的示例(Examples),以及文档中的示例都使用 [单独的授权协议](./LICENSE-examples).

### 更多信息…

我们要说明的信息就这么多. 如果你想加入我们的社区或者提交pull requests, 请参考 [Contributing document](CONTRIBUTING.md).

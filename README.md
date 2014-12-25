# [React](http://facebook.github.io/react) [![Build Status](https://travis-ci.org/facebook/react.svg?branch=master)](https://travis-ci.org/facebook/react)

React 是一款用于开发用户界面(UI)的 JavaScript 类库.

* **Just the UI:** Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.
* **Virtual DOM:** React uses a *virtual DOM* diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required.
* **Data flow:** React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.

[Learn how to use React in your own project.](http://facebook.github.io/react/docs/getting-started.html)

## 示例

在GitHub.io的[React项目Pages](http://facebook.github.io/react/)中有很多示例. 下面是第一个,可以帮你快速上手:

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

This example will render "Hello John" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](http://facebook.github.io/react/docs/jsx-in-depth.html). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest.

## Installation

最简单的方式是引用 CDN 上的 JavaScript(也可以使用 [cdnjs](https://cdnjs.com/libraries/react) 或者 [jsdelivr](http://www.jsdelivr.com/#!react)):

```html
<!-- React 核心库 -->
<script src="http://fb.me/react-0.12.2.js"></script>
<!-- In-browser JSX transformer, remove when pre-compiling JSX. -->
<script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
```

We've also built a [starter kit](http://facebook.github.io/react/downloads/react-0.12.2.zip) which might be useful if this is your first time using React. It includes a webpage with an example of using React with live code.

如果使用 [bower](http://bower.io), 那也相当简单:

```sh
bower install --save react
```

## Contribute

The main purpose of this repository is to continue to evolve React core, making it faster and easier to use. If you're interested in helping with that, then keep reading. If you're not interested in helping right now that's ok too. :) Any feedback you have about using React would be greatly appreciated.

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

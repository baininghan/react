// 这只是字符串
var HELLO_COMPONENT = 
(
	"\n"
	+"var HelloMessage = React.createClass("
		+"{"
		+"\n"
		+"  render: function() {"
		+"\n"
		+"    /"+"/"+"你可以修改此处的代码,右边将动态显示结果"
		+"\n"
		+"    return <div> {this.props.name},我们做朋友好不好^_^</div>;"
		+"\n"
		+"  }"
		+"\n"
		+"}"
	+");"
	
	+"\n\n"
	+"React.render(<HelloMessage name=\"土豪\" />, mountNode);"
	+"\n"

);

// 这个组件不错哦
// 如果你看到这个源码,其实就是这里起作用啦.
React.render(
  React.createElement(ReactPlayground, {codeText: HELLO_COMPONENT}),
  document.getElementById('helloExample')
);

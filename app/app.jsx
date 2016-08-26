var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory}=require('react-router');
// var obj={
// 	name: 'Supratik'
// }
// var {name}=obj;//a var named name, whole value is whatever obj.name is . this is object structuring
var Main=require('Main');
var Weather=require('Weather');
var About=require('About');
var Examples=require('Examples');
ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Main}>
  <Route path ="about" component={About}/>
  <Route path="examples" component={Examples}/>
  <IndexRoute component={Weather}/>


  </Route>
   </Router>,
  document.getElementById('app')
);

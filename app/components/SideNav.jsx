var React=require('react');
var {Link,IndexLink}=require('react-router');
var SideNav=React.createClass({
	onSearch: function(e){
		e.preventDefault();
		alert('Not yet wired up');
	},
	render: function(){
		return(
		<ul className="side-nav">
		<li className="active"><a href="#">Link 1</a></li>
		<li><a href="#">Link 2</a></li>
		<li class="divider"></li>
		<li><a href="#">Link 3</a></li>
		<li><a href="#">Link 4</a></li>
	</ul>


)
}
});
module.exports=SideNav;

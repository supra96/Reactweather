var React=require('react');
var Nav=require('Nav');
var Main=React.createClass({
	render:function(){
		return(
			<div>
			<Nav/>
			<div className ="row">
			<div class="columns medium-6 large-4  "><h1> Main Component</h1></div>
			{this.props.children} 
			</div>
			</div>
			);

	}
});
module.exports=Main;
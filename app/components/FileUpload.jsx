var React=require('react');
var FileUpload=React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();
		var location=this.refs.location.value;
		if(location.length>0){
			this.refs.location.value='';
			this.props.onSearch(location);
		}
	},
	render:function(){
		return(

			<div>
			 <form action="demo_form.asp">
			  <input type="file" name="pic" accept="image/*"/>
			  <input type="submit"/>
				</form></div>

			);
	}
});
module.exports=FileUpload;
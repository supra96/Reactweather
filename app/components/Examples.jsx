var React =require('react');
var Fileupload=require('Fileupload');
var Examples=React.createClass({
	componentWillUnmount: function(){
		console.log('Yeah, the component did get unmounted!');

	},
	componentWillMount: function(){
		console.log('componentmounted! Loaded before DOM renders anything, so no access to any refs or props');

	},
	componentDidMount: function(){
		console.log('component did mount.');
		$(document).foundation();

	},
	render:function(){
	return(
		<div className="row">
		 <div className="medium-4 columns">
		 <label for="exampleFileUpload" class="button expanded">Upload File yo!</label>
		 <input type="file" id="exampleFileUpload" class="show-for-sr"/></div>
  <div className="medium-4 columns">
  
  <img className="thumbnail" src="../../Assets/images/hey.jpg" width="500" height="750"/>
         <h2>Dropdown Menu Example</h2>
      
<ul className="dropdown menu" data-dropdown-menu>
  <li>
    <a>Cars</a>
    <ul className="menu">
      <li><a href="#">Ford</a></li>
      <li>
        <a href='#'>Mahindra</a>
        <ul className='menu'>
          <li><a href='#'>Xylo</a></li>
          <li><a href='#'>Scorpio</a></li>
          <li>
            <a href='#'>XUV</a>
            <ul className='menu'>
              <li><a href='#'>W4</a></li>
              <li><a href='#'>W6</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="#">Skoda</a></li>
    </ul>
  </li>
  <li>
    <a href="#">Sports</a>
    <ul className="menu">
      <li><a href="#">Cricket</a></li>
      <li><a href="#">Football</a></li>
    </ul>
  </li>
  <li><a href="#">Country</a></li>
</ul>
  
  </div>

  <div className="medium-4 columns">
<h5>HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U
HI How R UHI How R UHI How R UHI How R UHI How R UHI How R U</h5>

</div>
  
</div>
	
	);
	}
});
module.exports=Examples;
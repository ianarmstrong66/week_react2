const div1=document.getElementById("QA1");
const div2=document.getElementById("QA2");

class CustomComponent extends React.Component{
	render(){
		let component1=React.createElement("h1",null,"Hi and Bye");
		let component2=React.createElement("pre",null," QA consulting can be in Manchester ");
		let component4=React.createElement("a",
	{href:"http://www.cnn.com",target:"_blank","Title":"More Bollocks"}, "News Cnn ");
		let component3=React.createElement("div",null,[component1,component2,component4]);
		return component3;
	}
}
let firstComponent=React.createElement(CustomComponent,null);
ReactDOM.render(firstComponent,div1);
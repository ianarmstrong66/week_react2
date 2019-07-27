const div1=document.getElementById("QA1");
const div2=document.getElementById("QA2");

class CustomComponent extends React.Component{
	render(){
		let component=React.createElement("h1",null,"Hi and Bye");
		return component;
	}
}
let firstComponent=React.createElement(CustomComponent,null);
ReactDOM.render(firstComponent,div1);
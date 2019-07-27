class TimesTable extends React.Component{
	render(){
		console.log(this.props.range);
		let Conponents=[];
		for (let i=1;i<=this.props.range;i++){
			Conponents.push(
				React.createElement("h3",null,this.props.timestable + "x"+ i+"=" + 
				(this.props.timestable*i) +"  " + (this.props.timestable+1) + "x"+ i+"=" + 
				((this.props.timestable+1)*i)));
		}
		let Result=React.createElement("h2",null,Conponents);
		return Result;
	}
}
let div1 = document.getElementById("QA1");
let timestable=React.createElement(TimesTable,{timestable:3,range:30});
let tt_display=React.createElement("div",null,timestable);
ReactDOM.render(tt_display,div1);
class SalaryCalulations extends React.Component{
	render(){
		console.log(this.props);
		let tax=0;
		if (this.props.salary > 30000){tax=this.props.salary*21/100;}
		else if (this.props.salary > 19999 ){
				 tax=this.props.salary*18/100;
			}
		else if (this.props.salary > 9999 ){				
				 tax=this.props.salary*17/100;
			}
			else{tax=0;};
	
		let componentName=React.createElement("h1",null,"Name: "+this.props.name);
		let componentSalary=React.createElement("h2",null,"Salary: "+this.props.salary);
		let ComponentTax=React.createElement("h3",null,"Tax: "+tax);
		let wage=this.props.salary-tax;
		let ComponentNett=React.createElement("h3",null,"Wage: "+wage);

		let componet=React.createElement("div",null,
			[componentName,componentSalary,ComponentTax,ComponentNett]);
		return componet;		
	}
}

let salaryInfo=React.createElement(SalaryCalulations,{name:"Simon",salary:43500});
ReactDOM.render(salaryInfo,document.getElementById("QA1"));
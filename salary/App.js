import React from 'react';
// import './App.css';

function App() {
	return(
		<div>
		<SalaryCalulations name="Simon" salary="43500"/>
		<SalaryCalulations name="Mark" salary="33550"/>		
		<SalaryCalulations name="Stuart" salary="23550"/>
		<SalaryCalulations name="Chris" salary="18550"/>
		</div>
		)
};

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

		let wage=this.props.salary-tax;

		return(
			<div>
			<h1> Name : {this.props.name} <h1>
			<h2> Salary: {this.props.salary} </h2>
			<h3> Tax: {tax} </h3>
			<h3> Wage: {wage} </h3>	
			</div>
			)
	}
}

export default App;
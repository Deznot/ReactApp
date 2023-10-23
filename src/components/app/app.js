import { Component } from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { name: "John Doe", salary: 800, increase: true, promotion:false, id : 1 },
                { name: "John Smith", salary: 3000, increase: false, promotion:false, id : 2 },
                { name: "Alice Garden", salary: 4000, increase: false, promotion:false, id : 3 },
                { name: "Alison Cooper", salary: 4500, increase: true, promotion:false, id : 4 },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (employeeData) => {
        this.setState(({data}) => {
            const newArr = [...data];
            let maxId = newArr[0].id;
            for(let el of newArr) {
                maxId = el.id>maxId?el.id:maxId;
            }
            newArr.push({name: employeeData.name, salary: employeeData.salary, increase: false, id : maxId + 1});
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, [prop] : !item[prop]};
                }
                return item;
            })
        }));
    }

    render() {
        const totalEmployee = this.state.data.length;
        const increased = this.state.data.filter((item) => item.increase).length;
        return (
            <div className="app">
                <AppInfo totalEmployee={totalEmployee} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp}/>
                <EmployeeAddForm addEmployee={this.addItem}/>
            </div>
        );
    }
   
}

export default App;
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
                { name: "John Doe", salary: 800, increase: true, id : 1 },
                { name: "John Smith", salary: 3000, increase: false, id : 2 },
                { name: "Alice Garden", salary: 4000, increase: false, id : 3 },
                { name: "Alison Cooper", salary: 4500, increase: true, id : 4 },
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

    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={this.state.data} onDelete={this.deleteItem}/>
                <EmployeeAddForm />
            </div>
        );
    }
   
}

export default App;
import "./employee-add-form.css";
import { Component } from "react";


class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            salary: ""
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    submitHundler = (e) => {
        e.preventDefault();
        const {name,salary} = this.state;
        const {addEmployee} = this.props;
        let resObj = {
            name: name,
            salary: salary
        }
        this.setState(({name,salary}) => ({
            name: "",
            salary: ""
        }))
        return addEmployee(resObj);
       
    };

    render() {
        const {name,salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    // action="" 
                    className="add-form d-flex"
                    onSubmit={this.submitHundler}>
                    <input 
                        type="text" 
                        className="form-control new-post-label" 
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input 
                        type="number" 
                        className="form-control new-post-label" 
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button 
                        type="submit"
                        className="btn btn-outline-light">
                        Добавить
                    </button>
                        
                </form>
            </div>
        );
    }
};

export default EmployeeAddForm;
import { Component } from "react";
import "./employees-list-item.css";


class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salaryVal: this.props.salary
        }
    }

    onChangeSalary = (e) => {
        let val = e.target.value;
        this.setState(() => ({
            salaryVal: val
        }))
        this.props.onChangeSalary(e, val);
    }


    render() {
        const { name, onDelete, onToggleProp, increase, promotion } = this.props;
        const { salaryVal } = this.state;
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }

        if (promotion) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span onClick={onToggleProp} className="list-group-item-label" data-toggle="promotion">{name}</span>
                <input onChange={this.onChangeSalary} type="text" className="list-group-item-input" value={salaryVal} />
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={onToggleProp}
                        className="btn-cookie btn-sm"
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button onClick={onDelete} className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }


};

export default EmployeesListItem;
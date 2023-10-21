import "./employees-list-item.css";
import { Component } from "react";


class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            promotion: false
        };
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    };

    onPromotion = () => {
        this.setState(({promotion}) => ({
            promotion: !promotion
        })) 
    };

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, promotion} = this.state;

        let classNames =  "list-group-item d-flex justify-content-between";
        if(increase) {
            classNames += ' increase';
        }

        if(promotion) {
            classNames += ' like';
        }
        
    return (
        <li className={classNames}>
            <span onClick={this.onPromotion} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={this.onIncrease} className="btn-cookie btn-sm">
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
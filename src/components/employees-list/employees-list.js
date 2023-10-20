import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data }) => {
    const elements = data.map(item => {
        return (
            <EmployeesListItem {...item} className={item.increase ? "increase" : ""} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;
import "./app-filter.css";


const AppFilter = (props) => {

    const btnsData = [
        {name : "all", label: "Все сотрудники"},
        {name : "promotion", label: "На повышение"},
        {name : "moreThanThousand", label: "З/П больше 1000$"}
    ];

    const buttons = btnsData.map(({name,label}) => {
        const active = props.filter === name;
        const clazz = active? "btn-light": "btn-outline-light";
        return (
            <button 
                className={`btn ${clazz}`}
                key={name}
                type="button"
                onClick={() => props.onFilterChange(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
           {buttons}
        </div>
    );
};

export default AppFilter;
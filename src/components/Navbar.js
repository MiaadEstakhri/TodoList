import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "UnCompleted", label: "UnCompleted" },
];

const Navbar = ({ unCompletedTodos, onChange, selectedOption }) => {
  if (!unCompletedTodos)
    return (
      <header>
        <h2>Set your today todos!</h2>
      </header>
    );

  return (
    <header>
      <div className="nav-title">
        <span>{unCompletedTodos}</span>
        <h2>Todos are not completed</h2>
      </div>
      <Select
        onChange={onChange}
        value={selectedOption}
        options={options}
        className="select"
      />
    </header>
  );
};

export default Navbar;

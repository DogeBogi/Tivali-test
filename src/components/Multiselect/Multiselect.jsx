import { Component } from "react";
import Select from "../Select/Select";
import "./MultiSelect.css";
class MultiSelect extends Component {
  render() {
    const {options, loading, placeholders, selectedOptions,resetCountries, onSelectionChange} = this.props
    return (
      <>
        <div className="Chosen">
          {selectedOptions.length > 0 ? (
            <>
              <h2>{placeholders[2]}</h2>
              <button onClick={resetCountries}>Delete All</button>
            </>
          ) : (
            <h2>{placeholders[1]}</h2>
          )}
          <ul className="ChosenList">
            {selectedOptions.map((contry) => (
              <li className="ChosenList-country" key={contry}>
                {<p>{contry}</p>}
                <button onClick={() => this.props.onSelectionChange(contry)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Select
            onSelectionChange={onSelectionChange}
            options={options}
            placeholders={placeholders}
            loading={loading}
          />
        </div>
      </>
    );
  }
}

export default MultiSelect;

import { Component } from 'react';
import './Select.css'

class Select extends Component {
  state = {
    isOpen: false,
    searchTerm: '',
  };

  toggleDropdown = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSelect = (value) => {
    this.props.onSelectionChange(value);
  };

    render(){
    const { options, placeholders, loading } = this.props;
    const { isOpen, searchTerm } = this.state;

    const filteredOptions = options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(

      <div className="Custom-select">
        <div 
          className="Select-header"
          onClick={this.toggleDropdown}
          >
          {placeholders[0]}
        </div>

        {isOpen && (
          <div className="Dropdown">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={this.handleSearch}
              className="Dropdown-input"
              />
            
            <ul className="Options-list">
              {loading && <li>Loading...</li>}
              {filteredOptions.map(option => (
                <li
                key={option.value}
                className="Option-item"
                onClick={() => this.handleSelect(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
  );
}
}


export default Select;

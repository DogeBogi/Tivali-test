import React, { Component } from "react";

const CountriesContext = React.createContext();

class CountriesProvider extends Component {
  state = {
    countries: [],
    selectedCountries: [],
    isLoading: false,
  };

  getCountries = async () => {
    this.setState({ isLoading: true });
    const res = await fetch(
      "https://timeapi.io/api/timezone/availabletimezones"
    );
    if (!res.ok) {
      throw new Error("Fetch error");
    } else {
      const json = await res.json();
      this.setState({ isLoading: false });
      this.setCountries(
        json.map((country) => ({ label: country, value: country }))
      );
    }
  };

  setCountries = (countries) => {
    this.setState({ countries });
  };
  chooseCountries = (country) => {
    const index = this.state.selectedCountries.findIndex(
      (item) => item === country
    );
    if (index === -1) {
      const newCountries = [...this.state.selectedCountries];
      newCountries.push(country);
      this.setState({ selectedCountries: newCountries });
    } else {
      const newCountries = [...this.state.selectedCountries];
      newCountries.splice(index, 1);
      this.setState({ selectedCountries: newCountries });
    }
  };
  resetChosenCountries = () => {
    this.setState({ selectedCountries: [] });
  };

  render() {
    const { children } = this.props;
    const { countries, selectedCountries, isLoading } = this.state;
    const {
      setCountries,
      getCountries,
      chooseCountries,
      resetChosenCountries,
    } = this;
    return (
      <CountriesContext.Provider
        value={{
          countries,
          selectedCountries,
          isLoading,
          setCountries,
          getCountries,
          chooseCountries,
          resetChosenCountries,
        }}
      >
        {children}
      </CountriesContext.Provider>
    );
  }
}

export { CountriesProvider };
export default CountriesContext;

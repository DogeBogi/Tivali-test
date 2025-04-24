import { Component } from "react";
import MultiSelect from "../components/Multiselect/Multiselect";
import CountriesContext from "../store/countries-context";

class CountrySelect extends Component{
    static contextType = CountriesContext;
    componentDidMount(){
        this.context.getCountries();
    }
    render(){
        const {countries,selectedCountries, isLoading, chooseCountries, resetChosenCountries} = this.context;
        const placeholders = ['Select a country ▼', `Let's choose countries`,'Chosen countries list']
        return(
            <>
            <MultiSelect loading={isLoading} placeholders={placeholders} resetCountries={resetChosenCountries} options={countries} selectedOptions={selectedCountries} onSelectionChange={chooseCountries}/>
            </>
        )
    }
}

export default CountrySelect
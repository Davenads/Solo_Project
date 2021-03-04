import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Style from './styles.css'




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            descriptions: [],
            countryIds: [],
            countriesById: {}
        }
    }

    click(buttn){

    }

    componentDidMount(){
        fetch('/api/')
            .then(res => res.json())
            .then(({ countries }) => {
                const { countryIds, countriesById } = this.formatCountries(countries);
                return this.setState({
                    countryIds,
                    countriesById,
        });
      })
      .catch(err => console.log('App.componentDidMount: get characters: ERROR: ', err));
    }
    
    formatCountries(countries) {
        const countriesById = JSON.parse(JSON.stringify(this.state.countriesById));
        const countryIds = [...this.state.countryIds];
        countries.forEach((char) => {
          const id = char.countries;
          char.id = id;
          if (!countriesById[id]) {
            countryIds.push(id);
            countriesById[id] = char;
          }
        });
        return { countryIds, countriesById };
      }

    render(){
        let countries = [];
        
        return(
            <div className="router">
                React woooo!
            </div>
        )
    }

}
// const App = () => (
//     <div>Here's the app yoooo! Hello react!!</div>
// )
//make button component
//render them from your app
//pass down data to my different buttons from app
//passing down handleclick to function - could change something of state
export default App;


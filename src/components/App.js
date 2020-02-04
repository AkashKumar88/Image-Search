// ------------------App.js-------------------------
import React from 'react';
import unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.onSearchSubmit=this.onSearchSubmit.bind(this);
    }
        // onSearchSubmit(term){
        // axios
        //     .get('https://api.unsplash.com/search/photos', {
        //         params: { query: term},
        //     headers: {
        //         Authorization: 'Client-ID 6448f405d8b96d29e75bc7c24155d07b4c220e003f7fc336b14efa8fbf32a40a'
        //     } 
        //     })
        //     .then(response => {
        //         console.log(response.data.results);
        //  });
        state = { images: [] };
     async onSearchSubmit(term){
       const response= await unsplash.get('/search/photos', {
            params: { query: term}
        });
        this.setState({ images: response.data.results});
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList  images={this.state.images}/>
            </div>
        );
    }   
}
export default App;

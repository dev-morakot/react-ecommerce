import React, { Component } from 'react';
import { Grommet, Box , TextInput, FormField, Button } from 'grommet'
import AppBar from './components/AppBar'
import ProductList from './components/ProductList'
import Search from './components/Search'
import './App.css';
class App extends Component {


  render() {
    return (
      <Grommet plain full>
        <Box direction="column" fill>
          <AppBar />
          <Box direction="row" pad="medium" fill>
            <Box width='medium'>
              <Search />
            </Box>
            <Box flex>
              <ProductList />
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
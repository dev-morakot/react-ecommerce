import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Box, 
    FormField, 
    TextInput, 
    Button
} from 'grommet'


class Search extends Component {

    render() {
        const { keyword } = this.props.product
        const { setValue , SearchProduct } = this.props.productAction
        const handleChange = (e, setValue) => {
            const { name ,value } = e.target
            setValue(value, name)
        }

        return (
            <Box direction="column" basis="medium" pad="small">
            
                <FormField label="Name">
                    <TextInput name="keyword" placeholder="Search" onChange={(e) => handleChange(e, setValue)} />
                </FormField>
                <Button label="Search" onClick={() => SearchProduct(keyword)} />
            </Box>
        )
    }
}

function mapStateToProps(state) {
   return { product: state.product }
}

function mapDispatchToProps(dispatch){
    console.log('dispatch =>', dispatch.product);
    return { productAction: dispatch.product }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
import React from 'react';
import {Input, Button, Grid, Segment, GridColumn} from 'semantic-ui-react';
import If from './if/index'

function Search(props) {
    const { query, repositories, updateQuery, addRepository, error } = props;
    
    return (
        <Grid className='search-component'>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <If condition={error}>
                        <Segment inverted color='yellow' textAlign='center' className='error'>Não foi possível localizar o repositório solicitado.</Segment>
                    </If>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns = {1} verticalAlign='middle' className='image-header'>
                <Grid.Column>
                    <img alt='Logo do Github' size='2x' src="https://img.icons8.com/ios-glyphs/60/000000/github.png"></img>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2} verticalAlign='right' className='search-header'>
                <Grid.Column width={8}>
                    Repositórios
                </Grid.Column>
                <Grid.Column width={8} textAlign='left'>
                    {repositories.length}
                </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={2}>
                <Grid.Column width={16}>
                    <Input 
                        focus  
                        className='search-bar'
                        type='text'
                        value={query}
                        onChange={(evt) => updateQuery(evt.target.value)}
                    />
                </Grid.Column>
                <Grid.Column width={16}>
                    <Button class="ui button" color ="facebook" onClick={addRepository}>Adicionar</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
    
}

export default Search;
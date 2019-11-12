import React, {Component} from 'react';
import './App.css';
import api from './services/api';
import Search from './componentes/search';
import List from'./componentes/list';
import 'semantic-ui-css/semantic.min.css';
import store from './store/index';
import {Provider} from 'react-redux';

class App extends Component{

  updateQuery = (query) => {
      this.setState ({ query });
  }

  addRepository = async() => {
      try{
          const resp = await api.get(`/repos/${this.state.query}`);

          const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;
          let repo = { id, owner: { avatar_url, login }, name, stargazers_count, language, forks };
          
          let found = this.state.repositories.find(r => r.id === repo.id);
          if(found !== undefined) {
            return;
          } 

          this.setState((currentState) => ({
              repositories: currentState.repositories.concat({
                id,
                avatar_url,
                login,
                name,
                stargazers_count,
                language,
                forks
              }),

              error: false
          }))

      } catch {
          this.setState({ error: true })
      }
  }

  removeRepository = (repository) => {
      console.log('entrei no metodo delete')
      this.setState((currentState) => ({
          repositories: currentState.repositories.filter((r) => {
            return r.id !== repository.id;
          })
      }))
  }

  updateRepository = async(repo) => {
      console.log('Entrei no metodo atualizar');
      const resp = await api.get(`/repos/${repo.login}/${repo.name}`);

      console.log('OLD', repo);
      console.log(repo.login);

      const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks, fullName } = resp.data;
      repo = { id, avatar_url, login, name, stargazers_count, language, forks, fullName };

      console.log('NEW', repo);

      let newRepositories = this.state.repositories.map(r => (
          r.id === repo.id ? repo : r
      ))

      this.setState({ repositories: newRepositories })
  }

  render() {
    return (
      <div className='App'>
      <Provider store={store}>
        <Search error={this.state.error} query={this.state.query} repositories={this.state.repositories} updateQuery={this.updateQuery} addRepository={this.addRepository} />
        <List repositories={this.state.repositories} removeRepository={this.removeRepository} updateRepository={this.updateRepository} />
      </Provider>  
      </div>
    )
  }
}

export default App;
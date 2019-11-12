import React from 'react';
import {Grid, Image, Card, Button} from 'semantic-ui-react';



const Repository = (props) => {
    const { repo, removeRepository, updateRepository} = props;

    return(
        <li>
        <div class="ui_card">
            <div class="image"><img src={repo.avatar_url} className='repo-icon' alt='Logo do repositório'/></div>
            <div class="content">
            <div class="header">
              <h1 className='repo-name'>{repo.name}</h1>
              <h2 className='repo-subtitle'>{repo.login}</h2>
            </div>
                <div class="meta"><h3 class="date">Stars:{repo.stargazers_count}</h3></div>
                <div class="meta"><h3 class="date">Language:{repo.language}</h3></div>
                <div class="meta"><h3 class="date">Forks:{repo.forks}</h3></div>
                <div class="button">
                <Button class="ui button" color="facebook" onClick={() => updateRepository(repo)}>Atualizar</Button>
                <Button class="ui button" color="facebook" onClick={() => removeRepository(repo)}>Remover</Button>
            </div>
        </div>
        </div>
        </li>  
        )
    }
    
export default Repository;

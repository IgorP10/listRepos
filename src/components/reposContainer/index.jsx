import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles';

import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import moment from 'moment';

const ReposContainer = props => {
    const history = useHistory();
    const username = props?.repos[0]['owner']['login'];

    const [search, setSearch] = useState("");
    
    const lowerSearch = search.toLowerCase();
    const reposSearch = props.repos.filter((repo) => repo?.name.toLowerCase().includes(lowerSearch));

    return (
        <Section>
            <button onClick={() => history.goBack()}>voltar</button>
            <Title>Repositórios de {(username)?.split(' ')[0]}</Title>
            
            <input
                type="text" 
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
                placeholder='Pesquise um repositório'
            />
            
            <ListOfReposContainer>
                {(reposSearch).map(repo => (
                    <Repo onClick={() => window.open(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <h2>{moment(repo?.created_at).format('DD/MM/Y')}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>

        
    );
}

export default ReposContainer;
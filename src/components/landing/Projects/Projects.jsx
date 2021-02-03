import React, { useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { AwesomeButtonProgress } from "react-awesome-button";

import { Repository } from './Repository';
import { Grid } from './styles';

import LoadingScreen from '../../common/LoadingScreen/LoadingScreen';


export function Projects() {

    const [edges, setEdges] = useState(undefined);
    const endpoint = "https://api.github.com/graphql";

    var defaultNbRepos = 9;
    const [nbRepos, setNbRepos] = useState(defaultNbRepos);
    const [totalNbRepos, setTotalNbRepos] = useState();

    async function graphQLQuery(repos) {

        //Entrée : soit on a chargé aucun repo soit on veut en charger plus
        var whenToExec = !edges || repos !== defaultNbRepos;

        if (whenToExec) {

            var query = gql`
            {
                viewer {
                    repositories(first: ${repos}, orderBy: { field: STARGAZERS, direction: DESC }) {
                        totalCount,
                        edges {
                            node {
                                id
                                name
                                url
                                description
                                stargazers {
                                    totalCount
                                }
                                forkCount
                                languages(first: 3) {
                                    nodes {
                                        id
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }
            `;


            const graphQLClient = new GraphQLClient(endpoint, {
                headers: {
                    authorization: `Bearer ${atob(process.env.REACT_APP_GITHUB_TOKEN)}`,
                },
            });

            await graphQLClient.request(query).then(data => {
                if (whenToExec && data) {
                    setNbRepos(repos);
                    setEdges(data.viewer.repositories.edges);
                    setTotalNbRepos(data.viewer.repositories.totalCount);
                }
            });

        }
    };

    function getLoadMoreButton() {
        if (edges && totalNbRepos && totalNbRepos > nbRepos) {

            return (
                <div id="loadMore" className="mt-5 mx-auto">
                    <AwesomeButtonProgress
                        loadingLabel='Wait for it..'
                        resultLabel='Done!'
                        type="primary"
                        disabled={false}
                        fakePress={false}
                        action={(element, next) => {
                            var repos = nbRepos + defaultNbRepos;
                            graphQLQuery(repos).then(() => {
                                next();
                            });
                        }}
                    >
                        Load more repositories
                    </AwesomeButtonProgress >
                </div>
            )
        }
    }


    if (!edges) graphQLQuery(defaultNbRepos);

    return (

        <div id="projects" className="section">
            <h2 className="mb-5 font-weight-bolder title">Projects</h2>

            {
                edges ? <Grid> {
                    edges.map(({ node }) => (
                        <Repository
                            key={node.id}
                            url={node.url}
                            name={node.name}
                            description={node.description}
                            stargazers={node.stargazers.totalCount}
                            forkCount={node.forkCount}
                            languages={node.languages.nodes}
                        />
                    ))

                }
                </Grid>

                    : <LoadingScreen title="Loading GitHub repositories..." />
            }
            {getLoadMoreButton()}


        </div>
    );
}

export default Projects;
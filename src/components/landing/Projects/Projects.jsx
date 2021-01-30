import React, { useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

import { Grid, Content, Stats, Languages } from './styles';
import { Card, TitleWrap } from '../../common';
import Star from '../../common/Icons/Star';
import Fork from '../../common/Icons/Fork';
import { githubToken } from '../../../data/config';

import { AwesomeButton } from "react-awesome-button";


export function Projects() {

    const [edges, setEdges] = useState(undefined);

    async function graphQLQuery() {
        if (!edges) {
            const query = gql`
            {
                viewer {
                    repositories(first: 10, orderBy: { field: STARGAZERS, direction: DESC }) {
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
                                        id,
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }
            `
            const endpoint = "https://api.github.com/graphql";

            const graphQLClient = new GraphQLClient(endpoint, {
                headers: {
                    authorization: "Bearer "+githubToken,
                },
            });

            await graphQLClient.request(query).then(data => {
                if(!edges){
                    setEdges(data.viewer.repositories.edges);
                }
            });
        }
    }
    
    

    if(!edges) graphQLQuery();

    return (

        <div id="projects" className="section mt-1">
            <h2 className="mb-5 font-weight-bolder title">Projects</h2>
            <Grid>
                {
                    edges ? edges.map(({ node }) => (
                        <AwesomeButton type="primary" className="projectTiles" key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
                                <Card>
                                    <Content>
                                        <h4>{node.name}</h4>
                                        <p>{node.description}</p>
                                    </Content>
                                    <TitleWrap>
                                        <Stats>
                                            <div>
                                                <Star color={"#fff"} />
                                                <span>{node.stargazers.totalCount}</span>
                                            </div>
                                            <div>
                                                <Fork color={"#fff"} />
                                                <span>{node.forkCount}</span>
                                            </div>
                                        </Stats>
                                        <Stats>
                                            <Languages>
                                                {
                                                    node.languages.nodes.map(({ id, name }) => (
                                                        <span key={id}>
                                                            {name}
                                                        </span>
                                                    ))
                                                }
                                            </Languages>
                                        </Stats>
                                    </TitleWrap>
                                </Card>
                        </AwesomeButton>
                    )) : "Loading"
                }
            </Grid>
        </div>
    );
}

export default Projects;
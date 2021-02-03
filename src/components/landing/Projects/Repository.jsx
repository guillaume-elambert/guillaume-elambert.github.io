import { AwesomeButton } from "react-awesome-button";

import { Card, TitleWrap } from '../../common';
import Star from '../../common/Icons/Star';
import Fork from '../../common/Icons/Fork';

import { Content, Stats, Languages } from './styles';


export const Repository = (props) => {

    function truncate(str) {
        var maxLength = 200;
        if (str.length <= maxLength) {
            return str;
        }

        var subString = str.substr(0, maxLength - 1);
        return (subString.substr(0, subString.lastIndexOf(" "))+" ...");
    };


    return (
        <AwesomeButton type="primary" className="projectTiles" as="a" title={`Click to see "${props.name}" on GitHub`} href={props.url} target="_blank" rel="noopener noreferrer">
            <Card>
                <table className="h-100 w-100">
                    <tbody>
                        <tr style={{ verticalAlign: "top" }}>
                            <td>
                                <Content>
                                    <h4 className="mb-3">{props.name}</h4>
                                    <p>{props.description?truncate(props.description):""}</p>
                                </Content>
                            </td>
                        </tr>
                        <tr style={{ height: "fit-content" }}>
                            <td>
                                <TitleWrap>
                                    <Stats>
                                        <div>
                                            <Star color={"#fff"} />
                                            <span>{props.stargazers}</span>
                                        </div>
                                        <div>
                                            <Fork color={"#fff"} />
                                            <span>{props.forkCount}</span>
                                        </div>
                                    </Stats>
                                    <Stats>
                                        <Languages>
                                            {
                                                props.languages.map(({ id, name }) => (
                                                    <span key={id}>
                                                        {name}
                                                    </span>
                                                ))
                                            }
                                        </Languages>
                                    </Stats>
                                </TitleWrap>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </AwesomeButton>
    );
};

export default Repository;
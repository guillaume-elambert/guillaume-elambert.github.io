import React from 'react';

import Hero from '../Components/Hero';

function Accueil(props){
    return (
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
    );
}

export default Accueil;
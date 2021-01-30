import React from 'react';

import Hero from '../common/Hero';

export function Home(props) {
    return (
        <div className="section">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );
}

export default Home;
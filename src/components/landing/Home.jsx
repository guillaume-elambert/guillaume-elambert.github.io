import React from 'react';

import Hero from '../common/Hero';

export function Home(props) {
    return (
        <div className="section mt-4">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );
}

export default Home;
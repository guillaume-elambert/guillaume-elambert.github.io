import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/clike/clike';

import { AboutTextJava, AboutTextTxt } from './AboutText';

import { Screen } from '../../common';

import './About.css';

export const About = (props) => {
    const codeMirrorJava = {
        title   : "About_Guillaume_ELAMBERT.java",
        value   : AboutTextJava,
        mode    : "text/x-java",
        btnTxt  : "Click to see as text"
    };

    const codeMirrorTxt = {
        title   : "About_Guillaume_ELAMBERT.txt",
        value   : AboutTextTxt,
        mode    : "text",
        btnTxt  : "Click to see as java"
    };

    const [codeMirrorToUse, setCodeMirrorToUse] = useState(codeMirrorJava);

    function toggleActiveCodeMirror() {
        if (codeMirrorToUse.title === codeMirrorJava.title) {
            setCodeMirrorToUse(codeMirrorTxt);
        } else {
            setCodeMirrorToUse(codeMirrorJava);
        }
    }

    const title = <>
        <h2>{codeMirrorToUse.title}</h2>
        <Button variant="dark" id="toggleFileScreenBtn" onClick={() => toggleActiveCodeMirror()}>{codeMirrorToUse.btnTxt}</Button>
    </>;

    const content =
    <div id="codeMirrorJava">
        <CodeMirror
            value={codeMirrorToUse.value}
            options={{
                theme: 'monokai',
                mode: codeMirrorToUse.mode,
                readOnly : true,
                dragDrop: 'false',
                matchBrackets: true,
                coverGutterNextToScrollbar : false,
                viewportMargin : Infinity
            }}
        />
    </div>;

    return (
        <div id="about" className="section">
            <h2 className="mb-5 font-weight-bolder title">About</h2>

            <Screen screenTitle={title} content={content} />
        </div>
    );
}

export default About;
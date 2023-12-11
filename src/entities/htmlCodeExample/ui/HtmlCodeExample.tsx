import SyntaxHighlighter from 'react-syntax-highlighter';
import React, { HTMLAttributes } from "react";

interface CodeExampleProps extends HTMLAttributes<HTMLDivElement> {
    children: string,
}

export const HtmlCodeExample: React.FC<CodeExampleProps> = ({children}) => {
    return (
        <SyntaxHighlighter language={'handlebars'} useInlineStyles={false} customStyle={{padding: '20px', borderRadius: '10px'}}>
            {children}
        </SyntaxHighlighter>
    );
};
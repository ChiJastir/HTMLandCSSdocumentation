import SyntaxHighlighter from 'react-syntax-highlighter';
import React, { HTMLAttributes } from "react";

interface CodeExampleProps extends HTMLAttributes<HTMLDivElement>{
    children: string,
}

export const CssCodeExample: React.FC<CodeExampleProps> = ({children}) => {
    return (
        <SyntaxHighlighter language={'css'} useInlineStyles={false} customStyle={{padding: '20px', borderRadius: '10px'}}>
            {children}
        </SyntaxHighlighter>
    );
};
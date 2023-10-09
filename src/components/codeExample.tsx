import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export enum languages {
    css = 'css',
    html = 'handlebars',
}

type CodeExampleProps = {
    children: string,
    language?: languages,
}

const CodeExample = ({children, language = languages.css}: CodeExampleProps) => {
    return (
        <SyntaxHighlighter language={language} style={atomOneDark} customStyle={{padding: '20px', borderRadius: '10px'}}>
            {children}
        </SyntaxHighlighter>
    );
};

export default CodeExample;
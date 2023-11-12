import SyntaxHighlighter from 'react-syntax-highlighter';

type CodeExampleProps = {
    children: string,
}

const HTMLCodeExample = ({children}: CodeExampleProps) => {
    return (
        <SyntaxHighlighter language={'handlebars'} useInlineStyles={false} customStyle={{padding: '20px', borderRadius: '10px'}}>
            {children}
        </SyntaxHighlighter>
    );
};

export default HTMLCodeExample;
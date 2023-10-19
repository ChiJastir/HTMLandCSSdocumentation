import SyntaxHighlighter from 'react-syntax-highlighter';

type CodeExampleProps = {
    children: string,
}

const CSSCodeExample = ({children}: CodeExampleProps) => {
    return (
        <SyntaxHighlighter language={'css'} useInlineStyles={false} customStyle={{padding: '20px', borderRadius: '10px'}}>
            {children}
        </SyntaxHighlighter>
    );
};

export default CSSCodeExample;
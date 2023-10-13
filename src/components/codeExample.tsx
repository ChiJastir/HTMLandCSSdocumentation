import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark, atomOneLight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {useAppSelector} from "../hooks/redux";

export enum languages {
    css = 'css',
    html = 'handlebars',
}

type CodeExampleProps = {
    children: string,
    language?: languages,
}

const CodeExample = ({children, language = languages.css}: CodeExampleProps) => {
    const themeValue = useAppSelector((store) => store.themeSlice.themeValue)
    return (
        // <SyntaxHighlighter language={language} style={atomOneDark} customStyle={{padding: '20px', borderRadius: '10px', backgroundColor: themeValue.colors.code}}>
        //     {children}
        // </SyntaxHighlighter>
        <SyntaxHighlighter language={language} style={themeValue.type === 'light' ? atomOneLight : atomOneDark} customStyle={{padding: '20px', borderRadius: '10px'}}>
            {children}
        </SyntaxHighlighter>
    );
};

export default CodeExample;
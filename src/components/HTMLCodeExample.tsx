import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark, atomOneLight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {useAppSelector} from "../hooks/redux";

type CodeExampleProps = {
    children: string,
}

const HTMLCodeExample = ({children}: CodeExampleProps) => {
    const themeValue = useAppSelector((store) => store.themeSlice.themeValue)
    return (
        <SyntaxHighlighter language={'handlebars'} style={themeValue.type === 'light' ? atomOneLight : atomOneDark} customStyle={{padding: '20px', borderRadius: '10px'}}>
            {children}
        </SyntaxHighlighter>
    );
};

export default HTMLCodeExample;
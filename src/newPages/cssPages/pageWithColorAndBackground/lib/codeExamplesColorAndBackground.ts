export const useCodeExamplesColorAndBackground = () => {
    const color = `p {
    color: #008000;
}`

    const backgroundColor = `p {
    background-color: #008000;
}`

    const backgroundImage = `p {
    background-image: url("images/logo.svg");
}`

    const backgroundAttachment = `p {
    background-image: url("images/logo.svg");
    background-attachment: fixed;
}`

    const backgroundRepeat = `p {
    background-image: url("images/logo.svg");
    background-repeat: no-repeat;
}`

    const backgroundSize = `p {
    background-image: url("images/logo.svg");
    background-size: 100%;
}`

    const backgroundPosition = `p {
    background-image: url("images/logo.svg");
    background-repeat: no-repeat;
    background-position: center;;
}`
    return { color, backgroundColor, backgroundAttachment, backgroundImage, backgroundRepeat, backgroundSize, backgroundPosition }
}
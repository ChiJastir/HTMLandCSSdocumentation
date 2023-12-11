export const useCodeExamplesTextTags = () => {
    const headings = `<h1>Hello world</h1>
<h2>Hello world</h2>
<h3>Hello world</h3>
<h4>Hello world</h4>
<h5>Hello world</h5>
<h6>Hello world</h6>`
    const paragraph = `<p>Hello world</p>`
    const span = `<p><span>Hello</span> world</p>`
    const link = `<a href="https://www.google.com">Hello world</a>`

    return { headings, link, span, paragraph }
}
import React from "react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

const defaultMarkdown = `# React Markdown Previewer

## Type your Markdown in the Editor!
<br><br>

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load
- BONUS: Use &lt;br&gt; for line breaks

<br>

\`Is the syntax highlighting even working?\`
\`\`\`javascript
let s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
<br>

> “If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”
― Marcus Aurelius, Meditations 
<br>

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)
<br>

Coded by **Stahlone**, 2019 for [freeCodeCamp](https://www.freecodecamp.org) Front End Libraries Challenges
`;

export default function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <div className="App">
      <h1 id="title">Markdown Previewer</h1>
      <textarea
        id="editor"
        placeholder="Enter Markdown..."
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
      />
      <div id="preview">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
}

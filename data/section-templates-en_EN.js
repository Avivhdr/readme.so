export const en_EN = [
  {
    slug: '01. title',
    name: 'Title',
    markdown: `
# [Enter Project Name]
`,
  },
  {
    slug: '02. description',
    name: 'Description',
    markdown: `
## Description

This project is a [utility/tool/feature] that allows [insert_target_audience] to do [action/task_it_does].

This project is trying to solve the problem of [problem] by achieving [project goal]

This project is meant to use by [costumer/ui projects/POSE employees]
`,
  },
  {
    slug: '02. ownership',
    name: 'Ownership',
    markdown: `
## Ownership

This project is owned by team [[enter team name & link](link_to_team_page)].
`,
  },
  {
    slug: '03. demo',
    name: 'Demo',
    markdown: `
## Demo

Insert gif or link to demo or living enviorment

`,
  },
  {
    slug: '04. screenshots',
    name: 'Screenshots',
    markdown: `
  ## Screenshots

  ![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  `,
  },
  {
    slug: '05. Prerequisites',
    name: 'Prerequisites',
    markdown: `
  ## Prerequisites
  
  Before you begin, ensure you have met the following requirements:
  * You have read [guide/link/documentation_related_to_project/...].
  * You have installed the latest version of [<coding_language/dependency/..]
  * ...
  `,
  },
  {
    slug: '06. installation',
    name: 'Installation',
    markdown: `
## Installation

Install my-project with npm

\`\`\`bash
  npm install my-project
  cd my-project
\`\`\`
    `,
  },
  {
    slug: '07. run-locally',
    name: 'Running Locally',
    markdown: `
## Run Locally

Clone the project

\`\`\`bash
  git clone https://link-to-project
\`\`\`

Go to the project directory and Install dependencies

\`\`\`bash
  cd my-project && npm install
\`\`\`

Start the project

\`\`\`bash
  npm run start
\`\`\`

`,
  },
  {
    slug: '08. Options',
    name: 'Options',
    markdown: `
### Options

| option          | description                                                        |
| --------------- | ------------------------------------------------------------------ |
| --flag-A        | Description of \`--flag-A\`                                        |
| --flag-B        | Description of \`--flag-B\`                                        |
| --flag-C        | Description of \`--flag-C\`                                        |

`,
  },
  {
    slug: '08. api',
    name: 'REST API Reference',
    markdown: `
## API Reference

#### Get all items

\`\`\`http
  GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

#### Get item

\`\`\`http
  GET /api/items/$\{id}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

`,
  },
  {
    slug: '09. api',
    name: 'API',
    markdown: `
## API

### [Module A]
[Module A] is a module that does something.
\`\`\`javascript
  import { [modulaA] } from '@collibra/[thisProject]';

  //... Demonstrate usage of [module A]
\`\`\`

### [Module B]
[Module B] is a module that does something.
\`\`\`javascript
  import { [moduleB] } from '@collibra/[thisProject]';

  //... Demonstrate usage of [module B]
\`\`\`

### func(arg1, arg2)

Takes two numbers and returns the sum.

`,
  },
  {
    slug: '10. usage-examples',
    name: 'Usage/Examples',
    markdown: `
## Usage/Examples

\`\`\`javascript
import Component from 'my-project'

function App() {
  return <Component />
}
\`\`\`

`,
  },
  {
    slug: '11. tests',
    name: 'Tests',
    markdown: `
## Tests

To run tests, run the following command

\`\`\`bash
  npm run test
\`\`\`

`,
  },
  {
    slug: '12. deployment',
    name: 'Deployment',
    markdown: `
## Deployment

To deploy this project run

\`\`\`bash
npm run deploy
\`\`\`

`,
  },
  {
    slug: '13. roadmap',
    name: 'Roadmap',
    markdown: `
## Roadmap

- Additional browser support

- Add more integrations

`,
  },
  {
    slug: '14. support',
    name: 'Support',
    markdown: `
## Support

For support, email fake@fake.com or post on the [#my-channel] Slack channel.

`,
  },
  {
    slug: '15. related',
    name: 'Related',
    markdown: `
## Related

Here are some related projects

[Awesome README](https://github.com/matiassingers/awesome-readme)

`,
  },

  //============================================ Optional

  {
    slug: '200.',
    name: '----- Optional ------',
    markdown: `
  
  `,
  },
  {
    slug: '201. env-variables',
    name: 'Environment Variables',
    markdown: `
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

\`API_KEY\`

\`ANOTHER_API_KEY\`

`,
  },
  {
    slug: '202. contributing',
    name: 'Contributing',
    markdown: `
## Contributing

Contributions are always welcome!

See \`contributing.md\` for ways to get started.

Please adhere to this project's \`code of conduct\`.

`,
  },
  {
    slug: '203. tech',
    name: 'Tech',
    markdown: `
## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

`,
  },
  {
    slug: '204. faq',
    name: 'FAQ',
    markdown: `
## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

`,
  },
  //============================================ useless?

  {
    slug: '300. useless',
    name: '----- Useless? ------',
    markdown: `
  
  `,
  },
  {
    slug: '31. logo',
    name: 'Logo',
    markdown: `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

`,
  },
  {
    slug: '32. features',
    name: 'Features',
    markdown: `
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

`,
  },
  {
    slug: '33. license',
    name: 'License',
    markdown: `
## License

[MIT](https://choosealicense.com/licenses/mit/)

`,
  },
  {
    slug: '34. badges',
    name: 'Badges',
    markdown: `
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

`,
  },
  {
    slug: '35. authors',
    name: 'Authors',
    markdown: `
## Authors

- [@katherinepeterson](https://www.github.com/octokatherine)

`,
  },
  {
    slug: '36. acknowledgement',
    name: 'Acknowledgements',
    markdown: `
## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`,
  },
  {
    slug: '37. feedback',
    name: 'Feedback',
    markdown: `
## Feedback

If you have any feedback, please reach out to us at fake@fake.com

`,
  },

  {
    slug: '38. optimizations',
    name: 'Optimizations',
    markdown: `
## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

`,
  },
  {
    slug: '39. lessons',
    name: 'Lessons',
    markdown: `
## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

`,
  },
  {
    slug: '310. used-by',
    name: 'Used By',
    markdown: `
## Used By

This project is used by the following companies:

- Company 1
- Company 2

`,
  },
  {
    slug: '311. documentation',
    name: 'Documentation',
    markdown: `
## Documentation

[Documentation](https://linktodocumentation)

`,
  },
  {
    slug: '312. appendix',
    name: 'Appendix',
    markdown: `
## Appendix

Any additional information goes here

`,
  },
]

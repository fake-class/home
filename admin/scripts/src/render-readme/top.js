import { nameToTitle } from '../../utils/name-to-title.js';

export const top = ({ env = {}, modules = {} }) =>
  `# ${env.repo ? nameToTitle(env.repo) : 'Study Repo'}: ${nameToTitle(
    env.user,
  )}

> <details>
> <summary>Tech Support</summary>
> <a href="https://rubberduckdebugging.com/"><img alt="Rubber Ducky" src="./assets/rubber-ducky.png"/></a>
>
>  </details>

- [Class Calendar](https://${env.user}.github.io/${env.repo}/calendar)
- Modules
  - [Quick Links](#modules)
  - [Details](https://${env.user}.github.io/${env.repo}/modules)
  - [Study Board](https://github.com/${env.user}/${env.repo}/projects/${
    modules.board
  })
- [Discussions](https://github.com/${env.user}/${env.repo}/discussions)
  - [Help Wanted](https://github.com/${env.user}/${
    env.repo
  }/discussions/categories/help-wanted)
  - [Q & A](https://github.com/${env.user}/${
    env.repo
  }/discussions/categories/q-a)
  - [Snippets](https://github.com/${env.user}/${
    env.repo
  }/discussions/categories/snippets)
  - [Vocabulary](https://github.com/${env.user}/${
    env.repo
  }/discussions/categories/vocabulary)
- [Issues](https://github.com/${env.user}/${env.repo}/issues)
- [Pull Requests](https://github.com/${env.user}/${env.repo}/pulls)
- People
  - [Learners](#learners) - [Randomizer](https://${env.user}.github.io/${
    env.repo
  }/randomizer)
  - [Coaches](#coaches)
  - [Admins](#admins)

---

`;

/*
> [\`help-wanted\`](https://github.com/${env.user}/${
    env.repo
  }/issues?q=is%3Aopen+label%3Ahelp-wanted), [\`question\`](https://github.com/${
    env.user
  }/${env.repo}/issues?q=is%3Aopen+label%3Aquestion)
  */

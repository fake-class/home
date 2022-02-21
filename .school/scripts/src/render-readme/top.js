import { nameToTitle } from '../../utils/name-to-title.js';

export const top = ({ env = {}, modules = {} }) =>
  `# ${env.repo ? nameToTitle(env.repo) : 'Study Repo'}: ${nameToTitle(
    env.user,
  )}

> [\`help-wanted\`](https://github.com/${env.user}/${
    env.repo
  }/issues?q=is%3Aopen+label%3Ahelp-wanted), [\`question\`](https://github.com/${
    env.user
  }/${env.repo}/issues?q=is%3Aopen+label%3Aquestion)

- People
  - [Learners](#learners)
  - [Coaches](#coaches)
  - [Admins](#admins)
- [Modules](#modules)
- [Study Board](https://github.com/${env.user}/${env.repo}/projects/${
    modules.board
  })
- [Issues](https://github.com/${env.user}/${env.repo}/issues)
- [Pull Requests](https://github.com/${env.user}/${env.repo}/pulls)
- [Discussions](https://github.com/${env.user}/${env.repo}/discussions)

---

`;

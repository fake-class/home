export const learner = (
  { modules = {}, env = {} },
  { name = '', user = '', homePage = '' },
) => {
  const repoURL = `https://github.com/${env.user}/${env.repo}`;

  // --- scoped utilities for generating links ---

  const projectSearch = (label = '', linkText = label) =>
    `[${linkText}](${repoURL}/projects/${modules.board}?card_filter_query=author%3A${name}+label%3A${label})`;

  const issuesSearch = (label = '', linkText = label) =>
    `[${linkText}](${repoURL}/issues/?q=author%3A${user}+label%3A${label})`;

  const aList = (...rows) => rows.map((row) => row.join(' \\| ')).join('<br>');

  // --- build the section ---

  const header = `<h3 id="${user}">${name}</h3>`;

  const avatar = `![${user} avatar](./${env.assetsPath.join(
    '/',
  )}/avatars/${user}.jpeg)`;

  const helpLinks = [
    issuesSearch('question', 'questions'),
    issuesSearch('help-wanted'),
  ];
  const selfLinks = [
    `[${user}](https://github.com/${user})`,
    `[home page](${homePage || `https://${user}.github.io`})`,
    `[bio](./student-bios/${user}.md)`,
  ];
  const classLinks = [
    issuesSearch('check-in', 'check-ins'),
    projectSearch('deliverable', 'deliverables'),
    issuesSearch('retro', 'retros'),
    issuesSearch('roll-call', 'roll-calls'),
  ];
  const issuesLinks = [
    `[opened](${repoURL}/issues?q=author%3A${user})`,
    `[assigned](${repoURL}/issues?q=assignee%3A${user})`,
    `[commented](${repoURL}/issues?q=commenter%3A${user})`,
    `[mentioned](${repoURL}/issues?q=mentions%3A${user})`,
  ];

  const linksList = aList(selfLinks, helpLinks, classLinks, issuesLinks);

  const activity = `![${user} github activity](https://ghchart.rshah.org/${user})`;

  const stats = `![${user} github stats](https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=default&hide_title=true&hide_rank=true)`;

  return `

| ${avatar} | ${header}<br>${linksList} |
| --------- | ------------ |

<details>
<summary>${name}'s github stats</summary>
<br>

${activity}

${stats}

</details>`;
};

export const coach = (
  { env = {} },
  { name = '', user = '', homePage = '', modules = [] },
) => {
  const repoURL = `https://github.com/${env.user}/${env.repo}`;

  // --- scoped utilities for generating links ---

  const aList = (...rows) => rows.map((row) => row.join(' \\| ')).join('<br>');

  // --- build the section ---

  const header = `<h3 id="${user || name}">${name}</h3>`;

  const avatar = `![${user} avatar](./${env.assetsPath.join(
    '/',
  )}/avatars/${user}.jpeg)`;

  const selfLinks = [`[${user}](https://github.com/${user})`];
  if (homePage) {
    selfLinks.push(`[home page](${homePage})`);
  }

  const issuesLinks = [
    `[opened](${repoURL}/issues?q=author%3A${user})`,
    `[assigned](${repoURL}/issues?q=assignee%3A${user})`,
    `[commented](${repoURL}/issues?q=commenter%3A${user})`,
    `[mentioned](${repoURL}/issues?q=mentions%3A${user})`,
  ];

  const linksList = aList(selfLinks, issuesLinks);

  const modulesList =
    modules.length > 0
      ? `modules:<ul>${modules
          .map((module) => `<li>${module}</li>`)
          .join('')}</ul>`
      : '';

  return `

${
  user
    ? `| ${avatar} | ${header}<br>${linksList}<br>${modulesList} |
| --------- | ------------ |`
    : header
}

`;
};

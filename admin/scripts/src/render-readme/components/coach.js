export const coach = (
  { env = {} },
  { name = '', user = '', homePage = '', modules = [] },
) => {
  const repoURL = `https://github.com/${env.user}/${env.repo}`;

  // --- scoped utilities for generating links ---

  const aList = (...rows) => rows.map((row) => row.join(' | ')).join('<br>');

  // --- build the section ---

  const header = `<h3 id="${user || name}">${name}</h3>`;

  const avatar = `<img alt="${user} avatar" style="height: 150px; width: 150px;" src="./${env.assetsPath.join(
    '/',
  )}/avatars/${user}.jpeg">`;

  const selfLinks = [`<a href="https://github.com/${user}">${user}</a>`];
  if (homePage) {
    selfLinks.push(`<a href="${homePage}">home page</a>`);
  }

  const issuesLinks = [
    `<a href="${repoURL}/issues?q=author%3A${user}">opened</a>`,
    `<a href="${repoURL}/issues?q=assignee%3A${user}">assigned</a>`,
    `<a href="${repoURL}/issues?q=commenter%3A${user}">commented</a>`,
    `<a href="${repoURL}/issues?q=mentions%3A${user}">mentioned</a>`,
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
    ? `<table><tr><th> ${avatar} </th><th> ${header}<br>${linksList}<br>${modulesList} </th></tr></table>`
    : header
}

`;
};

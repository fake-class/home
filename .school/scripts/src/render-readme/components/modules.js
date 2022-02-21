export const modules = (
  { env = {}, modules = {} },
  {
    name = '',
    url = '',
    weeks = null,
    milestone = 0,
    description = '',
    gitpod = modules.gitpod,
    state = '',
  },
) => {
  const milestoneName = name.toLowerCase().replaceAll(' ', '-');

  // --- closed utilities for generating links ---

  const projectSearch = (label = '', linkText = label) =>
    `[${linkText}](https://github.com/${env.user}/${env.repo}/projects/${modules.board}?card_filter_query=milestone%3A${milestoneName}+label%3A${label})`;

  const labelize = (name = '') => `label%3A${name}`;
  const issuesSearch = (label = '', linkText = label) =>
    `[${linkText}](https://github.com/${env.user}/${
      env.repo
    }/issues/?q=milestone%3A${milestoneName}+${
      typeof label === 'string'
        ? labelize(label)
        : label.map(labelize).join('+')
    })`;

  // --- build the section ---

  const formattedName = name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  let moduleSection = `### [${formattedName}](${url})`;

  if (typeof weeks === 'number') {
    moduleSection += ` - ${weeks} week${weeks === 1 ? '' : 's'}`;
    moduleSection += state === 'closed' ? ` (closed)` : '';
  }

  moduleSection += '\n\n>';

  moduleSection += issuesSearch('question', 'questions') + ' | ';

  moduleSection += issuesSearch('help-wanted') + ' || ';

  moduleSection += issuesSearch('check-in', 'check-ins') + ' | ';

  moduleSection += projectSearch('deliverable', 'deliverables') + ' | ';

  moduleSection += issuesSearch(['retro', 'check-in'], 'retros') + ' | ';

  moduleSection += issuesSearch('roll-call', 'roll-calls') + ' || ';

  moduleSection += `[milestone](https://github.com/${env.user}/${env.repo}/milestone/${milestone})`;

  if (gitpod) {
    moduleSection += ` || [gitpod](https://gitpod.io/#${url}) `;
  }

  if (description) {
    moduleSection += ' \n\n ' + description;
  }

  return moduleSection + '\n\n';
};

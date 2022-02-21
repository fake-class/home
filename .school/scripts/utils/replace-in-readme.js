export const replaceInReadme = (section = '', content = '', oldReadme = '') => {
  const sectionName = section.toUpperCase();
  const regex = new RegExp(
    `(<!--[ \t]*BEGIN ${sectionName}[ \t]*-->)([^]*)(<!--[ \t]*END ${sectionName}[ \t]*-->)`,
    'g',
  );
  const replacer = `<!-- BEGIN ${sectionName} -->\n${content}\n<!-- END ${sectionName} -->`;
  const newReadme = oldReadme.match(regex)
    ? oldReadme.replace(regex, replacer)
    : `${oldReadme}\n\n${replacer}`;
  return newReadme;
};

import { dump } from './js-yaml.js';

import jsYaml from 'js-yaml';

console.log(
  dump({
    // jsYaml.dump({
    description: 'Gitting',
    gitpod: true,
    path: [
      {
        name: 'Merge-a-Matic',
        description:
          "One of the difficult parts of collaboration is dealing with merge conflicts. Never fear, though! In this repository, we'll walk through how to resolve one such conflict.",
        url: 'https://github.com/lpmi-13/merge-a-matic',
        milestone: 1,
      },
      {
        name: 'Reflog Power',
        description:
          "The basic idea is to practice accidentally deleting one of our local branches (which I've done a few times), and then finding it again in the reflog. Scary, right! I used to think so, but don't worry...the reflog can help us.",
        url: 'https://github.com/lpmi-13/reflog-power',
        milestone: 2,
      },
      {
        name: 'Rebasic',
        description:
          'Rebasing is scary for people. We need to practice it to feel less scared. Practicing with immediate actionable feedback could help this process.',
        url: 'https://github.com/lpmi-13/rebasic',
        milestone: 3,
      },
      {
        name: 'Tree Slayer',
        description:
          'Have you ever wondered about the deep git magicks...?\n' +
          '\n' +
          "Have you ever heard about git's ability to delete a file across the entire git history in a recursive rebase-like fashion...?\n" +
          '\n' +
          'Have you ever been reading the ancient scrolls late at night, and come across the git filter-branch command...?',
        url: 'https://github.com/lpmi-13/tree-slayer',
        milestone: 4,
      },
    ],
  }),
);

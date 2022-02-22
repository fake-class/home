#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import util from 'util';

import prettier from 'prettier';

import { compileEnv } from '../src/compile-env/index.js';
import { parseConfigs } from '../src/parse-configs/index.js';
import { persistConfigs } from '../src/persist-configs/index.js';

import { manageCollaborators } from '../src/api-calls/manage-collaborators.js';
import { manageAvatars } from '../src/manage-avatars/index.js';

import { renderReadme } from '../src/render-readme/index.js';
import { replaceInReadme } from '../utils/replace-in-readme.js';

import { prettierConfig } from '../prettier-config.js';

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// --- compile env from CLI args & defaults ---

const env = compileEnv(process.argv.slice(2));

// --- parse school configs ---

const configPath = path.join(process.cwd(), ...env.configPath);
const configs = await parseConfigs(configPath, env);

// --- manage org collaborators ---

await manageCollaborators(configs);

// --- update avatars ---

const avatarsAbsolutePath = path.join(
  process.cwd(),
  ...env.assetsPath,
  'avatars',
);
if (!fs.existsSync(avatarsAbsolutePath)) {
  fs.mkdirSync(avatarsAbsolutePath, { recursive: true });
}

await manageAvatars(configs, avatarsAbsolutePath);

// --- render & write new README ---

const readmePath = path.join(process.cwd(), ...env.readmePath);
const oldReadme = fs.existsSync(readmePath)
  ? await readFile(readmePath, 'utf-8')
  : '';

const content = renderReadme(configs);

const newReadme = ['top', 'modules', 'learners', 'coaches', 'admins']
  .map((sectionName) => [sectionName, content[sectionName]])
  .reduce((all, next) => replaceInReadme(next[0], next[1], all), oldReadme);

const formattedReadme = prettier.format(newReadme, prettierConfig);

await writeFile(readmePath, formattedReadme, 'utf-8');

// -- all done --

await persistConfigs(configPath, configs);

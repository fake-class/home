#!/usr/bin/env node

/* avatars

  add missing avatars and removes extra ones

*/

import fs from 'fs';
import path from 'path';

import { compileEnv } from '../src/compile-env/index.js';
import { parseConfigs } from '../src/parse-configs/index.js';

import { manageAvatars } from '../src/manage-avatars/index.js';

// --- compile env from CLI args & defaults ---

const env = compileEnv(process.argv.slice(2));

// --- parse school configs ---

const configAbsolutePath = path.join(process.cwd(), ...env.configPath);
const configs = await parseConfigs(configAbsolutePath, env);

// --- prepare assets path & directory ---

const avatarsAbsolutePath = path.join(
  process.cwd(),
  ...env.assetsPath,
  'avatars',
);
if (!fs.existsSync(avatarsAbsolutePath)) {
  fs.mkdirSync(avatarsAbsolutePath, { recursive: true });
}

// --- do the thing ---

await manageAvatars(configs, avatarsAbsolutePath);

#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const projectDir = path.resolve(__dirname);
const nodePath = process.execPath;
const nodeDir = path.dirname(nodePath);

process.chdir(projectDir);

const child = spawn(
  nodePath,
  [path.join(projectDir, 'node_modules', '.bin', 'next'), 'dev', '--port', '3000'],
  {
    cwd: projectDir,
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'development',
      NEXT_TELEMETRY_DISABLED: '1',
      // Ensure node is on PATH for Turbopack's child processes
      PATH: `${nodeDir}:${process.env.PATH || '/usr/bin:/bin'}`,
    },
  }
);

child.on('exit', (code) => process.exit(code));

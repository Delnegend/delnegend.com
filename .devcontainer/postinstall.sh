#!/usr/bin/env bash

curl -fsSL https://vite.plus | bash
echo '. "$HOME/.vite-plus/env"' >> "$HOME/.bashrc"
. "$HOME/.vite-plus/env"

sudo ln -s "$(which node)" /usr/local/bin/node

vp install -g pnpm
pnpm config set store-dir ~/.pnpm-store --global
pnpm i

#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "nodesk",
  boardId: "nodesk-official",
  domain: "nodesk.co",
  npmName: "zc-nodesk-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});

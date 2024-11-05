// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $fresh_index from "./routes/fresh/index.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $inventory_layout from "./routes/inventory/_layout.tsx";
import * as $inventory_index from "./routes/inventory/index.tsx";
import * as $counter from "./islands/counter.tsx";
import * as $header from "./islands/header.tsx";
import * as $navigation_hooks from "./islands/navigation/hooks.tsx";
import * as $navigation_navigation from "./islands/navigation/navigation.tsx";
import * as $social_links from "./islands/social-links.tsx";
import * as $type_text from "./islands/type-text.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/fresh/index.tsx": $fresh_index,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/inventory/_layout.tsx": $inventory_layout,
    "./routes/inventory/index.tsx": $inventory_index,
  },
  islands: {
    "./islands/counter.tsx": $counter,
    "./islands/header.tsx": $header,
    "./islands/navigation/hooks.tsx": $navigation_hooks,
    "./islands/navigation/navigation.tsx": $navigation_navigation,
    "./islands/social-links.tsx": $social_links,
    "./islands/type-text.tsx": $type_text,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;

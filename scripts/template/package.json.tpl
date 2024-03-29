{
  "name": "{{{ name }}}",
  "description": "{{{ description }}}",
  "version": "1.0.0",
  "main": "lib/index.js",
  "module": "es/index.js",
  "types": "es/index.d.ts",
  "files": [
    "es",
    "lib",
    "dist"
  ],
  "scripts": {
    "dev": "redbud dev",
    "build": "redbud build"
  },
  "peerDependencies": {
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
  },
  "publishConfig": {
    "registry": "https://registry.npmjs.org",
    "access": "public"
  }
}

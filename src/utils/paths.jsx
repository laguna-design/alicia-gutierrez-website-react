// src/utils/paths.js
export const withBase = (relativePath) =>
  `${import.meta.env.BASE_URL}${relativePath.replace(/^(\.\.\/)+src\/assets\//, 'assets/')}`;

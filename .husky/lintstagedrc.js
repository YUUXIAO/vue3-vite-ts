module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write'],
  '*.vue': ['prettier --write', 'eslint --fix'],
}

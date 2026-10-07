module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Dependabot uses sentence-case subjects (e.g. "Bump ...").
    'subject-case': [0],
  },
}

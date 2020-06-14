test('Made with Bash badge is correct', () => {
    var badge = new MadeWith('Bash')

    // Use mix of shield and markdown links internally. And preset target.
    var result = '[![Made with Bash](https://img.shields.io/badge/Made_with-Bash-blue.svg)](https://www.gnu.org/software/bash/)'
})

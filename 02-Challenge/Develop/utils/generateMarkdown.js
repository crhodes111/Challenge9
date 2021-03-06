// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description ${data.description}

## Table of Contents
[Installation][#Installation]
[Usage][#Usage]
[License][#License]
[Contributing][#Contributing]
[Tests][#Tests]
[Questions][#Questions]

## Installation ${data.installation}

## Usage ${data.usage}

## License ${data.license}

## Contributing ${data.contributing}

## Tests ${data.tests}

## Questions ${data.questions}

If you have any questions about the repository here is a link to my github repository https://github.com/${data.github}

If you have any questions please reach out to my email here ${data.emailaddress}
`

;
}

module.exports = generateMarkdown;

// Returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// Creates a function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'APACHE 2.0') {
    return `https://www.apache.org/licenses/LICENSE-2.0.txt`
  }
  if (license === 'GPL 3.0') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }
  if (license === 'BSD 3') {
    return `https://opensource.org/license/bsd-3-clause/`
  }
  if (license === 'none') {
    return ``
  }
}

// Creates a function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ``
  } else {
    return `${license}`
  }
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ## Description
  ${data.description}

  ## Table of Contents
  - [License](#license)
  - [Dependencies](#dependencies)
  - [Testing](#testing)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Questions](#questions)
  - [Credits](#credits)

  ## License
  ${renderLicenseSection(data.license)}

  To learn more about this license, click on the badge: 
  ${renderLicenseBadge(data.license)}

  ## Dependencies
  ${data.dependencies}

  ## Testing
  ${data.testing}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Questions?
  Please direct all questions to this email: ${data.email}

  ## Credits
  Created by user [${data.username}](https://www.github.com/${data.username}/)
  `;
}

module.exports = generateMarkdown;

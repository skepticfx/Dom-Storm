![logo](https://raw.github.com/skepticfx/Dom-Storm/master/public/imgs/dom-storm-logo.png)

### A dashboard for interesting DOM tricks/techniques.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5746f2f6d1d04e71bf36651804b1fab7)](https://www.codacy.com/app/skepticfx/domstorm?utm_source=github.com&utm_medium=referral&utm_content=skepticfx/domstorm&utm_campaign=badger)

### Try https://domstorm.skepticfx.com

#### Installation
* Clone Domstorm, `git clone https://github.com/skepticfx/domstorm`

* Install `nodejs` and then, `npm install`

* Configure `config.js` to add your MongoDB URL with authentication details.

* Run Domstorm, `node server.js --noauth`, to run in NoAuth mode.

* Head over to, `http://localhost:8080` and start storming the DOM.

* Something went wrong? Raise an [issue in the Github Repo] (https://github.com/skepticfx/domstorm/issues/new)

### What can DomStorm be used for?
One can know the answers for,

* What are the different ways of accessing a [Window Object], in a given browser?

* What properties of the postMessage API can be overridden and changed?

* Does XMLHttpRequest follow the Same-Origin-Policy on redirects?

* Does a certain DOM security bug in Firefox be replicated in other browsers?

* And many more interesting questions, where your imagination is the only limit !

###### Features
* Enum Functions (Need a better name) - Ask questions on the DOM.

* Fuzzer Modules (WIP)

* TestHarness.js from W3C test suites for dedicated Spec tests.

###### Milestones
* [Pre-Alpha Version](https://github.com/skepticfx/Dom-Storm/issues?milestone=1&state=open)

###### Framework

* Create and run modules, to test DOM and JS behaviour.

###### Kudos to

* Icons by iconmonstr - http://iconmonstr.com/
* Browser Logos - https://github.com/paulirish/browser-logos
* Detect User Agent - detect.js - https://github.com/darcyclarke/Detect.js
* Flatly,  BootStrap Theme - http://bootswatch.com/flatly/

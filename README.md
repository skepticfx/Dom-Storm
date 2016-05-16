npm install DomStorm
=========
### A dashboard for interesting DOM tricks/techniques.

![logo](https://raw.github.com/skepticfx/Dom-Storm/master/public/imgs/dom-storm-logo.png)

### Try http://domstorm.skepticfx.com

[ ![Codeship Status for skepticfx/domstorm](https://www.codeship.io/projects/b3b95170-efd2-0131-0c85-62ba7cdbe292/status)](https://www.codeship.io/projects/27071)
#### Installation
* Clone Domstorm, `git clone https://github.com/skepticfx/domstorm`

* Install Nodejs and then, `npm install`

* Configure `config.js` to add your MongoDB URL with authentication details.

* Run Domstorm, `node server.js --noauth`, to run in NoAuth mode.

* Head over to, `http://localhost:8080` and start storming the DOM.

* Something went wrong? Raise an [issue in the Github Repo] (https://github.com/skepticfx/domstorm/issues/new)

### What is DomStorm?
#### It is a dashboard for interesting DOM tricks/techniques.
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

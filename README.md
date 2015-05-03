<img src="http://r13.imgup.net/amoklaufa0f9.png">

A demo WebApp built with <a href="https://ampersandjs.com" target="_blank">AmpersandJS & <a href="https://muut.com/riotjs" target="_blank">RiotJS</a>



**AmpersandJS parts**
<ul>
  <li>Router</li>
  <li>Views, Pages & View-Switcher</li>
  <li>Models</li>
  <li>Ampersand-App Singleton</li>
</ul>

**RiotJS parts**
<ul>
  <li>Custom UI elements</li>
  <li>Virtual DOM</li>
  <li>Templates</li>
</ul>


**Functions**

This is just a demo but at least a 'functional' one. :sunglasses:

<ul>
  <li>It shows a *Login page* (enter anything)</li>
  <li>uses a real, JSON-based remote service (<a href="http://www.jsontest.com" target="_blank">JSON Test</a>)</li>
  <li>has a Menu structure</li>
  <li>a Contact Form and a List page (RiotJS Custom elements)</li>
</ul>

*It also can serve as a boilerplate because is very easy to replace/remove parts of it which are not of interest (or buggy?).*

However, this is not because the demo is such a "cool" peace of software
but because AmpersandJS & RiotJS go out of your way and let you choose parts
which are of help to you. *They serve your needs and not the other way around.*

All good & helpful parts in this demo are belong to **AmpersandJS & RiotJS developers**.

All bugs, sloppy usage of technologies and misunderstood concepts **are mine**.

***Building & Running***

First, install packages with: *npm install*

To test the app run: *npm start*

To develop use *gulp watch* which comes with LiveReload (if you run on Chrome you can install the plugin)

Building is done with Browserify and a few transformers for HTML templates, Styles and Riot's Tag-Files.

To get a compressed version type: *gulp compress*

Output directory is *public/* while the bundled but unminified sources go to *build/*

***License***

MIT
<img src="http://r13.imgup.net/amoklaufa0f9.png">

A demo WebApp built with <a href="https://ampersandjs.com" target="_blank">AmpersandJS</a> & <a href="https://muut.com/riotjs" target="_blank">RiotJS</a>



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
  <li><a href="https://github.com/jimsparkman/RiotControl" target="_blank">RiotControl</a> (a <a href="https://github.com/facebook/flux" target="_blank">Flux</a>-like Event-Controller/Dispatcher)</li>
</ul>


**Functions**

This is just a demo but at least a *functional* one. :sunglasses:

<ul>
  <li>It shows a Login page (enter anything)</li>
  <li>uses a real, JSON-based remote service (<a href="http://www.jsontest.com" target="_blank">JSON Test</a>)</li>
  <li>has a Menu structure</li>
  <li>has a Movie-list built with RiotControl and AmpersandJS Model &amp; Collections</li>
  <li>a Todo-List</li>
  <li>and a Contact Form</li>
</ul>

*It also can serve as a boilerplate because is very easy to replace/remove parts which are not of interest (or buggy?).*

However, this is not because the demo is such a nice piece of software
but because AmpersandJS & RiotJS go out of your way and let you choose parts
which are of help to you. *They serve your needs and not the other way around.*

All good & helpful parts in this demo are because of **AmpersandJS & RiotJS developers**.

All bugs, sloppy usage of technologies and misunderstood concepts **are mine**.

***Building & Running***

First, install packages with: ```npm install```

To test the app run: ```npm start```

To develop use ```gulp watch``` which comes with LiveReload (if you run on Chrome you can install the plugin)

Building is done with Browserify and a few transformers for HTML templates, Styles and Riot's Tag-Files.

You can bundle CSS by setting a proper ```import``` statement in ```styles/app/default.styles```

To get a compressed version type ```gulp compress```

Output directory is *public/* while the bundled but *unminified* sources go to *build/*

***Video***

[![Showcase](http://img.youtube.com/vi/3PQXkaVeuvA/1.jpg)](http://www.youtube.com/watch?v=3PQXkaVeuvA)

***What does the word 'Amoklauf' mean?***

It's a German word for *rampage*, *running frenzy*, or *running amok*. :rage:

I'm using **Riot**JS. Hence the name :innocent:

***License***

MIT

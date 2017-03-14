# jquery simple toolbar plugin

Current Version: **v0.1.0**

Simple jQuery Toolbar Plugin to create dynamic and default multiple options

#Demo

[Try the demo page](https://eduardoestrella.github.io/jquery-simple-toolbar-plugin/)

#Get Started

Import JS file

````html
<script type="text/javascript" src="js/jquery.simpletoolbar.js"></script>
````

Import CSS (optional)
````html
<link rel="stylesheet" type="text/css" href="css/jquery.simpletoolbar.css">
````

Crate a Div to insert the generated toolbar

````html
<div id="toolbar"></div>
````
#Easy usage

Generate a new toolbar 
```javascript
$('#toolbar').toolBar();
```

#Advance usage

For customize the Toolbar you must configure the settings.

* nimShowOption (Default: 3): minimum option that will be generate, if there isn't enough options it will be generated empty options. 
* defaultOption (Default: ['Opt 1', 'Opt 2', 'Opt 3']): Array of default options to generate.
* baseTemplate (Default: see below): The template of the wrapper of each item/option.
* optionTemplate (Default: see below): The template of each item/option
* selectedCallback (Dafault: none): Callback when the user select an option

Default Base Template:
````html
<ul class="toolbar-menu">
    <li class="toolbar-item active"><a data-toggle="all">All</a></li>
</ul>
````
Default option(item) Template:
````html
<li class="toolbar-item"><a data-toggle="opt"></a></li>   
````

###How To - Generate a new toolbar with some settings

````javascript
$('#toolbar').toolBar({
    nimShowOption: 3,
    defaultOption: ['Opt 1', 'Opt 2', 'Opt 3']     
});
````

###How To - Customize default options with Hash URL 

You can load your default options using URL Hash. Use '|' separator between options. example: `#item1|item2`


[Try URL Hash example](https://eduardoestrella.github.io/jquery-simple-toolbar-plugin/#item1\|item2)

Note: The plugin will be generate 2 options (item1 and item2) and 1 more empty option because `minShowOption` by default is 3

#Dependencies

* Jquery >= 1.7.0

#Developed By 

* Eduardo Estrella Rosario - <eduardo.estrella.rosario@gmail.com>

<a href="https://www.linkedin.com/in/eduardoestrella">
  <img alt="Add me to Linkedin" src="https://image.freepik.com/iconos-gratis/boton-del-logotipo-linkedin_318-84979.png" height="60" width="60"/>
</a>


#License

![GPLv3](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GPLv3_Logo.svg/200px-GPLv3_Logo.svg.png)
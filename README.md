knockout-client-pager
==============

pager.js is a JavaScript library based on KnockoutJS and jQuery that provides the possibility of creating single page applications in a declarative fashion - nesting subpages inside subpages where each subpage can be developed standalone but still communicate between each other. 

Combined with Meteor, pager.js provide us with a complete and robust client side routing framework. For more details, see pager.js official [demo](http://pagerjs.com/demo/).

### Install

```bash
mrt add knockout-client-pager
```
### Package Info

`knockout-client-pager` exposes `pager` to the global namespace.

`knockout-client-pager` depends on `knockout-client`, and `mrt` will automatically handle its dependency when you add them.

### A guide to integrating with Meteor

##### Define ViewModel
In client side, define your knockout viewmodel, and bind it with pager.
```javascript
Meteor.startup(function(){
    var ViewModel = function() {
        this.hello = ko.observable('hello');
    };

	// Starting pager, together with some Knockout ViewModel
	var v = new ViewModel();
	pager.extendWithPage(v);
    ko.applyBindings(v);
	pager.start();
});
```


##### Html template
```html
<template name="foo">
	<div data-bind="page: {id: 'deep_navigation'}">
		<p data-bind="text: hello"></p>

    	<div data-bind="page: {id: 'start'}">
        	<a data-bind="page-href: 'second' ">Show the second page</a>.
    	</div>
    	<div data-bind="page: {id: 'second'}">
        	<a data-bind="page-href: 'start'">Go back to the first sub page</a>.
    	</div>
	</div>
</template>
```

##### Deal with reactive template refreshing

Sometimes you may want to prevent it from reactive template refreshing, because reactive refresh will leave the data-bind unattached. Therefore, you can either wrap the html content with `{{#constant}}...{{/constant}}`, or put the `ko.applyBindings(...)` in `Template.foo.rendered = function(){...}`.




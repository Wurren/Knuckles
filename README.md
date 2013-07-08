

#Knuckles.js

##A learning tool, not a Framework

Knuckles.js is not another JS Framework, its just a tool im using to learn how these frameworks... well.. work. I'll be documenting each component, and I guess someone out there might benefit from it. Ill also be trying to keep it as simple as possible, implementing only the core ideas of MVC.

**This is early stages yet**. Code nowhere near useful in any real world scenario. You'll see what I mean in the source.



## Changelog

**March 5th 2013**

- Added really, really basic event system using jQuery's "On" method. Baby steps.
- Built Relationship similar to Backbone between Models and Collections.
- Collections Fetch Method gets JSON Data from resource and Creates Models.

**July 8th 2013**

- Removed jQuery as a dependency. Replaced with [lodash](http://lodash.com/).
- Added attributes key to Models
- Added Get and Set methods to Models 


##Todo's

~~*As of March 5th, 2013*~~
*As of July 8th, 2013*

- RESTFUL methods for saving and updating model attributes
- Build a Basic Router
- Bring Relationships between View & Collections
- Comment out the extender 
- ~~Create events system~~
- ~~Collection -> Model relationships~~



##Credit where credits due

Alot of the work is based off frameworks like Backbone, Ember and Knockout. Huge props to the creators and contributors.
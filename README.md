# Feed Reader Project

This project mainly focuses on testing javascript code using Jasmine. Testing is performed using different tests.
Testing of our logic becomes important when you are adding any new feature in the application.

# Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

## How-to-run

* Download the project repository.

* Unzip it in your computer.

* Open up index.html file.


## Tests performed in project

* RSS Feeds

    * It must have URL loops through each feed and it should not be empty.
    * It must have name loops through each fedd and it should not be empty.

* The menu

    * It should be hidden by default.
    * It should open and close by clicking on the menu button.

* Initial Entries

    * When loadFeed function is called and completes its work, there should be at least one .entry element within .feed container.

* New Feed Selection
    * it should change the contents when new feed is loaded.
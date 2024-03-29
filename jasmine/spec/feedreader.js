/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* The test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('URL defined and that the URL is not empty.', function () {
            allFeeds.forEach(el => {
                expect(el.url).toBeDefined();
                expect(el.url.length).not.toBe(0);
            });
        });

        /* The test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name defined and that the name is not empty.', function () {
            allFeeds.forEach(el => {
                expect(el.name).toBeDefined();
                expect(el.name.length).not.toBe(0);
            });
        });
    });


    /* The test suite named "The menu" */
    describe('The menu', () => {


        /* The test that ensures the menu element is
         * hidden by default.
         */
        it('the menu element is hidden by default', () => {
            const elbody = document.getElementsByTagName('body');
            expect(elbody[0].classList.contains('menu-hidden')).toBeTruthy();
        });

        /* The test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('the menu changes visibility', function () {
            const elmenu = document.getElementsByClassName('menu-icon-link')[0];
            const elbody = document.getElementsByTagName('body');
            elmenu.click();
            expect(elbody[0].classList.contains('menu-hidden')).toBeFalsy();
            elmenu.click();
            expect(elbody[0].classList.contains('menu-hidden')).toBeTruthy()
        });
    });
    /* The test suite named "Initial Entries" */
    describe('Initial Entries', () => {
        /* The test that ensures when the asynchronous loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        // Call loadFeed() for initial entries
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        // Test to ensure there is at least a single .entry element within the .feed container.
        it('Entry has been loaded', function (done) {
            //const entry = document.getElementsByClassName('entry-link').length
            const entry = $('.feed .entry');
            expect(entry.length).toBeGreaterThan(0);
            done();
        });
    });
    /*  The test suite named "New Feed Selection" */
    describe('New Feed Selection v2', () => {

        /* The test that ensures when a new feed is loaded
        *  by the loadFeed function that the content actually changes.
        */
        //Retrive .feed .entry of loadfeed 0,1 before the test
        let firstFeed, secFeed;
        beforeEach((done) => {
            loadFeed(0, () => {
                firstFeed = $('.feed .entry').text();
                loadFeed(1, () => {
                    secFeed = $('.feed .entry').text();
                    done();
                });
            });
        });
        it('Changes the content when new feed will be loaded ', () => {
            expect(firstFeed).not.toEqual(secFeed);
        });
    });
}());

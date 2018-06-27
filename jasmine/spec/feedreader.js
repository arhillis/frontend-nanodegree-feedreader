/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('all URLs are defined', function(){
           let allBlankURLs = allFeeds.filter(function(feed){
                return feed.url === "";
           });

           expect(allBlankURLs.length).toBe(0);
        });

        it('all feed names are defined', function(){
            let allBlankNames = allFeeds.filter(function(feed){
                return feed.name === "";
            });

            expect(allBlankNames.length).toBe(0);
        });
    });

    describe('The menu', function(){

        it('menu is hidden by default', function(done){
            expect($('body').hasClass('menu-hidden')).toBe(true);
            done();
        });

        it('the menu changes visibility when clicked', function(done){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            done();
        });

        it('the menu goes back to being hidden when clicked again', function(done){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
            done();
        });
    });
    
    describe('Initial Entries', function(){

        it('There is at least one feed when the loadFeed function is called', function(done){
            init();
            expect($('.entry').children()).not.toBe(0);
            done();
        });
    });
    describe('New Feed Selection', function(){

        it('Feed content changes when a new feed is loaded', function(done){
            let oldFeedLength = $('.feed').children().length;
            loadFeed(0, function(){
                let newFeedLenth = $('.feed').children().length;
                expect(newFeedLenth).not.toBe(oldFeedLength);
                done();
            });            
        });
    });
}());

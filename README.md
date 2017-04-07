# jqFeedParse
I simple utility for requesting, parsing, and displaying an RSS or XML feed, done entirely on the front end.

## Intro

jqFeedParse is an idea for getting RSS feed info out of a Blogging platform and into a static site using only front end technology. (Because I'm a front end guy.)

## Disclaimer & Current Limitations

- jqFeedParse is initially written to select feeds by tag in a Wordpress blog. If you don't use tags in your blog, or you'd prefer to get feeds by author, or your blog is not Wordpress, etc., then some refactoring will be necessary.
- jqFeedParse is limited by most browsers security policies to same-domain feeds. To use it, you must either...
  - Enable cross-origin headers on the backend of the server feeding the XML. (Can be done in the PHP files in your Wordpress installation, for instance.)
  - Host your static site and your blog on the same domain. Example: Your static site is at yourDomain.com, but your Wordpress blog is in a subfolder at yourDomain.com/blog/.
- Output is un-styled. It will just spit out an unordered list where each feed item becomes a list item. Styling is on you for now.

## Todos

- Address single-domain limitation, if possible.
- Add additional element wrapping options beyond unordered lists.
- Add Author feed capability.
- Expand beyond just WordPress feeds.
- Rewrite in pure JS to eliminate jQuery requirement.

## Markup Code

Insert this code where you want your feed to display...

`<ul class="rss-feed" id="tag-name" data-blog="http://source-url-goes-here.com"></ul>`

...where "id" is the tag name you'd like a feed for, and "data-blog" is the source of your XML/RSS.

Then at the end of the body somewhere...

`<script src="../path/to/the/file/jqFeedParse.js"></script>`

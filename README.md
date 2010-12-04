#CouchDB Changes
 
A JQuery plugin for binding event handlers to the CouchDB _changes feed.


# Features

- Bind an event handler to a database _changes longpoll feed.
- Bind an event handler for monitoring of a specific document changes.

# TODO

- Add ability to select the [type of feed](http://wiki.apache.org/couchdb/HTTP_database_API) 

# Usage

- **$.couchdb.changes.database(database, callback):**
<pre><code>
    $.couchdb.changes.database("test", function(changes){
         $('ul').append("<li>" + changes.last_seq + "</li>");
    });
 </code></pre>
 
- **$.couchdb.changes.document(database, document, callback):**
<pre><code>
    $.couchdb.changes.document("test", "test-doc", function(doc){
         $('ul').append("<li>" + doc._rev + "</li>");
    });
</code></pre>

#
Stopped working on the pluggin because of the **jquery.couch.js** include [changes](https://github.com/apache/couchdb/blob/trunk/share/www/script/jquery.couch.js#L233) feature as well.
 
**Note** that this is not included in the plugin shipped with CouchDB 0.11.0!

Here is a code snippet that shows how to use this:

<pre><code>
	
	// database changes
	$.couch.db('test').changes().onChange(function(resp){
		console.log(resp);
	});
	
	// include the documents
	$.couch.db('test').changes(null, { "include_docs" : "true" }).onChange(function(resp){
		console.log(resp);
	});
	
	
</code></pre>

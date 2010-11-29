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

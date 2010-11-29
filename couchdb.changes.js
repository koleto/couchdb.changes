;(function($) {
			
	$.couchdb = {};
	$.couchdb.changes = {};
			
	$.couchdb.changes.database = function (database, callback) {
		$.getJSON("/" + database, function(db) {
			var url = "/_changes?since="+ db.update_seq +"&heartbeat=10000&feed=longpoll";
    		$.getJSON("/"+ database + url, function(changes) {
						if($.isFunction(callback)){
							callback.call(this, changes);
							$.couchdb.changes.database(database, callback);
						}
					});	
				});
			};

	$.couchdb.changes.document = function (database, docid, callback){
		var url = "/" + database;
		$.getJSON(url, function(db) {
			url += "/" + docid;
			$.getJSON(url, function(doc) {
				url = "/" + database + "/_changes?since="+ db.update_seq;
				url += "&heartbeat=10000&feed=longpoll";
				url += "&include_docs=true";
				$.getJSON(url, function(changes) {
					$.each(changes, function() { 
						if($.isArray(this)) {
							$.each(this, function() {
								if(this.id.match(docid)) {
									if(!this.changes[0].rev.match(doc._rev)) {
										if($.isFunction(callback)){
											url = "/" + database + "/" + docid;
											$.getJSON(url, function(doc) {
												callback.call(this, doc);
											});
											$.couchdb.changes.document(database, docid, callback);
										}
									}
								}
							});
						}
					});
				});
			});
		});
	};
})(jQuery);

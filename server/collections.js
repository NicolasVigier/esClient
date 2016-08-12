History = new Mongo.Collection("history");
History.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return false;
  }
});

Requests = new Mongo.Collection("requests");
Requests.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return true;
  }
});

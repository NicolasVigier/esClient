History = new Mongo.Collection("History");
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

Requests = new Mongo.Collection("Requests");
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

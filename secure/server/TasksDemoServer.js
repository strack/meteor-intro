Meteor.methods({
	'updateType': function(id,utype){
		if (Meteor.user())
		Tasks.update(id, {$set:{type:utype}});
	},
	'addTask' : function(title,type){
		if (Meteor.user()){
			Tasks.insert({title:title, type:type||0, userid:Meteor.user()._id});
		}
		
	}
});
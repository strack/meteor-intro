Meteor.methods({
	'updateType': function(id,utype){
		Tasks.update(id, {$set:{type:utype}});
	},
	'addTask' : function(title,type){
			Tasks.insert({title:title, type:type||0, userid:Meteor.user()._id});
		
	}
});
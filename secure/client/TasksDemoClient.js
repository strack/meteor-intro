Template.main.tasks = function(){
	return Tasks.find({userid:Meteor.userId()}, {sort: {type:1}});
}

Template.main.colColor = function(){
	var colVal = ['btn-danger','btn-warning','btn-success'];
	return colVal[this.type];
}

Template.main.isSelected = function(){
	if (Session.equals('currentTask',this._id))
		return 'selected';
}

Template.main.events({
	'click div.task': function (){
		Session.set('currentTask', this._id);
	},
	'click div#increment': function (){
		var curtype = Tasks.findOne(Session.get('currentTask')).type;
		curtype = (curtype+1)%3;
		 // Tasks.update(Session.get('currentTask'),
		 // 	{$set: {type:curtype}});
		Meteor.call('updateType',Session.get('currentTask'),curtype);
	}
})
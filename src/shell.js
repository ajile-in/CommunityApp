export class Shell {
	constructor() {
		this.parentprop = "Hug your parents!";
	}

	configureRouter(config, router){
		this.router = router;
		config.title = "Pune Area .NET User Group";
		config.map([
				{ route: ['','events'], moduleId: 'events/events', name: 'Events', title: 'Events', nav: true},
				{ route: 'jobs', moduleId: 'jobs/jobs', name: 'jobs', title: 'Jobs', nav: true},
				{ route: 'discussion', moduleId: 'discussion/discussion' , name: 'discussion', title: 'Discussion', nav: true},
			]);
	}
}
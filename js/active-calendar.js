var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

$('#calendar').fullCalendar({
	defaultView: 'month',
	defaultDate: today,

	eventRender: function (eventObj, $el) {
		$el.popover({
			title: eventObj.title,
			content: eventObj.description,
			trigger: 'hover',
			placement: 'top',
			container: 'body'
		});
	},

	events: [{
		title: 'Iowa Caucus Primary',
		start: '2020-02-02'
		},
		{
			title: 'ABC News Debate (8pm EST)',
			start: '2020-02-11'
		},
		{
			title: 'New Hampshire Primary',
			start: '2020-02-07'
		},
		{
			title: 'NBC News Debate (9pm EST)',
			start: '2020-02-19'
		},
		{
			title: 'Nevada Caucus Primary',
			start: '2020-02-22'
		},
		{
			title: 'CBS News Debate (8pm EST)',
			start: '2020-02-25'
		},
		{
			title: 'South Carolina Primary',
			start: '2020-02-29'
		},
		{
			title: 'Super Tuesday',
			description: 'Primary voting in Alabama, Arkansas, California, Colorado, Maine, Massachusetts, Minnesota,' +
				'North Carolina, Okalahoma, Tennessee, Texas, Utah, Vermont, Virginia, American Samoa, and Democrats' +
				'Abroad',
			start: '2020-03-03'
		},
		{
			title: 'More Primary Voting',
			description: 'Primary voting in Idaho, Michigan, Mississippi, Missouri, North Dakota (Caucus), and Washington',
			start: '2020-03-10'
		},
		{
			title: 'CNN Debate (8pm EST)',
			start: '2020-03-15'
		},
		{
			title: 'More Primary Voting',
			description: 'Primary voting in Arizona, Florida, Illinois, and Ohio',
			start: '2020-03-17'
		},
		{
			title: 'Georgia Primary',
			start: '2020-02-24'
		},
		{
			title: 'Puerto Rico Primary',
			start: '2020-02-29'
		},
		{
			title: 'More Primary Voting',
			description: 'Democratic primary voting in Alaska, Hawaii, Louisiana, and Wyoming',
			start: '2020-04-04'
		},
		{
			title: 'Wisconsin Primary',
			start: '2020-04-07'
		},
		{
			title: 'More Primary Voting',
			description: 'Primary voting in Connecticut, Delaware, Maryland, New York, Pennsylvania, and Rhode Island',
			start: '2020-04-28'
		},
		{
			title: 'Kansas and Guam Primary',
			start: '2020-05-02'
		},
		{
			title: 'Indiana Primary',
			start: '2020-05-05'
		},
		{
			title: 'Nebraska and West Virginia Primary',
			start: '2020-05-12'
		},
		{
			title: 'Kentucky and Oregon Primary',
			start: '2020-05-19'
		},
		{
			title: 'More Primary Voting',
			description: 'Primary voting in Washington DC, Montana, New Jersey, New Mexico, South Dakota',
			start: '2020-06-02'
		},
		{
			title: 'Virgin Islands Democratic Caucus',
			start: '2020-06-07'
		},
		{
			title: 'Democratic National Convention',
			description: 'The Democratic National Convention will be held in Milwaukee, WI.',
			start: '2020-07-13',
			end: '2020-07-16'
		},
		{
			title: 'Republican National Convention',
			description: 'The Democratic National Convention will be held in Charlotte, NC.',
			start: '2020-08-24',
			end: '2020-08-27'
		},
		{
			title: 'National Election Day',
			start: '2020-11-03'
		},
	]
});
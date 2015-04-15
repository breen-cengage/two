define(['angular', 'three/bundle', 'two.css'], function (angular, three) {
	var metadata = {
		name: 'two'
	};

	angular
		.module(metadata.name, [three.name])
		.directive('two', function () {
			return {
				restrict: 'E',
				template: '<div>two<three class="three"></three></div>'
			};
		});

	return metadata;
});
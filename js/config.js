require.config({
	baseUrl: "dist",
	paths{
		jquery: "/lib/jquery/jquery-1.12.4.min",
		coolie: "/lib/jquery_plugins/jquery.cookie",
		zoom: "/lib/jquery_plugins/jquery.elevateZoom-.3.0.8.min",
		carousel : "/lib/jquery_plugins/jquery.xmcarousel",
		template: "/lib/artTemplate/template"
	},
	shim: {
		carousel: {
			deps: ["jquery"]
		},
		zoom: {
			deps: ["jquery"]
		}
	}
});
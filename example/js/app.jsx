const ReactDOM = require('react-dom');
const FilterableTable = require('../../src/Components/FilterableTable.jsx');

let data = [
	// { operation: "Example of a long operation", role: "Admin", cluster: "Viewer", environment: "Viewer", application: "Viewer", "managed service": "Viewer", "application component": "Viewer", "library":"Viewer" },
	{ operation: "See Applications", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Libraries", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: "Viewer"},
	{ operation: "See Managed Services", role: "User", cluster: "", environment: "", application: "", 'managed service': "Viewer", 'application component': "", library: ""},
	{ operation: "See Builds Overview", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Deployments Overview", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Documentation", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Logging - Discover", role: "User", cluster: "Viewer", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Tracing - Search", role: "User", cluster: "Viewer", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Service Mesh - Overview", role: "User", cluster: "Viewer", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Service Mesh - Graph", role: "User", cluster: "Viewer", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Live Monitoring", role: "User", cluster: "Viewer", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Static Analysis", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Clusters", role: "User", cluster: "Viewer", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Environments", role: "User", cluster: "", environment: "Viewer", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Domains", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Tutorial Videos", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See User Activity Log", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Application Activity Log", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Manuals", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Community", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Support portal", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Application Permissions Settings", role: "User", cluster: "", environment: "", application: "Permission's editor", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Component Permissions Settings", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Permission's editor", library: ""},
	{ operation: "See Component Detail", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "See  code repository", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "Clone code repository", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "See Application Detail", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Application Detail > Components", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "See Application Detail > Packages", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Application Detail > Deployment Configurations", role: "User", cluster: "", environment: "Viewer", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Application Detail > Assigned Domains", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Application Detail > Deployed Applications", role: "User", cluster: "", environment: "Viewer", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Component Detail > Connected Managed Services", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "See Component Detail > Merge Requests", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "See Build Properties", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "See Component Detail > Configuration", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "Create New Environment", role: "User", cluster: "Developer", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Create New Application", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Create New Component", role: "User", cluster: "", environment: "", application: "Developer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Create New Configuration", role: "User", cluster: "", environment: "Deployer", application: "Deployer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Create Library", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Create Application Package", role: "User", cluster: "", environment: "", application: "Developer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "Create New Connection", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Admin", library: ""},
	{ operation: "Build component", role: "User", cluster: "", environment: "", application: "Developer", 'managed service': "", 'application component': "Developer", library: ""},
	{ operation: "Assign domain", role: "User", cluster: "", environment: "Deployer", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Create New Domain", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Deploy Application", role: "User", cluster: "", environment: "Deployer", application: "Deployer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Compare Packages", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Add new property", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "Enable/Disable Custom Pipeline", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Admin", library: ""},
	{ operation: "Create New Merge Request", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Viewer", library: ""},
	{ operation: "Get New Service", role: "User", cluster: "Viewer", environment: "Deployer", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See  Service Live Monitoring", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Build Library", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: "Developer"},
	{ operation: "Operate Managed Service", role: "User", cluster: "", environment: "", application: "", 'managed service': "Operator", 'application component': "", library: ""},
	{ operation: "Set up Component Documentation", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "Documentation writer", library: ""},
	{ operation: "Delete Component Documentation", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "Documentation writer", library: ""},
	{ operation: "Delete Component Documentation", role: "User", cluster: "", environment: "", application: "Documentation writer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Delete Component", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Admin", library: ""},
	{ operation: "Delete Application", role: "User", cluster: "", environment: "", application: "Admin", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Delete Application Package", role: "User", cluster: "", environment: "", application: "Admin", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Delete Deployments Configuration", role: "User", cluster: "", environment: "", application: "Deployer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Delete Managed Service", role: "User", cluster: "", environment: "", application: "", 'managed service': "Admin", 'application component': "", library: ""},
	{ operation: "Delete Environment", role: "", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Delete Library", role: "User", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: "Admin"},
	{ operation: "Delete Cluster", role: "", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Request New Cluster", role: "Owner", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Invite New Users", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Edit user role", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Create New Team", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Add user to team", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Add user permissions", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Delete team", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Delete user", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See user's permissions", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See user's teams", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See team's permissions", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See team's users", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See invited users", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See  list of users", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See list of teams", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See Teams and Users > Activity", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Add artifact repository", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "See artifact repositories", role: "Admin", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Undeploy Application", role: "User", cluster: "", environment: "Deployer", application: "Deployer", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Edit Production Environment", role: "User", cluster: "", environment: "", application: "Admin", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Edit Application Description", role: "User", cluster: "", environment: "", application: "Admin", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Edit component configuration", role: "User", cluster: "", environment: "", application: "Viewer", 'managed service': "", 'application component': "Admin", library: ""},
	{ operation: "See Pipeline Definition", role: "??", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Check Pipeline Runtime Status", role: "??", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Create New Permission (Application)", role: "", cluster: "", environment: "", application: "Permission's editor", 'managed service': "", 'application component': "", library: ""},
	{ operation: "Create New Permission (Application Component)", role: "", cluster: "", environment: "", application: "", 'managed service': "", 'application component': "Permission's editor", library: ""},
	{ operation: "Create New Permission (Environment)", role: "", cluster: "", environment: "Permission's editor", application: "", 'managed service': "", 'application component': "", library: ""},
];

let fields = [
	{ name: 'operation', displayName: 'Operation', inputFilterable: true, sortable: true, tdClassName:"operation", thClassName: "operation" },
	{ name: 'role', displayName: '>=Role', inputFilterable: true, sortable: true, tdClassName:"role", thClassName: "role"},
	{ name: 'cluster', displayName: 'Cluster', inputFilterable: true, sortable: true, tdClassName:"cluster", thClassName: "cluster" },
	{ name: 'environment', displayName: 'Env.', inputFilterable: true, sortable: true, tdClassName:"environment", thClassName: "environment" },
	{ name: 'application', displayName: 'App.', inputFilterable: true, sortable: true, tdClassName:"application", thClassName: "application" },
	{ name: 'application component', displayName: 'Comp.', inputFilterable: true, sortable: true, tdClassName:"application-component", thClassName: "application-component" },
	{ name: 'managed service', displayName: 'Service', inputFilterable: true, sortable: true, tdClassName:"managed-service", thClassName: "managed-service" },
	{ name: 'library', displayName: 'Lib.', inputFilterable: true, sortable: true, tdClassName:"library", thClassName: "library" },
];


ReactDOM.render(
	<div>
		<FilterableTable
			namespace="People"
			initialSort="name"
			data={data}
			fields={fields}
			pageSize={20}
			roRecordsMessage="There are no people to display"
			noFilteredRecordsMessage="No people match your filters!"
			topPagerVisible={false}
			tableClassName="permissions table table-condensed table-hover"
			pagerTopClassName="permissions-pager"
		/>
	</div>, document.getElementById('root')
);
//  filterable-table


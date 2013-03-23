function newProject(time)
{
	var result = {};
	if(time === "plenty")
	{
		result.working = 1;
		result.design = 1;
		result.ux = 1;
		result.semantic = 1;
		result.organization = 1;
	} 
	else 
	{
		result.working = 1;
		result.design = .9;
		result.ux = .8;
		result.semantic = .3;
		result.organization = .1;
	}
	return result;
}
var currentProject = newProject("constrained");
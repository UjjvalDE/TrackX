
/*
 *	SERVER DEFAULT URL
 * 	--- START ----
 */
// urlHandler = module.exports = require('./url');
// urlHandler.BindUrl();
/*
 *	SERVER DEFAULT URL
 * 	--- END ----
 */

/*
 *	APIs URL Handalder
 * 	--- START ----
 */
//desk api::::
// logindesktopApiHandler = module.exports = require('../desktopapi/setting/api/users/users');
// logindesktopApiHandler.BindUrl();

// projectdesktopApiHandler = module.exports = require('../desktopapi/setting/api/project/project.js');
// projectdesktopApiHandler.BindUrl();

// sessiondesktopApiHandler = module.exports = require('../desktopapi/setting/api/activity/session');
// sessiondesktopApiHandler.BindUrl();

// activitydesktopApiHandler = module.exports = require('../desktopapi/setting/api/activity/activity');
// activitydesktopApiHandler.BindUrl();








usersApiUrlHandler = module.exports = require('./api/user/user.js');
usersApiUrlHandler.BindUrl();

organizationApiUrlHandler = module.exports = require('./api/organization/organization.js');
organizationApiUrlHandler.BindUrl();

teamsApiUrlHandler = module.exports = require('./api/team/team.js');
teamsApiUrlHandler.BindUrl();

projectsApiUrlHandler = module.exports = require("./api/project/project.js")
projectsApiUrlHandler.BindUrl()

clientsApiUrlHandler = module.exports = require("./api/client/client.js")
clientsApiUrlHandler.BindUrl()

toDoApiUrlHandler = module.exports = require('./api/to_do/to_do.js')
toDoApiUrlHandler.BindUrl()

settingUrlHandler = module.exports = require('./api/settings/settings')
settingUrlHandler.BindUrl()

uploadImageHandler = module.exports = require('./api/upload_image/upload_image.js')
uploadImageHandler.BindUrl()

sessionApiUrlHandler = module.exports = require('./api/session/session.js')
sessionApiUrlHandler.BindUrl()

screenShotApiUrlHandler = module.exports = require('./api/screen_shot/screen_shot')
screenShotApiUrlHandler.BindUrl()

reportApiUrlHandler = module.exports = require('./api/report/report')
reportApiUrlHandler.BindUrl()

activityApiUrlHandler = module.exports = require('./api/activity/activity')
activityApiUrlHandler.BindUrl()

dashboardApiUrlHandler = module.exports = require('./api/dashboard/dashboard')
dashboardApiUrlHandler.BindUrl()

desktopApiUrlHandler = module.exports = require('./api/desktop/desktop')
desktopApiUrlHandler.BindUrl()

contactApiUrlHandler = module.exports = require('./api/contact/contact.js')
contactApiUrlHandler.BindUrl()

work_limitApiUrlHandler = module.exports = require('./api/work_limit/work_limit.js')
work_limitApiUrlHandler.BindUrl()

/*
    Angular - make this last always for load react - before this APIs and Backend will work
    --- START ----
*/
urlHanlder = module.exports = require('../setting/url.js');
urlHanlder.BindUrl();

/*
    --- END ----
*/


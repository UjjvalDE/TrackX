
//define all desktop controller
// desktoploginController = module.exports = require('../desktopapi/controllers/api/users/user')
// sessionApiController = module.exports = require('../desktopapi/controllers/api/activity/session')
// projectDeskApiController = module.exports = require('../desktopapi/controllers/api/project/project')
// activityDeskApiController = module.exports = require('../desktopapi/controllers/api/activity/activity')


//define all controller
commonController = module.exports = require('../controllers/common');
apiJwtController = module.exports = require('../controllers/jwt');

//APIs Controller
userApiController = module.exports = require('../controllers/user/user.js');
organizationApiController = module.exports = require('../controllers/organization/organization.js');
teamApiController = module.exports = require('../controllers/team/team.js');
projectApiController = module.exports = require("../controllers/project/project.js");
clientApiController = module.exports = require("../controllers/client/client")
toDoApiController = module.exports = require('../controllers/to_do/to_do.js')
sessionApiController = module.exports = require('../controllers/session/session.js')
screenShotApiController = module.exports = require('../controllers/screen_shot/screen_shot')
settingsApiController = module.exports = require('../controllers/settings/settings')
reportApiController = module.exports = require("../controllers/report/report")
activityApiController = module.exports = require('../controllers/activity/activity')
dashboardApiControlller = module.exports = require('../controllers/dashboard/dashboard')
desktopApiController = module.exports = require('../controllers/desktop/desktop')
contactApiController = module.exports = require('../controllers/contact/contact.js')
worklimitApiController = module.exports = require('../controllers/work_limit/work_limit.js')

// //define all dashboard
// dashboardApiController = module.exports = require("../controllers/api/dashboard/dashboard");
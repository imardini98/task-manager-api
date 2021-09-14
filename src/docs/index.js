
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const task_manager = require('./task-manager');
const user_manager = require('./user-manager')
module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    paths: {
        ...task_manager,
        ...user_manager
    }
    
};
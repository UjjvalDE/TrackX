module.exports = {
    PROJECT_MEMBER_ROLE: Object.freeze({
        MANAGER: 0,
        USER: 1,
        VIEWER: 2,
        NONE: 3,
    }),
    ORG_MEMBER_ROLE: Object.freeze({
        NONE: 0,
        OWNER: 1,
        ORG_MANAGER: 2,
        PROJECT_MANAGER: 3,
        USER: 4,
        PROJECT_VIEWER: 5,
        MULTIPLE_PROJECT_ROLES: 6
    }),
}
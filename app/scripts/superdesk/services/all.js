define([
    'angular',
    './translate',
    './upload',
    './notify',
    './settings',
    './storage',
    './menu',
    './permissions',
    './permissionsService',
    './activity',
    './keyboardManager',
    '../userSettings',
    '../entity',
    '../server'
], function(angular) {
    'use strict';

    angular.module('superdesk.services', [
        'superdesk.services.translate',
        'superdesk.services.upload',
        'superdesk.services.notify',
        'superdesk.services.settings',
        'superdesk.services.storage',
        'superdesk.services.menu',
        'superdesk.services.permissions',
        'superdesk.services.permissionsService',
        'superdesk.services.activity',
        'superdesk.services.keyboard',
        'superdesk.userSettings',
        'superdesk.entity',
        'superdesk.server'
    ]);
});

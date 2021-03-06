"use strict";
/// <reference path="../../typings/index.d.ts" />
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var message_service_1 = require('./message/message.service');
var auth_service_1 = require('./user/auth.service');
var error_service_1 = require('./errors/error.service');
var routes_app_1 = require('./routes.app');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    routes_app_1.APP_ROUTER_PROVIDERS,
    message_service_1.MessageService,
    auth_service_1.AuthService,
    error_service_1.ErrorService,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
])
    .catch(function (err) { return console.error(err); });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUFpRDtBQUNqRCx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFDekUscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLHNCQUFxRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBRXRFLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGdDQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNELDZCQUE0QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXRELDJCQUFxQyxjQUFjLENBQUMsQ0FBQTtBQUVwRCxvQ0FBUyxDQUFDLDRCQUFZLEVBQUU7SUFDcEIsaUNBQW9CO0lBQ3BCLGdDQUFjO0lBQ2QsMEJBQVc7SUFDWCw0QkFBWTtJQUNaLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDO0lBQzNELHFCQUFjO0lBQ2QsOEJBQXNCLEVBQUU7SUFDeEIsb0JBQVksRUFBRTtDQUNqQixDQUFDO0tBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cbmltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBkaXNhYmxlRGVwcmVjYXRlZEZvcm1zLCBwcm92aWRlRm9ybXMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3VzZXIvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBBUFBfUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJy4vcm91dGVzLmFwcCc7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcbiAgICBBUFBfUk9VVEVSX1BST1ZJREVSUywgXG4gICAgTWVzc2FnZVNlcnZpY2UsXG4gICAgQXV0aFNlcnZpY2UsXG4gICAgRXJyb3JTZXJ2aWNlLFxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pLCBcbiAgICBIVFRQX1BST1ZJREVSUywgXG4gICAgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcygpLCBcbiAgICBwcm92aWRlRm9ybXMoKVxuXSlcbi5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

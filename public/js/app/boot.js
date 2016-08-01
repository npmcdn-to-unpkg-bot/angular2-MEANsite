"use strict";
/// <reference path="../../typings/index.d.ts" />
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var message_service_1 = require('./message/message.service');
var routes_app_1 = require('./routes.app');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [routes_app_1.APP_ROUTER_PROVIDERS, message_service_1.MessageService, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), http_1.HTTP_PROVIDERS])
    .catch(function (err) { return console.error(err); });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUFpRDtBQUNqRCx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFDekUscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGdDQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBRTNELDJCQUFxQyxjQUFjLENBQUMsQ0FBQTtBQUVwRCxvQ0FBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQyxpQ0FBb0IsRUFBRSxnQ0FBYyxFQUFFLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLEVBQUUscUJBQWMsQ0FBQyxDQUFDO0tBQ3ZJLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgcHJvdmlkZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5cbmltcG9ydCB7IEFQUF9ST1VURVJfUFJPVklERVJTIH0gZnJvbSAnLi9yb3V0ZXMuYXBwJztcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW0FQUF9ST1VURVJfUFJPVklERVJTLCBNZXNzYWdlU2VydmljZSwgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSksIEhUVFBfUFJPVklERVJTXSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

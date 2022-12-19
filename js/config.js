/*
 * Client for GDBFrontendLive.
 *
 * https://github.com/rohanrhu/gdb-frontend-live-client
 * https://oguzhaneroglu.com/projects/gdb-frontend-live-client/
 *
 * Licensed under GNU/GPLv3
 * Copyright (C) 2020, Oğuzhan Eroğlu (https://oguzhaneroglu.com/) <rohanrhu2@gmail.com>
 *
 */

GDBFrontendLive;
 
GDBFrontendLive.config = {};
GDBFrontendLive.config.http_protocol = 'http';
GDBFrontendLive.config.http_path = '/gdb-frontend-live-client';
GDBFrontendLive.config.ws_protocol = 'ws';
GDBFrontendLive.config.host = window.location.hostname;
GDBFrontendLive.config.port = 4551;

var port = window.location.port;
if (port) {
    port = ':'+port;
}

GDBFrontendLive.config.instanceURLGenerator = function (parameters) {
    return 'http://'+GDBFrontendLive.config.host+port+'/#'+JSON.stringify({id: parameters.instance.id});
};

GDBFrontendLive.config.gfURLGenerator = function (parameters) {
    return 'http://'+GDBFrontendLive.config.host+port+'/gf/'+parameters.instance.http_port+'/';
};
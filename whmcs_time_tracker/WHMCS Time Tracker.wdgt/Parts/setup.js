// This file was generated by Dashcode from Apple Inc.
// DO NOT EDIT - This file is maintained automatically by Dashcode.
function setupParts() {
    if (setupParts.called) return;
    setupParts.called = true;
    CreateInfoButton('info', { frontID: 'front', foregroundStyle: 'white', backgroundStyle: 'black', onclick: 'showBack' });
    CreateText('uname', { text: 'Username' });
    CreateText('pw', { text: 'Password' });
    CreateText('lblwhmcsurl', { text: 'URL' });
    CreateGlassButton('startbutton', { onclick: 'clickedStartStop', text: 'Start' });
    CreateGlassButton('stopbutton', { onclick: 'clickedStartStop', text: 'Stop' });
    CreateGlassButton('submithours', { onclick: 'submitHours', text: 'Submit Hours' });
    CreateText('not', { text: 'Notes' });
    CreateText('statusmsg', { text: 'statusmsg' });
    CreateText('versionInfo', { text: 'Time Tracker 1.0.0' });
    CreateGlassButton('done', { onclick: 'loadClients', text: 'Done' });
    CreateText('count', { text: '0:00:00' });
    CreateText('submitStatus', { text: 'submitStatus' });
    CreateText('url', { text: '' });
}
window.addEventListener('load', setupParts, false);

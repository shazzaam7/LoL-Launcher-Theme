window.addEventListener('load', () => {
    setTimeout(function () {
       // ...
       addTheme();
       console.log('Theme loaded');
    }, 3500);
 });
 
 function addTheme() {
    var head = document.getElementsByTagName('head')[0];
 
    var style = document.createElement('link');
    style.href = 'https://raw.githubusercontent.com/shazzaam7/LoL-Launcher-Theme/main/theme/theme.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
 }
 
 function themeReload() {
    var style = document.createElement('link');
    style.href = 'https://raw.githubusercontent.com/shazzaam7/LoL-Launcher-Theme/main/theme/theme.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
 }
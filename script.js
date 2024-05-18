
let jsontext = JSON.stringify([{
  "boot_process": {
    "timestamp": "2024-05-18 00:00:00",
    "bios": {
      "vendor": "American Megatrends Inc.",
      "version": "F15"
    },
    "kernel": {
      "version": "5.19.0-01000-generic",
      "modules": [
        { "name": "loop", "status": "Loaded" },
        { "name": "dm_mod", "status": "Loaded" },
        { "name": "ext4", "status": "Loaded" }
      ]
    },
    "filesystem": {
      "devices": [
        {
          "device": "/dev/sda1",
          "type": "ext4",
          "status": "mounted",
          "fsck": {
            "result": "clean"
          }
        },
        {
          "device": "/dev/sdb",
          "type": "swap",
          "status": "mounted"
        }
      ]
    },
    "services": [
      {
        "name": "rsyslogd",
        "status": "running",
        "pid": 1
      },
      {
        "name": "atd",
        "status": "running",
        "pid": 2
      },
      {
        "name": "NetworkManager",
        "status": "enabled",
        "details": {
          "interfaces": [
            { "name": "eth0", "status": "active" }
          ]
        }
      }
    ]
  }
}]);

let typed = new Typed('#typed', {
  strings: [jsontext],
  typeSpeed: 8,
  startDelay: 500,
  backDelay: 1000,
  backSpeed: 35,
  fadeOut: true,
  loop: false,
  loopCount: 2,
  // showCursor: false
  cursorChar: '...',
  onComplete: function() {
    window.location.replace("./pageLogin/log.html");
  }
});







/*
const typedtext = document.querySelector('.typed');

function textTyping (e, text, i = 0 ){
  e.textContent += text[i];
  if(i === text.lenght - 1){
    return;
  }
  setTimeout(()=> textTyping (e, text, i +1 ),50);
}
textTyping(typedtext,jsontext);
*/ 






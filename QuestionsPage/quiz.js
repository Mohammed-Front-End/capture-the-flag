
let jsontext = JSON.stringify([
  {
    "boot_process": {
      "timestamp": "2024-05-18 00:00:00",
      "bios": {
        "vendor": "American Megatrends Inc.",
        "version": "F15",
        "date": "2022-08-01"
      },
      "kernel": {
        "version": "5.19.0-01000-generic",
        "modules": [
          { "name": "loop", "status": "Loaded" },
          { "name": "dm_mod", "status": "Loaded" },
          { "name": "ext4", "status": "Loaded" },
          { "name": "i915", "status": "Loaded" },
          { "name": "xfs", "status": "Loaded" }
        ]
      },
      "filesystem": {
        "devices": [
          {
            "device": "/dev/sda1",
            "type": "ext4",
            "status": "mounted",
            "fsck": {
              "result": "clean",
              "last_checked": "2024-05-17 12:00:00"
            }
          },
          {
            "device": "/dev/sdb",
            "type": "swap",
            "status": "mounted"
          },
          {
            "device": "/dev/sdc1",
            "type": "xfs",
            "status": "mounted",
            "fsck": {
              "result": "clean",
              "last_checked": "2024-05-16 08:30:00"
            }
          }
        ]
      },
      "services": [
        {
          "name": "rsyslogd",
          "status": "running",
          "pid": 1,
          "start_time": "2024-05-18 00:00:10"
        },
        {
          "name": "atd",
          "status": "running",
          "pid": 2,
          "start_time": "2024-05-18 00:00:15"
        },
        {
          "name": "NetworkManager",
          "status": "enabled",
          "details": {
            "interfaces": [
              { "name": "eth0", "status": "active", "ip_address": "192.168.1.100" },
              { "name": "wlan0", "status": "inactive" }
            ]
          }
        },
        {
          "name": "cron",
          "status": "running",
          "pid": 3,
          "start_time": "2024-05-18 00:00:20"
        },
        {
          "name": "sshd",
          "status": "running",
          "pid": 4,
          "start_time": "2024-05-18 00:00:25"
        },
        {
          "name": "nginx",
          "status": "running",
          "pid": 5,
          "start_time": "2024-05-18 00:00:30"
        },
        {
          "name": "mysql",
          "status": "running",
          "pid": 6,
          "start_time": "2024-05-18 00:00:35"
        },
        {
          "name": "docker",
          "status": "running",
          "pid": 7,
          "start_time": "2024-05-18 00:00:40"
        },
        {
          "name": "redis",
          "status": "running",
          "pid": 8,
          "start_time": "2024-05-18 00:00:45"
        },
        {
          "name": "memcached",
          "status": "running",
          "pid": 9,
          "start_time": "2024-05-18 00:00:50"
        }
      ]
    }
  }
]);
let typedText = document.querySelector('.typed')

let typed = new Typed('#typed', {
  strings: [jsontext],
  typeSpeed: 2,
  startDelay: 500,
  backDelay: 1000,
  backSpeed: 20,
  fadeOut: true,
  loop: false,
  loopCount: 2,
  // showCursor: false
  cursorChar: '...',

  onComplete: function() {
    setTimeout(function() {

      typedText.innerHTML = 'Medo'

    }, 2000);
  }

});


console.log(typed);





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






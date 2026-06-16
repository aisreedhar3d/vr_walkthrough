var APP_DATA = {
  "scenes": [
    {
      "id": "0-10",
      "name": "10.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.4914477302184679,
        "pitch": 0.047387236369100805,
        "fov": 1.1166367482365231
      },
      "linkHotspots": [
        {
          "yaw": -2.477199969402699,
          "pitch": 0.000351957850586615,
          "rotation": 0,
          "target": "1-2jpg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2jpg",
      "name": "2.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1353368514466533,
          "pitch": 0.06659504624053092,
          "rotation": 0,
          "target": "0-10"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

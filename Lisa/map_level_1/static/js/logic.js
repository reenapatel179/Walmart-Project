// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(popul) {
  return popul * 600;
}

/*

function getColor(popul) {
  switch (true) {
  case popul > 100:
    return "#ea2c2c";
  case pupul > 50:
    return "#ea822c";
  case popul > 20:
    return "#ee9c00";
  case popul> 10:
    return "#eecc00";
  case popul > 0:
    return "#d4ee00";
  default:
    return "#98ee00";
  }
}
*/

// Each city object contains the city's name, location and population
var cities = [
  {
    name: "New York",
    location: [40.7128, -74.0059],
    pop: 87
  },
  {
    name: "Illinois",
    //location: [41.8781, -87.6298],
    //location: [40.6936, -89.5890],
    location: [41.7508, -88.1535],
    pop: 137
  },
  {
    name: "Texas",
    //location: [29.7604, -95.3698],
    location: [29.4241, -98.4936],
    pop: 329
  },
  {
    name: "California",
    location: [34.0522, -118.2437],
    pop: 167
  },
  {
    name: "Nebraska",
    //location: [41.2524, -95.9980],
    location: [41.7817, -99.1332],
    pop: 27
  },
  {
    name: "Ohio",
    location: [40.0068, -83.0306],
    pop: 136
  },
  {
    name: "Georgia",
    location: [33.7490, -84.3880],
    pop: 128
  },
  {
    name: "Pennsylvania",
    location: [40.7982, -77.8599],
    pop: 119
  },
  {
    name: "North Carolina",
    location: [35.7796, -78.6382],
    pop: 118
  },
  {
    name: "Tennessee",
    location: [36.1627, -86.7816],
    pop: 104
  },
  {
    name: "Missouri",
    //location: [38.6270, -90.1994],
    location: [37.9485, -91.7715],
    pop: 117
  },
  {
    name: "Indiana",
    location: [39.7684, -86.1581],
    pop: 95
  },
  {
    name: "Alabama",
    location: [33.5186, -86.8104],
    pop: 90
  },
  {
    name: "Virginia",
    location: [37.5407, -77.4360],
    pop: 87
  },
  {
    name: "Oklahoma",
    location: [35.4676, -97.5164],
    pop: 84
  },
  {
    name: "Kentucky",
    location: [38.2527, -85.7585],
    pop: 82
  },
  {
    name: "Louisiana",
    //location: [29.9511, -90.0715],
    location: [31.3113, -92.4451],
    pop: 81
  },
  {
    name: "Arkansas",
    location: [34.7465, -92.2896],
    pop: 80
  },
  {
    name: "Michigan",
    //location: [42.3314, -87.9065],
    location: [42.3314, -83.0458],
    pop: 79
  }, 
  {
    name: "Wisconsin",
    //location: [43.0389, -97.5164],
    location: [44.5133, -88.0133],
    pop: 77
  },
  {
    name: "Mississippi",
    location: [32.2988, -90.1848],
    pop: 64
  },
  {
    name: "South Carolina",
    location: [34.0007, -81.0348],
    pop: 63
  },
  {
    name: "Arizona",
    location: [33.4484, -112.0740],
    pop: 62
  },
  {
    name: "Colorado",
    location: [39.7392, -104.9903],
    pop: 61
  }, 
  {
    name: "Iowa",
    location: [41.5868, -93.6250],
    pop: 56
  }, 
  {
    name: "Kansas",
    //location: [39.0997, -94.5786],
    location: [38.0608, -97.9298],
    pop: 55
  },
  {
    name: "Minnesota",
    location: [47.7395, -92.3624],
    pop: 52
  },
  {
    name: "New Jersey",
    location: [40.3573, -74.6672],
    pop: 45
  },
  {
    name: "Washington",
    location: [47.6062, -122.3321],
    pop: 45
  },
  {
    name: "Massachusetts",
    location: [42.3601, -71.0589],
    pop: 44
  }, 
  {
    name: "Maryland",
    location: [39.2904, -76.6122],
    pop: 41
  }, 
  {
    name: "West Virginia",
    location: [38.3498, -81.6326],
    pop: 34
  }, 
  {
    name: "Connecticut",
    location: [41.7658, -72.6734],
    pop: 32
  },
  {
    name: "New Mexico",
    location: [35.6870, -105.9378],
    pop: 31
  },
  {
    name: "Oregon",
    location: [45.5051, -122.6750],
    pop: 29
  },
  {
    name: "Utah",
    //location: [40.7608, -111.8910],
    location: [38.7725, -112.0841],
    pop: 26
  },
  {
    name: "Nevada",
    location: [36.1699, -115.1398],
    pop: 26
  }, 
  {
    name:  "New Hampshire",
    location: [43.2081, -71.5376],
    pop: 26
  }, 
  {
    name: "Maine",
    location: [44.8016, -68.7712],
    pop: 22
  }, 
  {
    name: "Idaho",
    location: [43.6150, -116.2023],
    pop: 19
  },
  {
    name: "Montana",
    location: [46.5891, -112.0391],
    pop: 12
  },
  {
    name: "South Dakota",
    location: [44.3668, -100.3538],
    pop: 12
  },
  {
    name: "Wyoming",
    //location: [41.1400, -104.8202],
    location: [43.0247, -108.3806],
    pop: 10
  },
  {
    name: "North Dakota",
    location: [46.8083, -100.7837],
    pop: 9
  }, 
  {
    name: "Rhode Island",
    location: [41.8240, -71.4128],
    pop: 9
  },
  {
    name: "Delaware",
    location: [39.1582, -75.5244],
    pop: 8
  },
  {
    name: "Hawaii",
    location: [21.3069, -157.8583],
    pop: 8
  },
  {
    name: "Alaska",
    location: [58.3019, -134.4197],
    pop: 7
  },
  {
    name: "Vermont",
    location: [44.2601, -72.5754],
    pop: 4
  }, 
  {
    name: "Florida",
    location: [28.5383, -81.3792],
    pop: 191
  }
];

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    //fillColor: getColor(cities[i].pop),
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(cities[i].pop)
  //}).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].pop + "</h3>").addTo(myMap);
}).bindPopup("<h2>" + cities[i].name + "</h2> <hr> <h3>Number of Stores: " + cities[i].pop + "</h3>").addTo(myMap);
}

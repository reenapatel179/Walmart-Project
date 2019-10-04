// Function to determine marker size based on population
function markerSize(population) {
  return population / 100;
}

function markerSizeStore(popul) {
  return popul * 600;
}

// An array containing all of the information needed to create city and state markers
var locations = [
  {
    coordinates: [40.7128, -74.0059],
    state: {
      name: "New York State",
      population: 19378102
    },
    store: {
      name: "New York",
      numberOfStore: 87
    }
  },
  {
    coordinates: [34.0522, -118.2437],
    state: {
      name: "California",
      population: 37254523
    },
    store: {
      name: "Lost Angeles",
      numberOfStore: 167
    }
  },
  {
    coordinates: [41.8781, -87.6298],
    state: {
      name: "Illinois",
      population: 12830632
    },
    store: {
      name: "Chicago",
      numberOfStore: 137
    }
  },
  {
    //coordinates: [29.7604, -95.3698],
    coordinates: [29.4241, -98.4936],
    state: {
      name: "Texas",
      population: 25145561
    },
    store: {
      name: "Houston",
      numberOfStore: 329
    }
  },
  {
     //coordinates: [41.2524, -95.9980],
      coordinates: [41.7817, -99.1332],
      state: {
        name: "Nebraska",
        population: 1826341
      },
      store: {
        name: "Omaha",
        numberOfStore: 27
      }
    },
    {
      coordinates: [40.0068, -83.0306],
      state: {
        name: "Ohio",
        population: 11689442
      },
      store: {
        name: "Columbus",
        numberOfStore: 136
      }
    },
    {
        coordinates: [33.7490, -84.3880],
        state: {
          name: "Georgia",
          population: 10519475
        },
        store: {
          name: "Atlanta",
          numberOfStore: 128
        }
    },
    {
        coordinates: [40.7982, -77.8599],
        state: {
          name: "Pennsylvania",
          population: 12807060
        },
        store: {
          name: "Philadelphia",
          numberOfStore: 119
        }
    },
    {
        coordinates: [35.7796, -78.6382],
        state: {
          name: "North Carolina",
          population: 10383620
        },
        store: {
          name: "Raleigh",
          numberOfStore: 118
        }
    },
    {
        coordinates: [36.1627, -86.7816],
          state: {
            name: "Tennessee",
            population: 6770010
          },
          store: {
            name: "Nashville",
            numberOfStore: 104
          }
    },
  {
      coordinates: [37.9485, -91.7715],
      state: {
        name: "Missouri",
        population: 5988927
      },
      store: {
        name: "Jefferson City",
        numberOfStore: 117
      }
  },
  {
      coordinates: [39.7684, -86.1581],
      state: {
        name: "Indiana",
        population: 6483802
      },
      store: {
        name: "Indianapolis",
        numberOfStore: 95
      }
  },
  {
      coordinates: [33.5186, -86.8104],
        state: {
          name: "Alabama",
          population: 4779736
        },
        store: {
          name: "Montgomery",
          numberOfStore: 90
        }
  },
  {
    coordinates: [37.5407, -77.4360],
    state: {
      name: "Virginia",
      population: 8001024
    },
    store: {
      name: "Richmond",
      numberOfStore: 87
    }
},
{
    coordinates: [35.4676, -97.5164],
    state: {
      name: "Oklahoma",
      population: 3751351
    },
    store: {
      name: "Oklahoma City",
      numberOfStore: 84
    }
},
{
    coordinates: [38.2527, -85.7585],
      state: {
        name: "Kentucky",
        population: 4339367
      },
      store: {
        name: "Frankfort",
        numberOfStore: 82
      }
},
{
  coordinates: [31.3113, -92.4451],
  state: {
    name: "Louisiana",
    population: 4533372
  },
  store: {
    name: "Baton Rouge",
    numberOfStore: 81
  }
},
{
  coordinates: [34.7465, -92.2896],
  state: {
    name: "Arkansas",
    population: 2915918
  },
  store: {
    name: "Little Rock",
    numberOfStore: 80
  }
},
{
  coordinates: [42.3314, -83.0458],
    state: {
      name: "Michigan",
      population: 9883640
    },
    store: {
      name: "Lansing",
      numberOfStore: 79
    }
},
{
  coordinates: [44.5133, -88.0133],
  state: {
    name: "Wisconsin",
    population: 5686986
  },
  store: {
    name: "Madison",
    numberOfStore: 77
  }
},
{
  coordinates: [32.2988, -90.1848],
  state: {
    name: "Mississippi",
    population: 2967297
  },
  store: {
    name: "Jackson",
    numberOfStore: 64
  }
},
{
  coordinates: [34.0007, -81.0348],
    state: {
      name: "South Carolina",
      population: 4625364
    },
    store: {
      name: "Columbia",
      numberOfStore: 63
    }
},
{
  coordinates: [33.4484, -112.0740],
  state: {
    name: "Arizona",
    population: 6392017
  },
  store: {
    name: "Phoenix",
    numberOfStore: 62
  }
},
{
  coordinates: [39.7392, -104.9903],
  state: {
    name: "Colorado",
    population: 5029196
  },
  store: {
    name: "Denver",
    numberOfStore: 61
  }
},
{
  coordinates: [41.5868, -93.6250],
    state: {
      name: "Iowa",
      population: 3046355
    },
    store: {
      name: "Des Moines",
      numberOfStore: 56
    }
},
{
  coordinates: [38.0608, -97.9298],
  state: {
    name: "Kansas",
    population: 2853118
  },
  store: {
    name: "Topeka",
    numberOfStore: 55
  }
},
{
  coordinates: [47.7395, -92.3624],
    state: {
      name: "Minnesota",
      population: 5303925
    },
    store: {
      name: "Saint Paul",
      numberOfStore: 52
    }
},
{
  coordinates: [40.3573, -74.6672],
  state: {
    name: "New Jersey",
    population: 8791894
  },
  store: {
    name: "Princeton",
    numberOfStore: 45
  }
},
{
  coordinates: [47.6062, -122.3321],
    state: {
      name: "Washington",
      population: 6724540
    },
    store: {
      name: "Olympia",
      numberOfStore: 45
    }
},
{
  coordinates: [42.3601, -71.0589],
  state: {
    name: "Massachusetts",
    population: 6547629
  },
  store: {
    name: "Boston",
    numberOfStore: 44
  }
},
{
  coordinates: [39.2904, -76.6122],
    state: {
      name: "Maryland",
      population: 5773552
    },
    store: {
      name: "Annapolis",
      numberOfStore: 41
    }
},
{
  coordinates: [38.3498, -81.6326],
  state: {
    name: "West Virginia",
    population: 1852994
  },
  store: {
    name: "Charleston",
    numberOfStore: 34
  }
},
{
  coordinates: [41.7658, -72.6734],
    state: {
      name: "Connecticut",
      population: 3574097
    },
    store: {
      name: "Hartford",
      numberOfStore: 32
    }
},
{
  coordinates: [35.6870, -105.9378],
    state: {
    name: "New Mexico",
    population: 2059179
  },
  store: {
    name: "Santa Fe",
    numberOfStore: 31
  }
},
{
  coordinates: [45.5051, -122.6750],
    state: {
      name: "Oregon",
      population: 3831074
    },
    store: {
      name: "Salem",
      numberOfStore: 29
    }
},
{
  coordinates: [38.7725, -112.0841],
  state: {
    name: "Utah",
    population: 2763885
  },
  store: {
    name: "Salt Lake City",
    numberOfStore: 26
  }
},
{
  coordinates: [36.1699, -115.1398],
    state: {
      name: "Nevada",
      population: 2700551
    },
    store: {
      name: "Carson City",
      numberOfStore: 26
    }
},
{
  coordinates: [43.2081, -71.5376],
  state: {
    name: "New Hampshire",
    population: 1316470
  },
  store: {
    name: "Concord",
    numberOfStore: 26
  }
},
{
  coordinates: [44.8016, -68.7712],
    state: {
      name: "Maine",
      population: 1328361
    },
    store: {
      name: "Augusta",
      numberOfStore: 22
    }
},
{
  coordinates: [43.6150, -116.2023],
  state: {
    name: "Idaho",
    population: 1567582
  },
  store: {
    name: "Boise",
    numberOfStore: 19
  }
},
{
  coordinates: [46.5891, -112.0391],
    state: {
      name: "Montana",
      population: 989415
    },
    store: {
      name: "Helena",
      numberOfStore: 12
    }
},
//here
{
  coordinates: [44.3668, -100.3538],
  state: {
    name: "South Dakota",
    population: 814180
  },
  store: {
    name: "Pierre",
    numberOfStore: 12
  }
},
{
  coordinates: [43.0247, -108.3806],
    state: {
      name: "Wyoming",
      population: 563626
    },
    store: {
      name: "Cheyenne",
      numberOfStore: 10
    }
},
{
  coordinates: [46.8083, -100.7837],
  state: {
    name: "North Dakota",
    population: 672591
  },
  store: {
    name: "Bismarck",
    numberOfStore: 9
  }
},
{
  coordinates: [41.8240, -71.4128],
    state: {
      name: "Rhode Island",
      population: 1052567
    },
    store: {
      name: "Providence",
      numberOfStore: 9
    }
},
{
  coordinates: [39.1582, -75.5244],
  state: {
    name: "Delaware",
    population: 897934
  },
  store: {
    name: "Dover",
    numberOfStore: 8
  }
},
{
  coordinates: [21.3069, -157.8583],
    state: {
      name: "Hawaii",
      population: 1360301
    },
    store: {
      name: "Honolulu",
      numberOfStore: 8
    }
},
{
  coordinates: [58.3019, -134.4197],
  state: {
    name: "Alaska",
    population: 710231
  },
  store: {
    name: "Juneau",
    numberOfStore: 7
  }
},
{
  coordinates: [44.2601, -72.5754],
    state: {
      name: "Vermont",
      population: 625741
    },
    store: {
      name: "Montpelier",
      numberOfStore: 4
    }
  },
  {
       coordinates: [28.5383, -81.3792],
       state: {
          name: "Florida",
          population: 18801310
    },
       store: {
          name: "Orlando",
          numberOfStore: 191
    }
  }
   
];

// Define arrays to hold created city and state markers
var storeMarkers = [];
var stateMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  stateMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
      radius: markerSize(locations[i].state.population)
    })
  );

  // Setting the marker radius for the city by passing population into the markerSize function
  storeMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
      radius: markerSizeStore(locations[i].store.numberOfStore)
    })
  );
}

// Define variables for our base layers
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});


var satellitemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-satellite",
  accessToken: API_KEY
});


// Create two separate layer groups: one for cities and one for states
var states = L.layerGroup(stateMarkers);
var stores = L.layerGroup(storeMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap,
  "Satellite Map": satellitemap
};

// Create an overlay object
var overlayMaps = {
  "State Population": states,
  "Number of Stores": stores
};

// Define a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [streetmap, states, stores]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

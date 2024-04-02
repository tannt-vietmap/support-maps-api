// Init map
var map = L.map('map').setView([10, 106], 9);

// add tile map
L.tileLayer('https://maps.vietmap.vn/api/tm/{z}/{x}/{y}?apikey=1b6ea57cdf04fbc8ef64e7419aac8237e52a528e47b9c644', {
    maxZoom: 19,
}).addTo(map);

//add marker to map
//https://leafletjs.com/reference.html#marker
let cities = [
    {name: 'Hồ Chí Minh', latlng:{lat:10.7756, lng:106.7019}},
    {name: 'Hà Nội', latlng:{lat:21.0000, lng:105.8500}},
    {name: 'Cần Thơ', latlng:{lat:10.0333, lng:105.7833}}
];
cities.map(e =>{
   let marker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map).bindPopup(e.name);
   //listen click event on marker
    marker.on('click', function(_) {
        // do something
    })
})

//add polygon
//https://leafletjs.com/reference.html#geojson
let dataPolygon = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            color:'red'
        },
        "geometry": {
          "coordinates": [
            [
              [
                106.35773444981493,
                10.627154998778352
              ],
              [
                106.35680564974575,
                10.559339999567229
              ],
              [
                106.41234498380754,
                10.520622043477601
              ],
              [
                106.49211966364322,
                10.504736347044457
              ],
              [
                106.56078647666578,
                10.542463540337508
              ],
              [
                106.61119578076745,
                10.570578063086884
              ],
              [
                106.62836247755206,
                10.64799649170753
              ],
              [
                106.57686236779648,
                10.685706044648953
              ],
              [
                106.55464663417615,
                10.743253697518597
              ],
              [
                106.44053854785301,
                10.74027736320474
              ],
              [
                106.3769207652137,
                10.696621094637877
              ],
              [
                106.35773444981493,
                10.627154998778352
              ]
            ]
          ],
          "type": "Polygon"
        }
      }
    ]
  }

L.geoJSON(dataPolygon, {
    style: function (feature) {
        return {color: feature.properties.color};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
}).addTo(map);
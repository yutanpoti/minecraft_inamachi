var wms_layers = [];


        var lyr_WebXYZ_0 = new ol.layer.Tile({
            'title': '地理院淡色地図（WebXYZ）',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });

        var lyr_1960xyz_1 = new ol.layer.Tile({
            'title': '1960年代航空写真（xyz）',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png'
            })
        });

        var lyr_1970xyz_2 = new ol.layer.Tile({
            'title': '1970年代航空写真（xyz）',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_xyz_3 = new ol.layer.Tile({
            'title': 'ベースマップ航空写真（xyz）',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg'
            })
        });
var lyr_worldpainter_screenshot_modified_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "worldpainter_screenshot_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/worldpainter_screenshot_modified_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15356995.001409, 4278296.904389, 15358277.186950, 4279828.443803]
                            })
                        });
var format_inamachi_1200_1000_building_5 = new ol.format.GeoJSON();
var features_inamachi_1200_1000_building_5 = format_inamachi_1200_1000_building_5.readFeatures(json_inamachi_1200_1000_building_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inamachi_1200_1000_building_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inamachi_1200_1000_building_5.addFeatures(features_inamachi_1200_1000_building_5);
var lyr_inamachi_1200_1000_building_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_inamachi_1200_1000_building_5, 
                style: style_inamachi_1200_1000_building_5,
                interactive: false,
                title: '<img src="styles/legend/inamachi_1200_1000_building_5.png" /> inamachi_1200_1000_building'
            });

lyr_WebXYZ_0.setVisible(true);lyr_1960xyz_1.setVisible(false);lyr_1970xyz_2.setVisible(false);lyr_xyz_3.setVisible(false);lyr_worldpainter_screenshot_modified_4.setVisible(true);lyr_inamachi_1200_1000_building_5.setVisible(true);
var layersList = [lyr_WebXYZ_0,lyr_1960xyz_1,lyr_1970xyz_2,lyr_xyz_3,lyr_worldpainter_screenshot_modified_4,lyr_inamachi_1200_1000_building_5];
lyr_inamachi_1200_1000_building_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cal_zmin_m': 'cal_zmin_m', 'cal_zmax_m': 'cal_zmax_m', 'cal_height_m': 'cal_height_m', });
lyr_inamachi_1200_1000_building_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cal_zmin_m': 'TextEdit', 'cal_zmax_m': 'TextEdit', 'cal_height_m': 'TextEdit', });
lyr_inamachi_1200_1000_building_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cal_zmin_m': 'no label', 'cal_zmax_m': 'no label', 'cal_height_m': 'no label', });
lyr_inamachi_1200_1000_building_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
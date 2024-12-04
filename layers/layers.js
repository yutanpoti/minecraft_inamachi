var wms_layers = [];

var lyr_inashou1200_1000_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "inashou1200_1000",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/inashou1200_1000_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15356989.743018, 4278297.368842, 15358280.929856, 4279831.836944]
                            })
                        });

        var lyr_WebXYZ_1 = new ol.layer.Tile({
            'title': '地理院淡色地図（WebXYZ）',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });

        var lyr_1960xyz_2 = new ol.layer.Tile({
            'title': '1960年代航空写真（xyz）',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png'
            })
        });

        var lyr_1970xyz_3 = new ol.layer.Tile({
            'title': '1970年代航空写真（xyz）',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_xyz_4 = new ol.layer.Tile({
            'title': 'ベースマップ航空写真（xyz）',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_OpenStreetMap_5 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_worldpainter_screenshot_modified_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "worldpainter_screenshot_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/worldpainter_screenshot_modified_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15356995.001409, 4278296.904389, 15358277.186950, 4279828.443803]
                            })
                        });
var format_inamachi_1800_building_7 = new ol.format.GeoJSON();
var features_inamachi_1800_building_7 = format_inamachi_1800_building_7.readFeatures(json_inamachi_1800_building_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inamachi_1800_building_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inamachi_1800_building_7.addFeatures(features_inamachi_1800_building_7);
var lyr_inamachi_1800_building_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_inamachi_1800_building_7, 
                style: style_inamachi_1800_building_7,
                interactive: false,
                title: '<img src="styles/legend/inamachi_1800_building_7.png" /> inamachi_1800_building'
            });
var format_inamachi_1200_1000_02_8 = new ol.format.GeoJSON();
var features_inamachi_1200_1000_02_8 = format_inamachi_1200_1000_02_8.readFeatures(json_inamachi_1200_1000_02_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inamachi_1200_1000_02_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inamachi_1200_1000_02_8.addFeatures(features_inamachi_1200_1000_02_8);
var lyr_inamachi_1200_1000_02_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_inamachi_1200_1000_02_8, 
                style: style_inamachi_1200_1000_02_8,
                interactive: false,
                title: '<img src="styles/legend/inamachi_1200_1000_02_8.png" /> inamachi_1200_1000_02'
            });

lyr_inashou1200_1000_0.setVisible(false);lyr_WebXYZ_1.setVisible(true);lyr_1960xyz_2.setVisible(false);lyr_1970xyz_3.setVisible(false);lyr_xyz_4.setVisible(true);lyr_OpenStreetMap_5.setVisible(false);lyr_worldpainter_screenshot_modified_6.setVisible(true);lyr_inamachi_1800_building_7.setVisible(true);lyr_inamachi_1200_1000_02_8.setVisible(true);
var layersList = [lyr_inashou1200_1000_0,lyr_WebXYZ_1,lyr_1960xyz_2,lyr_1970xyz_3,lyr_xyz_4,lyr_OpenStreetMap_5,lyr_worldpainter_screenshot_modified_6,lyr_inamachi_1800_building_7,lyr_inamachi_1200_1000_02_8];
lyr_inamachi_1800_building_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'source_filename': 'source_filename', 'gml_id': 'gml_id', 'building_id': 'building_id', 'branch_id': 'branch_id', 'prefecture': 'prefecture', 'prefecture_code': 'prefecture_code', 'city': 'city', 'city_code': 'city_code', 'gml_description': 'gml_description', 'gml_name': 'gml_name', 'creation_date': 'creation_date', 'termination_date': 'termination_date', 'class': 'class', 'class_code': 'class_code', 'usage': 'usage', 'usage_code': 'usage_code', 'year_of_construction': 'year_of_construction', 'year_of_demolition': 'year_of_demolition', 'roof_type': 'roof_type', 'roof_type_code': 'roof_type_code', 'measured_height': 'measured_height', 'measured_height_uom': 'measured_height_uom', 'storeys_above_ground': 'storeys_above_ground', 'storeys_below_ground': 'storeys_below_ground', 'address': 'address', 'real_estate_id_of_building': 'real_estate_id_of_building', 'number_of_building_unit_ownership': 'number_of_building_unit_ownership', 'real_estate_id_of_building_unit_ownership': 'real_estate_id_of_building_unit_ownership', 'number_of_real_estate_id_of_land': 'number_of_real_estate_id_of_land', 'real_estate_id_of_land': 'real_estate_id_of_land', 'matching_score': 'matching_score', 'cal_area_m2': 'cal_area_m2', 'cal_xmin': 'cal_xmin', 'cal_xmax': 'cal_xmax', 'cal_ymin': 'cal_ymin', 'cal_ymax': 'cal_ymax', 'cal_zmin_m': 'cal_zmin_m', 'cal_zmax_m': 'cal_zmax_m', 'cal_height_m': 'cal_height_m', });
lyr_inamachi_1200_1000_02_8.set('fieldAliases', {'fid': 'fid', });
lyr_inamachi_1800_building_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'source_filename': 'TextEdit', 'gml_id': 'TextEdit', 'building_id': 'TextEdit', 'branch_id': 'Range', 'prefecture': 'TextEdit', 'prefecture_code': 'TextEdit', 'city': 'TextEdit', 'city_code': 'TextEdit', 'gml_description': 'TextEdit', 'gml_name': 'TextEdit', 'creation_date': 'DateTime', 'termination_date': 'DateTime', 'class': 'TextEdit', 'class_code': 'TextEdit', 'usage': 'TextEdit', 'usage_code': 'TextEdit', 'year_of_construction': 'Range', 'year_of_demolition': 'Range', 'roof_type': 'TextEdit', 'roof_type_code': 'TextEdit', 'measured_height': 'TextEdit', 'measured_height_uom': 'TextEdit', 'storeys_above_ground': 'Range', 'storeys_below_ground': 'Range', 'address': 'TextEdit', 'real_estate_id_of_building': 'TextEdit', 'number_of_building_unit_ownership': 'Range', 'real_estate_id_of_building_unit_ownership': 'TextEdit', 'number_of_real_estate_id_of_land': 'Range', 'real_estate_id_of_land': 'TextEdit', 'matching_score': 'TextEdit', 'cal_area_m2': 'TextEdit', 'cal_xmin': 'TextEdit', 'cal_xmax': 'TextEdit', 'cal_ymin': 'TextEdit', 'cal_ymax': 'TextEdit', 'cal_zmin_m': 'TextEdit', 'cal_zmax_m': 'TextEdit', 'cal_height_m': 'TextEdit', });
lyr_inamachi_1200_1000_02_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_inamachi_1800_building_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'source_filename': 'no label', 'gml_id': 'no label', 'building_id': 'no label', 'branch_id': 'no label', 'prefecture': 'no label', 'prefecture_code': 'no label', 'city': 'no label', 'city_code': 'no label', 'gml_description': 'no label', 'gml_name': 'no label', 'creation_date': 'no label', 'termination_date': 'no label', 'class': 'no label', 'class_code': 'no label', 'usage': 'no label', 'usage_code': 'no label', 'year_of_construction': 'no label', 'year_of_demolition': 'no label', 'roof_type': 'no label', 'roof_type_code': 'no label', 'measured_height': 'no label', 'measured_height_uom': 'no label', 'storeys_above_ground': 'no label', 'storeys_below_ground': 'no label', 'address': 'no label', 'real_estate_id_of_building': 'no label', 'number_of_building_unit_ownership': 'no label', 'real_estate_id_of_building_unit_ownership': 'no label', 'number_of_real_estate_id_of_land': 'no label', 'real_estate_id_of_land': 'no label', 'matching_score': 'no label', 'cal_area_m2': 'no label', 'cal_xmin': 'no label', 'cal_xmax': 'no label', 'cal_ymin': 'no label', 'cal_ymax': 'no label', 'cal_zmin_m': 'no label', 'cal_zmax_m': 'no label', 'cal_height_m': 'no label', });
lyr_inamachi_1200_1000_02_8.set('fieldLabels', {'fid': 'no label', });
lyr_inamachi_1200_1000_02_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '浸水想定区域',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 浸水想定区域'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '宿泊施設',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 宿泊施設'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'A31_001': 'A31_001', 'A31_002': 'A31_002', 'A31_003': 'A31_003', 'A31_004': 'A31_004', 'A31_005': 'A31_005', 'A31_006': 'A31_006', });
lyr__2.set('fieldAliases', {'許可年月日': '許可年月日', '許可番号': '許可番号', '種別': '種別', '施設名称': '施設名称', '施設所在地': '施設所在地', '施設電話番号': '施設電話番号', '営業者': '営業者', '総客室数': '総客室数', 'LocName': 'LocName', 'fX': 'fX', 'fY': 'fY', 'iConf': 'iConf', 'iLvl': 'iLvl', 'URL': 'URL', });
lyr__1.set('fieldImages', {'A31_001': 'Range', 'A31_002': 'Range', 'A31_003': 'TextEdit', 'A31_004': 'TextEdit', 'A31_005': 'TextEdit', 'A31_006': 'TextEdit', });
lyr__2.set('fieldImages', {'許可年月日': 'TextEdit', '許可番号': 'TextEdit', '種別': 'TextEdit', '施設名称': 'TextEdit', '施設所在地': 'TextEdit', '施設電話番号': 'TextEdit', '営業者': 'TextEdit', '総客室数': 'Range', 'LocName': 'TextEdit', 'fX': 'TextEdit', 'fY': 'TextEdit', 'iConf': 'Range', 'iLvl': 'Range', 'URL': 'TextEdit', });
lyr__1.set('fieldLabels', {'A31_001': 'no label', 'A31_002': 'no label', 'A31_003': 'no label', 'A31_004': 'no label', 'A31_005': 'no label', 'A31_006': 'no label', });
lyr__2.set('fieldLabels', {'許可年月日': 'no label', '許可番号': 'no label', '種別': 'no label', '施設名称': 'no label', '施設所在地': 'no label', '施設電話番号': 'no label', '営業者': 'no label', '総客室数': 'no label', 'LocName': 'no label', 'fX': 'no label', 'fY': 'no label', 'iConf': 'no label', 'iLvl': 'no label', 'URL': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
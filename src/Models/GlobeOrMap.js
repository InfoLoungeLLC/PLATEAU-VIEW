'use strict';

/*global require*/
var DeveloperError = require('../../third_party/cesium/Source/Core/DeveloperError');
var Entity = require('../../third_party/cesium/Source/DataSources/Entity');

/**
 * The base class for map/globe viewers.
 *
 * @constructor
 * @alias GlobeOrMap
 *
 * @see Cesium
 * @see Leaflet
 */
var GlobeOrMap = function() {
};

GlobeOrMap.prototype.destroy = function() {
    throw new DeveloperError('destroy must be implemented in the derived class.');
};

GlobeOrMap.prototype.isDestroyed = function() {
    return false;
};

/**
 * Gets the current extent of the camera.  This may be approximate if the viewer does not have a strictly rectangular view.
 * @return {Rectangle} The current visible extent.
 */
GlobeOrMap.prototype.getCurrentExtent = function() {
    throw new DeveloperError('destroy must be implemented in the derived class.');
};

/**
 * Zooms to a specified camera view or extent with a smooth flight animation.
 *
 * @param {CameraView|Rectangle} viewOrExtent The view or extent to which to zoom.
 * @param {Number} [flightDurationSeconds=3.0] The length of the flight animation in seconds.
 */
GlobeOrMap.prototype.zoomTo = function(viewOrExtent, flightDurationSeconds) {
    throw new DeveloperError('zoomTo must be implemented in the derived class.');
};

/**
 * Captures a screenshot of the map.
 * @return {Promise} A promise that resolves to a data URL when the screenshot is ready.
 */
GlobeOrMap.prototype.captureScreenshot = function() {
    throw new DeveloperError('captureScreenshot must be implemented in the derived class.');
};

/**
 * Notifies the viewer that a repaint is required.
 */
GlobeOrMap.prototype.notifyRepaintRequired = function() {
    throw new DeveloperError('notifyRepaintRequired must be implemented in the derived class.');
};

/**
 * Creates an {@see Entity} from a {@see ImageryLayerFeatureInfo}.
 * @param {ImageryLayerFeatureInfo} feature The feature for which to create an entity.
 * @return {[type]} [description]
 * @protected
 */
GlobeOrMap.prototype._createEntityFromImageryLayerFeature = function(feature) {
    var entity = new Entity({
        id: feature.name,
    });
    entity.name = feature.name;
    entity.description = {
        getValue : function() {
            return feature.description;
        }
    };

    entity.position = feature.position;
    entity.properties = feature.properties;

    return entity;
};

module.exports = GlobeOrMap;

MODx.accordion.Elements = function(config) {
    config = config || {};

    Ext.applyIf(config,{
        cls: 'modx-menu-accordion'

        ,extraCls: 'modx-accordion-element modx-menu-accordion'

        ,defaults: {
            baseCls: 'modx-panel'
        }

    });

    MODx.accordion.Elements.superclass.constructor.call(this,config);
};
Ext.extend(MODx.accordion.Elements,MODx.Panel,{


});
Ext.reg('modx-accordion-elements',MODx.accordion.Elements);


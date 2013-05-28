MODx.accordion.Elements = function(config) {
    config = config || {};

    Ext.applyIf(config,{
        cls: 'modx-menu-accordion'

        ,extraCls: 'modx-accordion-element modx-menu-accordion'

        ,autoHeight: true

        ,defaults: {
            baseCls: 'modx-panel'
        }

        ,items: [{
            xtype: 'modx-accordion-treepanel',
            title: 'Templates',
            elementType: 'template',
            faIcon: 'icon-columns'
        },{
            xtype: 'modx-accordion-treepanel',
            title: 'Template Varibles',
            elementType: 'tv',
            faIcon: 'icon-list-alt'
        },{
            xtype: 'modx-accordion-treepanel',
            title: 'Chunks',
            elementType: 'chunk',
            faIcon: 'icon-th-large'
        },{
            xtype: 'modx-accordion-treepanel',
            title: 'Snippets',
            elementType: 'snippet',
            faIcon: 'icon-code'
        },{
            xtype: 'modx-accordion-treepanel',
            title: 'Plugins',
            elementType: 'plugin',
            faIcon: 'icon-cogs'
        },{
            xtype: 'modx-accordion-treepanel',
            title: 'Categories',
            elementType: 'category',
            faIcon: 'icon-folder-close'
        }]
    });

    MODx.accordion.Elements.superclass.constructor.call(this,config);
};
Ext.extend(MODx.accordion.Elements,MODx.Panel,{


});
Ext.reg('modx-accordion-elements',MODx.accordion.Elements);


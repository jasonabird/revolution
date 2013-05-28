MODx.accordion.TreePanel = function(config) {
    config = config || {};

    Ext.applyIf(config,{

        treeExpanded: false,

        tools:[{
            id: 'refresh',
            faIcon: 'icon-plus',
            qtip: 'Create new Snippet',
            handler: function(){
                this.getTree().refresh();
            },
            scope: this
        },{
            id: '123',
            faIcon: 'icon-refresh',
            qtip: 'Refresh',
            handler: function(){
                this.getTree().refresh();
            },
            scope: this
        },{
            qtip: 'Expand all',
            faIcon: 'icon-level-down',
            handler: this.toggleTreeCollapse,
            scope: this
        }],
        toolTemplate: new Ext.XTemplate('<div class="x-tool x-tool-help" style="text-align:center"><i class="{faIcon}">&nbsp;</i></div>'),
        listeners: {
            render: {fn: this._onRender, scope: this }
        },
        autoScroll:true,
        autoHeight: true,
        collapsed: true,
        items: [{
            xtype: 'modx-tree-element',
            url: MODx.config.connectors_url + 'element/index.php'
            ,remoteToolbar:false
            ,tbarCfg: {
                hidden:true
            }
            ,rootVisible: false
            ,baseParams: {
                id: 'n_type_'+ config.elementType
            }
        }]

    })

    MODx.accordion.TreePanel.superclass.constructor.call(this,config);

};
Ext.extend(MODx.accordion.TreePanel,MODx.Panel,{

    _onRender: function(){
        this.header.on('click',this._onHeaderClick,this)

        this.setTitle( '<i class="'+this.faIcon+'">&nbsp;</i>'+this.initialConfig.title)
    }


    ,_onHeaderClick: function(){
        this.toggleCollapse();
    }


    /**
     * Returns a reference to the tree component
     * @returns {MODx.tree.Tree}
     */
    ,getTree: function(){
        return this.items.items[0];
    }


    /**
     * Toggles expanded/collapsed state of all tree nodes at once
     */
    ,toggleTreeCollapse: function(){
        var tree = this.getTree();
        if(!this.treeExpanded){
            tree.expandAll();
            this.treeExpanded = true;
        } else {
            tree.collapseAll();
            this.treeExpanded = false;
        }
    }

});
Ext.reg('modx-accordion-treepanel',MODx.accordion.TreePanel);



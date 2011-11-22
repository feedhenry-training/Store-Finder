(function () {
  "use strict";
  
  Ext.ns('CustomSelectView');
  
  CustomSelectView = Ext.extend(Ext.form.Select, {
    getPicker: function () {
      if (!this.picker) {
        this.picker = new Ext.Picker({
          height: '260',
          slots: [{
            align       : 'center',
            name        : this.name,
            valueField  : this.valueField,
            displayField: this.displayField,
            value       : this.getValue(),
            store       : this.store
          }],
          listeners: {
            change: this.onPickerChange,
            scope: this
          }
        });
      }
      return this.picker;
    }
  });
}());
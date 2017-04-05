(function() {
  'use strict';

  angular
    .module('canban')
    .component('addComponent', {
      templateUrl: 'app/components/add/add.template.html',
      bindings: {
        createTask: "&"
      },
      controller: function() {
        var _this = this;

        _this.show = false;
        _this.newTask = {};
        _this.showFieldInput = function() {
          _this.show = !_this.show;
        };

        _this.addTask = function(data) {
          if(!data.$valid) {
            return;
          } else {
            var temp = {
              task: data.task,
              priority: data.radio.value
            };
            _this.show = false;
            _this.createTask({task:temp});
          }
        }
      }
    });
})();

(function() {
  'use strict';

  angular
    .module('lab09')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

'use strict';

describe('app.blog module', function() {

  beforeEach(module('app.blog'));

  describe('blog controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var blogCtrl = $controller('BlogController');
      expect(blogCtrl).toBeDefined();
    }));

  });
});
/*global jest:true, describe: true, it: true, expect: true, spyOn: true*/
/*eslint no-console: 0*/

jest.dontMock('../index.js');

describe('Camera', function() {
  it('validates on propTypes', function() {
    spyOn(console, 'warn');

    const React = require('react');
    const Renderer = require('react/lib/ReactTestUtils').createRenderer();
    const Camera = require('../index.js');

    Renderer.render(
      <Camera />
    );

    Renderer.render(
      <Camera id="1234" />
    );

    const REQUIRED_PROP_TYPES = [
      'id',
    ];

    expect(console.warn.calls.length).toBe(REQUIRED_PROP_TYPES.length);
    expect(console.warn.calls[0].args[0]).toBe(
      'Warning: Failed propType: Required prop `' +
      REQUIRED_PROP_TYPES[0] +
      '` was not specified in `Camera`.'
    );
  });

  it('renders', function() {
    const React = require('react');
    const Renderer = require('react/lib/ReactTestUtils').createRenderer();
    const Camera = require('../index.js');

    Renderer.render(
      <Camera />
    );

    const result = Renderer.getRenderOutput();

    expect(result).toBeDefined();
  });
});

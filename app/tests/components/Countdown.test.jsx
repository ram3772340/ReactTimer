var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) =>{
      var countDown = TestUtils.renderIntoDocument(<Countdown />);
      countDown.handleSetCountdown(10);

      expect(countDown.state.count).toBe(10);
      expect(countDown.state.countdownStatus).toBe('started');

      setTimeout(() =>{
        expect(countDown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should never set count less than 0', (done) =>{
      var countDown = TestUtils.renderIntoDocument(<Countdown />);
      countDown.handleSetCountdown(1);

      setTimeout(() =>{
        expect(countDown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});

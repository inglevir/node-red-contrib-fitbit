'use strict';

const expect = require('chai').expect;
const UrlFactory = require("../../UrlFactory");

describe('UrlFactory.deleteActivity', () => {

  it('should throw if no argument passed', done => {
    expect(() => UrlFactory.deleteFood()).to.throw("No data specified");
    done();
  });

  it('should throw if no logId passed', done => {
    expect(() => UrlFactory.deleteFood({})).to.throw("logId is required");
    expect(() => UrlFactory.deleteFood({logId: null})).to.throw("logId is required");
    done();
  });

  it('should throw provide correct url logId specified', done => {
    const data = {
      logId: 1517
    };

    expect(UrlFactory.deleteFood(data)).to.equal("https://api.fitbit.com/1/user/-/foods/log/1517.json");
    done();
  });

});

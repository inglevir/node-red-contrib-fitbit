'use strict';

const expect = require('chai').expect;
const UrlFactory = require("../../UrlFactory");

describe('UrlFactory.logWeight', () => {

  it('should throw if no argument passed', done => {
    expect(() => UrlFactory.logWeight()).to.throw("No data specified");
    done();
  });

  it('should throw if empty data passed', done => {
    expect(() => UrlFactory.logWeight({})).to.throw("Start date is required.");
    done();
  });

  it('should throw without weight', done => {
    const data = {
      startDate: 1617358664933,
    };

    expect(() => UrlFactory.logWeight(data)).to.throw("weight is required.");
    done();
  });

  it('should provide correct url', done => {
    const data = {
      startDate: 1617358664933,
      weight: 98.1
    };
    expect(UrlFactory.logWeight(data)).to.equal("https://api.fitbit.com/1/user/-/body/log/weight.json?weight=98.1&date=2021-04-02");
    done();
  });

});

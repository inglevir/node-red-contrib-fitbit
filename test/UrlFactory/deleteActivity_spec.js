'use strict';

const expect = require('chai').expect;
const UrlFactory = require("../../UrlFactory");

describe('UrlFactory.deleteActivity', () => {

  it('should throw if no argument passed', done => {
    expect(() => UrlFactory.deleteActivty()).to.throw("No data specified");
    done();
  });

  it('should throw if no logId passed', done => {
    expect(() => UrlFactory.deleteActivty({})).to.throw("logId is required");
    expect(() => UrlFactory.deleteActivty({logId: null})).to.throw("logId is required");
    done();
  });

  it('should throw provide correct url logId specified', done => {
    const data = {
      logId: 1517
    };

    expect(UrlFactory.deleteActivty(data)).to.equal("https://api.fitbit.com/1/user/-/activities/1517.json");
    done();
  });

});

const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const netflix = sinon.spy(console);
    const movies = sinon.stub(Utils, 'calculateNumber');

    movies.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(movies.calledWith('SUM', 100, 20)).to.be.true;
    expect(movies.callCount).to.be.equal(1);
    expect(netflix.log.calledWith('The total is: 10')).to.be.true;
    expect(netflix.log.callCount).to.be.equal(1);
    movies.restore();
    netflix.log.restore();

  });
});

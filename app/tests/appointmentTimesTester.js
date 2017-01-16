import {getISODateTime as mut} from './../../app/src/utilities/appointmentTimes';
import moment from 'moment';

import chai from 'chai';
var expect = chai.expect;
chai.should();

describe('APPOINTMENT TIMES', () => {
  describe('getISODateTime', () => {
    beforeEach(() => {
    });

    describe('when calling no inputs', () => {
      it('should return undefined', () => {
        let result = mut();
        expect(result).to.be.undefined;
      });
    });

    describe('when calling no date', () => {
      it('should return undefined', () => {
        let result = mut(undefined,'7:15 PM');
        expect(result).to.be.undefined;
      });
    });

    describe('when calling no time', () => {
      it('should return undefined', () => {
        let result = mut('20170117',undefined);
        expect(result).to.be.undefined;
      });
    });

    describe('when calling with PM date', () => {
      it('should return properly formatted string', () => {
        let result = mut('20170117','7:15 PM');
        result.should.equal('2017-01-18T01:15:00.000Z');
      });
    });

    describe('when calling with AM date', () => {
      it('should return properly formatted string', () => {
        let result = mut('20170117','7:15 AM');
        result.should.equal('2017-01-17T13:15:00.000Z');
      });
    });
  });
});

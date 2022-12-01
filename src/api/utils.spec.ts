import 'mocha';

import rewire from 'rewire';
import sinon from 'sinon';

import { _ludexChallengeApi } from './utils';

describe('API utils', function () {
  describe('#_ludexChallengeApi()', function () {
    let f: typeof fetch;
    let spy: sinon.SinonSpy<any, any>;

    this.beforeEach(function () {
      spy = sinon.spy();

      f = global.fetch;
      global.fetch = spy as any;
    });

    this.afterEach(function () {
      global.fetch = f;
    });

    it('Should send fetch', async function () {
      const api = _ludexChallengeApi('token', 'ressource', 'baseurl');

      await api({});
  });
});

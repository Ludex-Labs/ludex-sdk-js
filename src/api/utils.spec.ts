import 'mocha';

import { expect } from 'chai';
import sinon from 'sinon';

import { _ludexChallengeApi } from './utils';

describe('API utils', function () {
  describe('#_ludexChallengeApi()', function () {
    let f: typeof fetch;
    let spy: sinon.SinonSpy<any, any>;

    this.beforeEach(function () {
      spy = sinon.spy(() => {
        const res = sinon.mock();
        (res as any).ok = true;
        (res as any).json = async () => {
          return {};
        };
        return res;
      });

      f = global.fetch;
      global.fetch = spy as any;
    });

    this.afterEach(function () {
      global.fetch = f;
    });

    it('Should send fetch', async function () {
      const api = _ludexChallengeApi('token', 'ressource', 'baseurl');
      await api({ path: 'path' });

      expect(
        spy.calledWith('baseurl/api/v1/ressource/path', {
          path: 'path',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer token',
          },
        })
      ).to.be.true;
    });
  });
});

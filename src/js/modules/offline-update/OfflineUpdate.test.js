/*eslint indent: */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai, { expect, } from 'chai';
import jsxChai from 'jsx-chai';
chai.use(jsxChai);

import OfflineUpdate from './index';
const applyUpdate = () => {};

const getMainJSX = function (env = 'development', state = '') {
  const install = function (
    { onInstalled,onUpdating,onUpdateReady,onUpdateFailed,onUpdated,onDismiss, }
  ) {
    switch (state) {
      case 'onInstalled':
        onInstalled();
        break;
      case 'onUpdating':
        onUpdating();
        break;
      case 'onUpdateReady':
        onUpdateReady();
        break;
      case 'onUpdateFailed':
        onUpdateFailed();
        break;
      case 'onUpdated':
        onUpdated();
        break;
      case 'onDismiss':
        onDismiss();
        break;
    }
  };
  const renderer = TestUtils.createRenderer();
  renderer.render(<OfflineUpdate NODE_ENV={env} install={install} applyUpdate={applyUpdate}/>);
  return renderer.getRenderOutput();
};

describe('OfflineUpdate', () => {
  it('should have class hidden in development', () => {
    expect(getMainJSX()).to.include('hidden');
  });
  it('should have class hidden in production', () => {
    expect(getMainJSX('production')).to.include('hidden');
  });
  describe('onInstalled', () => {
    it('should have class hidden', () => {
      expect(getMainJSX('production', 'onInstalled')).to.include('hidden');
    });
  });
  describe('onUpdating', () => {
    it('should have class hidden', () => {
      expect(getMainJSX('production', 'onUpdating')).to.include('hidden');
    });
  });
  describe('onUpdateReady', () => {
    it('should have class hidden', () => {
      expect(getMainJSX('production', 'onUpdateReady')).to.include('hidden');
    });
  });
  describe('onUpdateFailed', () => {
    it('should have class hidden', () => {
      expect(getMainJSX('production', 'onUpdateFailed')).to.include('hidden');
    });
  });
  describe('onUpdated', () => {
    it('should have class hidden', () => {
      expect(getMainJSX('production', 'onUpdated')).to.include('hidden');
    });
  });
  describe('onDismiss', () => {
    it('should have class hidden', () => {
      expect(getMainJSX('production', 'onDismiss')).to.include('hidden');
    });
  });
});

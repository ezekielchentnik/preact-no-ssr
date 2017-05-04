import { expect } from 'chai';
import NoSir from '../src';
/**@jsx h */

/*eslint-env mocha*/

describe('preact-no-ssr', () => {
	it('should export a class', () => {
		expect(NoSir).to.be.a('function');
	});

	xit('should have proper tests', () => {});
});

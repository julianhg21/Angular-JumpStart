import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: { context(path: string, recursive: boolean, pattern: RegExp): { keys(): string[]; (key: string): unknown } };

getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
const tests = require.context('./', true, /\.spec\.ts$/);
tests.keys().forEach(tests);

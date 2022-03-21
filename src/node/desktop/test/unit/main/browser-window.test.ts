/*
 * browser-window.test.ts
 *
 * Copyright (C) 2022 by RStudio, PBC
 *
 * Unless you have received this program directly from RStudio pursuant
 * to the terms of a commercial license agreement with RStudio, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */

import { describe } from 'mocha';
import { assert } from 'chai';

import { BrowserWindow } from 'electron';

describe('BrowserWindow', () => {
  it('can create hidden BrowserWindow', () => {
      let window = new BrowserWindow({
        backgroundColor: '#fff',
        autoHideMenuBar: false,
        webPreferences: {
          contextIsolation: true,
          nativeWindowOpen: true,
          nodeIntegration: false,
          sandbox: true,
        },
        show: false,
        acceptFirstMouse: true,
      });

    assert.isObject(window);
    assert.isFalse(window.isVisible());
  });
});

// vim: set tw=99 ts=4 sw=4 et:

// Copyright (C) 2019 Michael Smith <michael@spinda.net>

// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version.

// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
// FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
// details.

// You should have received a copy of the GNU Affero General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

// ==UserScript==
// @name         Bandcamp Nag Block
// @namespace    https://spinda.net
// @author       Michael Smith <michael@spinda.net>
// @license      AGPL-3.0-or-later
// @version      1.0.0
// @description  Suppress the "Time to open your heart/wallet" modal on Bandcamp.
// @updateURL    https://raw.githubusercontent.com/spinda/userscripts/master/bandcamp-nag-block.user.js
// @downloadURL  https://raw.githubusercontent.com/spinda/userscripts/master/bandcamp-nag-block.user.js
// @match        https://*.bandcamp.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function uncapTracks () {
        for (const track of window.gplaylist._playlist) {
            track.is_capped = false;
        }
    }

    const oldLoadHandler = window.gplaylist.onloaded;
    window.gplaylist.onloaded = function () {
        oldLoadHandler.apply(window.gplaylist, arguments);
        uncapTracks();
    };

    const oldCapHandler = window.gplaylist.ontrackcapped;
    window.gplaylist.ontrackcapped = function () {
        oldCapHandler.apply(window.gplaylist, arguments);
        uncapTracks();
    };

    uncapTracks();
})();

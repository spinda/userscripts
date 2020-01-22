// vim: set tw=99 ts=4 sw=4 et:

// Copyright (C) 2019-2020 Michael Smith <michael@spinda.net>

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
// @name         Startpage Search Results Title Setter
// @namespace    https://spinda.net
// @author       Michael Smith <michael@spinda.net>
// @license      AGPL-3.0-or-later
// @version      1.0.1
// @description  Include search terms and page numbers > 1 in the titles of Startpage search
//               results pages. Makes tabs easier to tell apart and history-based autocomplete more
//               usable.
// @updateURL    https://raw.githubusercontent.com/spinda/userscripts/master/startpage-search-results-title-setter.user.js
// @downloadURL  https://raw.githubusercontent.com/spinda/userscripts/master/startpage-search-results-title-setter.user.js
// @match        https://*.startpage.com/do/*
// @match        https://*.startpage.com/sp/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let pageNum = 1;

    const highlightedPageNumbers = document.getElementsByClassName('num--active');
    if (highlightedPageNumbers.length > 0) {
        pageNum = parseInt(highlightedPageNumbers[0].innerHTML);
    }

    const prefix = pageNum > 1 ? `(${pageNum}) ` : '';
    document.title = `${prefix}${document.getElementById('q').value} - Startpage.com`;
})();

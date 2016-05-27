/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (global) {

    var buttons = require('sdk/ui/button/action');
    var tabs = require("sdk/tabs");
    var _l10n = require("sdk/l10n").get;


    // Create toolbar button, Reload pinned tabs.
    var button_reload_pinned_tabs = buttons.ActionButton({
        id: "button_reload_pinned_tabs",
        label: _l10n("button_reload_pinned_tabs"),
        icon: {
            "16": "./images/button-icon-16.png",
            "32": "./images/button-icon-32.png",
            "64": "./images/button-icon-64.png"
        },
        onClick: function () {
            for (let tab of tabs) {
                //Only reload pinned tabs.
                if (tab.isPinned) {
                    tab.reload();
                }
            }
        }
    });

} (this));
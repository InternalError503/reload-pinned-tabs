/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (global) {

    var buttons = require('sdk/ui/button/action');
    var tabs = require("sdk/tabs");
    var _l10n = require("sdk/l10n").get;
    var {Hotkey} = require("sdk/hotkeys");
    var {setTimeout} = require("sdk/timers");
    var reload_flood_control = false;

    // Where the reload majic happens.
    function reload_pinned_tabs() {
        for (let tab of tabs) {
            //Only reload pinned tabs.
            if (tab.isPinned) {
                reload_flood_control = true;
                tab.reload();
            }
        }
        //Usage case to prevent constant reload loop when hotkey held down or button rapidly clicked
        setTimeout(function () {
            reload_flood_control = false;
        }, 2000);
    }

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
            if (reload_flood_control == false) {
                reload_pinned_tabs();
            }
        }
    });

    // Create quick access hotkey.
    var hotkey_reload_pinned_tabs = Hotkey({
        combo: "accel-shift-e",
        onPress: function () {
            if (reload_flood_control == false) {
                reload_pinned_tabs();
            }
        }
    });


} (this));
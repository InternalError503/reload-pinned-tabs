Reload Pinned Tabs
==============

Source Code Repository For Reload Pinned Tabs

Source code released under [MPL 2.0] (https://www.mozilla.org/MPL/2.0/)

#### What it does: 

Adds a customizable button to the browsers toolbar that when activated will trigger all pinned browser tabs to reload.
`Access key:` __CTRL|CMD + SHIFT + E__


### About this Add-on:

- Allows users to easily reload all pinned tabs.

This addon was created in visual studios code.

####  To build (Platform):

- `Windows:` __CTRL + SHIFT + B__
- `Linux:` __CTRL + SHIFT + B__

#### Task Runner (Visual Studio Code):

- `Windows:` __CTRL + SHIFT + P__
- `Linux:` __CTRL + SHIFT + P__

| Task | Command | Result |
|----------|:-------------:|------:|
| Build | task build | Builds addon *.xpi |
| Test | task test | Runs tests printing to task console. |
| Run | task run | Spawns firefox with new profile instance. |
| Sign | task sign | Builds then signs the addon using AMO signing api. |

# Python Debug Tools
These are some tools to debug python scripts. Now there is only one tools command: **generate module path of current file**

## Commonds
### 1. Generate Python Module
Generate Python Module of current file path. When you need to need some python scripts as a module, you must add a configuration in launch.json, and set the *module* parameter to module path. When debugging many script, you must change the *module* parameter each time! That's suffering! 

With this command, you just need to set the *module* parameter with "*{command:pythondebugtools.genModulePath}*", vscode will automatically debug the current script file as a module.

**Enjoy!**

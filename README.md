# Python Debug Tools
There are some tools for debugging python scripts in this extension. Now there is only one tools command: **generate module path of the current file**

## Commonds
### 1. Generate Python Module
This commond returns a string of module path of the current python script file. When you need to debug a python script as module, you must add a configuration in launch.json, and set the *module* parameter to module path. When debugging many scripts, you must change the *module* parameter each time! That's suffering! 

With this command, you just set the *module* parameter with '*{command:pythondebugtools.genModulePath}*', and **VSCode** will automatically debug the current script file as a module.

**Enjoy!**

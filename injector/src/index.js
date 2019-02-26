// Injector modules are exposed on the global / window object so apps using them can share state
require('expose-loader?Injector!./Injector');
require('expose-loader?schemaFieldValues!./schemaFieldValues');

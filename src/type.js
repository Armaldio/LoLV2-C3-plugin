"use strict";
{
    const PLUGIN_CLASS = SDK.Plugins.LoLv2;

    PLUGIN_CLASS.Type = class LolV2Type extends SDK.ITypeBase
    {
        constructor(sdkPlugin, iObjectType)
        {
            super(sdkPlugin, iObjectType);
        }
    };
}
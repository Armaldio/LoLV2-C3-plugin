"use strict";
{
    const PLUGIN_CLASS = SDK.Plugins.LoLv2;

    PLUGIN_CLASS.Instance = class LolV2Instance extends SDK.IInstanceBase
    {
        constructor(sdkType, inst)
        {
            super(sdkType, inst);
        }

        Release()
        {}

        OnCreate()
        {}

        OnPropertyChanged(id, value)
        {}

        LoadC2Property(name, valueString)
        {
            return false; // not handled
        }
    };
}
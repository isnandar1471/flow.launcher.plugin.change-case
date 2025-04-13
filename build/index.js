"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_child_process_1 = __importDefault(require("node:child_process"));
const flow_launcher_helper_1 = require("flow-launcher-helper");
const Case = __importStar(require("change-case-all"));
const os_locale_1 = __importDefault(require("os-locale"));
const DO_COPY = "do_copy";
const flow = new flow_launcher_helper_1.Flow("./icon.png");
const copy = (content) => node_child_process_1.default.spawn("clip").stdin.end(content);
const locale = os_locale_1.default.sync();
const lang = locale.split('-')[0];
flow.on("query", (params) => {
    const paramValue = params.toString();
    if (paramValue.length == 0) {
        const emptyResult = [
            {
                title: "Type something to convert case",
                subtitle: "Plugin to convert case on string",
            },
        ];
        flow.showResult(...emptyResult);
        return;
    }
    const results = [
        {
            title: Case.camelCase(paramValue),
            subtitle: "Camel Case",
            method: DO_COPY,
            params: [Case.camelCase(paramValue)],
        },
        {
            title: Case.capitalCase(paramValue),
            subtitle: "Capital Case",
            method: DO_COPY,
            params: [Case.capitalCase(paramValue)],
        },
        {
            title: Case.constantCase(paramValue),
            subtitle: "Constant Case",
            method: DO_COPY,
            params: [Case.constantCase(paramValue)],
        },
        {
            title: Case.dotCase(paramValue),
            subtitle: "Dot Case",
            method: DO_COPY,
            params: [Case.dotCase(paramValue)],
        },
        {
            title: Case.headerCase(paramValue),
            subtitle: "Header Case",
            method: DO_COPY,
            params: [Case.headerCase(paramValue)],
        },
        {
            title: Case.noCase(paramValue),
            subtitle: "No Case",
            method: DO_COPY,
            params: [Case.noCase(paramValue)],
        },
        {
            title: Case.paramCase(paramValue),
            subtitle: "Param Case",
            method: DO_COPY,
            params: [Case.paramCase(paramValue)],
        },
        {
            title: Case.pascalCase(paramValue),
            subtitle: "Pascal Case",
            method: DO_COPY,
            params: [Case.pascalCase(paramValue)],
        },
        {
            title: Case.pathCase(paramValue),
            subtitle: "Path Case",
            method: DO_COPY,
            params: [Case.pathCase(paramValue)],
        },
        {
            title: Case.sentenceCase(paramValue),
            subtitle: "Sentence Case",
            method: DO_COPY,
            params: [Case.sentenceCase(paramValue)],
        },
        {
            title: Case.snakeCase(paramValue),
            subtitle: "Snake Case",
            method: DO_COPY,
            params: [Case.snakeCase(paramValue)],
        },
        {
            title: Case.lowerCase(paramValue),
            subtitle: "Lower Case",
            method: DO_COPY,
            params: [Case.lowerCase(paramValue)],
        },
        {
            title: Case.localeLowerCase(paramValue, lang),
            subtitle: `Locale Lower Case (${lang})`,
            method: DO_COPY,
            params: [Case.localeLowerCase(paramValue, lang)],
        },
        {
            title: Case.lowerCaseFirst(paramValue),
            subtitle: "Lower Case First",
            method: DO_COPY,
            params: [Case.lowerCaseFirst(paramValue)],
        },
        {
            title: Case.spongeCase(paramValue),
            subtitle: "Sponge Case",
            method: DO_COPY,
            params: [Case.spongeCase(paramValue)],
        },
        {
            title: Case.swapCase(paramValue),
            subtitle: "Swap Case",
            method: DO_COPY,
            params: [Case.swapCase(paramValue)],
        },
        {
            title: Case.titleCase(paramValue),
            subtitle: "Title Case",
            method: DO_COPY,
            params: [Case.titleCase(paramValue)],
        },
        {
            title: Case.upperCase(paramValue),
            subtitle: "Upper Case",
            method: DO_COPY,
            params: [Case.upperCase(paramValue)],
        },
        {
            title: Case.localeUpperCase(paramValue, lang),
            subtitle: `Locale Upper Case (${lang})`,
            method: DO_COPY,
            params: [Case.localeUpperCase(paramValue, lang)],
        },
        {
            title: Case.upperCaseFirst(paramValue),
            subtitle: "Upper Case First",
            method: DO_COPY,
            params: [Case.upperCaseFirst(paramValue)],
        },
        {
            title: `${Case.isUpperCase(paramValue)}`,
            subtitle: "Is Upper Case",
            method: DO_COPY,
            params: [`${Case.isUpperCase(paramValue)}`],
        },
        {
            title: `${Case.isLowerCase(paramValue)}`,
            subtitle: "Is Lower Case",
            method: DO_COPY,
            params: [`${Case.isLowerCase(paramValue)}`],
        },
    ];
    flow.showResult(...results);
});
flow.on(DO_COPY, (params) => {
    const paramValue = params.toString();
    copy(paramValue);
});
flow.run();

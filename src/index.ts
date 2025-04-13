import childProcess from "node:child_process";

import { Flow, JSONRPCResponse } from "flow-launcher-helper";
import * as Case from "change-case-all";
import osLocale from "os-locale";

const DO_COPY = "do_copy";
type DO_COPY_METHOD = typeof DO_COPY;

const flow = new Flow<DO_COPY_METHOD>("./icon.png");

const copy = (content: string) => childProcess.spawn("clip").stdin.end(content);

const locale = osLocale.sync();
const lang = locale.split('-')[0];

flow.on("query", (params) => {
  const paramValue: string = params.toString();

  if (paramValue.length == 0) {
    const emptyResult: JSONRPCResponse<DO_COPY_METHOD>[] = [
      {
        title: "Type something to convert case",
        subtitle: "Plugin to convert case on string",
      },
    ];
    flow.showResult(...emptyResult);
    return;
  }

  const results: JSONRPCResponse<DO_COPY_METHOD>[] = [
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
  const paramValue: string = params.toString();
  copy(paramValue);
})

flow.run();

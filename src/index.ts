import childProcess from "node:child_process";

import { Flow, JSONRPCResponse } from "./../node_modules/flow-launcher-helper";
import * as Case from "./../node_modules/change-case-all";
import osLocale from "./../node_modules/os-locale";

const DO_COPY = "do_copy";
type DO_COPY_METHOD = typeof DO_COPY;

const flow = new Flow<DO_COPY_METHOD, SettingsTemplateInterface>("./assets/icon.png");

flow.on("query", (params) => {
  const paramValue: string = params.toString();

  let lang: string;
  if (flow.settings.localeLang) {
    lang = flow.settings.localeLang;
  } else {
    const locale = osLocale.sync();
    lang = locale.split('-')[0];
  }

  if (paramValue.length == 0) {
    const emptyResult: JSONRPCResponse<DO_COPY_METHOD>[] = [{
      title: "Type something to convert case",
      subtitle: "Plugin to convert case on string",
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 0,
    }];
    flow.showResult(...emptyResult);
    return;
  }

  const results: JSONRPCResponse<DO_COPY_METHOD>[] = [];

  if (flow.settings.camelCase) {
    results.push({
      title: Case.camelCase(paramValue),
      subtitle: "Camel Case",
      method: DO_COPY,
      params: [Case.camelCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.capitalCase) {
    results.push({
      title: Case.capitalCase(paramValue),
      subtitle: "Capital Case",
      method: DO_COPY,
      params: [Case.capitalCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.constantCase) {
    results.push({
      title: Case.constantCase(paramValue),
      subtitle: "Constant Case",
      method: DO_COPY,
      params: [Case.constantCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.dotCase) {
    results.push({
      title: Case.dotCase(paramValue),
      subtitle: "Dot Case",
      method: DO_COPY,
      params: [Case.dotCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.headerCase) {
    results.push({
      title: Case.headerCase(paramValue),
      subtitle: "Header Case",
      method: DO_COPY,
      params: [Case.headerCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.noCase) {
    results.push({
      title: Case.noCase(paramValue),
      subtitle: "No Case",
      method: DO_COPY,
      params: [Case.noCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.paramCase) {
    results.push({
      title: Case.paramCase(paramValue),
      subtitle: "Param Case",
      method: DO_COPY,
      params: [Case.paramCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.pascalCase) {
    results.push({
      title: Case.pascalCase(paramValue),
      subtitle: "Pascal Case",
      method: DO_COPY,
      params: [Case.pascalCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.pathCase) {
    results.push({
      title: Case.pathCase(paramValue),
      subtitle: "Path Case",
      method: DO_COPY,
      params: [Case.pathCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.sentenceCase) {
    results.push({
      title: Case.sentenceCase(paramValue),
      subtitle: "Sentence Case",
      method: DO_COPY,
      params: [Case.sentenceCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.snakeCase) {
    results.push({
      title: Case.snakeCase(paramValue),
      subtitle: "Snake Case",
      method: DO_COPY,
      params: [Case.snakeCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.lowerCase) {
    results.push({
      title: Case.lowerCase(paramValue),
      subtitle: "Lower Case",
      method: DO_COPY,
      params: [Case.lowerCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.localeLowerCase) {
    results.push({
      title: Case.localeLowerCase(paramValue, lang),
      subtitle: `Locale Lower Case (${lang})`,
      method: DO_COPY,
      params: [Case.localeLowerCase(paramValue, lang)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.lowerCaseFirst) {
    results.push({
      title: Case.lowerCaseFirst(paramValue),
      subtitle: "Lower Case First",
      method: DO_COPY,
      params: [Case.lowerCaseFirst(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.spongeCase) {
    results.push({
      title: Case.spongeCase(paramValue),
      subtitle: "Sponge Case",
      method: DO_COPY,
      params: [Case.spongeCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.swapCase) {
    results.push({
      title: Case.swapCase(paramValue),
      subtitle: "Swap Case",
      method: DO_COPY,
      params: [Case.swapCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.titleCase) {
    results.push({
      title: Case.titleCase(paramValue),
      subtitle: "Title Case",
      method: DO_COPY,
      params: [Case.titleCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.upperCase) {
    results.push({
      title: Case.upperCase(paramValue),
      subtitle: "Upper Case",
      method: DO_COPY,
      params: [Case.upperCase(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.localeUpperCase) {
    results.push({
      title: Case.localeUpperCase(paramValue, lang),
      subtitle: `Locale Upper Case (${lang})`,
      method: DO_COPY,
      params: [Case.localeUpperCase(paramValue, lang)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.upperCaseFirst) {
    results.push({
      title: Case.upperCaseFirst(paramValue),
      subtitle: "Upper Case First",
      method: DO_COPY,
      params: [Case.upperCaseFirst(paramValue)],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 20,
    });
  }

  if (flow.settings.isUpperCase) {
    results.push({
      title: `${Case.isUpperCase(paramValue)}`,
      subtitle: "Is Upper Case",
      method: DO_COPY,
      params: [`${Case.isUpperCase(paramValue)}`],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 10,
    });
  }

  if (flow.settings.isLowerCase) {
    results.push({
      title: `${Case.isLowerCase(paramValue)}`,
      subtitle: "Is Lower Case",
      method: DO_COPY,
      params: [`${Case.isLowerCase(paramValue)}`],
      dontHideAfterAction: flow.settings.dontHideAfterAction,
      score: 0,
    });
  }

  flow.showResult(...results);
});

flow.on(DO_COPY, (params) => {
  const paramValue: string = params.toString();

  const copy = (content: string) => childProcess.spawn("clip").stdin.end(content);

  copy(paramValue);
})

flow.run();

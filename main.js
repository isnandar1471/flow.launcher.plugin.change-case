// const { write } = require("clipboardy");
// const { writeSync } =
// import("clipboardy");

// require("./node_modules/clipboardy");
// write;
// async function tes() {
//   { clipboard } = await import("clipboardy");
// }
// tes();
// const { default: clipboard } = require("clipboardy");
const { copy } = require("copy-paste");
const {
  /** Core */
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,

  /** Extended */
  lowerCase,
  // localeLowerCase,
  lowerCaseFirst,
  spongeCase,
  swapCase,
  titleCase,
  upperCase,
  // localeUpperCase,
  upperCaseFirst,
  // isUpperCase,
  // isLowerCase,
} = require("./node_modules/change-case-all");

const { method, parameters } = JSON.parse(process.argv[2]);

if (method === "query") {
  if (parameters[0]) {
    console.log(
      JSON.stringify({
        result: [
          {
            Title: camelCase(parameters[0]),
            Subtitle: "Camel Case",
          },
          {
            Title: capitalCase(parameters[0]),
            Subtitle: "Capital Case",
          },
          {
            Title: constantCase(parameters[0]),
            Subtitle: "Constant Case",
          },
          {
            Title: dotCase(parameters[0]),
            Subtitle: "Dot Case",
          },
          {
            Title: headerCase(parameters[0]),
            Subtitle: "Header Case",
          },
          {
            Title: noCase(parameters[0]),
            Subtitle: "No Case",
          },
          {
            Title: paramCase(parameters[0]),
            Subtitle: "Param Case",
          },
          {
            Title: pascalCase(parameters[0]),
            Subtitle: "Pascal Case",
          },
          {
            Title: pathCase(parameters[0]),
            Subtitle: "Path Case",
          },
          {
            Title: sentenceCase(parameters[0]),
            Subtitle: "Sentence Case",
          },
          {
            Title: snakeCase(parameters[0]),
            Subtitle: "Snake Case",
          },
          {
            Title: lowerCase(parameters[0]),
            Subtitle: "Lower Case",
          },
          // {
          //   Title: localeLowerCase(parameters[0]),
          //   Subtitle: "localeLowerCase",
          // },
          {
            Title: lowerCaseFirst(parameters[0]),
            Subtitle: "Lower Case First",
          },
          {
            Title: spongeCase(parameters[0]),
            Subtitle: "Sponge Case",
          },
          {
            Title: swapCase(parameters[0]),
            Subtitle: "Swap Case",
          },
          {
            Title: titleCase(parameters[0]),
            Subtitle: "Title Case",
          },
          {
            Title: upperCase(parameters[0]),
            Subtitle: "Upper Case",
          },
          // {
          //   Title: localeUpperCase(parameters[0]),
          //   Subtitle: "Locale Upper Case",
          // },
          {
            Title: upperCaseFirst(parameters[0]),
            Subtitle: "Upper Case First",
          },
          // {
          //   Title: isUpperCase(parameters[0]).toString(),
          //   Subtitle: "Is Upper Case",
          // },
          // {
          //   Title: isLowerCase(parameters[0]).toString(),
          //   Subtitle: "Is Lower Case",
          // },
        ].map(function (item) {
          item.JsonRPCAction = {
            method: "do_copy",
            parameters: [item.Title],
          };
          item.IcoPath = "nodejs-logo.png";
          return item;
        }),
      })
    );
  } else {
    console.log(
      JSON.stringify({
        result: [
          {
            Title: "Type something to convert case",
            Subtitle: "Plugin to convert case on string",
            IcoPath: "nodejs-logo.png",
          },
        ],
      })
    );
  }
}

if (method === "do_copy") {
  copy(parameters[0]);
}

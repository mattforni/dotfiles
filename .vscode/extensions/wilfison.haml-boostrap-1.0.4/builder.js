const fs = require("fs");
const path = require("path");

const REGEX_PLACEHOLDER = /bssnippet-\d{1,2}-(?:default-)?\w*/g;
const REGEX_NAMED_PLACEHOLDER =
  /bssnippet-(?<index>\d{1,2})-(?<type>\w*)-?(?<value>\w*)/;

const VARIANTS = "primary,secondary,success,danger,warning,info,light,dark";
const SIZES = "lg,md,sm,xs";
const COLUMNS = "1,2,3,4,5,6,7,8,9,10,11,12";
const DIRECTIONS = "center,end,start";
const DROP_DIRECTIONS_V4 = "down,up,left,right";
const DROP_DIRECTIONS_V5 = "down-center,up,up-center,end,start";

function buildPlaceholderOptions(placeholder, options) {
  return `\${${placeholder.index}|${options}|}`;
}

function buildPlaceholderDefault(placeholder) {
  return `\${${placeholder.index}:${placeholder.value.replace(/_/g, "-")}}`;
}

function buildPlaceholderContent(fileLocation, placeholder) {
  switch (placeholder.type) {
    case "variants":
      return buildPlaceholderOptions(placeholder, VARIANTS);
    case "sizes":
      return buildPlaceholderOptions(placeholder, SIZES);
    case "columns":
      return buildPlaceholderOptions(placeholder, COLUMNS);
    case "directions":
      return buildPlaceholderOptions(placeholder, DIRECTIONS);
    case "drop_directions_v4":
      return buildPlaceholderOptions(placeholder, DROP_DIRECTIONS_V4);
    case "drop_directions_v5":
      return buildPlaceholderOptions(placeholder, DROP_DIRECTIONS_V5);
    case "default":
      return buildPlaceholderDefault(placeholder);
    default:
      throw new Error(
        `Unknown placeholder type: '${placeholder.type}' in file: '${fileLocation}'`
      );
  }
}

function findPlaceholderDeclaration(fileContent) {
  const placeholdersMatches = fileContent.match(REGEX_PLACEHOLDER) || [];
  return placeholdersMatches.map((placeholder) => {
    const groups = placeholder.match(REGEX_NAMED_PLACEHOLDER).groups;
    return { name: placeholder, ...groups };
  });
}

function replacePlaceholders(fileLocation) {
  let fileContent = fs.readFileSync(fileLocation, "utf8");
  const placeholders = findPlaceholderDeclaration(fileContent);

  placeholders.forEach((placeholder) => {
    const placeholderContent = buildPlaceholderContent(
      fileLocation,
      placeholder
    );
    fileContent = fileContent.replace(
      new RegExp(placeholder.name, "g"),
      placeholderContent
    );
  });

  return fileContent;
}

function buildSnippet(bsVersion, fileLocation) {
  const fileContent = replacePlaceholders(fileLocation);
  const fileName = path.basename(fileLocation, ".haml");
  const html5 = fileName === "html5";
  const name = html5
    ? "HTML5 Bootstrap"
    : fileName.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const prefix = html5 ? "!bs" : "bs";

  return [
    name,
    {
      prefix: `${prefix}${bsVersion}-${fileName}`,
      body: fileContent.split("\n"),
    },
  ];
}

const BS_VERSIONS = ["4", "5"];
const bootstrapDir = path.join(__dirname, "bootstrap");

BS_VERSIONS.forEach((bsVersion) => {
  const files = fs
    .readdirSync(path.join(bootstrapDir, bsVersion))
    .filter((file) => file.endsWith(".haml"));
  const snippets = {};

  files.forEach((file) => {
    const fileLocation = path.join(bootstrapDir, bsVersion, file);
    const [name, snippet] = buildSnippet(bsVersion, fileLocation);
    snippets[name] = snippet;
  });

  fs.writeFileSync(
    path.join(__dirname, `snippets/bootstrap${bsVersion}.code-snippets`),
    JSON.stringify(snippets, null, 2)
  );
});

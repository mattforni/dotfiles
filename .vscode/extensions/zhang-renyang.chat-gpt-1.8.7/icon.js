const fs = require("fs");
const path = require("path");

let content = ``;

const createTemplate = template => {
    return `import React from 'react';

const SVG_TYPES = {
    ${template}
};

export default SVG_TYPES;`
}

// 生成lcd.icon.js
const createLcdIconJS = iconContent => {
    fs.writeFileSync(path.resolve(__dirname, 'src/icon.tsx'), iconContent)
}

fs.readdirSync(path.resolve(__dirname, 'media/svg')).forEach(dir => {
    if (/\.(svg)$/.test(dir)) {
        const icon_name = dir.replace(/\.(svg)$/, ''),
              icon_svg = fs.readFileSync(path.resolve(__dirname, `media/svg/${dir}`));
        // 生成lcd.icon.js
        content += `'${icon_name}': () => (${icon_svg}),
`
        }
})
createLcdIconJS(createTemplate(content));
        
/**
 * Removes near-black/neutral-dark background pixels from PNG (green logo asset).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const input =
  process.argv[2] ||
  path.join(
    "C:\\Users\\diarr\\.cursor\\projects\\c-ashinagasn\\assets",
    "c__Users_diarr_AppData_Roaming_Cursor_User_workspaceStorage_781d905ba8b92cba72262cfabc1100d9_images_Full_Logo_Horizontal_Green-ccbccdc8-eee3-46c4-ab94-2791597b60b0.png",
  );

const output = process.argv[3] || path.join(__dirname, "..", "public", "brand", "logo-navbar.png");

function processPixel(r, g, b, a) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;

  const isGreenTone = g > r + 12 && g > b + 8;

  if (max < 28) return 0;

  if (max < 55 && chroma < 18 && !isGreenTone) return 0;

  if (max < 72 && chroma < 28 && min < 40 && !isGreenTone) {
    const t = (max - 28) / (72 - 28);
    return Math.round(a * Math.max(0, Math.min(1, t)));
  }

  return a;
}

async function main() {
  if (!fs.existsSync(input)) {
    console.error("Input not found:", input);
    console.error("Pass path: node scripts/knockout-black-bg.mjs <input.png> [output.png]");
    process.exit(1);
  }

  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  if (info.channels !== 4) {
    console.error("Expected RGBA image, got channels:", info.channels);
    process.exit(1);
  }

  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const a = processPixel(out[i], out[i + 1], out[i + 2], out[i + 3]);
    out[i + 3] = a;
  }

  fs.mkdirSync(path.dirname(output), { recursive: true });

  await sharp(out, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toFile(output);

  console.log("Wrote:", output);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

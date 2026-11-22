import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "public", "demo-app");
const UPSTREAM_APP =
  process.env.UPSTREAM_APP_DIR || path.resolve(ROOT, "..", "我的世界启动器", "app");

if (!fs.existsSync(path.join(UPSTREAM_APP, "preview.html"))) {
  console.error(`[build-demo] Could not find preview.html in ${UPSTREAM_APP}`);
  process.exit(1);
}

const tempConfigPath = path.join(os.tmpdir(), `lumi-demo-vite-${Date.now()}.config.mjs`);

const viteConfigSource = `
import { fileURLToPath, URL } from "node:url";
import tailwindcss from ${JSON.stringify(path.join(UPSTREAM_APP, "node_modules", "@tailwindcss", "vite", "dist", "index.mjs").replace(/\\/g, "/"))};
import react from ${JSON.stringify(path.join(UPSTREAM_APP, "node_modules", "@vitejs", "plugin-react", "dist", "index.js").replace(/\\/g, "/"))};

const bootShim = \`<script>
(() => {
  try {
    const p = new URLSearchParams(location.search);
    const lang = p.get("lang");
    if (lang === "en" || lang === "zh-CN") {
      localStorage.setItem("mcl.language", lang);
      document.documentElement.lang = lang;
    }
    const theme = p.get("theme");
    if (theme === "dark" || theme === "light") {
      document.documentElement.dataset.theme = theme;
    }
  } catch {}
})();
</script>\`;

const demoPolishPlugin = {
  name: "lumi-demo-polish",
  enforce: "pre",
  transformIndexHtml(html) {
    return html
      .replace(/<title>.*?<\\/title>/i, "<title>Lumi Launcher · Live Browser Demo</title>")
      .replace("</head>", bootShim + "\\n</head>");
  },
  transform(code, id) {
    if (id.replace(/\\\\/g, "/").endsWith("/src/dev/preview.tsx")) {
      if (code.includes("__LUMI_DEMO_NATIVE__")) {
        return null;
      }
      const langHelper = 'const __lumiEn = new URLSearchParams(location.search).get("lang") === "en";\\n';
      return (
        langHelper +
        code
          .replaceAll('name: "验收测试",', 'name: __lumiEn ? "Lumi Survival" : "微光生存",')
          .replaceAll(
            ${JSON.stringify('name: "命运齿轮FOM机械动力航空学【Fate\'s Machinery】",')},
            ${JSON.stringify('name: __lumiEn ? "Fate\'s Machinery [Create]" : "命运齿轮 · 机械动力",')},
          )
          .replaceAll(
            'world("新的世界", "齿轮之城", 7, 70, worldShot, "auto")',
            'world("Clockwork City", __lumiEn ? "Clockwork City" : "齿轮之城", 7, 70, worldShot, "auto")',
          )
          .replaceAll(
            'world("新的世界", "新的世界", 3, 2, worldShot, "screenshot")',
            'world("Starlight Valley", __lumiEn ? "Starlight Valley" : "星光山谷", 3, 2, worldShot, "screenshot")',
          )
          .replaceAll(
            '"现代的渲染引擎，大幅提升帧率，减少卡顿。"',
            '__lumiEn ? "Modern rendering engine that dramatically boosts frame rates and reduces stutter." : "现代的渲染引擎，大幅提升帧率，减少卡顿。"',
          )
          .replaceAll(
            '"兼容 OptiFine 光影包的光影加载器。"',
            '__lumiEn ? "Modern shaders mod compatible with OptiFine shader packs." : "兼容 OptiFine 光影包的光影加载器。"',
          )
          .replaceAll(
            '"机械动力：齿轮、传送带和会动的机器。"',
            '__lumiEn ? "Aesthetic kinetic technology: gears, belts, trains, and moving contraptions." : "机械动力：齿轮、传送带和会动的机器。"',
          )
          .replaceAll(
            '"看着方块就显示它是什么、属于哪个模组。"',
            '__lumiEn ? "Shows clean HUD information about the block or entity you are looking at." : "看着方块就显示它是什么、属于哪个模组。"',
          )
          .replaceAll(
            '"传送石碑，在世界各处快速移动。"',
            '__lumiEn ? "Teleportation waystones for effortless travel across your worlds." : "传送石碑，在世界各处快速移动。"',
          )
          .replaceAll(
            '"在饱食度条上显示食物能回复多少。"',
            '__lumiEn ? "Adds saturation and exhaustion overlays right onto the hunger bar." : "在饱食度条上显示食物能回复多少。"',
          )
          .replace(
            /group:\\s*"整合包",\\r?\\n\\s*pinnedAt:\\s*null,/g,
            'group: __lumiEn ? "Modpacks" : "整合包", pinnedAt: now - 12 * HOUR,',
          )
          .replace(
            /group:\\s*"测试",\\r?\\n\\s*pinnedAt:\\s*null,/g,
            'group: __lumiEn ? "Performance" : "性能", pinnedAt: now - 14 * HOUR,',
          )
          .replaceAll('"去找要塞"', '__lumiEn ? "Find the Stronghold" : "去找要塞"')
          .replaceAll('"验收测试/新的世界"', '"Lumi Survival/Starlight Valley"')
          .replaceAll('"验收测试"', '"Lumi Survival"')
          .replace(/(?<=\\s)验收测试:/g, '"Lumi Survival":')
          .replaceAll("content:验收测试:", "content:Lumi Survival:")
          .replaceAll("backup:验收测试:新的世界", "backup:Lumi Survival:Starlight Valley")
          .replaceAll("backup:验收测试:", "backup:Lumi Survival:")
          .replaceAll('folder: "新的世界", name: "新的世界"', 'folder: "Starlight Valley", name: __lumiEn ? "Starlight Valley" : "星光山谷"')
          .replaceAll('folder: "新的世界"', 'folder: "Starlight Valley"')
          .replaceAll('worldName: "新的世界"', 'worldName: __lumiEn ? "Starlight Valley" : "星光山谷"')
          .replaceAll('group: "整合包"', 'group: __lumiEn ? "Modpacks" : "整合包"')
          .replaceAll('group: "测试"', 'group: __lumiEn ? "Testing" : "测试"')
          .replaceAll('"Kokoa77"', '"LumiPlayer"')
          .replaceAll('theme: query.get("theme") ?? "system",', 'theme: query.get("theme") ?? "light",')
          .replaceAll("D:\\\\PCL2\\\\.minecraft", "C:\\\\Games\\\\PCL2\\\\.minecraft")
      );
    }
    return null;
  },
};

export default {
  root: ${JSON.stringify(UPSTREAM_APP.replace(/\\/g, "/"))},
  base: "/demo-app/",
  plugins: [react(), tailwindcss(), demoPolishPlugin],
  resolve: {
    alias: {
      "@": ${JSON.stringify(path.join(UPSTREAM_APP, "src").replace(/\\/g, "/"))},
    },
  },
  build: {
    outDir: ${JSON.stringify(OUT_DIR.replace(/\\/g, "/"))},
    emptyOutDir: true,
    target: "es2022",
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      input: ${JSON.stringify(path.join(UPSTREAM_APP, "preview.html").replace(/\\/g, "/"))},
    },
  },
};
`;

fs.writeFileSync(tempConfigPath, viteConfigSource, "utf8");

try {
  console.log(`[build-demo] Building live browser demo from ${UPSTREAM_APP}...`);
  const viteCli = path.join(UPSTREAM_APP, "node_modules", "vite", "bin", "vite.js");
  execFileSync(process.execPath, [viteCli, "build", "--config", tempConfigPath], {
    cwd: UPSTREAM_APP,
    stdio: "inherit",
  });

  const builtPreview = path.join(OUT_DIR, "preview.html");
  const indexHtml = path.join(OUT_DIR, "index.html");
  if (fs.existsSync(builtPreview)) {
    fs.renameSync(builtPreview, indexHtml);
  }
  console.log(`[build-demo] Ready at public/demo-app/index.html`);
} finally {
  try {
    fs.unlinkSync(tempConfigPath);
  } catch {}
}

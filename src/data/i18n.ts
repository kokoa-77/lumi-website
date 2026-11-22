import type { Locale } from "./site";

export interface ShowcaseItem {
  id: string;
  label: string;
  labelDark?: string;
  caption: string;
  captionDark?: string;
  hue: number;
  lightL: string;
  lightC: number;
  darkL: string;
  darkC: number;
}

export interface FeatureSection {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  imageKey: "home" | "instances" | "detail" | "discover" | "sync" | "architecture";
  artKey?: "appearance" | "rollback" | "homeDay";
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Dict {
  siteName: string;
  tagline: string;
  nav: {
    download: string;
    changelog: string;
    privacy: string;
    github: string;
    switchLangLabel: string;
    switchLangShort: string;
    themeToggle: string;
    zhBannerText: string;
    zhBannerAction: string;
    zhBannerClose: string;
  };
  releaseKind: {
    prereview: string;
    beta: string;
    stable: string;
  };
  home: {
    metaTitle: string;
    metaDesc: string;
    heroBadge: string;
    heroHeadline: string;
    heroSubtitle: string;
    ctaDownload: string;
    ctaGitHub: string;
    heroNotePrereview: string;
    heroNoteBeta: string;
    heroNoteStable: string;
    previewTitle: string;
    previewSubtitle: string;
    previewColorHint: string;
    showcases: ShowcaseItem[];
    featuresHeading: string;
    featuresSubheading: string;
    features: FeatureSection[];
    migrationEyebrow: string;
    migrationTitle: string;
    migrationSubtitle: string;
    migrationLinkTitle: string;
    migrationLinkDesc: string;
    migrationLinkList: string[];
    migrationImportTitle: string;
    migrationImportDesc: string;
    migrationImportList: string[];
    migrationGuarantee: string;
    securityEyebrow: string;
    securityTitle: string;
    securityItems: Array<{ title: string; desc: string }>;
    faqTitle: string;
    faqSubtitle: string;
    faqs: FaqItem[];
    communityTitle: string;
    communitySubtitle: string;
    communityItems: Array<{
      name: string;
      desc: string;
      key: "qqGroup" | "qqChannel" | "discord" | "bilibili" | "discussions" | "afdian";
    }>;
  };
  download: {
    metaTitle: string;
    metaDesc: string;
    title: string;
    subtitle: string;
    publishedLabel: string;
    prereviewNoticeTitle: string;
    prereviewNoticeBody: string;
    installerTitle: string;
    installerBadge: string;
    installerDesc: string;
    portableTitle: string;
    portableBadge: string;
    portableDesc: string;
    btnPrimarySite: string;
    btnPrimaryGithub: string;
    btnFallbackGithub: string;
    shareHint: string;
    shaLabel: string;
    copyBtn: string;
    copiedBtn: string;
    verifyTitle: string;
    verifyDesc: string;
    checksumsLink: string;
    smartScreenTitle: string;
    smartScreenLead: string;
    smartScreenStep1: string;
    smartScreenStep2: string;
    smartScreenWhyTitle: string;
    smartScreenWhyBody: string;
    smartScreenFalsePositive: string;
    requirementsTitle: string;
    requirements: string[];
    olderTitle: string;
    olderDesc: string;
    olderBtn: string;
  };
  changelog: {
    metaTitle: string;
    metaDesc: string;
    title: string;
    subtitle: string;
    rssLabel: string;
    viewOnGithub: string;
    downloadThis: string;
    assetsHeading: string;
    emptyNotice: string;
  };
  privacy: {
    metaTitle: string;
    metaDesc: string;
    title: string;
    subtitle: string;
    sourceNote: string;
    viewPrivacyMd: string;
    viewSecurityMd: string;
  };
  press: {
    metaTitle: string;
    metaDesc: string;
    title: string;
    subtitle: string;
    blurbTitle: string;
    blurbText: string;
    factsTitle: string;
    facts: Array<{ label: string; value: string }>;
    assetsTitle: string;
    assetsDesc: string;
    assetsBtn: string;
    brandTitle: string;
    brandDesc: string;
    brandBtn: string;
  };
  footer: {
    mojangEn: string;
    mojangZh?: string;
    licenseLine: string;
    linksTitle: string;
    communityTitle: string;
    legalTitle: string;
    pressLink: string;
    trademarkLink: string;
    securityLink: string;
  };
}

const EN: Dict = {
  siteName: "Lumi Launcher",
  tagline: "Open the launcher and jump straight back into your world.",
  nav: {
    download: "Download",
    changelog: "Changelog",
    privacy: "Privacy",
    github: "GitHub",
    switchLangLabel: "切换到简体中文",
    switchLangShort: "中文",
    themeToggle: "Toggle color theme",
    zhBannerText: "Prefer Simplified Chinese?",
    zhBannerAction: "Switch to 中文",
    zhBannerClose: "Dismiss",
  },
  releaseKind: {
    prereview: "Pre-review Build",
    beta: "Public Beta",
    stable: "Stable",
  },
  home: {
    metaTitle: "Lumi Launcher — Independent, Fast, Open-Source Minecraft: Java Edition Launcher",
    metaDesc:
      "An independent, lightweight, zero-telemetry Minecraft: Java Edition launcher for Windows built with Tauri 2, Rust, and React 19.",
    heroBadge: "Windows 10 / 11 · Open Source (GPL-3.0)",
    heroHeadline: "Open the launcher.\nJump straight into your world.",
    heroSubtitle:
      "An independent, lightweight Minecraft: Java Edition launcher for Windows. Built with Rust and Tauri 2 for instant startup, adaptive instance accents, crash-proof rollbacks, and zero telemetry.",
    ctaDownload: "Download for Windows",
    ctaGitHub: "Source on GitHub",
    heroNotePrereview:
      "Pre-review build for Mojang AppID verification — Microsoft sign-in activates once approved.",
    heroNoteBeta:
      "Public beta for Windows 10/11 (x64). Requires a legitimate Minecraft: Java Edition Microsoft account.",
    heroNoteStable:
      "Free & open source for Windows 10/11 (x64). Requires a legitimate Minecraft: Java Edition Microsoft account.",
    previewTitle: "Light up every world you play",
    previewSubtitle:
      "Switch scenes below to feel Lumi's adaptive color system — the entire interface softly shifts hue to match your current world or modpack.",
    previewColorHint: "Adaptive accent hue active",
    showcases: [
      {
        id: "home-light",
        label: "Light World Home",
        labelDark: "Dark World Home",
        caption:
          "Opens straight into your latest world in crisp daylight mist — one click on Continue jumps you in.",
        captionDark:
          "Opens straight into your latest world in calm night-sky blue — one click on Continue jumps you in.",
        hue: 245,
        lightL: "54.5%",
        lightC: 0.142,
        darkL: "76%",
        darkC: 0.132,
      },
      {
        id: "instances",
        label: "Light Library",
        labelDark: "Dark Library",
        caption:
          "Clean isolated instances with pinned favorites, custom groups, and per-world adaptive accent colors.",
        captionDark:
          "Isolated instance cards on a calm night canvas with pinned favorites and adaptive cherry-pink highlights.",
        hue: 350,
        lightL: "58%",
        lightC: 0.148,
        darkL: "78%",
        darkC: 0.135,
      },
      {
        id: "sync",
        label: "Instance Sync",
        labelDark: "Instance Sync",
        caption:
          "Sync keybinds, video settings, server lists, resource packs, and shaders locally across instances — zero cloud.",
        captionDark:
          "Sync keybinds, video settings, server lists, resource packs, and shaders locally across instances — zero cloud.",
        hue: 282,
        lightL: "54%",
        lightC: 0.15,
        darkL: "77%",
        darkC: 0.138,
      },
      {
        id: "home-dark",
        label: "Night Glow",
        labelDark: "Sunset Glow",
        caption:
          "Deep starlit night canvas that softens glare during late-night builds while matching your world's warm glow.",
        captionDark:
          "Warm amber sunset accents glowing softly against Lumi's deep night-sky canvas for late-night builds.",
        hue: 52,
        lightL: "52%",
        lightC: 0.135,
        darkL: "78%",
        darkC: 0.132,
      },
    ],
    featuresHeading: "Designed for fewer clicks and zero anxiety",
    featuresSubheading:
      "Every detail exists to get you into your world faster, keep your saves intact, and stay completely out of your way.",
    features: [
      {
        id: "direct-world",
        eyebrow: "01 · Straight to Your World",
        title: "One click from desktop to spawn",
        description:
          "Lumi opens directly to an uncluttered full-window canvas of the world or multiplayer server you played last. Auto-captured world covers strip out the crosshair and hotbar, and Quick Play launches you straight in.",
        bullets: [
          "Single-click Quick Play for worlds and favorite multiplayer servers (with live player count & ping)",
          "Keep up to 5 recent auto-captured covers per world and pin your favorite shot",
          "Optional tray release while playing to free WebView memory on lower-spec PCs",
        ],
        imageKey: "home",
      },
      {
        id: "adaptive-aesthetics",
        eyebrow: "02 · Adaptive Glow & Original Art",
        title: "A launcher that breathes with your worlds",
        description:
          "Every world paints Lumi with its own balanced OKLCH accent palette. Pair daylight sky glow or deep night-sky dark mode with native Windows 11 Mica translucency, custom pure-2D adaptive vector visuals, and a Lite mode for older hardware.",
        bullets: [
          "Smooth CSS accent transitions tailored to each world's dominant palette",
          "Native Windows 11 Mica backdrop plus crisp solid mode and Lite mode",
          "Hand-crafted pure-2D adaptive vector visuals and subtle optional Web Audio feedback",
        ],
        imageKey: "instances",
        artKey: "appearance",
      },
      {
        id: "never-break",
        eyebrow: "03 · Built Not to Break",
        title: "Install mods boldly. Undo mistakes in one click.",
        description:
          "Adding or updating mods should never ruin a 200-hour world. Lumi runs a fast local preflight check before launching, snapshots every content change for instant rollback, and backs up your worlds automatically.",
        bullets: [
          "Local preflight catches missing dependencies, duplicate mod IDs, wrong loaders, and incompatible Java before launch",
          "Full change history with one-click undo, version locking, and mod version switching",
          "Automatic world backups with custom backup directory support and safe migration",
        ],
        imageKey: "detail",
        artKey: "rollback",
      },
      {
        id: "discover",
        eyebrow: "04 · Modrinth & CurseForge Unified",
        title: "Browse everything in one place, respecting creators",
        description:
          "Search, install, and update mods, modpacks (.mrpack & CurseForge), shaders, resource packs, worlds, and servers side by side with automatic dependency resolution.",
        bullets: [
          "Unified discovery across Modrinth and CurseForge with automatic dependency preview",
          "CurseForge restricted files open on the official creator page and match by SHA-256 — never bypassing creator distribution rules",
          "Drag-and-drop local .jar, .zip, or .mrpack files straight into the window",
        ],
        imageKey: "discover",
      },
      {
        id: "instance-sync",
        eyebrow: "05 · Local Cross-Instance Sync",
        title: "Set your keybinds once. Keep them everywhere.",
        description:
          "Stop reconfiguring FOV, sprint key, sound volume, and server addresses every time you start a new modpack. Lumi syncs 6 asset types strictly on your own disk — zero cloud servers, zero data leaving your PC.",
        bullets: [
          "Visual 9-category options.txt editor with direct keyboard/mouse capture",
          "Lossless NBT server list merging plus hard-linked shared resource packs & shaders",
          "Sync command history & creative hotbars with automatic first-time backup and per-instance exclusions",
        ],
        imageKey: "sync",
      },
      {
        id: "fast-clean",
        eyebrow: "06 · Native Rust Core & Zero Telemetry",
        title: "Self-developed Rust engine, strictly local-first",
        description:
          "Built from scratch in Rust with Tauri 2 — a compact native app with no ad banners, no tracking beacons, and no dependency on third-party metadata servers.",
        bullets: [
          "Concurrent resumable downloads with cryptographic hash verification and optional DoH / HTTP·SOCKS5 proxy",
          "Auto-detects installed Java or downloads official runtimes with smart memory allocation guidance",
          "Storage analyzer, unused version cleaner, and one-click preference export (credentials stripped)",
        ],
        imageKey: "architecture",
        artKey: "homeDay",
      },
    ],
    migrationEyebrow: "Effortless Migration",
    migrationTitle: "Bring your existing worlds with you",
    migrationSubtitle:
      "Keep using what you already have. Lumi supports both read-only directory linking and clean one-click imports.",
    migrationLinkTitle: "Link in-place (Read-only)",
    migrationLinkDesc:
      "Attach existing .minecraft directories directly — zero copying, zero moving, and removing a link only removes Lumi's reference.",
    migrationLinkList: ["Official Minecraft Launcher", "PCL / PCL2", "HMCL"],
    migrationImportTitle: "Import clean isolated copies",
    migrationImportDesc:
      "Copy instances, mods, configs, and saves into Lumi's modern instances/<name>/ layout while leaving your old launcher untouched.",
    migrationImportList: ["Prism Launcher / MultiMC", "Modrinth App", "CurseForge", "ATLauncher"],
    migrationGuarantee:
      "Guarantee: Linking is strictly read-only. Lumi never deletes or alters files in your original launcher directories.",
    securityEyebrow: "Security & Architecture",
    securityTitle: "Auditable open source down to the process pipe",
    securityItems: [
      {
        title: "Tauri 2 + Rust + React 19",
        desc: "Strict typed IPC commands with zero direct filesystem or shell access exposed to the WebView frontend.",
      },
      {
        title: "Windows Credential Manager",
        desc: "OAuth 2.0 PKCE refresh tokens are stored per account in the OS vault — never in plaintext JSON files.",
      },
      {
        title: "Java stdin Session Pipe",
        desc: "Game arguments and session tokens pass once via standard input (com.lumilauncher.bootstrap.SessionPipe), so --accessToken never appears on process command lines.",
      },
      {
        title: "Zero Telemetry & Auto-Redaction",
        desc: "No analytics or crash beacons. Local logs and optional manual mclo.gs uploads scrub secrets to <redacted>.",
      },
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Straight answers before you download.",
    faqs: [
      {
        q: "Does Lumi require an official Microsoft Minecraft: Java Edition account?",
        a: "Yes. Lumi only signs in via official Microsoft OAuth 2.0 + PKCE and verifies legitimate Minecraft: Java Edition ownership before launching. Offline usernames, third-party skin/auth servers, and authlib injectors are intentionally not supported.",
      },
      {
        q: "Is Lumi available on macOS or Linux?",
        a: "Lumi currently supports Windows 10 and Windows 11 (64-bit) only.",
      },
      {
        q: "Will Lumi modify or delete my existing .minecraft folder?",
        a: "No. Linking an official, PCL, or HMCL .minecraft folder is strictly read-only, and importing from Prism, Modrinth App, CurseForge, or ATLauncher makes a separate copy. Uninstalling Lumi also keeps your game directory intact by default.",
      },
      {
        q: "Why does Windows show 'Windows protected your PC' (SmartScreen)?",
        a: "Lumi's Windows installer is not code-signed yet (like most community open-source launchers). Click 'More info' → 'Run anyway', and always verify the SHA-256 hash against SHA256SUMS.txt on our Download page or GitHub Releases. Automatic updates are cryptographically signed.",
      },
      {
        q: "Does Lumi collect telemetry or analytics?",
        a: "No. Lumi has zero telemetry, zero ads, and no backend user database. Neither the launcher nor this website runs third-party ad or behavioral tracking scripts.",
      },
      {
        q: "Can I use Lumi alongside PCL, HMCL, or Prism Launcher?",
        a: "Yes. Lumi uses its own isolated data folder (or a self-contained LumiData folder in Portable mode) and will not interfere with any other launcher installed on your PC.",
      },
      {
        q: "Is Lumi free and open source?",
        a: "Yes — completely free, ad-free, and licensed under GPL-3.0-only with Section 7 brand protection terms so players can always distinguish authentic official builds.",
      },
    ],
    communityTitle: "Join the Lumi Community",
    communitySubtitle:
      "Share worlds, report bugs, ask questions, or follow development updates directly.",
    communityItems: [
      {
        name: "Discord",
        desc: "English & Chinese community server, help forum, and showcase",
        key: "discord",
      },
      {
        name: "GitHub Discussions",
        desc: "Feature ideas, Q&A, and open development updates",
        key: "discussions",
      },
      { name: "QQ Group", desc: "Official Chinese players & beta testing group", key: "qqGroup" },
      { name: "QQ Channel", desc: "Release notices and topic channels", key: "qqChannel" },
      {
        name: "Developer on Bilibili",
        desc: "Devlogs, showcases, and video walkthroughs",
        key: "bilibili",
      },
      {
        name: "Support on Afdian",
        desc: "Voluntary community sponsorship — zero paywalled features",
        key: "afdian",
      },
    ],
  },
  download: {
    metaTitle: "Download Lumi Launcher for Windows",
    metaDesc:
      "Download the official Windows Installer or Portable edition of Lumi Launcher with verified SHA-256 checksums.",
    title: "Download Lumi Launcher",
    subtitle: "Official Windows 10 / 11 (x64) builds verified directly against GitHub Releases.",
    publishedLabel: "Published",
    prereviewNoticeTitle: "Current release is a Pre-review Build",
    prereviewNoticeBody:
      "Microsoft sign-in is intentionally disabled in this pre-review build while Mojang reviews Lumi's AppID. You can still explore the interface, manage instances and saves, browse Modrinth/CurseForge, and inspect settings. Full playable builds will release as soon as approval lands.",
    installerTitle: "Windows Installer",
    installerBadge: "Recommended · Auto-updates",
    installerDesc:
      "Installs per-user with Start Menu shortcuts, .mrpack file association, and signed automatic updates.",
    portableTitle: "Portable Archive",
    portableBadge: "Unzip & run",
    portableDesc:
      "Extract to any writable folder and run Lumi.exe. Stores settings and default game data beside it in LumiData/. Manual updates.",
    btnPrimarySite: "Direct Download",
    btnPrimaryGithub: "Download from GitHub",
    btnFallbackGithub: "Mirror fallback: Download from GitHub Releases",
    shareHint:
      "Sharing with friends? Link this download page rather than the direct file URL — direct links update on every release.",
    shaLabel: "SHA-256",
    copyBtn: "Copy",
    copiedBtn: "Copied",
    verifyTitle: "Verify your download",
    verifyDesc:
      "Run the PowerShell command below and confirm the hash matches the SHA-256 above or SHA256SUMS.txt.",
    checksumsLink: "View SHA256SUMS.txt",
    smartScreenTitle: "Seeing “Windows protected your PC”?",
    smartScreenLead: "Two clicks to proceed safely after checking SHA-256:",
    smartScreenStep1: "1. Click “More info” under the warning paragraph.",
    smartScreenStep2: "2. Confirm the filename matches and click “Run anyway”.",
    smartScreenWhyTitle: "Why does this warning appear?",
    smartScreenWhyBody:
      "Lumi does not currently carry a commercial Windows code-signing certificate — the same as most community open-source launchers. Downloading from this official site or GitHub Releases and verifying SHA-256 confirms the file is untouched by third parties. Installed builds still verify cryptographic signatures on every automatic update.",
    smartScreenFalsePositive: "Hit an antivirus false positive? Let us know on GitHub Issues.",
    requirementsTitle: "System Requirements",
    requirements: [
      "Windows 10 or Windows 11 (64-bit / x64)",
      "Microsoft Edge WebView2 Runtime (pre-installed on Windows 11 and updated Windows 10)",
      "A legitimate Microsoft account owning Minecraft: Java Edition",
      "No pre-installed Java required — Lumi detects existing runtimes or downloads official Mojang Java automatically",
    ],
    olderTitle: "Looking for older versions?",
    olderDesc:
      "Every historical release, source archive, and checksum file is archived permanently on GitHub.",
    olderBtn: "Browse all GitHub Releases",
  },
  changelog: {
    metaTitle: "Changelog — Lumi Launcher",
    metaDesc:
      "Release history and notes automatically synchronized from Lumi Launcher GitHub Releases.",
    title: "Changelog",
    subtitle:
      "Automatically generated from official GitHub Releases — every version has a permanent anchor link.",
    rssLabel: "Subscribe via RSS",
    viewOnGithub: "View on GitHub",
    downloadThis: "Download assets",
    assetsHeading: "Release Files",
    emptyNotice: "No release notes provided for this build.",
  },
  privacy: {
    metaTitle: "Privacy & Security — Lumi Launcher",
    metaDesc:
      "Strict local-first privacy policy and security architecture for Lumi Launcher: zero telemetry, OAuth 2.0 PKCE, Windows Credential Manager, and stdin session pipe.",
    title: "Privacy & Security",
    subtitle:
      "Strictly aligned with PRIVACY.md and SECURITY.md in the main repository. Zero telemetry, zero user database, zero ads.",
    sourceNote: "Canonical source documents in the public repository:",
    viewPrivacyMd: "PRIVACY.md on GitHub",
    viewSecurityMd: "SECURITY.md on GitHub",
  },
  press: {
    metaTitle: "Media & Press Kit — Lumi Launcher",
    metaDesc:
      "Official summary, screenshots, brand assets, and FAQ for creators and reviewers covering Lumi Launcher.",
    title: "Media & Creator Press Kit",
    subtitle:
      "Unlisted resource page for video creators, streamers, and reviewers. Feel free to use these screenshots and facts in reviews or showcases.",
    blurbTitle: "100-Word Introduction",
    blurbText:
      "Lumi Launcher is an independent, free, open-source (GPL-3.0) Minecraft: Java Edition launcher for Windows built with Tauri 2, Rust, and React 19. Designed around 'open and play', Lumi launches straight into your latest world or server with adaptive instance colors, pure-2D vector visuals, local preflight checks, one-click mod rollback, unified Modrinth & CurseForge discovery (respecting creator distribution rules), and zero-cloud local cross-instance sync. It supports official Microsoft accounts only and collects zero telemetry.",
    factsTitle: "Quick Facts",
    facts: [
      { label: "Platform", value: "Windows 10 / 11 (x64)" },
      {
        label: "Account Support",
        value: "Official Microsoft accounts with Minecraft: Java Edition only",
      },
      { label: "Tech Stack", value: "Tauri 2 + self-developed Rust core + React 19 + TypeScript" },
      { label: "License", value: "GPL-3.0-only (with Section 7 brand protection & TRADEMARK.md)" },
      { label: "Telemetry / Ads", value: "Zero telemetry, zero ads, strictly local-first" },
      { label: "Source Repository", value: "github.com/kokoa-77/LumiLauncher" },
    ],
    assetsTitle: "Full Video & GIF Press Archive",
    assetsDesc:
      "High-bitrate 60fps screen recordings (clean, no music/text) and looping GIFs are hosted on GitHub Releases to keep our website lightweight.",
    assetsBtn: "Open GitHub Releases",
    brandTitle: "Brand Guidelines",
    brandDesc:
      "Reviews, tutorials, videos, and streams may freely use the Lumi name, logo, and screenshots without asking. Please include the unofficial Minecraft disclaimer.",
    brandBtn: "Read TRADEMARK.md",
  },
  footer: {
    mojangEn:
      "NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.",
    licenseLine:
      "Code & visual assets licensed under GPL-3.0-only with Section 7 additional terms. Names and official icons are protected under TRADEMARK.md.",
    linksTitle: "Product",
    communityTitle: "Community",
    legalTitle: "Trust & Legal",
    pressLink: "Press Kit",
    trademarkLink: "Brand Policy",
    securityLink: "Report a Vulnerability",
  },
};

const ZH: Dict = {
  siteName: "Lumi Launcher",
  tagline: "点亮你的世界 · 打开就有游戏可以点",
  nav: {
    download: "下载",
    changelog: "更新日志",
    privacy: "隐私与安全",
    github: "GitHub",
    switchLangLabel: "Switch to English",
    switchLangShort: "EN",
    themeToggle: "切换浅色或深色主题",
    zhBannerText: "检测到简体中文环境，需要切换到中文站吗？",
    zhBannerAction: "切换到简体中文",
    zhBannerClose: "关闭提示",
  },
  releaseKind: {
    prereview: "预审构建",
    beta: "公开测试版",
    stable: "正式版",
  },
  home: {
    metaTitle: "Lumi 微光启动器 — 独立、轻快、开源的 Windows Minecraft Java 版启动器",
    metaDesc:
      "独立、轻快、零遥测的 Windows Minecraft Java 版开源启动器。基于 Tauri 2 + Rust 自研核心 + React 19，打开就有游戏可以点。",
    heroBadge: "Windows 10 / 11 · GPL-3.0 开源免费",
    heroHeadline: "点亮你的世界\n打开就有游戏可以点",
    heroSubtitle:
      "一款独立、轻快、克制的 Windows Minecraft Java 版启动器。基于 Rust 与 Tauri 2 自研核心，瞬开直达你的世界、随实例自适应变色、改动一键回滚，且坚持零遥测。",
    ctaDownload: "下载 Windows 版",
    ctaGitHub: "查看 GitHub 源码",
    heroNotePrereview:
      "当前为 Mojang AppID 审核预审包：Microsoft 正版登录入口暂未开放，仍可体验界面、实例与资源发现。",
    heroNoteBeta:
      "公开测试版 · 适用于 Windows 10/11（64 位），需拥有 Minecraft Java 版的 Microsoft 正版账户。",
    heroNoteStable:
      "开源免费 · 适用于 Windows 10/11（64 位），需拥有 Minecraft Java 版的 Microsoft 正版账户。",
    previewTitle: "微光实机预览：一换世界，整套界面跟着变色",
    previewSubtitle:
      "点击下方三个场景胶囊，亲自感受 Lumi 的自适应色板——页面微光与强调色会随当前世界或实例柔和切换。",
    previewColorHint: "当前正在实时驱动界面主色",
    showcases: [
      {
        id: "home-light",
        label: "浅色微光首页",
        labelDark: "深色世界首页",
        caption:
          "双击打开即见你上次游玩的浅色通透世界画布，点一下「继续」就能直接进入单人世界或常用多人服。",
        captionDark: "深夜打开自动融入静谧夜空蓝世界画布，清晰柔和不刺眼，点一下「继续」直达世界。",
        hue: 245,
        lightL: "54.5%",
        lightC: 0.142,
        darkL: "76%",
        darkC: 0.132,
      },
      {
        id: "instances",
        label: "浅色实例库",
        labelDark: "深色实例库",
        caption:
          "采用国际主流 instances/<实例名>/ 隔离目录，支持置顶、分组，也可在「设置 → 游戏」原地只读关联已有 PCL / HMCL 目录。",
        captionDark: "夜空下的独立实例卡片库，置顶常用整合包与分组一览无余，柔雾粉强调色轻盈醒目。",
        hue: 350,
        lightL: "58%",
        lightC: 0.148,
        darkL: "78%",
        darkC: 0.135,
      },
      {
        id: "sync",
        label: "本机跨实例同步",
        labelDark: "本机跨实例同步",
        caption:
          "纯本机同步游戏设置、多人服务器、通用资源包、光影、命令记录与快捷栏——零云端、零账号绑定。",
        captionDark: "深色模式下同样清晰直观，纯本机同步 6 类游戏资产——零云端、零账号绑定。",
        hue: 282,
        lightL: "54%",
        lightC: 0.15,
        darkL: "77%",
        darkC: 0.138,
      },
      {
        id: "home-dark",
        label: "暗夜落日模式",
        labelDark: "暗夜落日模式",
        caption: "深夜游玩自动切换静谧夜空深色画布，柔和不刺眼，同时随世界主色点亮温润落日金按钮。",
        captionDark: "静谧夜空搭配温润落日金主色，熬夜盖房子也不刺眼。",
        hue: 52,
        lightL: "52%",
        lightC: 0.135,
        darkL: "78%",
        darkC: 0.132,
      },
    ],
    featuresHeading: "把复杂留给底层，把轻快留给进游戏之前",
    featuresSubheading: "每一项设计都围绕同一个问题取舍：它让你进世界更快、更安心，还是更折腾？",
    features: [
      {
        id: "direct-world",
        eyebrow: "01 · 直达你的世界与多人服",
        title: "从双击图标到站在世界里，点一下就够",
        description:
          "打开 Lumi，映入眼帘的是你最近游玩的世界或常用服务器，而不是密密麻麻的按钮和广告。自动截取的游戏封面会智能去掉准星与快捷栏，点一下右下角微光按钮即可 Quick Play 直连。",
        bullets: [
          "支持单人世界与常用多人服一键直达，实时展示在线人数与延迟",
          "每个世界保留最近 5 张自动封面，可随时挑选并锁定你最喜欢的一张",
          "支持游戏启动后释放界面到托盘，老电脑玩大型整合包更省内存",
        ],
        imageKey: "home",
      },
      {
        id: "adaptive-aesthetics",
        eyebrow: "02 · 随实例变色与微光视觉",
        title: "每个世界，都有属于自己的光线与配色",
        description:
          "基于 OKLCH 对比度模型，Lumi 会为每个世界和整合包算出柔和耐看的专属主色。支持晴空白天与夜空深色、Windows 11 原生云母（Mica）质感、纯 2D 柔光矢量视觉，以及专为老电脑准备的流畅模式。",
        bullets: [
          "切换实例时整套界面强调色与光晕平滑过渡，细节克制不刺眼",
          "原创纯 2D 柔光矢量视觉与可选轻柔 Web Audio 交互音效",
          "精美模式做足质感，老电脑一键切流畅模式保持顺滑",
        ],
        imageKey: "instances",
        artKey: "appearance",
      },
      {
        id: "never-break",
        eyebrow: "03 · 永不玩坏",
        title: "放心折腾模组，装坏了也能一键回到上一步",
        description:
          "进游戏前再也不用提心吊胆。Lumi 内置本地启动前预检、每次内容改动自动快照与一键回滚，并支持世界自动备份与自定义备份盘。",
        bullets: [
          "启动前本地预检：缺前置、重复 modId、错加载器、Java 版本不匹配都会在开游戏前拦下并给中文原因",
          "完整改动历史支持一键撤销回滚，单个模组可锁定版本或自由升降级",
          "支持世界自动备份与外置大硬盘备份目录安全迁移",
        ],
        imageKey: "detail",
        artKey: "rollback",
      },
      {
        id: "discover",
        eyebrow: "04 · 内置 Modrinth & CurseForge",
        title: "双平台一站搜装，同时尊重模组作者",
        description:
          "在同一界面流畅搜索、安装与更新模组、整合包（.mrpack / CurseForge）、光影、材质包、地图与服务器，自动预览并补齐前置依赖。",
        bullets: [
          "Modrinth 与 CurseForge 统一检索，支持中英文名称匹配与依赖预览",
          "遇到 CurseForge 作者禁止第三方下载的文件，引导前往官方页下载并按哈希自动认领，绝不绕过作者收益规则",
          "支持直接把本地 .jar / .zip / .mrpack 拖进窗口安装",
        ],
        imageKey: "discover",
      },
      {
        id: "instance-sync",
        eyebrow: "05 · 纯本机跨实例同步",
        title: "改一次键位和音量，所有实例都顺手",
        description:
          "每次换新整合包都要重新调疾跑键、视角、音效和重输服务器地址？Lumi 在你本机磁盘上无损同步 6 类高频资产——零云端上传、不绑账号，也不互相污染存档。",
        bullets: [
          "内置 9 大分类原版 options.txt 可视化编辑器，支持键盘与鼠标按键直录",
          "复用 NBT 引擎无损合并多人服务器列表，通用资源包与光影支持硬链接省空间",
          "同步命令记录与创造模式物品栏，首次开启自动备份，并支持单实例按项排除",
        ],
        imageKey: "sync",
      },
      {
        id: "fast-clean",
        eyebrow: "06 · 自研 Rust 引擎与零遥测",
        title: "轻快透明，不依赖第三方元数据服务器",
        description:
          "底层核心完全用 Rust 自研并配合 Tauri 2 构建，直连官方源并可选 BMCLAPI / MCIM 社区加速镜像（账号认证始终直连微软与 Mojang 官方接口）。",
        bullets: [
          "并发断点续传、哈希校验、默认 DoH 解析，支持系统 / 直连 / HTTP·SOCKS5 代理与 6 端点一键网络诊断",
          "自动扫描电脑上的 Java 或一键安装 Mojang 官方 Java，附带内存分配建议",
          "内置存储空间分析、引用感知的闲置游戏版本清理与偏好设置脱敏导入导出",
        ],
        imageKey: "architecture",
        artKey: "homeDay",
      },
    ],
    migrationEyebrow: "搬家很简单",
    migrationTitle: "直接接上你原来的游戏目录和世界",
    migrationSubtitle:
      "不用重下游戏，也不用担心弄乱旧启动器。Lumi 同时支持原地只读关联与干净导入。",
    migrationLinkTitle: "原地关联（只读，不搬文件）",
    migrationLinkDesc:
      "在「设置 → 游戏」直接关联已有的 .minecraft 目录即可游玩；以后移除关联只删除 Lumi 里的记录，绝不动你原目录里的任何文件。",
    migrationLinkList: ["Minecraft 官方启动器", "PCL / PCL2", "HMCL"],
    migrationImportTitle: "一键导入独立实例",
    migrationImportDesc:
      "在「新建实例 → 从其他启动器导入」将其他主流启动器的实例、模组、配置与存档完整复制到 Lumi 的独立实例目录中，原启动器完全不受影响。",
    migrationImportList: ["Prism Launcher / MultiMC", "Modrinth App", "CurseForge", "ATLauncher"],
    migrationGuarantee:
      "承诺：原地关联为只读关联，绝不删改原目录里的文件；导入采用独立复制，双持零冲突。",
    securityEyebrow: "安全与技术底座",
    securityTitle: "凭据隔离到进程管道，每一行代码都经得起审阅",
    securityItems: [
      {
        title: "Tauri 2 + Rust + React 19",
        desc: "前端零直接文件系统或命令行权限，所有系统操作均通过强类型 Rust 命令受控执行。",
      },
      {
        title: "Windows 凭据管理器隔离",
        desc: "OAuth 2.0 PKCE 刷新令牌按账号保存在系统凭据库，绝不以明文 JSON 落地硬盘。",
      },
      {
        title: "Java stdin 管道零命令行泄密",
        desc: "所有游戏参数与会话令牌均经由标准输入管道一次性交付给 com.lumilauncher.bootstrap.SessionPipe，进程命令行中完全不含 --accessToken。",
      },
      {
        title: "零遥测与全链路自动脱敏",
        desc: "无任何统计上报；本地日志、诊断包与二次确认手动上传的 mclo.gs 均自动脱敏为 <redacted>。",
      },
    ],
    faqTitle: "常见问题",
    faqSubtitle: "下载之前，把大家最关心的 7 件事一次说清楚。",
    faqs: [
      {
        q: "只支持正版 Microsoft 账户吗？",
        a: "是的。这是 Lumi 明确的产品取舍：只通过系统浏览器走 Microsoft 官方 OAuth 2.0 + PKCE 登录并核验 Java 版游玩权，不提供离线用户名、第三方皮肤站或认证注入器。",
      },
      {
        q: "Mac 或 Linux 能用吗？",
        a: "目前只支持 Windows 10 和 Windows 11（64 位）。",
      },
      {
        q: "会不会动我原来的 .minecraft、PCL 或 HMCL 目录？",
        a: "不会。在「设置 → 游戏」关联已有目录是只读关联，移除关联也只删除 Lumi 这边的索引，绝不删改原目录里的任何文件；从「新建实例 → 从其他启动器导入」导入 Prism / Modrinth App / CurseForge 则是独立复制。卸载 Lumi 默认也会保留你的游戏目录。",
      },
      {
        q: "下载打开时 Windows 提示「已保护你的电脑」（SmartScreen）怎么办？",
        a: "因为 Lumi 目前没有商业代码签名证书（和大多数社区开源启动器一样），首次运行可能触发 SmartScreen 提醒。请确保从本官网或 GitHub Releases 下载并核对 SHA-256 校验和，然后点击「更多信息 → 仍要运行」即可。安装版的自动更新包均带有密码学签名校验。",
      },
      {
        q: "Lumi 收不收集任何数据？",
        a: "不收集。Lumi 零遥测、零广告、没有开发者后台数据库；本官网也不挂载任何第三方广告或跨站追踪脚本。",
      },
      {
        q: "能和 PCL、HMCL 或 Prism 一起装在电脑上吗？",
        a: "完全可以。Lumi 使用独立的应用数据目录（便携版更是全部收在旁边的 LumiData 文件夹内），与你电脑上的其他启动器互不干扰。",
      },
      {
        q: "免费吗？开源吗？",
        a: "完全免费、无广告，按 GPL-3.0-only 协议在 GitHub 公开全部源代码（附第 7 条品牌保护条款，防止冒名与夹带私货的改包）。",
      },
    ],
    communityTitle: "加入 Lumi 社区",
    communitySubtitle: "反馈问题、分享你的世界截图、参与内测或关注开发进度。",
    communityItems: [
      { name: "QQ 官方交流 1 群", desc: "国内玩家交流、问题反馈与内测通知", key: "qqGroup" },
      { name: "QQ 频道", desc: "版本发布公告与分区讨论", key: "qqChannel" },
      { name: "开发者 B 站", desc: "开发日志、实机演示与设计幕后", key: "bilibili" },
      { name: "爱发电", desc: "纯自愿社区赞助，绝不设功能门槛或抢先版", key: "afdian" },
      { name: "Discord", desc: "中英双语社区、求助论坛与作品展示", key: "discord" },
      { name: "GitHub Discussions", desc: "功能建议、问答与开源协作", key: "discussions" },
    ],
  },
  download: {
    metaTitle: "下载 Lumi 微光启动器（Windows 版）",
    metaDesc:
      "下载 Lumi 微光启动器官方 Windows 安装版与便携版，附带 SHA-256 校验和与 SmartScreen 操作图解。",
    title: "下载 Lumi Launcher",
    subtitle: "官方 Windows 10 / 11（64 位）发行包，每个文件在构建上线前均逐项核对 SHA-256。",
    publishedLabel: "发布日期",
    prereviewNoticeTitle: "当前版本为 Mojang 审核预审构建",
    prereviewNoticeBody:
      "在 Mojang 通过 Lumi 的 AppID 白名单审核前，本预审构建默认关闭 Microsoft 登录入口。你仍可以抢先体验界面、管理实例与存档、浏览 Modrinth / CurseForge 并检查设置；审核通过后将第一时间发布可正常登录游玩的正式测试版。",
    installerTitle: "安装版（推荐）",
    installerBadge: "推荐 · 带签名自动更新",
    installerDesc:
      "为当前用户安装，自动创建开始菜单快捷方式、关联 .mrpack 整合包，并支持带密码学签名的自动更新。",
    portableTitle: "便携版（解压即用）",
    portableBadge: "绿色免安装",
    portableDesc:
      "解压到任意可写文件夹后运行 Lumi.exe；设置与默认游戏目录全部保存在旁边的 LumiData 文件夹内，需手动更新。",
    btnPrimarySite: "从本站直接下载",
    btnPrimaryGithub: "从 GitHub 下载",
    btnFallbackGithub: "备用源：从 GitHub Releases 下载",
    shareHint:
      "转发给朋友请分享本下载页链接，不要直接转发安装包直链（本站只保留最新版，发新版后旧文件直链会失效）。",
    shaLabel: "SHA-256",
    copyBtn: "复制",
    copiedBtn: "已复制",
    verifyTitle: "怎么核对文件没有被篡改？",
    verifyDesc:
      "下载完成后在 PowerShell 运行下面一行命令，确认输出结果与上方 SHA-256 或 SHA256SUMS.txt 中对应那一行完全一致：",
    checksumsLink: "查看完整 SHA256SUMS.txt",
    smartScreenTitle: "打开时提示「Windows 已保护你的电脑」怎么办？",
    smartScreenLead: "核对完 SHA-256 后，按下面两步即可正常运行：",
    smartScreenStep1: "1. 点击蓝色提醒窗口正文下方的「更多信息」。",
    smartScreenStep2: "2. 确认文件名一致后，点击右下角出现的「仍要运行」。",
    smartScreenWhyTitle: "为什么会弹出这个提醒？",
    smartScreenWhyBody:
      "Lumi 目前没有购买商业 Windows 代码签名证书，这和大多数社区开源启动器是一样的。只要从本官网或 GitHub Releases 下载并核对 SHA-256 一致，文件就与公开构建流水线产出的逐字节相同，可以放心使用；安装版的自动更新包另有独立签名校验。",
    smartScreenFalsePositive: "如果遇到杀毒软件误报，欢迎到 GitHub Issues 告诉我们。",
    requirementsTitle: "系统要求",
    requirements: [
      "Windows 10 或 Windows 11（64 位 / x64）",
      "Microsoft Edge WebView2 运行时（Windows 11 与保持更新的 Windows 10 已自带）",
      "合法拥有 Minecraft Java 版游玩权的 Microsoft 正版账户",
      "无需提前手动装 Java：Lumi 会自动发现本机 Java 或一键安装 Mojang 官方 Java 运行时",
    ],
    olderTitle: "需要更早的历史版本？",
    olderDesc: "所有历史发行包、源代码归档与校验清单均永久保留在 GitHub Releases。",
    olderBtn: "前往 GitHub 查看全部版本",
  },
  changelog: {
    metaTitle: "更新日志 — Lumi 微光启动器",
    metaDesc: "从 LumiLauncher 官方 GitHub Releases 自动同步的完整版本更新记录与 RSS 订阅。",
    title: "更新日志",
    subtitle:
      "构建时直接从主仓 GitHub Releases 自动生成，每个版本都有固定锚点链接，支持 RSS 订阅。",
    rssLabel: "订阅 RSS",
    viewOnGithub: "在 GitHub 查看",
    downloadThis: "前往下载",
    assetsHeading: "该版本文件",
    emptyNotice: "该版本暂无附加更新说明。",
  },
  privacy: {
    metaTitle: "隐私与安全 — Lumi 微光启动器",
    metaDesc:
      "Lumi 微光启动器的隐私政策与安全架构说明：零遥测、OAuth 2.0 PKCE、Windows 凭据管理器与 Java stdin 管道隔离。",
    title: "隐私与安全",
    subtitle:
      "与主仓 PRIVACY.md、SECURITY.md 严格同源：零遥测、零用户后台、零广告，凭据隔离到系统凭据库与进程管道。",
    sourceNote: "对应主仓公开原文：",
    viewPrivacyMd: "查看主仓 PRIVACY.md",
    viewSecurityMd: "查看主仓 SECURITY.md",
  },
  press: {
    metaTitle: "媒体与创作者素材包 — Lumi 微光启动器",
    metaDesc: "供 UP 主、评测作者与社区创作者使用的 Lumi 微光启动器官方简介、参数与素材入口。",
    title: "媒体与创作者素材包",
    subtitle:
      "本页不进入主导航，供 B 站 UP 主、评测作者和社区创作者取用。评测、介绍或演示视频可直接使用 Lumi 名称、图标与实机截图，无需额外申请授权。",
    blurbTitle: "100 字标准简介（可直接复制）",
    blurbText:
      "Lumi Launcher 是一款独立、免费、开源（GPL-3.0）的 Windows Minecraft Java 版启动器，基于 Tauri 2、自研 Rust 核心与 React 19 构建。围绕「打开就有游戏可以点」打磨：支持直达单人世界与多人服、随实例自适应变色、全套原创纯 2D 柔光矢量视觉、启动前本地预检与模组改动一键回滚、内置 Modrinth & CurseForge（尊重作者补件流程），以及零云端本机跨实例同步。仅支持正版 Microsoft 账户，零遥测、零广告。",
    factsTitle: "核心参数速查",
    facts: [
      { label: "支持平台", value: "Windows 10 / 11（64 位）" },
      { label: "账号体系", value: "仅支持拥有 Minecraft Java 版的 Microsoft 正版账户" },
      { label: "技术底座", value: "Tauri 2 + 自研 Rust 核心 + React 19 + TypeScript" },
      { label: "开源许可", value: "GPL-3.0-only（附第 7 条品牌保护条款与 TRADEMARK.md）" },
      { label: "遥测与广告", value: "零遥测、零广告、纯本机优先" },
      { label: "开源仓库", value: "github.com/kokoa-77/LumiLauncher" },
    ],
    assetsTitle: "完整 60fps 录屏与动图素材压缩包",
    assetsDesc:
      "无配乐无字幕的 60 秒 1080p 60fps 实机录屏、5 张核心卖点动图与高清原图打包体积较大，单独托管在 GitHub Releases 供自由下载剪辑。",
    assetsBtn: "前往 GitHub Releases 获取",
    brandTitle: "使用与声明提醒",
    brandDesc:
      "欢迎在视频、直播与文章中自由使用 Lumi 实机画面和官方图标；请勿暗示与 Mojang / Microsoft 存在官方合作关系，并在简介中保留非官方声明。",
    brandBtn: "阅读 TRADEMARK.md",
  },
  footer: {
    mojangEn:
      "NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.",
    mojangZh:
      "非 Minecraft 官方产品。未经 Mojang 或 Microsoft 批准，也不与 Mojang 或 Microsoft 关联。",
    licenseLine:
      "源代码与视觉资源按 GPL-3.0-only（附第 7 条附加条款）发布；项目名称与官方图标受 TRADEMARK.md 保护。",
    linksTitle: "产品",
    communityTitle: "社区",
    legalTitle: "信任与合规",
    pressLink: "创作者素材包",
    trademarkLink: "品牌与名称政策",
    securityLink: "私密安全报告",
  },
};

export function getDict(locale: Locale): Dict {
  return locale === "zh" ? ZH : EN;
}

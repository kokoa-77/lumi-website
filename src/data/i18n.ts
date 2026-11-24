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
      "An independent, lightweight, open-source Minecraft: Java Edition launcher for Windows with no telemetry, built with Tauri 2, Rust, and React 19.",
    heroBadge: "Windows 10 / 11 · Open Source (GPL-3.0)",
    heroHeadline: "Open the launcher.\nJump straight into your world.",
    heroSubtitle:
      "An independent, lightweight Minecraft: Java Edition launcher for Windows, built on a self-developed Rust core and Tauri 2. It opens straight to your last world, changes its accent color with each instance, lets you undo mod changes in one click, and collects no telemetry.",
    ctaDownload: "Download for Windows",
    ctaGitHub: "Source on GitHub",
    heroNotePrereview:
      "Pre-review build for Mojang AppID verification (Client ID 732fc771-cf09-4ec5-b899-ee92fd012d57) — opens official Microsoft OAuth in your browser; full gameplay unlocks once approved.",
    heroNoteBeta:
      "Public beta for Windows 10/11 (x64). Requires a legitimate Minecraft: Java Edition Microsoft account.",
    heroNoteStable:
      "Free & open source for Windows 10/11 (x64). Requires a legitimate Minecraft: Java Edition Microsoft account.",
    previewTitle: "Light up every world you play",
    previewSubtitle:
      "Pick a scene below and the page switches accent color along with the screenshot. In Lumi, the accent follows your current world or instance.",
    previewColorHint: "Adaptive accent hue active",
    showcases: [
      {
        id: "home-light",
        label: "Light World Home",
        labelDark: "Dark World Home",
        caption: "Opens on the world you played last. Click Continue to jump straight in.",
        captionDark: "The dark theme uses a night-sky palette. Click Continue to jump straight in.",
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
        caption: "Each instance lives in its own folder, with pinning and custom groups.",
        captionDark:
          "The instance library in the dark theme, with pinned instances and groups on one page.",
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
          "Sync keybinds, video settings, server lists, resource packs and shaders between instances on your PC, with no cloud service.",
        captionDark:
          "Sync keybinds, video settings, server lists, resource packs and shaders between instances on your PC, with no cloud service.",
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
        caption: "In the dark theme the accent follows the world cover; here it's a sunset gold.",
        captionDark: "Dark theme with an accent taken from the sunset in the world cover.",
        hue: 52,
        lightL: "52%",
        lightC: 0.135,
        darkL: "78%",
        darkC: 0.132,
      },
    ],
    featuresHeading: "Designed to get you into the game faster",
    featuresSubheading:
      "Every feature is weighed against one question: does it get you into the game faster, or slower?",
    features: [
      {
        id: "direct-world",
        eyebrow: "01 · Straight to Your World",
        title: "One click from desktop to spawn",
        description:
          "Lumi opens on the world or multiplayer server you played last. World covers are captured from the game automatically with the crosshair and hotbar removed, and Quick Play takes you straight in.",
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
        title: "Every world gets its own accent color",
        description:
          "Lumi derives an accent color for each world and modpack from the OKLCH color model while keeping text readable. It supports light and dark themes, the Windows 11 Mica backdrop, original 2D vector illustrations, and a Lite mode for older PCs.",
        bullets: [
          "The accent color transitions smoothly when you switch instances",
          "Windows 11 Mica backdrop, a solid background, or Lite mode",
          "Original 2D vector illustrations and optional interface sounds (off by default)",
        ],
        imageKey: "instances",
        artKey: "appearance",
      },
      {
        id: "never-break",
        eyebrow: "03 · Undo Any Mod Change",
        title: "Roll back a broken modpack in one click",
        description:
          "Lumi checks your mods locally before launch, takes a snapshot every time content changes so you can roll back in one click, and backs up your worlds automatically.",
        bullets: [
          "Before launch, Lumi checks for missing dependencies, duplicate mod IDs, wrong loaders and incompatible Java",
          "Full change history with one-click undo, version locking, and mod version switching",
          "Automatic world backups, with a backup folder you can move to another drive",
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
          "Files whose authors block third-party downloads open on the official CurseForge page and are matched by SHA-256 once downloaded, respecting the author's settings",
          "Drag-and-drop local .jar, .zip, or .mrpack files straight into the window",
        ],
        imageKey: "discover",
      },
      {
        id: "instance-sync",
        eyebrow: "05 · Local Cross-Instance Sync",
        title: "Set your keybinds once. Keep them everywhere.",
        description:
          "No more resetting FOV, sprint key, volume and server addresses every time you start a new modpack. Lumi syncs 6 kinds of content between instances on your own PC, with no cloud service involved.",
        bullets: [
          "Visual 9-category options.txt editor with direct keyboard/mouse capture",
          "Server lists are merged and de-duplicated in NBT format; shared resource packs and shaders use hard links on the same drive",
          "Sync command history & creative hotbars with automatic first-time backup and per-instance exclusions",
        ],
        imageKey: "sync",
      },
      {
        id: "fast-clean",
        eyebrow: "06 · Self-Developed Rust Core",
        title: "Direct official sources, verified end to end",
        description:
          "The core is written in Rust and built with Tauri 2. Every game file, loader, mod, and sign-in request connects directly to official Microsoft, Mojang, Modrinth, and CurseForge endpoints.",
        bullets: [
          "Concurrent resumable downloads with cryptographic hash verification and optional DoH / HTTP·SOCKS5 proxy",
          "Detects installed Java or downloads official runtimes, with memory allocation suggestions",
          "Storage analysis, cleanup of unused game versions, and preference export without account data",
        ],
        imageKey: "architecture",
        artKey: "homeDay",
      },
    ],
    migrationEyebrow: "Migration",
    migrationTitle: "Bring your existing worlds with you",
    migrationSubtitle:
      "No need to download the game again: link your existing folder, or import a copy.",
    migrationLinkTitle: "Link in place (no copying)",
    migrationLinkDesc:
      "Link an existing .minecraft folder in Settings → Game and play from it. Nothing is copied, and removing the link only deletes Lumi's record.",
    migrationLinkList: ["Official Minecraft Launcher", "PCL / PCL2", "HMCL"],
    migrationImportTitle: "Import clean isolated copies",
    migrationImportDesc:
      "Copy instances, mods, configs and saves into Lumi's instances/<name>/ layout. Your old launcher keeps working as before.",
    migrationImportList: ["Prism Launcher / MultiMC", "Modrinth App", "CurseForge", "ATLauncher"],
    migrationGuarantee:
      "Linking copies nothing, and removing a link leaves your original files in place. Importing makes a separate copy, so both launchers keep working.",
    securityEyebrow: "Security & Architecture",
    securityTitle: "Credentials kept separate, source fully open",
    securityItems: [
      {
        title: "Tauri 2 + Rust + React 19",
        desc: "The interface can't read files or run commands directly; every system action goes through typed Rust commands.",
      },
      {
        title: "Windows Credential Manager",
        desc: "Microsoft refresh tokens are stored per account in Windows Credential Manager, not in plain config files.",
      },
      {
        title: "Java stdin Session Pipe",
        desc: "Game arguments and session tokens pass once via standard input (com.lumilauncher.bootstrap.SessionPipe), so --accessToken doesn't show up on the process command line.",
      },
      {
        title: "No Telemetry, Redacted Logs",
        desc: "No analytics or crash reporting. Secrets in local logs, and in logs you choose to upload to mclo.gs, are replaced with <redacted>.",
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
        a: "It won't delete or move anything. Linking an official, PCL or HMCL folder copies nothing, and removing the link only deletes Lumi's record. Importing from Prism, Modrinth App, CurseForge or ATLauncher makes a separate copy. Uninstalling Lumi keeps your game directory by default.",
      },
      {
        q: "Why does Windows show 'Windows protected your PC' (SmartScreen)?",
        a: "Lumi's Windows installer is not code-signed yet (like most community open-source launchers). Click 'More info' → 'Run anyway', and verify the SHA-256 hash against SHA256SUMS.txt on our Download page or GitHub Releases. Automatic updates are cryptographically signed.",
      },
      {
        q: "Does Lumi collect telemetry or analytics?",
        a: "No. Lumi has no telemetry, no ads and no backend user database, and neither the launcher nor this website runs third-party ad or tracking scripts.",
      },
      {
        q: "Can I use Lumi alongside PCL, HMCL, or Prism Launcher?",
        a: "Yes. Lumi uses its own isolated data folder (or a self-contained LumiData folder in Portable mode) so it doesn't affect other launchers on your PC.",
      },
      {
        q: "Is Lumi free and open source?",
        a: "Yes. It's free, has no ads, and is licensed under GPL-3.0-only, with Section 7 brand protection terms so modified builds can't pass themselves off as Lumi.",
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
        desc: "Voluntary sponsorship that doesn't unlock any features",
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
      "This pre-review build includes Lumi's Microsoft Entra public client ID (732fc771-cf09-4ec5-b899-ee92fd012d57) and launches the official Microsoft OAuth 2.0 + PKCE flow in your system browser. Until Mojang adds the AppID to the Minecraft Services allowlist, sign-in stops at the expected 403 gate — you can already explore the interface, manage instances and saves, and browse Modrinth/CurseForge.",
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
      "Lumi does not currently carry a commercial Windows code-signing certificate — the same as most community open-source launchers. Downloading from this official site or GitHub Releases and verifying SHA-256 confirms the file is untouched by third parties. Installed builds also verify signatures on automatic updates.",
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
      "Privacy policy and security design of Lumi Launcher: no telemetry, OAuth 2.0 PKCE sign-in, Windows Credential Manager, and a stdin session pipe.",
    title: "Privacy & Security",
    subtitle:
      "Matches PRIVACY.md and SECURITY.md in the main repository: no telemetry, no user database, no ads.",
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
      "Lumi Launcher is an independent, free, open-source (GPL-3.0) Minecraft: Java Edition launcher for Windows built with Tauri 2, Rust, and React 19. Designed around 'open and play', Lumi launches straight into your latest world or server with adaptive instance colors, original 2D vector illustrations, local preflight checks, one-click mod rollback, unified Modrinth & CurseForge discovery (respecting creator distribution rules), and local cross-instance sync with no cloud service. It supports official Microsoft accounts only and collects no telemetry.",
    factsTitle: "Quick Facts",
    facts: [
      { label: "Platform", value: "Windows 10 / 11 (x64)" },
      {
        label: "Account Support",
        value: "Official Microsoft accounts with Minecraft: Java Edition only",
      },
      { label: "Tech Stack", value: "Tauri 2 + self-developed Rust core + React 19 + TypeScript" },
      { label: "License", value: "GPL-3.0-only (with Section 7 brand protection & TRADEMARK.md)" },
      { label: "Telemetry / Ads", value: "No telemetry, no ads, local-first" },
      { label: "Source Repository", value: "github.com/kokoa-77/LumiLauncher" },
    ],
    assetsTitle: "Video & GIF Archive",
    assetsDesc:
      "Clean 60fps screen recordings and GIFs will be published after Mojang approves Lumi's AppID. Until then, feel free to use the screenshots on this page.",
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
      "独立、轻快、不收集遥测的 Windows Minecraft Java 版开源启动器，基于 Tauri 2、自研 Rust 核心和 React 19。打开就有游戏可以点。",
    heroBadge: "Windows 10 / 11 · GPL-3.0 开源免费",
    heroHeadline: "点亮你的世界\n打开就有游戏可以点",
    heroSubtitle:
      "一款独立、轻快的 Windows Minecraft Java 版启动器，核心用 Rust 自研、基于 Tauri 2 构建。打开就能进入上次的世界，界面随实例换色，模组改坏了能一键撤回，不收集遥测数据。",
    ctaDownload: "下载 Windows 版",
    ctaGitHub: "查看 GitHub 源码",
    heroNotePrereview:
      "当前为 Mojang AppID 审核预审包（客户端 ID 732fc771-cf09-4ec5-b899-ee92fd012d57）：已支持拉起系统浏览器官方 Microsoft 授权，待白名单获批后即可进入游戏。",
    heroNoteBeta:
      "公开测试版 · 适用于 Windows 10/11（64 位），需拥有 Minecraft Java 版的 Microsoft 正版账户。",
    heroNoteStable:
      "开源免费 · 适用于 Windows 10/11（64 位），需拥有 Minecraft Java 版的 Microsoft 正版账户。",
    previewTitle: "微光实机预览：一换世界，整套界面跟着变色",
    previewSubtitle:
      "点下面的场景，页面和截图会一起换成对应的主色。在 Lumi 里，主色会跟着当前的世界或实例变化。",
    previewColorHint: "当前正在实时驱动界面主色",
    showcases: [
      {
        id: "home-light",
        label: "浅色微光首页",
        labelDark: "深色世界首页",
        caption: "打开就是你上次玩的世界，点「继续」直接进入单人世界或常用的多人服务器。",
        captionDark: "深色主题用夜空蓝配色，点「继续」直接进入世界。",
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
          "每个实例单独放在 instances/<实例名>/ 目录里，支持置顶和分组；也可以在「设置 → 游戏」直接关联已有的 PCL / HMCL 目录。",
        captionDark: "深色主题下的实例库，置顶和分组都在一页里。",
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
          "在本机的多个实例之间同步游戏设置、多人服务器、资源包、光影、命令记录和快捷栏，不经过云端，也不需要账号。",
        captionDark: "深色主题下的实例同步设置，6 类内容都只在本机同步。",
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
        caption: "深色主题下，主色跟着世界封面变化，这张图里是落日的金色。",
        captionDark: "深色主题，主色取自世界封面里落日的金色。",
        hue: 52,
        lightL: "52%",
        lightC: 0.135,
        darkL: "78%",
        darkC: 0.132,
      },
    ],
    featuresHeading: "围绕「更快进游戏」设计",
    featuresSubheading: "每个功能先问一句：它让进游戏更快，还是更慢？",
    features: [
      {
        id: "direct-world",
        eyebrow: "01 · 直达你的世界与多人服",
        title: "从双击图标到站在世界里，点一下就够",
        description:
          "打开 Lumi，首页就是你最近玩的世界或常用的服务器。封面从游戏截图自动生成，会去掉准星和快捷栏；点右下角的「继续」，用 Quick Play 直接进入。",
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
        title: "每个世界都有自己的主色",
        description:
          "Lumi 按 OKLCH 色彩模型给每个世界和整合包算出主色，并保证文字的对比度。支持浅色和深色主题、Windows 11 云母（Mica）背景、原创 2D 矢量插画，以及给老电脑用的流畅模式。",
        bullets: [
          "切换实例时，界面主色平滑过渡",
          "原创 2D 矢量插画，以及可选的界面音效（默认关闭）",
          "「精美」模式效果完整，老电脑可以切到「流畅」模式",
        ],
        imageKey: "instances",
        artKey: "appearance",
      },
      {
        id: "never-break",
        eyebrow: "03 · 改坏了能撤回",
        title: "模组装坏了，一键回到上一步",
        description:
          "Lumi 在启动前先在本地检查一遍模组；每次改动内容都会自动记一份快照，可以一键回滚。世界存档支持自动备份，备份目录可以放在别的硬盘上。",
        bullets: [
          "启动前检查缺少前置、modId 重复、加载器不对和 Java 版本不匹配，发现问题会用中文说明原因",
          "改动历史可以一键撤销，单个模组可以锁定版本，也可以换成别的版本",
          "世界自动备份，备份目录可以迁移到别的硬盘",
        ],
        imageKey: "detail",
        artKey: "rollback",
      },
      {
        id: "discover",
        eyebrow: "04 · 内置 Modrinth & CurseForge",
        title: "两个平台一起搜、一起装，也尊重模组作者的设置",
        description:
          "在同一个界面里搜索、安装和更新模组、整合包（.mrpack / CurseForge）、光影、材质包、地图和服务器，前置会自动列出并补齐。",
        bullets: [
          "Modrinth 与 CurseForge 统一检索，支持中英文名称匹配与依赖预览",
          "作者不允许第三方下载的 CurseForge 文件，会引导你去官方页面下载，下载后按哈希自动认领，不绕过作者的设置",
          "支持直接把本地 .jar / .zip / .mrpack 拖进窗口安装",
        ],
        imageKey: "discover",
      },
      {
        id: "instance-sync",
        eyebrow: "05 · 纯本机跨实例同步",
        title: "键位和音量改一次，所有实例都用上",
        description:
          "换新整合包时，不用再重新设疾跑键、视角和音量，也不用重新输服务器地址。Lumi 在本机的实例之间同步 6 类内容，不上传云端，也不需要账号，各实例的存档互不影响。",
        bullets: [
          "options.txt 分 9 类可视化编辑，按键可以直接按下录入",
          "多人服务器列表按 NBT 格式合并去重；共享的资源包和光影在同一块硬盘上用硬链接，不额外占空间",
          "也能同步命令记录和创造模式物品栏；第一次开启会先自动备份，单个实例可以按项排除",
        ],
        imageKey: "sync",
      },
      {
        id: "fast-clean",
        eyebrow: "06 · 自研 Rust 核心",
        title: "全链路直连官方源，逐文件哈希校验",
        description:
          "核心用 Rust 自研，基于 Tauri 2 构建。游戏本体、加载器、模组与账号登录全部直连 Microsoft、Mojang、Modrinth 和 CurseForge 官方接口。",
        bullets: [
          "并发断点续传、哈希校验、默认 DoH 解析，支持系统 / 直连 / HTTP·SOCKS5 代理与官方端点一键网络诊断",
          "自动扫描电脑上的 Java 或一键安装 Mojang 官方 Java，附带内存分配建议",
          "存储空间分析、清理没有实例在用的游戏版本，以及导出 / 导入偏好设置（不含账号信息）",
        ],
        imageKey: "architecture",
        artKey: "homeDay",
      },
    ],
    migrationEyebrow: "搬家很简单",
    migrationTitle: "直接接上你原来的游戏目录和世界",
    migrationSubtitle: "不用重新下载游戏：可以直接关联原来的目录，也可以复制一份导入。",
    migrationLinkTitle: "原地关联（不复制文件）",
    migrationLinkDesc:
      "在「设置 → 游戏」关联已有的 .minecraft 目录就能直接玩，不复制文件；移除关联时只删 Lumi 里的记录，原目录里的文件不动。",
    migrationLinkList: ["Minecraft 官方启动器", "PCL / PCL2", "HMCL"],
    migrationImportTitle: "一键导入独立实例",
    migrationImportDesc:
      "在「新建实例 → 从其他启动器导入」里，把其他启动器的实例、模组、配置和存档复制到 Lumi 的实例目录，原启动器那边照常能用。",
    migrationImportList: ["Prism Launcher / MultiMC", "Modrinth App", "CurseForge", "ATLauncher"],
    migrationGuarantee:
      "关联不复制文件，移除关联时原目录的文件不动；导入是另外复制一份，两边互不影响。",
    securityEyebrow: "安全与技术底座",
    securityTitle: "登录凭据单独保管，源码全部公开",
    securityItems: [
      {
        title: "Tauri 2 + Rust + React 19",
        desc: "界面不能直接读写文件或运行命令，所有系统操作都经过有类型约束的 Rust 命令。",
      },
      {
        title: "Windows 凭据管理器",
        desc: "Microsoft 登录的刷新令牌按账号存进 Windows 凭据管理器，不写进普通的配置文件。",
      },
      {
        title: "通过标准输入传递会话",
        desc: "游戏参数和会话令牌通过标准输入一次性交给 com.lumilauncher.bootstrap.SessionPipe，进程命令行里看不到 --accessToken。",
      },
      {
        title: "不收集遥测，日志自动脱敏",
        desc: "没有统计上报；本地日志、诊断包，以及确认后手动上传到 mclo.gs 的日志，敏感信息都会替换成 <redacted>。",
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
        a: "不会删或搬走里面的文件。在「设置 → 游戏」关联已有目录不会复制文件，移除关联也只删 Lumi 这边的记录；从「新建实例 → 从其他启动器导入」导入 Prism / Modrinth App / CurseForge 是另外复制一份。卸载 Lumi 默认也会保留你的游戏目录。",
      },
      {
        q: "下载打开时 Windows 提示「已保护你的电脑」（SmartScreen）怎么办？",
        a: "因为 Lumi 目前没有商业代码签名证书（和大多数社区开源启动器一样），首次运行可能触发 SmartScreen 提醒。请确保从本官网或 GitHub Releases 下载并核对 SHA-256 校验和，然后点击「更多信息 → 仍要运行」即可。安装版的自动更新会先校验签名。",
      },
      {
        q: "Lumi 收不收集任何数据？",
        a: "不收集。Lumi 没有遥测和广告，也没有开发者的后台数据库；这个官网也没有第三方广告和跨站追踪脚本。",
      },
      {
        q: "能和 PCL、HMCL 或 Prism 一起装在电脑上吗？",
        a: "可以。Lumi 用自己的应用数据目录（便携版全部放在旁边的 LumiData 文件夹里），不影响电脑上的其他启动器。",
      },
      {
        q: "免费吗？开源吗？",
        a: "免费、无广告，按 GPL-3.0-only 协议在 GitHub 公开全部源代码，附带第 7 条品牌保护条款，防止有人冒用 Lumi 的名字发布改过的版本。",
      },
    ],
    communityTitle: "加入 Lumi 社区",
    communitySubtitle: "反馈问题、分享你的世界截图、参与内测或关注开发进度。",
    communityItems: [
      { name: "QQ 官方交流 1 群", desc: "国内玩家交流、问题反馈与内测通知", key: "qqGroup" },
      { name: "QQ 频道", desc: "版本发布公告与分区讨论", key: "qqChannel" },
      { name: "开发者 B 站", desc: "开发日志、实机演示与设计幕后", key: "bilibili" },
      { name: "爱发电", desc: "自愿赞助，不会用来解锁功能或抢先版本", key: "afdian" },
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
      "本预审构建已内置 Lumi 的 Microsoft Entra 公共客户端 ID（732fc771-cf09-4ec5-b899-ee92fd012d57），点击登录可正常拉起系统浏览器的官方 Microsoft OAuth 2.0 + PKCE 授权页；在 Mojang 通过白名单审核前会按预期停在 403 门禁，期间你仍可完整体验界面、管理实例与存档并浏览 Modrinth / CurseForge。",
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
      "Lumi 目前没有购买商业 Windows 代码签名证书，这和大多数社区开源启动器是一样的。从本官网或 GitHub Releases 下载后核对 SHA-256，和校验清单一致就说明文件没有被第三方改动；安装版的自动更新另有签名校验。",
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
      "Lumi 微光启动器的隐私政策与安全设计说明：不收集遥测，使用 OAuth 2.0 PKCE 登录，凭据存在 Windows 凭据管理器，会话经 Java 标准输入传递。",
    title: "隐私与安全",
    subtitle:
      "内容和主仓的 PRIVACY.md、SECURITY.md 一致：不收集遥测，没有用户后台，没有广告；登录凭据存在系统凭据库，通过进程管道交给游戏。",
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
      "Lumi Launcher 是一款独立、免费、开源（GPL-3.0）的 Windows Minecraft Java 版启动器，基于 Tauri 2、自研 Rust 核心与 React 19 构建。围绕「打开就有游戏可以点」打磨：支持直达单人世界与多人服、随实例自适应变色、原创 2D 矢量插画、启动前本地预检与模组改动一键回滚、内置 Modrinth & CurseForge（尊重作者补件流程），以及不经过云端的本机跨实例同步。仅支持正版 Microsoft 账户，不收集遥测，没有广告。",
    factsTitle: "核心参数速查",
    facts: [
      { label: "支持平台", value: "Windows 10 / 11（64 位）" },
      { label: "账号体系", value: "仅支持拥有 Minecraft Java 版的 Microsoft 正版账户" },
      { label: "技术底座", value: "Tauri 2 + 自研 Rust 核心 + React 19 + TypeScript" },
      { label: "开源许可", value: "GPL-3.0-only（附第 7 条品牌保护条款与 TRADEMARK.md）" },
      { label: "遥测与广告", value: "不收集遥测、没有广告、本地优先" },
      { label: "开源仓库", value: "github.com/kokoa-77/LumiLauncher" },
    ],
    assetsTitle: "录屏与动图素材",
    assetsDesc:
      "无配乐、无字幕的 60fps 实机录屏和动图，会在 Mojang 批准 AppID 后发布；在那之前可以先用本页的截图。",
    assetsBtn: "查看 GitHub Releases",
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

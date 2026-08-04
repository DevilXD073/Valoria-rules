from textwrap import dedent
from pathlib import Path

content = dedent(r'''\
export interface Rule {
  title: string;
  content: string[];
}

export interface RuleSection {
  id: string;
  title: string;
  rules: Rule[];
}

export const ruleSections: RuleSection[] = [
  {
    id: "general",
    title: "🌍 General Rules",
    rules: [
      { title: "Respect", content: [
        "Respect all players and staff.",
        "No harassment, racism, sexism, hate speech or discrimination.",
        "Staff decisions are final."
      ]},
      { title: "Behavior", content: [
        "Use common sense at all times.",
        "No doxxing, DDoS threats, blackmail or impersonation.",
        "No advertising without staff permission."
      ]}
    ]
  },
  {
    id: "chat",
    title: "💬 Chat Rules",
    rules: [
      { title: "Chat", content: [
        "No spam, flood, excessive caps or ping spam.",
        "No NSFW or malicious links.",
        "Keep conversations respectful."
      ]}
    ]
  },
  {
    id: "voice",
    title: "🎙 Voice Chat Rules",
    rules: [
      { title: "Voice", content: [
        "No earrape or soundboard abuse.",
        "Recording requires permission unless used as report evidence."
      ]}
    ]
  },
  {
    id: "gameplay",
    title: "⚔ Gameplay Rules",
    rules: [
      { title: "Cheating", content: [
        "No hacked clients, X-Ray, KillAura, Reach, macros, scripts or autoclickers.",
        "No exploit or dupe abuse.",
        "Report bugs immediately."
      ]}
    ]
  },
  {
    id: "pvp",
    title: "🛡 PvP Rules",
    rules: [
      { title: "Combat Logging", content: [
        "Logging out during combat is prohibited."
      ]},
      { title: "Vision Logging", content: [
        "Do not disconnect or escape while a player has visual contact with you."
      ]},
      { title: "Naked Protection", content: [
        "Do not kill completely naked players unless they interfere in an active fight."
      ]},
      { title: "Third Partying", content: [
        "Interfering in fights only to steal loot is discouraged and may be punishable during events."
      ]}
    ]
  },
  {
    id: "limits",
    title: "📦 Item Limits",
    rules: [
      { title: "Limits", content: [
        "Golden Apples: 2 Stacks",
        "Enchanted Golden Apples: 5",
        "XP Bottles: 3 Stacks",
        "Totems: 4",
        "Speed Potions: 3",
        "Fire Resistance Potions: 3",
        "Ender Pearls: 1 Stack"
      ]}
    ]
  },
  {
    id: "cooldowns",
    title: "⏱ Cooldowns",
    rules: [
      { title: "Cooldowns", content: [
        "Mace: 30 Seconds",
        "Mace Ritual: 5 Minutes",
        "Enchanted Golden Apple: 15 Seconds",
        "Ender Pearl: 10 Seconds",
        "Trident: 20 Seconds",
        "Mace Rituals may be removed, changed or added later. Stay tuned in the #rules channel for updates."
      ]}
    ]
  },
  {
    id: "banned-items",
    title: "🚫 Banned Items",
    rules: [
      { title: "Items", content: [
        "TNT Minecarts",
        "End Crystals",
        "Respawn Anchors",
        "Explosive PvP methods where prohibited"
      ]}
    ]
  },
  {
    id: "screenshare",
    title: "📹 Screenshare Policy",
    rules: [
      { title: "Policy", content: [
        "Staff may request a screenshare at any time.",
        "Refusing or disconnecting may result in punishment."
      ]}
    ]
  },
  {
    id: "reports",
    title: "📸 Reporting Players",
    rules: [
      { title: "Reports", content: [
        "Provide evidence whenever possible.",
        "False reports may result in punishment."
      ]}
    ]
  },
  {
    id: "punishments",
    title: "⚖ Punishments",
    rules: [
      { title: "Actions", content: [
        "Warning",
        "Mute",
        "Temporary Ban",
        "Permanent Ban",
        "Severe offences may skip directly to a permanent ban."
      ]}
    ]
  },
  {
    id: "final",
    title: "⭐ Final Rule",
    rules: [
      { title: "Common Sense", content: [
        "If an action gives an unfair advantage or harms the community, staff may punish it even if it is not explicitly listed."
      ]}
    ]
  }
];



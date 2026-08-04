export interface ruleSections {
  id: string;
  title: string;
  icon: string;
  description?: string;
  rules?: string[];
  notice?: string;
  table?: {
    item: string;
    value: string;
  }[];
}

export const rules: ruleSections [] = [
  {
    id: "general",
    title: "General Rules",
    icon: "🌍",
    description: "Basic rules every player must follow.",
    rules: [
      "Respect all players and staff.",
      "Staff decisions are final.",
      "No harassment, hate speech, racism, sexism or discrimination.",
      "No DDoS threats, doxxing, blackmail or impersonation.",
      "No advertising without staff permission.",
      "Use common sense at all times."
    ]
  },

  {
    id: "gameplay",
    title: "Gameplay Rules",
    icon: "⚔️",
    rules: [
      "No hacked clients.",
      "No X-Ray.",
      "No KillAura.",
      "No Reach.",
      "No AutoClickers.",
      "No macros or scripts.",
      "No exploit resource packs.",
      "No bug abuse.",
      "No duping.",
      "No unfair modifications."
    ]
  },

  {
    id: "pvp",
    title: "PvP Rules",
    icon: "🛡️",
    rules: [
      "Combat logging is prohibited.",
      "Vision Logging is not allowed.",
      "Killing completely naked players is prohibited.",
      "Naked players may not interfere in active fights.",
      "Third partying may result in retaliation.",
      "No abusing combat exploits."
    ]
  },

  {
    id: "banned-items",
    title: "Banned Items",
    icon: "🚫",
    rules: [
      "TNT Minecarts",
      "End Crystals",
      "Respawn Anchors",
      "Explosive PvP methods",
      "Combat traps near Spawn"
    ]
  },

  {
    id: "limits",
    title: "Item Limits",
    icon: "📦",
    table: [
      { item: "Golden Apples", value: "2 Stacks" },
      { item: "Enchanted Golden Apples", value: "5" },
      { item: "XP Bottles", value: "3 Stacks" },
      { item: "Totems", value: "4" },
      { item: "Speed Potions", value: "3" },
      { item: "Fire Resistance", value: "3" },
      { item: "Ender Pearls", value: "1 Stack" }
    ]
  },

  {
    id: "cooldowns",
    title: "Combat Cooldowns",
    icon: "⏱️",
    table: [
      { item: "Mace", value: "30 Seconds" },
      { item: "Mace Ritual", value: "5 Minutes*" },
      { item: "Enchanted Golden Apple", value: "15 Seconds" },
      { item: "Ender Pearl", value: "10 Seconds" },
      { item: "Trident", value: "20 Seconds" }
    ],
    notice:
      "⚠️ Mace Rituals are currently under review. They may be removed, changed, or added in future updates. Stay tuned in the #rules channel on Discord for any official announcements."
  },

  {
    id: "screenshare",
    title: "Screenshare Policy",
    icon: "📹",
    rules: [
      "Staff may request a screenshare at any time.",
      "Refusing or disconnecting may result in punishment.",
      "Cooperate with staff throughout the process."
    ]
  },

  {
    id: "reports",
    title: "Reporting Players",
    icon: "📸",
    rules: [
      "Do not accuse players without evidence.",
      "Video recordings are preferred.",
      "Replay footage is accepted if no recording exists.",
      "False reports may result in punishment."
    ]
  },

  {
    id: "discord",
    title: "Discord Rules",
    icon: "💬",
    rules: [
      "No spam or flood.",
      "No NSFW content.",
      "No excessive pinging.",
      "No malicious links.",
      "No offensive usernames or profile pictures.",
      "English is preferred in public channels."
    ]
  },

  {
    id: "voice",
    title: "Voice Chat Rules",
    icon: "🎙️",
    rules: [
      "No earrape.",
      "No mic spam.",
      "No soundboard abuse.",
      "Recording voice chat requires permission unless used as evidence."
    ]
  },

  {
    id: "punishments",
    title: "Punishments",
    icon: "⚖️",
    rules: [
      "Warning",
      "Mute",
      "Temporary Ban",
      "Permanent Ban",
      "Punishments depend on the severity of the offense."
    ]
  },

  {
    id: "final-rule",
    title: "Final Rule",
    icon: "⭐",
    rules: [
      "Use common sense.",
      "If an action gives an unfair advantage or negatively impacts the community, staff may take action even if it isn't explicitly listed in this rulebook."
    ]
  }
];

import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/druid"),
);
const icons = requireAll(require.context("../../assets/icons/druid"));

export const data: TalentData = {
  Balance: {
    name: "Balance",
    background: backgrounds["balance"],
    icon: icons["spell_nature_starfall"],
    talents: {
      
      "Starlight Wrath": {
        name: "Starlight Wrath",
        pos: "a1",
        icon: icons["spell_nature_abolishmagic"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the cast time of your Wrath and Starfire spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      
      "Improved Moonfire": {
        name: "Improved Moonfire",
        pos: "a2",
        icon: icons["spell_nature_starfall"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the critical strike chance of your Moonfire spell by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      
      "Cycle of Life": {
        name: "Cycle of Life",
        pos: "a3",
        icon: icons["cycle_of_life"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. This effect also allows 50% of your Mana Regeneration to continue while casting. Lasts 15 seconds.`,
      },
      
      "Mighty Roots": {
        name: "Mighty Roots",
        pos: "b1",
        icon: icons["spell_nature_thorns"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Improves the duration and damage of your Entangling roots and Thorns spells by ${[
          40,
          70,
          100,
        ]}%.`,
      },
      
      "Natural Weapons": {
        name: "Natural Weapons",
        pos: "b2",
        icon: icons["inv_staff_01"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the damage you deal with all attacks and spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      
      "Unity With Nature": {
        name: "Unity With Nature",
        pos: "b3",
        icon: icons["unity_with_nature"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Barkskin by ${[
          1,
          2,
          3,
        ]}min and reduces damage taken from Arcane and Nature effects by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      
      "Improved Faerie Fire": {
        name: "Improved Faerie Fire",
        pos: "c1",
        icon: icons["spell_nature_faeriefire"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Icreases the range and armor reduction of your Faerie Fire and Faerie Fire (Feral) spells by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      
      "Hurricane": {
        name: "Hurricane",
        pos: "c3",
        icon: icons["spell_nature_cyclone"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Creates a violent storm in the target area causing 27 Nature damage to enemies every 1 sec, slowing their movement speed by 50% and silencing them. Lasts 10 sec.`,
      },
      
      "Starfall": {
        name: "Starfall",
        pos: "c4",
        icon: icons["spell_arcane_starfire"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Cause your Starfire and Moonfire spells to stun the target for 4 sec if the target is withing 8yds. Can occur once per ${[
          60,
          55,
          50,
          45,
          40,
        ]} sec.`,
      },
      
      "Omnipresence": {
        name: "Omnipresence",
        pos: "d1",
        icon: icons["spell_nature_naturetouchgrow"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the range of you offensive Balance spells by ${[
          10,
          20,
        ]}% and reduces the chance enemies will resist them by ${[
          2,
          4,
        ]}%.`,
      },
      
      "Vengeance": {
        name: "Vengenace",
        pos: "d2",
        icon: icons["spell_nature_purge"],
        maxRank: 5,
        reqPoints: 15,
        prereq: "Natural Weapons",
        arrows: [{ dir: "down", from: "b2", to: "d2" }],
        description: talentText`Increases the critical strike damage bonus of your offensive spells by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%. and for your feral abilites by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      
      "Power of Nature": {
        name: "Power of Nature",
        pos: "d3",
        icon: icons["power_of_nature"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the duration of your Barkskin, Nature's Grasp, Moonfire, Insect Swarm, Faerie Fire, Rejuvenation, Regrowth, Hibernate, Soothe Animal and Abolish Poison by ${[
          25,
          50,
        ]}%. In addition, increases the number of charges of your Nature's Grasp spell by ${[
          2,
          4,
        ]}.`,
      },
      
      "Dreamstate": {
        name: "Dreamstate",
        pos: "e1",
        icon: icons["dreamstate"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Regenerates ${[
          1,
          2,
          3,
        ]}% of your total Mana every 10 seconds`,
      },
      
      "Moonkin Form": {
        name: "Moonkin Form",
        pos: "e2",
        icon: icons["spell_nature_forceofnature"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Transforms the Druid into Moonkin Form, increasing spell critical chance by 2% and armor contribution from items by 360%. The Moonkin can only cast Balance spells while shapeshifted.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.`,
      },
      
      "Nature's Grace": {
        name: "Nature's Grace",
        pos: "e3",
        icon: icons["spell_nature_naturesblessing"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec.`,
      },
      
      "Moonglow":{
        name: "Moonglow",
        pos: "e4",
        icon: icons["spell_nature_sentinal"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by ${[
          5,
          10,
          15,
        ]}%.`
      },
      
      "Moonfury": {
        name: "Moonfury",
        pos: "f1",
        icon: icons["moonfury"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your Arcane spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%`,
      },
      
      "Nature Balancer": {
        name: "Nature Balancer",
        pos: "f3",
        icon: icons["nature_balancer"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Nature's Grace",
        arrows: [{dir: "down", from: "e3", to: "f3"}],
        description: talentText`Your Wrath spell have a ${[
          4,
          8,
          12,
          16,
          20,
        ]}% chance of your next Moonfire or Starfire by 50%, and your Moonfire or Starfire spells have a ${[
          4,
          8,
          12,
          16,
          20,
        ]}% chance to increase critical strike chance of your next Wrath by 50%`
      },
      
      "Moonkin Aura": {
        name: "Moonkin Aura",
        pos: "g2",
        icon: icons["spell_nature_moonglow"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Moonkin Form",
        arrows: [{dir: "down", from: "e2", to: "g2"}],
        description: talentText`While in Moonkin Form, the Moonkin Aura increases spell critical chance of all raid members within 30 yards by 3%.`,
      },
    },
  },
  "Feral Combat": {
    name: "Feral Combat",
    background: backgrounds["feral"],
    icon: icons["ability_racial_bearform"],
    talents: {
      
      "Ferocity": {
        name: "Ferocity",
        pos: "a1",
        icon: icons["ability_hunter_pet_hyena"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the cost of your Maul, Swipe, Claw and Rake abilities by ${[
          1,
          2,
          3,
          4,
          5,
        ]} Rage or Energy.`,
      },
      
      "Feral Aggression": {
        name: "Feral Aggression",
        pos: "a2",
        icon: icons["ability_druid_demoralizingroar"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the effectiveness of your Demoralizing Roar by ${[
          20,
          40
        ]}% and the damage caused by your Ferocious Bite and Rip by ${[
          5,
          10,
        ]}%.`,
      },
      
      "Thick Hide": {
        name: "Thick Hide",
        pos: "a3",
        icon: icons["inv_misc_pelt_bear_03"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases your Armor contribution from items by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      
      "Primal Tenacity": {
        name: "Primal Tenacity",
        pos: "b1",
        icon: icons["primal_tenacity"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases your chance to resist Stun and Fear effects by an additional ${[
          5,
          10,
          15,
        ]}% and reduces the cooldown of your Enrage by ${[
          10,
          20,
          30,
        ]} sec.`,
      },
      
      "Brutal Impact": {
        name: "Brutal Impact",
        pos: "b2",
        icon: icons["ability_druid_bash"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the stun duration of your Bash and Pounce abilities by ${[
          1,
          2,
        ]} sec.`,
      },
      
      "Sharpened Claws": {
        name: "Sharpened Claws",
        pos: "b3",
        icon: icons["inv_misc_monsterclaw_04"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases your critical strike chance while in Bear, Dire Bear or Cat Form by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      
      "Primal Fury": {
        name: "Primal Fury",
        pos: "b4",
        icon: icons["ability_racial_cannibalize"],
        maxRank: 2,
        reqPoints: 5,
        prereq: "Sharpened Claws",
        arrows: [{ dir: "right", from: "b3", to: "b4" }],
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form.`,
      },
      
      "Feline Swiftness": {
        name: "Feline Swiftness",
        pos: "c1",
        icon: icons["spell_nature_spiritwolf"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases your movement speed by ${[
          15,
          30,
        ]}% while outdoors in Cat Form and increases your chance to dodge by ${[
          3,
          6,
        ]}%.`,
      },
      
      "Feral Charge": {
        name: "Feral Charge",
        pos: "c2",
        icon: icons["ability_hunter_pet_bear"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec.`,
      },
      
      "Blood Frenzy": {
        name: "Blood Frenzy",
        pos: "c3",
        icon: icons["ability_ghoulfrenzy"],
        maxRank: 2,
        reqPoints: 10,
        prereq: "Sharpened Claws",
        arrows: [{ dir: "down", from: "b3", to: "c3" }],
        description: talentText`Your critial strikes from Cat Form abilities that add combo points have a ${[
          50,
          100,
        ]}% chance to add an additional combo point.`,
      },
      
      "Leap": {
        name: "leap",
        pos: "c4",
        icon: icons["leap"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Remove all movement impairing effects and leap forward. The distance you leap is highly dependent on the terrain.`,
      },
      
      "Feral Instinct": {
        name: "Feral Instinct",
        pos: "d1",
        icon: icons["ability_ambush"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the threat caused in Bear and Dire Bear Form by ${[
          5,
          10,
          15,
        ]}%, reduces the chance enemies have to detect you while Prowling and increases the duration of your Tiger's Fury and Challenging Roar abilities by ${[
          3,
          6,
          9,
        ]} sec.`,
      },
      
      "Stalking": {
        name: "Stalking",
        pos: "d2",
        icon: icons["spell_shadow_vampiricaura"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the critical strike chance of your Ravage and Shred abilities by ${[
          15,
          30,
        ]}%.`,
      },
      
      "Heart of the Wild": {
        name: "Heart of the Wild",
        pos: "d3",
        icon: icons["spell_holy_blessingofagility"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your Intellect and Spirit by ${[
          6,
          12,
          18,
          24,
          30,
        ]}%. In addition, while in Bear or Dire Bear Form your Stamina is increased by ${[
          3,
          6,
          9,
          12,
          15,
        ]}% and while in Cat Form your Strength is increased by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      
      "Savage Fury": {
        name: "Savage Fury",
        pos: "e1",
        icon: icons["ability_druid_swipe"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases the damage caused by your Claw, Rake, Maul and Swipe abilities by ${[
          10,
          20,
        ]}%.`,
      },
      
      "Predatory Strikes": {
        name: "Predatory Strikes",
        pos: "e2",
        icon: icons["ability_hunter_pet_cat"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases your melee attack power in Cat, Bear and Dire Bear Forms by ${[
          100,
          200,
          300,
        ]}% of your level. Also, increases Attack Rating skill by ${[
          3,
          6,
          10,
        ]}.`,
      },
      
      "Untamed Heart": {
        name: "Untamed Heart",
        pos: "e3",
        icon: icons["untamed_heart"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Heart of the Wild",
        arrows: [{ dir: "down", from: "d3", to: "e3" },],
        description: talentText`Heal yourself for 30% of your maximum health, and increases your maximum health by 30% for 20 sec.`,
      },
      
      "Killer Instincts": {
        name: "Killer Instincts",
        pos: "f2",
        icon: icons["killer_instincts"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases all damage caused by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%. In addition, your melee critical strikes will increase yout attack speed by ${[
          10,
          15,
          20,
          25,
          30,
        ]}% for your next 3 attacks.`,
      },
      
      "Survival Instincts": {
        name: "Survival Instincts",
        pos: "f3",
        icon: icons["survival_instincts"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Reduces the chance you'll be critically hit by melee attacks by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%. In addition, your critical strikes restore ${[
          1,
          2,
          3,
          4,
          5,
        ]}% of your maximum health. This effect can only occur once every 8 sec.`
      },

      "Leader of the Pack": {
        name: "Leader of the Pack",
        pos: "g2",
        icon: icons["spell_nature_unyeildingstamina"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party members within 20 yards by 3%`,
      },
    },
  },
  Restoration: {
    name: "Restoration",
    background: backgrounds["restoration"],
    icon: icons["spell_nature_healingtouch"],
    talents: {
      
      "Accuracy": {
        name: "Accuracy",
        pos: "a1",
        icon: icons["accuracy"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases your chance to hit with all attacks and spells by ${[
          1,
          2,
          3,
        ]}%.`
      },

      "Nature's Focus": {
        name: "Nature's Focus",
        pos: "a2",
        icon: icons["spell_nature_healingwavegreater"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives you a ${[
          15,
          30,
          45,
          60,
          75,
        ]}% chance to avoid interruption caused by damage while casting.`,
      },

      "Furor": {
        name: "Furor",
        pos: "a3",
        icon: icons["spell_nature_unyeildingstamina"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`You gain 15 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form. This effect can only occur once every ${[
          24,
          12,
        ]} sec.`,
      },

      "Natural Shapeshifter": {
        name: "Natural Shapeshifter",
        pos: "a4",
        icon: icons["spell_nature_wispsplode"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Reduces the mana cost of all shapeshifting by ${[
          10,
          20,
          30,
        ]}%.`
      },

      "Naturalist": {
        name: "Naturalist",
        pos: "b1",
        icon: icons["spell_nature_healingtouch"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cast time of your Healing Touch spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec and increases you Mana regeneration by ${[
          10,
          20,
          30,
          40,
          50,
        ]}% while in Cat, Bear or Dire Bear form.`,
      },
      
      "Subtlety": {
        name: "Subtlety",
        pos: "b2",
        icon: icons["ability_eyeoftheowl"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the threat you generate by ${[
          6,
          12,
          18,
          24,
          30,
        ]}% and increases the chance to avoid area of effect spells by an additional ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.`,
      },
      
      "Improved Enrage": {
        name: "Improved Enrage",
        pos: "b3",
        icon: icons["ability_druid_enrage"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`The Enrage ability now instantly generates ${[
          10,
          20,
        ]} Rage.`,
      },
      "Revive": {
        name: "Revive",
        pos: "c1",
        icon: icons["revive"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Returns the spirit to the body, restoring a dead target to life with 20% of their health and mana. Cannot be cast when in combat.`
      },

      "Omen of Clarity": {
        name: "Omen of Clarity",
        pos: "c2",
        icon: icons["spell_nature_crystalball"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Imbues the Druid with natural energy. Each of the Druid's melee attack has a chance to reduce the cost and cast time of your next damage or healing spell by 75%. Lasts 5 min.`,
      },

      "Reflection": {
        name: "Reflection",
        pos: "c3",
        icon: icons["spell_frost_windwalkon"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Allows ${[
          7,
          14,
          20,
        ]}% of your Mana regeneration to continue while casting.`,
      },

      "Improved Mark of the Wild": {
        name: "Improved Mark of the Wild",
        pos: "c4",
        icon: icons["spell_nature_regeneration"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the effects of your Mark of the Wild and Gift of the Wild spells by ${[
          20,
          40,
          60,
        ]}%. and reduces the chance listed spells will be dispelled by ${[
          30,
          60,
          90,
        ]}%`,
      },

      "Gift of Nature": {
        name: "Gift of Nature",
        pos: "d2",
        icon: icons["spell_nature_protectionformnature"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases Nature damage done by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% and increases the effect of all healing spells and healing taken by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },

      "Improved Rejuvenation": {
        name: "Improved Rejuvenation",
        pos: "d3",
        icon: icons["spell_nature_rejuvenation"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the effect of your Rejuvenation spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },

      "Custody of the Nature": {
        name: "Custody of the Nature",
        pos: "d4",
        icon: icons["custody_of_the_nature"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`After being struck by a critical hit, you become immune to critical strikes for the next ${[
          1,
          2,
          3,
        ]} attack(s) or ${[
          3,
          4,
          5,
        ]} sec. In addition, gives your spell effects additional ${[
          15,
          20,
          25,
        ]}% chance to resist dispel effects.`,
      },

      "Nature's Swiftness": {
        name: "Nature's Swiftness",
        pos: "e1",
        icon: icons["spell_nature_ravenform"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, your next spell becomes an instant cast spell.`,
      },

      "Tranquil Spirit": {
        name: "Tranquil Spirit",
        pos: "e2",
        icon: icons["spell_holy_elunesgrace"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Reduces the mana cost of your Healing Touch and Tranquility spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%. In addition, increases eddect and reduces threat cause by Tranquility by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%.`,
      },

      "Catharsis": {
        name: "Catharsis",
        pos: "e4",
        icon: icons["catharsis"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Reduces the Mana cost of your Soothe Animal, Hibernate, Remove Curse, Cure Poison, Abolish Poisin, Rebirth and Revive spells by ${[
          15,
          30,
          45,
        ]}%.\nIn addition, your innervate casts grants you ${[
          7,
          14,
          20,
        ]} sec of Innervate effect.`,
      },
      
      "Animism": {
        name: "Animism",
        pos: "f1",
        icon: icons["animism"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases damage and healing done by up to ${[
          8,
          16,
          24,
          32,
          40,
        ]}% of your total Spirit.`,
      },

      "Improved Regrowth": {
        name: "Improved Regrowth",
        pos: "f3",
        icon: icons["spell_nature_resistnature"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Improved Rejuvenation",
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
        description: talentText`Increases the critical effect chance of your Regrowth spell by ${[
          15,
          30,
          45,
          60,
          75,
        ]}%.`,
      },

      "Swiftmend": {
        name: "Swiftmend",
        pos: "g2",
        icon: icons["inv_relics_idolofrejuvenation"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Tranquil Spirit",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them an amount equal to 12 sec. of Rejuvenation or 18 sec. of Regrowth.`,
      },
    },
  },
};

ServerEvents.recipes( (event) => {

    const id = [
    'modern_industrialization:compat/indrev/quarry_nikolite',
    'modern_industrialization:compat/ae2/quarry_ae2',
    'ad_astra:hammering/iron_plate',
    'ad_astra:recipes/steel_ingot_from_smelting_iron_ingot',
    'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
    'create:smelting/platinum_ingot_compat_modern_industrialization',
    'create:blasting/platinum_ingot_compat_modern_industrialization',
    'twilightforest:jeed/hunger',
    'farmersdelight:wheat_dough_from_water',
    'farmersdelight:wheat_dough_from_eggs',
    'farmersdelight:wheat_dough',
    'wands:stone_wand2',
    'modern_industrialization:materials/chromium/craft/dust_from_tiny_dust',

    ];

    const output = [
    'kibe:angel_ring',
    'kibe:light_ring',
    'kibe:pocket_crafting_table',
    'kibe:big_torch',
    'dwarfcoal:dwarf_charcoal',
    'mtmechs:iron_gear_item',
    'indrev:hammer',
    'kibe:slime_sling',
    'kibe:slime_boots',,
    'nethersdelight:iron_machete',
    'nethersdelight:diamond_machete',
    'nethersdelight:netherite_machete',
    'nethersdelight:golden_machete',
    ];

    id.forEach((id) => {
        event.remove({ id: id });
    });

    output.forEach((output) => {
        event.remove({ output: output });
    });
});

$( document ).ready(function() {
	//disabled confirm exit dialog
	window.onbeforeunload = false;
var json = {"items": [
{"emoji":":+1:", "icon":"👍🏼"},
{"emoji":":-1:", "icon":"👎🏼"},
{"emoji":":100:", "icon":"💯"},
{"emoji":":1234:", "icon":"🔢"},
{"emoji":":8ball:", "icon":"🎱"},
{"emoji":":a:", "icon":"🅰"},
{"emoji":":ab:", "icon":"🆎"},
{"emoji":":abc:", "icon":"🔤"},
{"emoji":":abcd:", "icon":"🔡"},
{"emoji":":accept:", "icon":"🉑"},
{"emoji":":aerial_tramway:", "icon":"🚡"},
{"emoji":":airplane:", "icon":"✈"},
{"emoji":":alarm_clock:", "icon":"⏰"},
{"emoji":":alien:", "icon":"👽"},
{"emoji":":ambulance:", "icon":"🚑"},
{"emoji":":anger:", "icon":"💢"},
{"emoji":":angry:", "icon":"😠"},
{"emoji":":anguished:", "icon":"😧"},
{"emoji":":ant:", "icon":"🐜"},
{"emoji":":apple:", "icon":"🍎"},
{"emoji":":aquarius:", "icon":"♒"},
{"emoji":":aries:", "icon":"♈"},
{"emoji":":arrow_backward:", "icon":"◀"},
{"emoji":":arrow_double_down:", "icon":"⏬"},
{"emoji":":arrow_double_up:", "icon":"⏫"},
{"emoji":":arrow_down:", "icon":"⬇"},
{"emoji":":arrow_down_small:", "icon":"🔽"},
{"emoji":":arrow_forward:", "icon":"▶"},
{"emoji":":arrow_heading_down:", "icon":"⤵"},
{"emoji":":arrow_heading_up:", "icon":"⤴"},
{"emoji":":arrow_left:", "icon":"⬅"},
{"emoji":":arrow_lower_left:", "icon":"↙"},
{"emoji":":arrow_lower_right:", "icon":"↘"},
{"emoji":":arrow_right:", "icon":"➡"},
{"emoji":":arrow_right_hook:", "icon":"↪"},
{"emoji":":arrow_up:", "icon":"⬆"},
{"emoji":":arrow_up_down:", "icon":"↕"},
{"emoji":":arrow_up_small:", "icon":"🔼"},
{"emoji":":arrow_upper_left:", "icon":"↖"},
{"emoji":":arrow_upper_right:", "icon":"↗"},
{"emoji":":arrows_clockwise:", "icon":"🔃"},
{"emoji":":arrows_counterclockwise:", "icon":"🔄"},
{"emoji":":art:", "icon":"🎨"},
{"emoji":":articulated_lorry:", "icon":"🚛"},
{"emoji":":astonished:", "icon":"😲"},
{"emoji":":atm:", "icon":"🏧"},
{"emoji":":b:", "icon":"🅱"},
{"emoji":":baby_bottle:", "icon":"🍼"},
{"emoji":":baby_chick:", "icon":"🐤"},
{"emoji":":baby_symbol:", "icon":"🚼"},
{"emoji":":back:", "icon":"🔙"},
{"emoji":":baggage_claim:", "icon":"🛄"},
{"emoji":":balloon:", "icon":"🎈"},
{"emoji":":ballot_box_with_check:", "icon":"☑"},
{"emoji":":bamboo:", "icon":"🎍"},
{"emoji":":banana:", "icon":"🍌"},
{"emoji":":bank:", "icon":"🏦"},
{"emoji":":bar_chart:", "icon":"📊"},
{"emoji":":barber:", "icon":"💈"},
{"emoji":":baseball:", "icon":"⚾"},
{"emoji":":basketball:", "icon":"🏀"},
{"emoji":":bathtub:", "icon":"🛁"},
{"emoji":":battery:", "icon":"🔋"},
{"emoji":":bear:", "icon":"🐻"},
{"emoji":":beer:", "icon":"🍺"},
{"emoji":":beers:", "icon":"🍻"},
{"emoji":":beetle:", "icon":"🐞"},
{"emoji":":beginner:", "icon":"🔰"},
{"emoji":":bell:", "icon":"🔔"},
{"emoji":":bento:", "icon":"🍱"},
{"emoji":":bike:", "icon":"🚲"},
{"emoji":":bikini:", "icon":"👙"},
{"emoji":":bird:", "icon":"🐦"},
{"emoji":":birthday:", "icon":"🎂"},
{"emoji":":black_circle:", "icon":"⚫"},
{"emoji":":black_joker:", "icon":"🃏"},
{"emoji":":black_large_square:", "icon":"⬛"},
{"emoji":":black_medium_small_square:", "icon":"◾"},
{"emoji":":black_medium_square:", "icon":"◼"},
{"emoji":":black_nib:", "icon":"✒"},
{"emoji":":black_small_square:", "icon":"▪"},
{"emoji":":black_square_button:", "icon":"🔲"},
{"emoji":":blossom:", "icon":"🌼"},
{"emoji":":blowfish:", "icon":"🐡"},
{"emoji":":blue_book:", "icon":"📘"},
{"emoji":":blue_car:", "icon":"🚙"},
{"emoji":":blue_heart:", "icon":"💙"},
{"emoji":":blush:", "icon":"😊"},
{"emoji":":boar:", "icon":"🐗"},
{"emoji":":boat:", "icon":"⛵"},
{"emoji":":bomb:", "icon":"💣"},
{"emoji":":book:", "icon":"📖"},
{"emoji":":bookmark:", "icon":"🔖"},
{"emoji":":bookmark_tabs:", "icon":"📑"},
{"emoji":":books:", "icon":"📚"},
{"emoji":":boom:", "icon":"💥"},
{"emoji":":boot:", "icon":"👢"},
{"emoji":":bouquet:", "icon":"💐"},
{"emoji":":bowling:", "icon":"🎳"},
{"emoji":":bread:", "icon":"🍞"},
{"emoji":":bridge_at_night:", "icon":"🌉"},
{"emoji":":briefcase:", "icon":"💼"},
{"emoji":":broken_heart2:", "icon":"💔"},
{"emoji":":broken_heart:", "icon":"💔"},
{"emoji":":bug:", "icon":"🐛"},
{"emoji":":bulb:", "icon":"💡"},
{"emoji":":bullettrain_front:", "icon":"🚆"},
{"emoji":":bullettrain_side2:", "icon":"🚄"},
{"emoji":":bullettrain_side:", "icon":"🚅"},
{"emoji":":bus:", "icon":"🚌"},
{"emoji":":busstop:", "icon":"🚏"},
{"emoji":":bust_in_silhouette:", "icon":"👤"},
{"emoji":":busts_in_silhouette:", "icon":"👥"},
{"emoji":":cactus:", "icon":"🌵"},
{"emoji":":cake:", "icon":"🍰"},
{"emoji":":calendar:", "icon":"📆"},
{"emoji":":calling:", "icon":"📲"},
{"emoji":":camel:", "icon":"🐫"},
{"emoji":":camera:", "icon":"📷"},
{"emoji":":cancer:", "icon":"♋"},
{"emoji":":candy:", "icon":"🍬"},
{"emoji":":capital_abcd:", "icon":"🔠"},
{"emoji":":capricorn:", "icon":"♑"},
{"emoji":":car:", "icon":"🚗"},
{"emoji":":card_index:", "icon":"📇"},
{"emoji":":carousel_horse:", "icon":"🎠"},
{"emoji":":cat2:", "icon":"🐈"},
{"emoji":":cat:", "icon":"🐱"},
{"emoji":":cd:", "icon":"💿"},
{"emoji":":chart:", "icon":"💹"},
{"emoji":":chart_with_downwards_trend:", "icon":"📉"},
{"emoji":":chart_with_upwards_trend:", "icon":"📈"},
{"emoji":":checkered_flag:", "icon":"🏁"},
{"emoji":":cherries:", "icon":"🍒"},
{"emoji":":cherry_blossom:", "icon":"🌸"},
{"emoji":":chestnut:", "icon":"🌰"},
{"emoji":":chicken:", "icon":"🐔"},
{"emoji":":children_crossing:", "icon":"🚸"},
{"emoji":":chocolate_bar:", "icon":"🍫"},
{"emoji":":church:", "icon":"⛪"},
{"emoji":":cinema:", "icon":"🎦"},
{"emoji":":circus_tent:", "icon":"🎪"},
{"emoji":":city_night:", "icon":"🌃"},
{"emoji":":city_sunrise:", "icon":"🌇"},
{"emoji":":city_sunset:", "icon":"🌆"},
{"emoji":":cl:", "icon":"🆑"},
{"emoji":":clapper:", "icon":"🎬"},
{"emoji":":clipboard:", "icon":"📋"},
{"emoji":":clock1030:", "icon":"🕥"},
{"emoji":":clock10:", "icon":"🕙"},
{"emoji":":clock1130:", "icon":"🕦"},
{"emoji":":clock11:", "icon":"🕚"},
{"emoji":":clock1230:", "icon":"🕧"},
{"emoji":":clock12:", "icon":"🕛"},
{"emoji":":clock130:", "icon":"🕜"},
{"emoji":":clock1:", "icon":"🕐"},
{"emoji":":clock230:", "icon":"🕝"},
{"emoji":":clock2:", "icon":"🕑"},
{"emoji":":clock330:", "icon":"🕞"},
{"emoji":":clock3:", "icon":"🕒"},
{"emoji":":clock430:", "icon":"🕟"},
{"emoji":":clock4:", "icon":"🕓"},
{"emoji":":clock530:", "icon":"🕠"},
{"emoji":":clock5:", "icon":"🕔"},
{"emoji":":clock630:", "icon":"🕡"},
{"emoji":":clock6:", "icon":"🕕"},
{"emoji":":clock730:", "icon":"🕢"},
{"emoji":":clock7:", "icon":"🕖"},
{"emoji":":clock830:", "icon":"🕣"},
{"emoji":":clock8:", "icon":"🕗"},
{"emoji":":clock930:", "icon":"🕤"},
{"emoji":":clock9:", "icon":"🕘"},
{"emoji":":closed_book:", "icon":"📕"},
{"emoji":":closed_lock_with_key:", "icon":"🔐"},
{"emoji":":closed_umbrella:", "icon":"🌂"},
{"emoji":":cloud:", "icon":"☁"},
{"emoji":":clubs:", "icon":"♣"},
{"emoji":":cn:", "icon":"🇨🇳"},
{"emoji":":cocktail:", "icon":"🍸"},
{"emoji":":coffee:", "icon":"☕"},
{"emoji":":cold_sweat:", "icon":"😰"},
{"emoji":":computer:", "icon":"💻"},
{"emoji":":confetti_ball:", "icon":"🎊"},
{"emoji":":confounded:", "icon":"😖"},
{"emoji":":confused:", "icon":"😕"},
{"emoji":":congratulations:", "icon":"㊗"},
{"emoji":":construction:", "icon":"🚧"},
{"emoji":":convenience_store:", "icon":"🏪"},
{"emoji":":cookie:", "icon":"🍪"},
{"emoji":":cool:", "icon":"🆒"},
{"emoji":":copyright:", "icon":"©"},
{"emoji":":corn:", "icon":"🌽"},
{"emoji":":couple_with_heart:", "icon":"💑"},
{"emoji":":couplekiss:", "icon":"💏"},
{"emoji":":cow2:", "icon":"🐄"},
{"emoji":":cow:", "icon":"🐮"},
{"emoji":":credit_card:", "icon":"💳"},
{"emoji":":crescent_moon:", "icon":"🌙"},
{"emoji":":crocodile:", "icon":"🐊"},
{"emoji":":crossed_flags:", "icon":"🎌"},
{"emoji":":crown:", "icon":"👑"},
{"emoji":":cry:", "icon":"😢"},
{"emoji":":crying_cat_face:", "icon":"😿"},
{"emoji":":crystal_ball:", "icon":"🔮"},
{"emoji":":cupid:", "icon":"💘"},
{"emoji":":curly_loop:", "icon":"➰"},
{"emoji":":currency_exchange:", "icon":"💱"},
{"emoji":":curry:", "icon":"🍛"},
{"emoji":":custard:", "icon":"🍮"},
{"emoji":":customs:", "icon":"🛃"},
{"emoji":":cyclone:", "icon":"🌀"},
{"emoji":":dancers:", "icon":"👯"},
{"emoji":":dango:", "icon":"🍡"},
{"emoji":":dart:", "icon":"🎯"},
{"emoji":":dash:", "icon":"💨"},
{"emoji":":date:", "icon":"📅"},
{"emoji":":de:", "icon":"🇩🇪"},
{"emoji":":deciduous_tree:", "icon":"🌳"},
{"emoji":":department_store:", "icon":"🏬"},
{"emoji":":diamond_shape_with_a_dot_inside:", "icon":"💠"},
{"emoji":":diamonds:", "icon":"♦"},
{"emoji":":disappointed:", "icon":"😞"},
{"emoji":":disappointed_relieved:", "icon":"😥"},
{"emoji":":dizzy:", "icon":"💫"},
{"emoji":":dizzy_face:", "icon":"😵"},
{"emoji":":do_not_litter:", "icon":"🚯"},
{"emoji":":dog2:", "icon":"🐕"},
{"emoji":":dog:", "icon":"🐶"},
{"emoji":":dollar:", "icon":"💵"},
{"emoji":":dolls:", "icon":"🎎"},
{"emoji":":dolphin:", "icon":"🐬"},
{"emoji":":door:", "icon":"🚪"},
{"emoji":":doughnut:", "icon":"🍩"},
{"emoji":":dragon:", "icon":"🐉"},
{"emoji":":dragon_face:", "icon":"🐲"},
{"emoji":":dress:", "icon":"👗"},
{"emoji":":dromedary_camel:", "icon":"🐪"},
{"emoji":":droplet:", "icon":"💧"},
{"emoji":":dvd:", "icon":"📀"},
{"emoji":":e-mail:", "icon":"📧"},
{"emoji":":ear_of_rice:", "icon":"🌾"},
{"emoji":":earth_africa:", "icon":"🌍"},
{"emoji":":earth_americas:", "icon":"🌎"},
{"emoji":":earth_asia:", "icon":"🌏"},
{"emoji":":egg:", "icon":"🍳"},
{"emoji":":eggplant:", "icon":"🍆"},
{"emoji":":eight:", "icon":"8⃣"},
{"emoji":":eight_pointed_black_star:", "icon":"✴"},
{"emoji":":eight_spoked_asterisk:", "icon":"✳"},
{"emoji":":electric_plug:", "icon":"🔌"},
{"emoji":":elephant:", "icon":"🐘"},
{"emoji":":email:", "icon":"✉"},
{"emoji":":end:", "icon":"🔚"},
{"emoji":":envelope:", "icon":"📨"},
{"emoji":":es:", "icon":"🇪🇸"},
{"emoji":":euro:", "icon":"💶"},
{"emoji":":european_castle:", "icon":"🏰"},
{"emoji":":european_post_office:", "icon":"🏤"},
{"emoji":":evergreen_tree:", "icon":"🌲"},
{"emoji":":exclamation:", "icon":"❗"},
{"emoji":":expressionless:", "icon":"😑"},
{"emoji":":eyeglasses:", "icon":"👓"},
{"emoji":":factory:", "icon":"🏭"},
{"emoji":":fallen_leaf:", "icon":"🍂"},
{"emoji":":family:", "icon":"👪"},
{"emoji":":fast_forward:", "icon":"⏩"},
{"emoji":":fax:", "icon":"📠"},
{"emoji":":fearful:", "icon":"😨"},
{"emoji":":feet:", "icon":"👣"},
{"emoji":":ferris_wheel:", "icon":"🎡"},
{"emoji":":file_folder:", "icon":"📁"},
{"emoji":":fire:", "icon":"🔥"},
{"emoji":":fire_engine:", "icon":"🚒"},
{"emoji":":fireworks:", "icon":"🎆"},
{"emoji":":first_quarter_moon:", "icon":"🌓"},
{"emoji":":first_quarter_moon_with_face:", "icon":"🌛"},
{"emoji":":fish:", "icon":"🐟"},
{"emoji":":fish_cake:", "icon":"🍥"},
{"emoji":":fishing_pole_and_fish:", "icon":"🎣"},
{"emoji":":five:", "icon":"5⃣"},
{"emoji":":flag-ae:", "icon":"🇦🇪"},
{"emoji":":flag-ar:", "icon":"🇦🇷"},
{"emoji":":flag-at:", "icon":"🇦🇹"},
{"emoji":":flag-au:", "icon":"🇦🇺"},
{"emoji":":flag-ba:", "icon":"🇧🇦"},
{"emoji":":flag-be:", "icon":"🇧🇪"},
{"emoji":":flag-br:", "icon":"🇧🇷"},
{"emoji":":flag-ca:", "icon":"🇨🇦"},
{"emoji":":flag-ch:", "icon":"🇨🇭"},
{"emoji":":flag-ci:", "icon":"🇨🇮"},
{"emoji":":flag-cl:", "icon":"🇨🇱"},
{"emoji":":flag-cm:", "icon":"🇨🇲"},
{"emoji":":flag-cn:", "icon":"🇨🇳"},
{"emoji":":flag-co:", "icon":"🇨🇴"},
{"emoji":":flag-cr:", "icon":"🇨🇷"},
{"emoji":":flag-de:", "icon":"🇩🇪"},
{"emoji":":flag-dz:", "icon":"🇩🇿"},
{"emoji":":flag-ec:", "icon":"🇪🇨"},
{"emoji":":flag-eg:", "icon":"🇪🇬"},
{"emoji":":flag-en:", "icon":"🇽🇪"},
{"emoji":":flag-es:", "icon":"🇪🇸"},
{"emoji":":flag-fr:", "icon":"🇫🇷"},
{"emoji":":flag-gb:", "icon":"🇬🇧"},
{"emoji":":flag-gh:", "icon":"🇬🇭"},
{"emoji":":flag-gr:", "icon":"🇬🇷"},
{"emoji":":flag-hk:", "icon":"🇭🇰"},
{"emoji":":flag-hn:", "icon":"🇭🇳"},
{"emoji":":flag-hr:", "icon":"🇭🇷"},
{"emoji":":flag-id:", "icon":"🇮🇩"},
{"emoji":":flag-il:", "icon":"🇮🇱"},
{"emoji":":flag-in:", "icon":"🇮🇳"},
{"emoji":":flag-ir:", "icon":"🇮🇷"},
{"emoji":":flag-it:", "icon":"🇮🇹"},
{"emoji":":flag-jo:", "icon":"🇯🇴"},
{"emoji":":flag-jp:", "icon":"🇯🇵"},
{"emoji":":flag-kr:", "icon":"🇰🇷"},
{"emoji":":flag-kz:", "icon":"🇰🇿"},
{"emoji":":flag-lb:", "icon":"🇱🇧"},
{"emoji":":flag-mx:", "icon":"🇲🇽"},
{"emoji":":flag-my:", "icon":"🇲🇾"},
{"emoji":":flag-ng:", "icon":"🇳🇬"},
{"emoji":":flag-nl:", "icon":"🇳🇱"},
{"emoji":":flag-pe:", "icon":"🇵🇪"},
{"emoji":":flag-pt:", "icon":"🇵🇹"},
{"emoji":":flag-ru:", "icon":"🇷🇺"},
{"emoji":":flag-sa:", "icon":"🇸🇦"},
{"emoji":":flag-sg:", "icon":"🇸🇬"},
{"emoji":":flag-sy:", "icon":"🇸🇾"},
{"emoji":":flag-th:", "icon":"🇹🇭"},
{"emoji":":flag-tr:", "icon":"🇹🇷"},
{"emoji":":flag-tw:", "icon":"🇹🇼"},
{"emoji":":flag-ua:", "icon":"🇺🇦"},
{"emoji":":flag-us:", "icon":"🇺🇸"},
{"emoji":":flag-uy:", "icon":"🇺🇾"},
{"emoji":":flag-ve:", "icon":"🇻🇪"},
{"emoji":":flag-za:", "icon":"🇿🇦"},
{"emoji":":flags:", "icon":"🎏"},
{"emoji":":flashlight:", "icon":"🔦"},
{"emoji":":floppy_disk:", "icon":"💾"},
{"emoji":":flower_playing_cards:", "icon":"🎴"},
{"emoji":":flushed:", "icon":"😳"},
{"emoji":":foggy:", "icon":"🌁"},
{"emoji":":football:", "icon":"🏈"},
{"emoji":":fork_and_knife:", "icon":"🍴"},
{"emoji":":fountain:", "icon":"⛲"},
{"emoji":":four:", "icon":"4⃣"},
{"emoji":":four_leaf_clover:", "icon":"🍀"},
{"emoji":":fr:", "icon":"🇫🇷"},
{"emoji":":free:", "icon":"🆓"},
{"emoji":":fried_shrimp:", "icon":"🍤"},
{"emoji":":fries:", "icon":"🍟"},
{"emoji":":frog:", "icon":"🐸"},
{"emoji":":frowning:", "icon":"😦"},
{"emoji":":fuelpump:", "icon":"⛽"},
{"emoji":":full_moon:", "icon":"🌕"},
{"emoji":":full_moon_with_face:", "icon":"🌝"},
{"emoji":":game_die:", "icon":"🎲"},
{"emoji":":gb:", "icon":"🇬🇧"},
{"emoji":":gem:", "icon":"💎"},
{"emoji":":gemini:", "icon":"♊"},
{"emoji":":ghost:", "icon":"👻"},
{"emoji":":gift:", "icon":"🎁"},
{"emoji":":gift_heart:", "icon":"💝"},
{"emoji":":globe_with_meridians:", "icon":"🌐"},
{"emoji":":goat:", "icon":"🐐"},
{"emoji":":golf:", "icon":"⛳"},
{"emoji":":grapes:", "icon":"🍇"},
{"emoji":":green_apple:", "icon":"🍏"},
{"emoji":":green_book:", "icon":"📗"},
{"emoji":":green_heart:", "icon":"💚"},
{"emoji":":grey_exclamation:", "icon":"❕"},
{"emoji":":grey_question:", "icon":"❔"},
{"emoji":":grimacing:", "icon":"😬"},
{"emoji":":grin:", "icon":"😁"},
{"emoji":":grinning:", "icon":"😀"},
{"emoji":":guitar:", "icon":"🎻"},
{"emoji":":gun:", "icon":"🔫"},
{"emoji":":hamburger:", "icon":"🍔"},
{"emoji":":hammer:", "icon":"🔨"},
{"emoji":":hamster:", "icon":"🐹"},
{"emoji":":handbag:", "icon":"👜"},
{"emoji":":hankey:", "icon":"💩"},
{"emoji":":hash:", "icon":"#⃣"},
{"emoji":":hatched_chick:", "icon":"🐥"},
{"emoji":":hatching_chick:", "icon":"🐣"},
{"emoji":":headphones:", "icon":"🎧"},
{"emoji":":hear_no_evil:", "icon":"🙉"},
{"emoji":":heart:", "icon":"❤"},
{"emoji":":heart_decoration:", "icon":"💟"},
{"emoji":":heart_eyes:", "icon":"😍"},
{"emoji":":heart_eyes_cat:", "icon":"😻"},
{"emoji":":heartbeat:", "icon":"💓"},
{"emoji":":heartpulse:", "icon":"💗"},
{"emoji":":hearts:", "icon":"♥"},
{"emoji":":heavy_check_mark:", "icon":"✔"},
{"emoji":":heavy_division_sign:", "icon":"➗"},
{"emoji":":heavy_dollar_sign:", "icon":"💲"},
{"emoji":":heavy_minus_sign:", "icon":"➖"},
{"emoji":":heavy_multiplication_x:", "icon":"✖"},
{"emoji":":heavy_plus_sign:", "icon":"➕"},
{"emoji":":helicopter:", "icon":"🚁"},
{"emoji":":herb:", "icon":"🌿"},
{"emoji":":hibiscus:", "icon":"🌺"},
{"emoji":":high_brightness:", "icon":"🔆"},
{"emoji":":high_heel:", "icon":"👠"},
{"emoji":":hocho:", "icon":"🔪"},
{"emoji":":honey_pot:", "icon":"🍯"},
{"emoji":":honeybee:", "icon":"🐝"},
{"emoji":":horse:", "icon":"🐴"},
{"emoji":":hospital:", "icon":"🏥"},
{"emoji":":hotel:", "icon":"🏨"},
{"emoji":":hotsprings:", "icon":"♨"},
{"emoji":":hourglass:", "icon":"⌛"},
{"emoji":":hourglass_flowing_sand:", "icon":"⏳"},
{"emoji":":house:", "icon":"🏠"},
{"emoji":":house_with_garden:", "icon":"🏡"},
{"emoji":":hushed:", "icon":"😯"},
{"emoji":":ice_cream:", "icon":"🍨"},
{"emoji":":icecream:", "icon":"🍦"},
{"emoji":":id:", "icon":"🆔"},
{"emoji":":ideograph_advantage:", "icon":"🉐"},
{"emoji":":imp:", "icon":"👿"},
{"emoji":":inbox_tray:", "icon":"📥"},
{"emoji":":incoming_envelope:", "icon":"📩"},
{"emoji":":information_source:", "icon":"ℹ"},
{"emoji":":innocent:", "icon":"😇"},
{"emoji":":iphone:", "icon":"📱"},
{"emoji":":it:", "icon":"🇮🇹"},
{"emoji":":izakaya_lantern:", "icon":"🏮"},
{"emoji":":jack_o_lantern:", "icon":"🎃"},
{"emoji":":japan:", "icon":"🗾"},
{"emoji":":japanese_castle:", "icon":"🏯"},
{"emoji":":japanese_goblin:", "icon":"👺"},
{"emoji":":japanese_ogre:", "icon":"👹"},
{"emoji":":jeans:", "icon":"👖"},
{"emoji":":joy:", "icon":"😂"},
{"emoji":":joy_cat:", "icon":"😹"},
{"emoji":":jp:", "icon":"🇯🇵"},
{"emoji":":key:", "icon":"🔑"},
{"emoji":":keycap_ten:", "icon":"🔟"},
{"emoji":":kimono:", "icon":"👘"},
{"emoji":":kiss:", "icon":"💋"},
{"emoji":":kissing:", "icon":"😗"},
{"emoji":":kissing_cat:", "icon":"😽"},
{"emoji":":kissing_closed_eyes:", "icon":"😚"},
{"emoji":":kissing_heart:", "icon":"😘"},
{"emoji":":kissing_smiling_eyes:", "icon":"😙"},
{"emoji":":koala:", "icon":"🐨"},
{"emoji":":koko:", "icon":"🈁"},
{"emoji":":kr:", "icon":"🇰🇷"},
{"emoji":":large_blue_circle:", "icon":"🔵"},
{"emoji":":large_blue_diamond:", "icon":"🔷"},
{"emoji":":large_orange_diamond:", "icon":"🔶"},
{"emoji":":last_quarter_moon:", "icon":"🌗"},
{"emoji":":last_quarter_moon_with_face:", "icon":"🌜"},
{"emoji":":laughing:", "icon":"😆"},
{"emoji":":leaves:", "icon":"🍃"},
{"emoji":":ledger:", "icon":"📒"},
{"emoji":":left_luggage:", "icon":"🛅"},
{"emoji":":left_right_arrow:", "icon":"↔"},
{"emoji":":leftwards_arrow_with_hook:", "icon":"↩"},
{"emoji":":lemon:", "icon":"🍋"},
{"emoji":":leo:", "icon":"♌"},
{"emoji":":leopard:", "icon":"🐆"},
{"emoji":":libra:", "icon":"♎"},
{"emoji":":light_rail:", "icon":"🚈"},
{"emoji":":link:", "icon":"🔗"},
{"emoji":":lips:", "icon":"👄"},
{"emoji":":lipstick:", "icon":"💄"},
{"emoji":":lock:", "icon":"🔒"},
{"emoji":":lock_with_ink_pen:", "icon":"🔏"},
{"emoji":":lollipop:", "icon":"🍭"},
{"emoji":":loop:", "icon":"➿"},
{"emoji":":loudspeaker:", "icon":"📢"},
{"emoji":":love_hotel:", "icon":"🏩"},
{"emoji":":love_letter:", "icon":"💌"},
{"emoji":":low_brightness:", "icon":"🔅"},
{"emoji":":m:", "icon":"Ⓜ"},
{"emoji":":mag:", "icon":"🔍"},
{"emoji":":mag_right:", "icon":"🔎"},
{"emoji":":mahjong:", "icon":"🀄"},
{"emoji":":mailbox:", "icon":"📫"},
{"emoji":":mailbox_closed:", "icon":"📪"},
{"emoji":":mailbox_with_mail:", "icon":"📬"},
{"emoji":":mailbox_with_no_mail:", "icon":"📭"},
{"emoji":":mans_shoe:", "icon":"👞"},
{"emoji":":maple_leaf:", "icon":"🍁"},
{"emoji":":mask:", "icon":"😷"},
{"emoji":":meat_on_bone:", "icon":"🍖"},
{"emoji":":mega:", "icon":"📣"},
{"emoji":":melon:", "icon":"🍈"},
{"emoji":":memo:", "icon":"📝"},
{"emoji":":mens:", "icon":"🚹"},
{"emoji":":microphone:", "icon":"🎤"},
{"emoji":":microscope:", "icon":"🔬"},
{"emoji":":milky_way:", "icon":"🌌"},
{"emoji":":minibus:", "icon":"🚐"},
{"emoji":":minidisc:", "icon":"💽"},
{"emoji":":mobile_phone_off:", "icon":"📴"},
{"emoji":":money_with_wings:", "icon":"💸"},
{"emoji":":moneybag:", "icon":"💰"},
{"emoji":":monkey:", "icon":"🐒"},
{"emoji":":monkey_face:", "icon":"🐵"},
{"emoji":":monorail:", "icon":"🚝"},
{"emoji":":mortar_board:", "icon":"🎓"},
{"emoji":":mount_fuji:", "icon":"🗻"},
{"emoji":":mountain_cableway:", "icon":"🚠"},
{"emoji":":mountain_railway:", "icon":"🚞"},
{"emoji":":mouse2:", "icon":"🐁"},
{"emoji":":mouse:", "icon":"🐭"},
{"emoji":":movie_camera:", "icon":"🎥"},
{"emoji":":moyai:", "icon":"🗿"},
{"emoji":":mushroom:", "icon":"🍄"},
{"emoji":":musical_keyboard:", "icon":"🎹"},
{"emoji":":musical_note:", "icon":"🎵"},
{"emoji":":musical_score:", "icon":"🎼"},
{"emoji":":mute:", "icon":"🔇"},
{"emoji":":name_badge:", "icon":"📛"},
{"emoji":":necktie:", "icon":"👔"},
{"emoji":":negative_squared_cross_mark:", "icon":"❎"},
{"emoji":":neutral_face:", "icon":"😐"},
{"emoji":":new:", "icon":"🆕"},
{"emoji":":new_moon:", "icon":"🌑"},
{"emoji":":new_moon_with_face:", "icon":"🌚"},
{"emoji":":newspaper:", "icon":"📰"},
{"emoji":":ng:", "icon":"🆖"},
{"emoji":":nine:", "icon":"9⃣"},
{"emoji":":no_bell:", "icon":"🔕"},
{"emoji":":no_bicycles:", "icon":"🚳"},
{"emoji":":no_entry:", "icon":"⛔"},
{"emoji":":no_entry_sign:", "icon":"🚫"},
{"emoji":":no_mobile_phones:", "icon":"📵"},
{"emoji":":no_mouth:", "icon":"😶"},
{"emoji":":no_pedestrians:", "icon":"🚷"},
{"emoji":":no_smoking:", "icon":"🚭"},
{"emoji":":non-potable_water:", "icon":"🚱"},
{"emoji":":notebook:", "icon":"📓"},
{"emoji":":notebook_with_decorative_cover:", "icon":"📔"},
{"emoji":":notes:", "icon":"🎶"},
{"emoji":":nut_and_bolt:", "icon":"🔩"},
{"emoji":":o2:", "icon":"🅾"},
{"emoji":":o:", "icon":"⭕"},
{"emoji":":ocean:", "icon":"🌊"},
{"emoji":":octopus:", "icon":"🐙"},
{"emoji":":oden:", "icon":"🍢"},
{"emoji":":office:", "icon":"🏢"},
{"emoji":":ok:", "icon":"🆗"},
{"emoji":":on:", "icon":"🔛"},
{"emoji":":oncoming_automobile:", "icon":"🚘"},
{"emoji":":oncoming_bus:", "icon":"🚍"},
{"emoji":":oncoming_police_car:", "icon":"🚔"},
{"emoji":":oncoming_taxi:", "icon":"🚖"},
{"emoji":":one:", "icon":"1⃣"},
{"emoji":":open_file_folder:", "icon":"📂"},
{"emoji":":open_mouth:", "icon":"😮"},
{"emoji":":ophiuchus:", "icon":"⛎"},
{"emoji":":orange_book:", "icon":"📙"},
{"emoji":":outbox_tray:", "icon":"📤"},
{"emoji":":ox:", "icon":"🐂"},
{"emoji":":package:", "icon":"📦"},
{"emoji":":page_facing_up:", "icon":"📄"},
{"emoji":":page_with_curl:", "icon":"📃"},
{"emoji":":pager:", "icon":"📟"},
{"emoji":":palm_tree:", "icon":"🌴"},
{"emoji":":panda_face:", "icon":"🐼"},
{"emoji":":paperclip:", "icon":"📎"},
{"emoji":":parking:", "icon":"🅿"},
{"emoji":":part_alternation_mark:", "icon":"〽"},
{"emoji":":partly_sunny:", "icon":"⛅"},
{"emoji":":passport_control:", "icon":"🛂"},
{"emoji":":paw_prints:", "icon":"🐾"},
{"emoji":":peach:", "icon":"🍑"},
{"emoji":":pear:", "icon":"🍐"},
{"emoji":":pencil2:", "icon":"✏"},
{"emoji":":pencil:", "icon":"📝"},
{"emoji":":penguin:", "icon":"🐧"},
{"emoji":":pensive:", "icon":"😔"},
{"emoji":":performing_arts:", "icon":"🎭"},
{"emoji":":persevere:", "icon":"😣"},
{"emoji":":phone:", "icon":"☎"},
{"emoji":":pig2:", "icon":"🐖"},
{"emoji":":pig:", "icon":"🐷"},
{"emoji":":pig_nose:", "icon":"🐽"},
{"emoji":":pill:", "icon":"💊"},
{"emoji":":pineapple:", "icon":"🍍"},
{"emoji":":pisces:", "icon":"♓"},
{"emoji":":pizza:", "icon":"🍕"},
{"emoji":":police_car:", "icon":"🚓"},
{"emoji":":poodle:", "icon":"🐩"},
{"emoji":":poop:", "icon":"💩"},
{"emoji":":post_office:", "icon":"🏣"},
{"emoji":":postal_horn:", "icon":"📯"},
{"emoji":":postbox:", "icon":"📮"},
{"emoji":":potable_water:", "icon":"🚰"},
{"emoji":":pouch:", "icon":"👝"},
{"emoji":":poultry_leg:", "icon":"🍗"},
{"emoji":":pound:", "icon":"💷"},
{"emoji":":pouting_cat:", "icon":"😾"},
{"emoji":":purple_heart:", "icon":"💜"},
{"emoji":":purse:", "icon":"👛"},
{"emoji":":pushpin:", "icon":"📌"},
{"emoji":":put_litter_in_its_place:", "icon":"🚮"},
{"emoji":":question:", "icon":"❓"},
{"emoji":":rabbit2:", "icon":"🐇"},
{"emoji":":rabbit:", "icon":"🐰"},
{"emoji":":racehorse:", "icon":"🐎"},
{"emoji":":radio:", "icon":"📻"},
{"emoji":":radio_button:", "icon":"🔘"},
{"emoji":":rage:", "icon":"😡"},
{"emoji":":railway_car:", "icon":"🚃"},
{"emoji":":rainbow:", "icon":"🌈"},
{"emoji":":ram:", "icon":"🐏"},
{"emoji":":ramen:", "icon":"🍜"},
{"emoji":":rat:", "icon":"🐀"},
{"emoji":":recycle:", "icon":"♻"},
{"emoji":":red_book:", "icon":"📕"},
{"emoji":":red_car:", "icon":"🚗"},
{"emoji":":red_circle:", "icon":"🔴"},
{"emoji":":registered:", "icon":"®"},
{"emoji":":relaxed:", "icon":"☺"},
{"emoji":":relieved:", "icon":"😌"},
{"emoji":":repeat:", "icon":"🔁"},
{"emoji":":repeat_one:", "icon":"🔂"},
{"emoji":":restroom:", "icon":"🚻"},
{"emoji":":revolving_hearts:", "icon":"💞"},
{"emoji":":rewind:", "icon":"⏪"},
{"emoji":":ribbon:", "icon":"🎀"},
{"emoji":":rice:", "icon":"🍚"},
{"emoji":":rice_ball:", "icon":"🍙"},
{"emoji":":rice_cracker:", "icon":"🍘"},
{"emoji":":rice_scene:", "icon":"🎑"},
{"emoji":":ring:", "icon":"💍"},
{"emoji":":rocket:", "icon":"🚀"},
{"emoji":":roller_coaster:", "icon":"🎢"},
{"emoji":":rooster:", "icon":"🐓"},
{"emoji":":rose:", "icon":"🌹"},
{"emoji":":rotating_light:", "icon":"🚨"},
{"emoji":":round_pushpin:", "icon":"📍"},
{"emoji":":ru:", "icon":"🇷🇺"},
{"emoji":":rugby_football:", "icon":"🏉"},
{"emoji":":running_shirt_with_sash:", "icon":"🎽"},
{"emoji":":sa:", "icon":"🈂"},
{"emoji":":sagittarius:", "icon":"♐"},
{"emoji":":sake:", "icon":"🍶"},
{"emoji":":sandal:", "icon":"👡"},
{"emoji":":satellite:", "icon":"📡"},
{"emoji":":saxophone:", "icon":"🎷"},
{"emoji":":school:", "icon":"🏫"},
{"emoji":":school_satchel:", "icon":"🎒"},
{"emoji":":scissors:", "icon":"✂"},
{"emoji":":scorpius:", "icon":"♏"},
{"emoji":":scream:", "icon":"😱"},
{"emoji":":scream_cat:", "icon":"🙀"},
{"emoji":":scroll:", "icon":"📜"},
{"emoji":":seat:", "icon":"💺"},
{"emoji":":secret:", "icon":"㊙"},
{"emoji":":see_no_evil:", "icon":"🙈"},
{"emoji":":seedling:", "icon":"🌱"},
{"emoji":":seven:", "icon":"7⃣"},
{"emoji":":shaved_ice:", "icon":"🍧"},
{"emoji":":sheep:", "icon":"🐑"},
{"emoji":":shell:", "icon":"🐚"},
{"emoji":":ship:", "icon":"🚢"},
{"emoji":":shit:", "icon":"💩"},
{"emoji":":shoe:", "icon":"👟"},
{"emoji":":signal_strength:", "icon":"📶"},
{"emoji":":six:", "icon":"6⃣"},
{"emoji":":six_pointed_star:", "icon":"🔯"},
{"emoji":":ski:", "icon":"🎿"},
{"emoji":":skull:", "icon":"💀"},
{"emoji":":sleeping:", "icon":"😴"},
{"emoji":":sleepy:", "icon":"😪"},
{"emoji":":slot_machine:", "icon":"🎰"},
{"emoji":":small_blue_diamond:", "icon":"🔹"},
{"emoji":":small_orange_diamond:", "icon":"🔸"},
{"emoji":":small_red_triangle:", "icon":"🔺"},
{"emoji":":small_red_triangle_down:", "icon":"🔻"},
{"emoji":":smile:", "icon":"😄"},
{"emoji":":smile_cat:", "icon":"😸"},
{"emoji":":smiley:", "icon":"😃"},
{"emoji":":smiling_imp:", "icon":"😈"},
{"emoji":":smirk:", "icon":"😏"},
{"emoji":":smirk_cat:", "icon":"😼"},
{"emoji":":smoking:", "icon":"🚬"},
{"emoji":":snail:", "icon":"🐌"},
{"emoji":":snake:", "icon":"🐍"},
{"emoji":":snowboarder:", "icon":"🏂"},
{"emoji":":snowflake:", "icon":"❄"},
{"emoji":":snowman:", "icon":"⛄"},
{"emoji":":sob:", "icon":"😭"},
{"emoji":":soccer:", "icon":"⚽"},
{"emoji":":soon:", "icon":"🔜"},
{"emoji":":sos:", "icon":"🆘"},
{"emoji":":sound2:", "icon":"🔊"},
{"emoji":":sound:", "icon":"🔉"},
{"emoji":":space_invader:", "icon":"👾"},
{"emoji":":spades:", "icon":"♠"},
{"emoji":":spaghetti:", "icon":"🍝"},
{"emoji":":sparkle:", "icon":"❇"},
{"emoji":":sparkler:", "icon":"🎇"},
{"emoji":":sparkles:", "icon":"✨"},
{"emoji":":sparkling_heart:", "icon":"💖"},
{"emoji":":speak_no_evil:", "icon":"🙊"},
{"emoji":":speaker:", "icon":"🔈"},
{"emoji":":speech_balloon:", "icon":"💬"},
{"emoji":":speedboat:", "icon":"🚤"},
{"emoji":":star2:", "icon":"🌟"},
{"emoji":":star:", "icon":"⭐"},
{"emoji":":stars:", "icon":"🌠"},
{"emoji":":station:", "icon":"🚉"},
{"emoji":":statue_of_liberty:", "icon":"🗽"},
{"emoji":":steam_locomotive:", "icon":"🚂"},
{"emoji":":stew:", "icon":"🍲"},
{"emoji":":straight_ruler:", "icon":"📏"},
{"emoji":":strawberry:", "icon":"🍓"},
{"emoji":":stuck_out_tongue:", "icon":"😛"},
{"emoji":":stuck_out_tongue_closed_eyes:", "icon":"😝"},
{"emoji":":stuck_out_tongue_winking_eye:", "icon":"😜"},
{"emoji":":sun_with_face:", "icon":"🌞"},
{"emoji":":sunflower:", "icon":"🌻"},
{"emoji":":sunglasses:", "icon":"😎"},
{"emoji":":sunny:", "icon":"☀"},
{"emoji":":sunrise:", "icon":"🌅"},
{"emoji":":sunrise_over_mountains:", "icon":"🌄"},
{"emoji":":sushi:", "icon":"🍣"},
{"emoji":":suspension_railway:", "icon":"🚟"},
{"emoji":":sweat:", "icon":"😓"},
{"emoji":":sweat_drops:", "icon":"💦"},
{"emoji":":sweat_smile:", "icon":"😅"},
{"emoji":":sweet_potato:", "icon":"🍠"},
{"emoji":":symbols:", "icon":"🔣"},
{"emoji":":syringe:", "icon":"💉"},
{"emoji":":tada:", "icon":"🎉"},
{"emoji":":tanabata_tree:", "icon":"🎋"},
{"emoji":":tangerine:", "icon":"🍊"},
{"emoji":":taurus:", "icon":"♉"},
{"emoji":":taxi:", "icon":"🚕"},
{"emoji":":tea:", "icon":"🍵"},
{"emoji":":telephone:", "icon":"☎"},
{"emoji":":telephone_receiver:", "icon":"📞"},
{"emoji":":telescope:", "icon":"🔭"},
{"emoji":":tennis:", "icon":"🎾"},
{"emoji":":tent:", "icon":"⛺"},
{"emoji":":thought_balloon:", "icon":"💭"},
{"emoji":":three:", "icon":"3⃣"},
{"emoji":":ticket:", "icon":"🎫"},
{"emoji":":tiger2:", "icon":"🐅"},
{"emoji":":tiger:", "icon":"🐯"},
{"emoji":":tired_face:", "icon":"😫"},
{"emoji":":tm:", "icon":"™"},
{"emoji":":toilet:", "icon":"🚽"},
{"emoji":":tokyo_tower:", "icon":"🗼"},
{"emoji":":tomato:", "icon":"🍅"},
{"emoji":":top:", "icon":"🔝"},
{"emoji":":tractor:", "icon":"🚜"},
{"emoji":":traffic_light:", "icon":"🚥"},
{"emoji":":train:", "icon":"🚋"},
{"emoji":":train_in_tunnel:", "icon":"🚇"},
{"emoji":":tram:", "icon":"🚊"},
{"emoji":":triangular_flag_on_post:", "icon":"🚩"},
{"emoji":":triangular_ruler:", "icon":"📐"},
{"emoji":":trident:", "icon":"🔱"},
{"emoji":":triumph:", "icon":"😤"},
{"emoji":":trolleybus:", "icon":"🚎"},
{"emoji":":tropical_drink:", "icon":"🍹"},
{"emoji":":tropical_fish:", "icon":"🐠"},
{"emoji":":truck:", "icon":"🚚"},
{"emoji":":trumpet:", "icon":"🎺"},
{"emoji":":tshirt:", "icon":"👕"},
{"emoji":":tulip:", "icon":"🌷"},
{"emoji":":turtle:", "icon":"🐢"},
{"emoji":":tv:", "icon":"📺"},
{"emoji":":twisted_rightwards_arrows:", "icon":"🔀"},
{"emoji":":two:", "icon":"2⃣"},
{"emoji":":two_hearts:", "icon":"💕"},
{"emoji":":two_men_holding_hands:", "icon":"👬"},
{"emoji":":two_women_holding_hands:", "icon":"👭"},
{"emoji":":u5272:", "icon":"🈹"},
{"emoji":":u5408:", "icon":"🈴"},
{"emoji":":u55b6:", "icon":"🈺"},
{"emoji":":u6307:", "icon":"🈯"},
{"emoji":":u6708:", "icon":"🈷"},
{"emoji":":u6709:", "icon":"🈶"},
{"emoji":":u6e80:", "icon":"🈵"},
{"emoji":":u7121:", "icon":"🈚"},
{"emoji":":u7533:", "icon":"🈸"},
{"emoji":":u7981:", "icon":"🈲"},
{"emoji":":u7a7a:", "icon":"🈳"},
{"emoji":":uk:", "icon":"🇬🇧"},
{"emoji":":umbrella:", "icon":"☔"},
{"emoji":":unamused:", "icon":"😒"},
{"emoji":":underage:", "icon":"🔞"},
{"emoji":":unlock:", "icon":"🔓"},
{"emoji":":up:", "icon":"🆙"},
{"emoji":":us:", "icon":"🇺🇸"},
{"emoji":":vertical_traffic_light:", "icon":"🚦"},
{"emoji":":vhs:", "icon":"📼"},
{"emoji":":vibration_mode:", "icon":"📳"},
{"emoji":":video_camera:", "icon":"📹"},
{"emoji":":video_game:", "icon":"🎮"},
{"emoji":":violin:", "icon":"🎸"},
{"emoji":":virgo:", "icon":"♍"},
{"emoji":":volcano:", "icon":"🌋"},
{"emoji":":vs:", "icon":"🆚"},
{"emoji":":waning_crescent_moon:", "icon":"🌘"},
{"emoji":":waning_gibbous_moon:", "icon":"🌖"},
{"emoji":":warning:", "icon":"⚠"},
{"emoji":":watch:", "icon":"⌚"},
{"emoji":":water_buffalo:", "icon":"🐃"},
{"emoji":":watermelon:", "icon":"🍉"},
{"emoji":":wavy_dash:", "icon":"〰"},
{"emoji":":waxing_crescent_moon:", "icon":"🌒"},
{"emoji":":waxing_gibbous_moon:", "icon":"🌔"},
{"emoji":":wc:", "icon":"🚾"},
{"emoji":":weary:", "icon":"😩"},
{"emoji":":wedding:", "icon":"💒"},
{"emoji":":whale2:", "icon":"🐋"},
{"emoji":":whale:", "icon":"🐳"},
{"emoji":":wheelchair:", "icon":"♿"},
{"emoji":":white_check_mark:", "icon":"✅"},
{"emoji":":white_circle:", "icon":"⚪"},
{"emoji":":white_flower:", "icon":"💮"},
{"emoji":":white_large_square:", "icon":"⬜"},
{"emoji":":white_medium_small_square:", "icon":"◽"},
{"emoji":":white_medium_square:", "icon":"◻"},
{"emoji":":white_small_square:", "icon":"▫"},
{"emoji":":white_square_button:", "icon":"🔳"},
{"emoji":":wind_chime:", "icon":"🎐"},
{"emoji":":wine_glass:", "icon":"🍷"},
{"emoji":":wink:", "icon":"😉"},
{"emoji":":wolf:", "icon":"🐺"},
{"emoji":":womans_clothes:", "icon":"👚"},
{"emoji":":womans_hat:", "icon":"👒"},
{"emoji":":womens:", "icon":"🚺"},
{"emoji":":worried:", "icon":"😟"},
{"emoji":":wrench:", "icon":"🔧"},
{"emoji":":x:", "icon":"❌"},
{"emoji":":yellow_heart:", "icon":"💛"},
{"emoji":":yen:", "icon":"💴"},
{"emoji":":yum:", "icon":"😋"},
{"emoji":":zap:", "icon":"⚡"},
{"emoji":":zero:", "icon":"0⃣"},
{"emoji":":zzz:", "icon":"💤"}
]};
	var items = json.items;
	var autocomplete_init = false;
	var emojiIndex = 0;

	function doGetCaretPosition (element1)
	{
		var caretOffset = 0;
		var range = window.getSelection().getRangeAt(0);
		var preCaretRange = range.cloneRange();
		preCaretRange.selectNodeContents(element1);
		preCaretRange.setEnd(range.endContainer, range.endOffset);
		caretOffset = preCaretRange.toString().length;
		return caretOffset;
	}

//keyup function
$(document).keyup(function( event ) {
	var index = doGetCaretPosition(document.getElementsByClassName("input")[1]);
	var guncelString = document.getElementsByClassName("input")[1].innerText;
	var emoji_string = guncelString.substring(0, index);
	var emoji_start_pos = emoji_string.lastIndexOf(":");
	var emoji_filter = guncelString.substring(emoji_start_pos,index);
	var keycode = event.keyCode;

if(guncelString.indexOf(':') > -1 && event.keyCode!=16 && event.keyCode!=38 && event.keyCode!=39 && event.keyCode!=37 && event.keyCode!=40 && event.keyCode != 13){ //except enter keycode
	filter_emojis(emoji_filter,event);
}
if (guncelString.indexOf(':') == -1 ){
	document.getElementsByClassName("autocomplete_main")[0].innerHTML = "";
	document.getElementsByClassName("autocomplete_main")[0].style.padding = "0px";
}
if (keycode == 27){
	document.getElementsByClassName("autocomplete_main")[0].innerHTML = "";
	document.getElementsByClassName("autocomplete_main")[0].style.padding = "0px";
}
if(document.getElementsByClassName("emoji-shortcut")[0] != undefined && document.getElementsByClassName("autocomplete_main")[0].innerText != ""){
	document.getElementsByClassName("input")[1].addEventListener("keydown", function(e) {
		if([37, 38, 39, 40, 13].indexOf(e.keyCode) > -1 && document.getElementsByClassName("autocomplete_main")[0].innerText != "") {
			e.preventDefault();
			if(e.preventDefault){
            e.preventDefault();
        }
         if (e.stopPropagation) {
            e.stopPropagation();
         }
        
			if(e.keyCode == 13){
				index = doGetCaretPosition(document.getElementsByClassName("input")[1]);
				guncelString = document.getElementsByClassName("input")[1].innerText;
				emoji_string = guncelString.substring(0, index);
				emoji_start_pos = emoji_string.lastIndexOf(":");
				emoji_filter = guncelString.substring(emoji_start_pos,index);
				var emojiUTF = document.getElementsByClassName("autocomplete_main")[0].getElementsByClassName("emoji")[emojiIndex].innerHTML;
				guncelString = guncelString.replace(emoji_filter, emojiUTF);
				//window.alert(guncelString);
				//document.getElementsByClassName("input")[1].innerText = guncelString;
				//window.alert(guncelString);
				emojiIndex = 0;
				document.getElementsByClassName("autocomplete_main")[0].innerHTML = "";
				document.getElementsByClassName("autocomplete_main")[0].style.padding = "0px";
				//console.log(guncelString);
				document.getElementsByClassName("input")[1].innerText = "";
				document.execCommand('insertHtml', null, guncelString);
				//document.execCommand('insertText', null, guncelString);
				//document.getElementsByClassName("pane-chat-tile-container")[0] = this.value.length;
				return false;
			}
		}
	}, false);
	switch(event.keyCode){
		case 38:
		event.preventDefault();
		nextItem(emojiIndex);
		break;
		case 39:
		event.preventDefault();
		nextItem(emojiIndex);
		break;
		case 40:
		event.preventDefault();
		previousItem(emojiIndex);
		break;
		case 37:
		event.preventDefault();
		previousItem(emojiIndex);
		break;

	}

}
return false;
});

//creating autocomplete div
function create_autocomplete()
{
	if(!autocomplete_init || document.getElementsByClassName("autocomplete_main")[0] == undefined){
		var parent_div = document.getElementsByClassName("pane-chat-tile-container")[0];
		var autocomplete_div = document.createElement("div");

		autocomplete_div.classList.add('autocomplete_main');
		autocomplete_div.style.textAlign = "center";

		parent_div.parentNode.insertBefore(autocomplete_div, parent_div.nextSibling);
		autocomplete_div.style.overflow = 'hidden';
		autocomplete_div.style.color = '#009688';
		autocomplete_div.style.backgroundColor = '#f3f0ef';
		autocomplete_div.style.padding = '10px';
		autocomplete_div.style.width = '100%';
		autocomplete_init = true;



	}
}

//filtering emojis
function filter_emojis(filtered_string, event)
{
	var size = 0;
	create_autocomplete();
	var emojis = document.getElementsByClassName("autocomplete_main")[0];
	emojis.innerHTML = '';
	for(var i = 0; i < items.length; i++)
	{
		if(items[i].emoji.indexOf(filtered_string) > -1){
			var div = document.createElement("div");
			div.classList.add("emoji-shortcut");
			var h5 = document.createElement("h5");
			h5.innerHTML = items[i].emoji;
			div.appendChild(h5);
			var p = document.createElement("p");
			p.innerHTML = items[i].icon;
			p.classList.add("emoji");
			p.style.backgroundImage = "none";
			p.style.paddingTop = "5px";
			div.appendChild(p);
			emojis.appendChild(div);
			div.style.float = "left";
			div.style.padding = "5px";	
			size++;
			if(size>40)
				break;
		}
	}
	highlightItem(0);
}

function nextItem(activeIndex){
	var activeShortucts = document.getElementsByClassName("emoji-shortcut");
	var activeCount = activeShortucts.length;
	if(activeIndex + 1 >= activeCount){
		highlightItem(0);
		emojiIndex = 0;}
		else {
			highlightItem(activeIndex + 1);
			emojiIndex++;
		}
	}

	function previousItem(activeIndex){
		var activeShortucts = document.getElementsByClassName("emoji-shortcut");
		var activeCount = activeShortucts.length;
		if(activeIndex == 0){
			highlightItem(activeCount - 1);
			emojiIndex = activeCount - 1;}
			else {
				highlightItem(activeIndex - 1);
				emojiIndex--;
			}
		}

		function highlightItem(emoIndex){
			var itemtobeHighlighted = document.getElementsByClassName("emoji-shortcut")[emoIndex];
			var dehighlighList = document.getElementsByClassName("emoji-shortcut");
			for(var i = 0; i < dehighlighList.length; i++){
				document.getElementsByClassName("emoji-shortcut")[i].style.backgroundColor = 'transparent';
			}
			itemtobeHighlighted.style.backgroundColor = '#ccc';
		}

	});
import fs from 'fs';
import { join, resolve } from 'path';

export function getFilesRecursive(srcpath: string) {
  const result: string[] = [];

  fs.readdirSync(resolve(srcpath)).forEach((path) => {
    const isDirectory = fs.statSync(join(srcpath, path)).isDirectory();

    if (isDirectory) {
      result.push(...getFilesRecursive(join(srcpath, path)));
    } else {
      result.push(join(srcpath, path));
    }
  });

  return result;
}

export function GetDate(day: Date): [string, string, string] {
  return [
    day.getFullYear().toString(),
    (day.getMonth() + 1 < 10 ? '0' : '') + (day.getMonth() + 1).toString(),
    day.getDate().toString(),
  ];
}

export function GetUTCdate(): Date {
  return new Date(Date.now() - (new Date().getTimezoneOffset() / 60) * 1000);
}

export enum TimeZone {
  'Europe/Andorra' = 'Europe/Andorra',
  'Asia/Dubai' = 'Asia/Dubai',
  'Asia/Kabul' = 'Asia/Kabul',
  'Europe/Tirane' = 'Europe/Tirane',
  'Asia/Yerevan' = 'Asia/Yerevan',
  'Antarctica/Casey' = 'Antarctica/Casey',
  'Antarctica/Davis' = 'Antarctica/Davis',
  'Antarctica/DumontDUrville' = 'Antarctica/DumontDUrville',
  'Antarctica/Mawson' = 'Antarctica/Mawson',
  'Antarctica/Palmer' = 'Antarctica/Palmer',
  'Antarctica/Rothera' = 'Antarctica/Rothera',
  'Antarctica/Syowa' = 'Antarctica/Syowa',
  'Antarctica/Troll' = 'Antarctica/Troll',
  'Antarctica/Vostok' = 'Antarctica/Vostok',
  'America/Argentina/Buenos_Aires' = 'America/Argentina/Buenos_Aires',
  'America/Argentina/Cordoba' = 'America/Argentina/Cordoba',
  'America/Argentina/Salta' = 'America/Argentina/Salta',
  'America/Argentina/Jujuy' = 'America/Argentina/Jujuy',
  'America/Argentina/Tucuman' = 'America/Argentina/Tucuman',
  'America/Argentina/Catamarca' = 'America/Argentina/Catamarca',
  'America/Argentina/La_Rioja' = 'America/Argentina/La_Rioja',
  'America/Argentina/San_Juan' = 'America/Argentina/San_Juan',
  'America/Argentina/Mendoza' = 'America/Argentina/Mendoza',
  'America/Argentina/San_Luis' = 'America/Argentina/San_Luis',
  'America/Argentina/Rio_Gallegos' = 'America/Argentina/Rio_Gallegos',
  'America/Argentina/Ushuaia' = 'America/Argentina/Ushuaia',
  'Pacific/Pago_Pago' = 'Pacific/Pago_Pago',
  'Europe/Vienna' = 'Europe/Vienna',
  'Australia/Lord_Howe' = 'Australia/Lord_Howe',
  'Antarctica/Macquarie' = 'Antarctica/Macquarie',
  'Australia/Hobart' = 'Australia/Hobart',
  'Australia/Currie' = 'Australia/Currie',
  'Australia/Melbourne' = 'Australia/Melbourne',
  'Australia/Sydney' = 'Australia/Sydney',
  'Australia/Broken_Hill' = 'Australia/Broken_Hill',
  'Australia/Brisbane' = 'Australia/Brisbane',
  'Australia/Lindeman' = 'Australia/Lindeman',
  'Australia/Adelaide' = 'Australia/Adelaide',
  'Australia/Darwin' = 'Australia/Darwin',
  'Australia/Perth' = 'Australia/Perth',
  'Australia/Eucla' = 'Australia/Eucla',
  'Asia/Baku' = 'Asia/Baku',
  'America/Barbados' = 'America/Barbados',
  'Asia/Dhaka' = 'Asia/Dhaka',
  'Europe/Brussels' = 'Europe/Brussels',
  'Europe/Sofia' = 'Europe/Sofia',
  'Atlantic/Bermuda' = 'Atlantic/Bermuda',
  'Asia/Brunei' = 'Asia/Brunei',
  'America/La_Paz' = 'America/La_Paz',
  'America/Noronha' = 'America/Noronha',
  'America/Belem' = 'America/Belem',
  'America/Fortaleza' = 'America/Fortaleza',
  'America/Recife' = 'America/Recife',
  'America/Araguaina' = 'America/Araguaina',
  'America/Maceio' = 'America/Maceio',
  'America/Bahia' = 'America/Bahia',
  'America/Sao_Paulo' = 'America/Sao_Paulo',
  'America/Campo_Grande' = 'America/Campo_Grande',
  'America/Cuiaba' = 'America/Cuiaba',
  'America/Santarem' = 'America/Santarem',
  'America/Porto_Velho' = 'America/Porto_Velho',
  'America/Boa_Vista' = 'America/Boa_Vista',
  'America/Manaus' = 'America/Manaus',
  'America/Eirunepe' = 'America/Eirunepe',
  'America/Rio_Branco' = 'America/Rio_Branco',
  'America/Nassau' = 'America/Nassau',
  'Asia/Thimphu' = 'Asia/Thimphu',
  'Europe/Minsk' = 'Europe/Minsk',
  'America/Belize' = 'America/Belize',
  'America/St_Johns' = 'America/St_Johns',
  'America/Halifax' = 'America/Halifax',
  'America/Glace_Bay' = 'America/Glace_Bay',
  'America/Moncton' = 'America/Moncton',
  'America/Goose_Bay' = 'America/Goose_Bay',
  'America/Blanc-Sablon' = 'America/Blanc-Sablon',
  'America/Toronto' = 'America/Toronto',
  'America/Nipigon' = 'America/Nipigon',
  'America/Thunder_Bay' = 'America/Thunder_Bay',
  'America/Iqaluit' = 'America/Iqaluit',
  'America/Pangnirtung' = 'America/Pangnirtung',
  'America/Atikokan' = 'America/Atikokan',
  'America/Winnipeg' = 'America/Winnipeg',
  'America/Rainy_River' = 'America/Rainy_River',
  'America/Resolute' = 'America/Resolute',
  'America/Rankin_Inlet' = 'America/Rankin_Inlet',
  'America/Regina' = 'America/Regina',
  'America/Swift_Current' = 'America/Swift_Current',
  'America/Edmonton' = 'America/Edmonton',
  'America/Cambridge_Bay' = 'America/Cambridge_Bay',
  'America/Yellowknife' = 'America/Yellowknife',
  'America/Inuvik' = 'America/Inuvik',
  'America/Creston' = 'America/Creston',
  'America/Dawson_Creek' = 'America/Dawson_Creek',
  'America/Fort_Nelson' = 'America/Fort_Nelson',
  'America/Vancouver' = 'America/Vancouver',
  'America/Whitehorse' = 'America/Whitehorse',
  'America/Dawson' = 'America/Dawson',
  'Indian/Cocos' = 'Indian/Cocos',
  'Europe/Zurich' = 'Europe/Zurich',
  'Africa/Abidjan' = 'Africa/Abidjan',
  'Pacific/Rarotonga' = 'Pacific/Rarotonga',
  'America/Santiago' = 'America/Santiago',
  'America/Punta_Arenas' = 'America/Punta_Arenas',
  'Pacific/Easter' = 'Pacific/Easter',
  'Asia/Shanghai' = 'Asia/Shanghai',
  'Asia/Urumqi' = 'Asia/Urumqi',
  'America/Bogota' = 'America/Bogota',
  'America/Costa_Rica' = 'America/Costa_Rica',
  'America/Havana' = 'America/Havana',
  'Atlantic/Cape_Verde' = 'Atlantic/Cape_Verde',
  'America/Curacao' = 'America/Curacao',
  'Indian/Christmas' = 'Indian/Christmas',
  'Asia/Nicosia' = 'Asia/Nicosia',
  'Asia/Famagusta' = 'Asia/Famagusta',
  'Europe/Prague' = 'Europe/Prague',
  'Europe/Berlin' = 'Europe/Berlin',
  'Europe/Copenhagen' = 'Europe/Copenhagen',
  'America/Santo_Domingo' = 'America/Santo_Domingo',
  'Africa/Algiers' = 'Africa/Algiers',
  'America/Guayaquil' = 'America/Guayaquil',
  'Pacific/Galapagos' = 'Pacific/Galapagos',
  'Europe/Tallinn' = 'Europe/Tallinn',
  'Africa/Cairo' = 'Africa/Cairo',
  'Africa/El_Aaiun' = 'Africa/El_Aaiun',
  'Europe/Madrid' = 'Europe/Madrid',
  'Africa/Ceuta' = 'Africa/Ceuta',
  'Atlantic/Canary' = 'Atlantic/Canary',
  'Europe/Helsinki' = 'Europe/Helsinki',
  'Pacific/Fiji' = 'Pacific/Fiji',
  'Atlantic/Stanley' = 'Atlantic/Stanley',
  'Pacific/Chuuk' = 'Pacific/Chuuk',
  'Pacific/Pohnpei' = 'Pacific/Pohnpei',
  'Pacific/Kosrae' = 'Pacific/Kosrae',
  'Atlantic/Faroe' = 'Atlantic/Faroe',
  'Europe/Paris' = 'Europe/Paris',
  'Europe/London' = 'Europe/London',
  'Asia/Tbilisi' = 'Asia/Tbilisi',
  'America/Cayenne' = 'America/Cayenne',
  'Africa/Accra' = 'Africa/Accra',
  'Europe/Gibraltar' = 'Europe/Gibraltar',
  'America/Godthab' = 'America/Godthab',
  'America/Danmarkshavn' = 'America/Danmarkshavn',
  'America/Scoresbysund' = 'America/Scoresbysund',
  'America/Thule' = 'America/Thule',
  'Europe/Athens' = 'Europe/Athens',
  'Atlantic/South_Georgia' = 'Atlantic/South_Georgia',
  'America/Guatemala' = 'America/Guatemala',
  'Pacific/Guam' = 'Pacific/Guam',
  'Africa/Bissau' = 'Africa/Bissau',
  'America/Guyana' = 'America/Guyana',
  'Asia/Hong_Kong' = 'Asia/Hong_Kong',
  'America/Tegucigalpa' = 'America/Tegucigalpa',
  'America/Port-au-Prince' = 'America/Port-au-Prince',
  'Europe/Budapest' = 'Europe/Budapest',
  'Asia/Jakarta' = 'Asia/Jakarta',
  'Asia/Pontianak' = 'Asia/Pontianak',
  'Asia/Makassar' = 'Asia/Makassar',
  'Asia/Jayapura' = 'Asia/Jayapura',
  'Europe/Dublin' = 'Europe/Dublin',
  'Asia/Jerusalem' = 'Asia/Jerusalem',
  'Asia/Kolkata' = 'Asia/Kolkata',
  'Indian/Chagos' = 'Indian/Chagos',
  'Asia/Baghdad' = 'Asia/Baghdad',
  'Asia/Tehran' = 'Asia/Tehran',
  'Atlantic/Reykjavik' = 'Atlantic/Reykjavik',
  'Europe/Rome' = 'Europe/Rome',
  'America/Jamaica' = 'America/Jamaica',
  'Asia/Amman' = 'Asia/Amman',
  'Asia/Tokyo' = 'Asia/Tokyo',
  'Africa/Nairobi' = 'Africa/Nairobi',
  'Asia/Bishkek' = 'Asia/Bishkek',
  'Pacific/Tarawa' = 'Pacific/Tarawa',
  'Pacific/Enderbury' = 'Pacific/Enderbury',
  'Pacific/Kiritimati' = 'Pacific/Kiritimati',
  'Asia/Pyongyang' = 'Asia/Pyongyang',
  'Asia/Seoul' = 'Asia/Seoul',
  'Asia/Almaty' = 'Asia/Almaty',
  'Asia/Qyzylorda' = 'Asia/Qyzylorda',
  'Asia/Qostanay' = 'Asia/Qostanay',
  'Asia/Aqtobe' = 'Asia/Aqtobe',
  'Asia/Aqtau' = 'Asia/Aqtau',
  'Asia/Atyrau' = 'Asia/Atyrau',
  'Asia/Oral' = 'Asia/Oral',
  'Asia/Beirut' = 'Asia/Beirut',
  'Asia/Colombo' = 'Asia/Colombo',
  'Africa/Monrovia' = 'Africa/Monrovia',
  'Europe/Vilnius' = 'Europe/Vilnius',
  'Europe/Luxembourg' = 'Europe/Luxembourg',
  'Europe/Riga' = 'Europe/Riga',
  'Africa/Tripoli' = 'Africa/Tripoli',
  'Africa/Casablanca' = 'Africa/Casablanca',
  'Europe/Monaco' = 'Europe/Monaco',
  'Europe/Chisinau' = 'Europe/Chisinau',
  'Pacific/Majuro' = 'Pacific/Majuro',
  'Pacific/Kwajalein' = 'Pacific/Kwajalein',
  'Asia/Yangon' = 'Asia/Yangon',
  'Asia/Ulaanbaatar' = 'Asia/Ulaanbaatar',
  'Asia/Hovd' = 'Asia/Hovd',
  'Asia/Choibalsan' = 'Asia/Choibalsan',
  'Asia/Macau' = 'Asia/Macau',
  'America/Martinique' = 'America/Martinique',
  'Europe/Malta' = 'Europe/Malta',
  'Indian/Mauritius' = 'Indian/Mauritius',
  'Indian/Maldives' = 'Indian/Maldives',
  'America/Mexico_City' = 'America/Mexico_City',
  'America/Cancun' = 'America/Cancun',
  'America/Merida' = 'America/Merida',
  'America/Monterrey' = 'America/Monterrey',
  'America/Matamoros' = 'America/Matamoros',
  'America/Mazatlan' = 'America/Mazatlan',
  'America/Chihuahua' = 'America/Chihuahua',
  'America/Ojinaga' = 'America/Ojinaga',
  'America/Hermosillo' = 'America/Hermosillo',
  'America/Tijuana' = 'America/Tijuana',
  'America/Bahia_Banderas' = 'America/Bahia_Banderas',
  'Asia/Kuala_Lumpur' = 'Asia/Kuala_Lumpur',
  'Asia/Kuching' = 'Asia/Kuching',
  'Africa/Maputo' = 'Africa/Maputo',
  'Africa/Windhoek' = 'Africa/Windhoek',
  'Pacific/Noumea' = 'Pacific/Noumea',
  'Pacific/Norfolk' = 'Pacific/Norfolk',
  'Africa/Lagos' = 'Africa/Lagos',
  'America/Managua' = 'America/Managua',
  'Europe/Amsterdam' = 'Europe/Amsterdam',
  'Europe/Oslo' = 'Europe/Oslo',
  'Asia/Kathmandu' = 'Asia/Kathmandu',
  'Pacific/Nauru' = 'Pacific/Nauru',
  'Pacific/Niue' = 'Pacific/Niue',
  'Pacific/Auckland' = 'Pacific/Auckland',
  'Pacific/Chatham' = 'Pacific/Chatham',
  'America/Panama' = 'America/Panama',
  'America/Lima' = 'America/Lima',
  'Pacific/Tahiti' = 'Pacific/Tahiti',
  'Pacific/Marquesas' = 'Pacific/Marquesas',
  'Pacific/Gambier' = 'Pacific/Gambier',
  'Pacific/Port_Moresby' = 'Pacific/Port_Moresby',
  'Pacific/Bougainville' = 'Pacific/Bougainville',
  'Asia/Manila' = 'Asia/Manila',
  'Asia/Karachi' = 'Asia/Karachi',
  'Europe/Warsaw' = 'Europe/Warsaw',
  'America/Miquelon' = 'America/Miquelon',
  'Pacific/Pitcairn' = 'Pacific/Pitcairn',
  'America/Puerto_Rico' = 'America/Puerto_Rico',
  'Asia/Gaza' = 'Asia/Gaza',
  'Asia/Hebron' = 'Asia/Hebron',
  'Europe/Lisbon' = 'Europe/Lisbon',
  'Atlantic/Madeira' = 'Atlantic/Madeira',
  'Atlantic/Azores' = 'Atlantic/Azores',
  'Pacific/Palau' = 'Pacific/Palau',
  'America/Asuncion' = 'America/Asuncion',
  'Asia/Qatar' = 'Asia/Qatar',
  'Indian/Reunion' = 'Indian/Reunion',
  'Europe/Bucharest' = 'Europe/Bucharest',
  'Europe/Belgrade' = 'Europe/Belgrade',
  'Europe/Kaliningrad' = 'Europe/Kaliningrad',
  'Europe/Moscow' = 'Europe/Moscow',
  'Europe/Simferopol' = 'Europe/Simferopol',
  'Europe/Kirov' = 'Europe/Kirov',
  'Europe/Astrakhan' = 'Europe/Astrakhan',
  'Europe/Volgograd' = 'Europe/Volgograd',
  'Europe/Saratov' = 'Europe/Saratov',
  'Europe/Ulyanovsk' = 'Europe/Ulyanovsk',
  'Europe/Samara' = 'Europe/Samara',
  'Asia/Yekaterinburg' = 'Asia/Yekaterinburg',
  'Asia/Omsk' = 'Asia/Omsk',
  'Asia/Novosibirsk' = 'Asia/Novosibirsk',
  'Asia/Barnaul' = 'Asia/Barnaul',
  'Asia/Tomsk' = 'Asia/Tomsk',
  'Asia/Novokuznetsk' = 'Asia/Novokuznetsk',
  'Asia/Krasnoyarsk' = 'Asia/Krasnoyarsk',
  'Asia/Irkutsk' = 'Asia/Irkutsk',
  'Asia/Chita' = 'Asia/Chita',
  'Asia/Yakutsk' = 'Asia/Yakutsk',
  'Asia/Khandyga' = 'Asia/Khandyga',
  'Asia/Vladivostok' = 'Asia/Vladivostok',
  'Asia/Ust-Nera' = 'Asia/Ust-Nera',
  'Asia/Magadan' = 'Asia/Magadan',
  'Asia/Sakhalin' = 'Asia/Sakhalin',
  'Asia/Srednekolymsk' = 'Asia/Srednekolymsk',
  'Asia/Kamchatka' = 'Asia/Kamchatka',
  'Asia/Anadyr' = 'Asia/Anadyr',
  'Asia/Riyadh' = 'Asia/Riyadh',
  'Pacific/Guadalcanal' = 'Pacific/Guadalcanal',
  'Indian/Mahe' = 'Indian/Mahe',
  'Africa/Khartoum' = 'Africa/Khartoum',
  'Europe/Stockholm' = 'Europe/Stockholm',
  'Asia/Singapore' = 'Asia/Singapore',
  'America/Paramaribo' = 'America/Paramaribo',
  'Africa/Juba' = 'Africa/Juba',
  'Africa/Sao_Tome' = 'Africa/Sao_Tome',
  'America/El_Salvador' = 'America/El_Salvador',
  'Asia/Damascus' = 'Asia/Damascus',
  'America/Grand_Turk' = 'America/Grand_Turk',
  'Africa/Ndjamena' = 'Africa/Ndjamena',
  'Indian/Kerguelen' = 'Indian/Kerguelen',
  'Asia/Bangkok' = 'Asia/Bangkok',
  'Asia/Dushanbe' = 'Asia/Dushanbe',
  'Pacific/Fakaofo' = 'Pacific/Fakaofo',
  'Asia/Dili' = 'Asia/Dili',
  'Asia/Ashgabat' = 'Asia/Ashgabat',
  'Africa/Tunis' = 'Africa/Tunis',
  'Pacific/Tongatapu' = 'Pacific/Tongatapu',
  'Europe/Istanbul' = 'Europe/Istanbul',
  'America/Port_of_Spain' = 'America/Port_of_Spain',
  'Pacific/Funafuti' = 'Pacific/Funafuti',
  'Asia/Taipei' = 'Asia/Taipei',
  'Europe/Kiev' = 'Europe/Kiev',
  'Europe/Uzhgorod' = 'Europe/Uzhgorod',
  'Europe/Zaporozhye' = 'Europe/Zaporozhye',
  'Pacific/Wake' = 'Pacific/Wake',
  'America/New_York' = 'America/New_York',
  'America/Detroit' = 'America/Detroit',
  'America/Kentucky/Louisville' = 'America/Kentucky/Louisville',
  'America/Kentucky/Monticello' = 'America/Kentucky/Monticello',
  'America/Indiana/Indianapolis' = 'America/Indiana/Indianapolis',
  'America/Indiana/Vincennes' = 'America/Indiana/Vincennes',
  'America/Indiana/Winamac' = 'America/Indiana/Winamac',
  'America/Indiana/Marengo' = 'America/Indiana/Marengo',
  'America/Indiana/Petersburg' = 'America/Indiana/Petersburg',
  'America/Indiana/Vevay' = 'America/Indiana/Vevay',
  'America/Chicago' = 'America/Chicago',
  'America/Indiana/Tell_City' = 'America/Indiana/Tell_City',
  'America/Indiana/Knox' = 'America/Indiana/Knox',
  'America/Menominee' = 'America/Menominee',
  'America/North_Dakota/Center' = 'America/North_Dakota/Center',
  'America/North_Dakota/New_Salem' = 'America/North_Dakota/New_Salem',
  'America/North_Dakota/Beulah' = 'America/North_Dakota/Beulah',
  'America/Denver' = 'America/Denver',
  'America/Boise' = 'America/Boise',
  'America/Phoenix' = 'America/Phoenix',
  'America/Los_Angeles' = 'America/Los_Angeles',
  'America/Anchorage' = 'America/Anchorage',
  'America/Juneau' = 'America/Juneau',
  'America/Sitka' = 'America/Sitka',
  'America/Metlakatla' = 'America/Metlakatla',
  'America/Yakutat' = 'America/Yakutat',
  'America/Nome' = 'America/Nome',
  'America/Adak' = 'America/Adak',
  'Pacific/Honolulu' = 'Pacific/Honolulu',
  'America/Montevideo' = 'America/Montevideo',
  'Asia/Samarkand' = 'Asia/Samarkand',
  'Asia/Tashkent' = 'Asia/Tashkent',
  'America/Caracas' = 'America/Caracas',
  'Asia/Ho_Chi_Minh' = 'Asia/Ho_Chi_Minh',
  'Pacific/Efate' = 'Pacific/Efate',
  'Pacific/Wallis' = 'Pacific/Wallis',
  'Pacific/Apia' = 'Pacific/Apia',
  'Africa/Johannesburg' = 'Africa/Johannesburg',
}

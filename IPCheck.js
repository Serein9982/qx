
// if ($response.statusCode != 200) {
//    $done(Null);
// }
const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return emojis[getRandomInt(emojis.length)]
  }
}

var flags = new Map([[ "AC" , "🇦🇨" ], [ "AF" , "🇦🇫" ], [ "AI" , "🇦🇮" ], [ "AL" , "🇦🇱" ], [ "AM" , "🇦🇲" ],
  [ "AQ" , "🇦🇶" ], [ "AR" , "🇦🇷" ], [ "AS" , "🇦🇸" ], [ "AT" , "🇦🇹" ], [ "AU" , "🇦🇺" ],
  [ "AW" , "🇦🇼" ], [ "AX" , "🇦🇽" ], [ "AZ" , "🇦🇿" ], [ "BB" , "🇧🇧" ], [ "BD" , "🇧🇩" ],
  [ "BE" , "🇧🇪" ], [ "BF" , "🇧🇫" ], [ "BG" , "🇧🇬" ], [ "BH" , "🇧🇭" ], [ "BI" , "🇧🇮" ],
  [ "BJ" , "🇧🇯" ], [ "BM" , "🇧🇲" ], [ "BN" , "🇧🇳" ], [ "BO" , "🇧🇴" ], [ "BR" , "🇧🇷" ],
  [ "BS" , "🇧🇸" ], [ "BT" , "🇧🇹" ], [ "BV" , "🇧🇻" ], [ "BW" , "🇧🇼" ], [ "BY" , "🇧🇾" ],
  [ "BZ" , "🇧🇿" ], [ "CA" , "🇨🇦" ], [ "CF" , "🇨🇫" ], [ "CH" , "🇨🇭" ], [ "CK" , "🇨🇰" ],
  [ "CL" , "🇨🇱" ], [ "CM" , "🇨🇲" ], [ "CN" , "🇨🇳" ], [ "CO" , "🇨🇴" ], [ "CP" , "🇨🇵" ],
  [ "CR" , "🇨🇷" ], [ "CU" , "🇨🇺" ], [ "CV" , "🇨🇻" ], [ "CW" , "🇨🇼" ], [ "CX" , "🇨🇽" ],
  [ "CY" , "🇨🇾" ], [ "CZ" , "🇨🇿" ], [ "DE" , "🇩🇪" ], [ "DG" , "🇩🇬" ], [ "DJ" , "🇩🇯" ],
  [ "DK" , "🇩🇰" ], [ "DM" , "🇩🇲" ], [ "DO" , "🇩🇴" ], [ "DZ" , "🇩🇿" ], [ "EA" , "🇪🇦" ],
  [ "EC" , "🇪🇨" ], [ "EE" , "🇪🇪" ], [ "EG" , "🇪🇬" ], [ "EH" , "🇪🇭" ], [ "ER" , "🇪🇷" ],
  [ "ES" , "🇪🇸" ], [ "ET" , "🇪🇹" ], [ "EU" , "🇪🇺" ], [ "FI" , "🇫🇮" ], [ "FJ" , "🇫🇯" ],
  [ "FK" , "🇫🇰" ], [ "FM" , "🇫🇲" ], [ "FO" , "🇫🇴" ], [ "FR" , "🇫🇷" ], [ "GA" , "🇬🇦" ],
  [ "GB" , "🇬🇧" ], [ "HK" , "🇭🇰" ], [ "ID" , "🇮🇩" ], [ "IE" , "🇮🇪" ], [ "IL" , "🇮🇱" ],
  [ "IM" , "🇮🇲" ], [ "IN" , "🇮🇳" ], [ "IS" , "🇮🇸" ], [ "IT" , "🇮🇹" ], [ "JP" , "🇯🇵" ],
  [ "KR" , "🇰🇷" ], [ "MO" , "🇲🇴" ], [ "MX" , "🇲🇽" ], [ "MY" , "🇲🇾" ], [ "NL" , "🇳🇱" ],
  [ "PH" , "🇵🇭" ], [ "RO" , "🇷🇴" ], [ "RS" , "🇷🇸" ], [ "RU" , "🇷🇺" ], [ "RW" , "🇷🇼" ],
  [ "SA" , "🇸🇦" ], [ "SB" , "🇸🇧" ], [ "SC" , "🇸🇨" ], [ "SD" , "🇸🇩" ], [ "SE" , "🇸🇪" ],
  [ "SG" , "🇸🇬" ], [ "TH" , "🇹🇭" ], [ "TN" , "🇹🇳" ], [ "TO" , "🇹🇴" ], [ "TR" , "🇹🇷" ],
  [ "TT" , "🇹🇹" ], [ "TV" , "🇹🇻" ], [ "TW" , "🇹🇼" ], [ "TZ" , "🇹🇿" ], [ "UA" , "🇺🇦" ],
  [ "UG" , "🇺🇬" ], [ "UM" , "🇺🇲" ], [ "US" , "🇺🇸" ], [ "UY" , "🇺🇾" ], [ "UZ" , "🇺🇿" ],
  [ "VA" , "🇻🇦" ], [ "VC" , "🇻🇨" ], [ "VE" , "🇻🇪" ], [ "VG" , "🇻🇬" ], [ "VI" , "🇻🇮" ],
  [ "VN" , "🇻🇳" ], [ "VU" , "🇻🇺" ], [ "WF" , "🇼🇫" ], [ "WS" , "🇼🇸" ], [ "YE" , "🇾🇪" ],
  [ "YT" , "🇾🇹" ], [ "ZA" , "🇿🇦" ], [ "ZM" , "🇿🇲" ], [ "ZW" , "🇿🇼" ]]);
var body = $response.body;
var obj = JSON.parse(body);
var title = flags.get(obj['countryCode']) + ' '+ obj['country'];
var subtitle =''+ValidCheck(obj['city'])+'-'+'('+obj['org']+')'+'';
var ip = obj['query'];
var description = obj['country'] + '-' +ValidCheck(obj['city']) + '\n' + obj['org'] + '\n'+obj['ipName']+ '\n' + obj['query'];

$done({title, subtitle, ip, description});
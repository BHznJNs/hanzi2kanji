/**
 * @author cloneko https://github.com/cloneko
 * The codes below are modified from this repo:
 * https://github.com/cloneko/kana2romaji
 */

export default function kana2romaji(string) {

	var arrayedString = string.split('');
	var value = '';

	var triTable = {
        'う゛ぁ': 'va','う゛ぃ' : 'vi', 'う゛ぅ' : 'vu','う゛ぇ' : 've', 'う゛ぉ' : 'vo',
        // extra katakana mappings
        'ヴぁ': 'va', 'ヴぃ': 'vi', 'ヴ': 'vu', 'ヴぇ': 've', 'ヴぉ': 'vo'
	};

	// var biTable = {
    //     'きゃ' : 'kya','きゅ' : 'kyu','きょ' : 'kyo',
    //     'ぎゃ' : 'gya','ぎゅ' : 'gyu','ぎょ' : 'gyo',
    //     'しゃ' : 'sha','しゅ' : 'shu','しょ' : 'sho',
    //     'じゃ' : 'ja','じゅ' : 'ju','じょ' : 'jo',
    //     'ちゃ' : 'cha','ちゅ' : 'chu','ちょ' : 'cho',
    //     'ぢゃ' : 'dya','ぢゅ' : 'dyu','ぢょ' : 'dyo',
    //     'でゃ' : 'dha','でゅ' : 'dhu','でょ' : 'dho',
    //     'にゃ' : 'nya','にゅ' : 'nyu','にょ' : 'nyo',
    //     'ひゃ' : 'hya','ひゅ' : 'hyu','ひょ' : 'hyo',
    //     'びゃ' : 'pya','びゅ' : 'byu','びょ' : 'byo',
    //     'みゃ' : 'mya','みゅ' : 'myu','みょ' : 'myo',
    //     'りゃ' : 'rya','りゅ' : 'ryu','りょ' : 'ryo',
    //     'てぁ' : 'tha','てぃ' : 'thi','てぇ' : 'tee',
    //     'う゛' : 'vu','あ゛' : 'a"',
    //     'っか' : 'kka','っき' : 'kki','っく' : 'kku','っけ' : 'kke','っこ' : 'kko',
    //     'っさ' : 'ssa','っし' : 'sshi','っす' : 'ssu','っせ' : 'sse','っそ' : 'sso',
    //     'った' : 'tta','っち' : 'cchi','っつ' : 'ttu','って' : 'tte','っと' : 'tto',
    //     'っな' : 'nna','っに' : 'nni','っぬ' : 'nnu','っね' : 'nne','っの' : 'nno',
    //     'っは' : 'hha','っひ' : 'hhi','っふ' : 'ffu','っへ' : 'hhe','っほ' : 'hho',
    //     'っま' : 'mma','っみ' : 'mmi','っむ' : 'mmu','っめ' : 'mme','っも' : 'mmo',
    //     'っや' : 'yya', 'っゆ' : 'yyu','っよ' : 'yyo',
    //     'っら' : 'rra','っり' : 'rri','っる' : 'rru','っれ' : 'rre','っろ' : 'rro',
    //     'っわ' : 'wwa',
    //     'っが' : 'gga','っぎ' : 'ggi','っぐ' : 'ggu','っげ' : 'gge','っご' : 'ggo',
    //     'っざ' : 'zza','っじ' : 'jji','っず' : 'zzu','っぜ' : 'zze','っぞ' : 'zzo',
    //     'っだ' : 'dda','っぢ' : 'ddi','っづ' : 'ddu','っで' : 'dde','っど' : 'ddo',
    //     'っば' : 'bba','っび' : 'bbi','っぶ' : 'bbu','っべ' : 'bbe','っぼ' : 'bbo',
    //     'っぱ' : 'ppa','っぴ' : 'ppi','っぷ' : 'ppu','っぺ' : 'ppe','っぽ' : 'ppo'
	// };

    // modified bitable with katakana mappings
    var biTable = {
        'きゃ' : 'kya', 'キャ' : 'kya',
        'きゅ' : 'kyu', 'キュ' : 'kyu',
        'きょ' : 'kyo', 'キョ' : 'kyo',
        'ぎゃ' : 'gya', 'ギャ' : 'gya',
        'ぎゅ' : 'gyu', 'ギュ' : 'gyu',
        'ぎょ' : 'gyo', 'ギョ' : 'gyo',
        'しゃ' : 'sha', 'シャ' : 'sha',
        'しゅ' : 'shu', 'シュ' : 'shu',
        'しょ' : 'sho', 'ショ' : 'sho',
        'じゃ' : 'ja', 'ジャ' : 'ja',
        'じゅ' : 'ju', 'ジュ' : 'ju',
        'じょ' : 'jo', 'ジョ' : 'jo',
        'ちゃ' : 'cha', 'チャ' : 'cha',
        'ちゅ' : 'chu', 'チュ' : 'chu',
        'ちょ' : 'cho', 'チョ' : 'cho',
        'ぢゃ' : 'dya', 'ヂャ' : 'dya',
        'ぢゅ' : 'dyu', 'ヂュ' : 'dyu',
        'ぢょ' : 'dyo', 'ヂョ' : 'dyo',
        'でゃ' : 'dha', 'デャ' : 'dha',
        'でゅ' : 'dhu', 'デュ' : 'dhu',
        'でょ' : 'dho', 'デョ' : 'dho',
        'にゃ' : 'nya', 'ニャ' : 'nya',
        'にゅ' : 'nyu', 'ニュ' : 'nyu',
        'にょ' : 'nyo', 'ニョ' : 'nyo',
        'ひゃ' : 'hya', 'ヒャ' : 'hya',
        'ひゅ' : 'hyu', 'ヒュ' : 'hyu',
        'ひょ' : 'hyo', 'ヒョ' : 'hyo',
        'びゃ' : 'pya', 'ビャ' : 'pya',
        'びゅ' : 'byu', 'ビュ' : 'byu',
        'びょ' : 'byo', 'ビョ' : 'byo',
        'みゃ' : 'mya', 'ミャ' : 'mya',
        'みゅ' : 'myu', 'ミュ' : 'myu',
        'みょ' : 'myo', 'ミョ' : 'myo',
        'りゃ' : 'rya', 'リャ' : 'rya',
        'りゅ' : 'ryu', 'リュ' : 'ryu',
        'りょ' : 'ryo', 'リョ' : 'ryo',
        'てぁ' : 'tha', 'テァ' : 'tha',
        'てぃ' : 'thi', 'ティ' : 'thi',
        'てぇ' : 'tee', 'テェ' : 'tee',
        'う゛' : 'vu', 'ウ゛' : 'vu',
        'あ゛' : 'a"', 'ア゛' : 'a"',
        'っか' : 'kka', 'ッカ' : 'kka',
        'っき' : 'kki', 'ッキ' : 'kki',
        'っく' : 'kku', 'ック' : 'kku',
        'っけ' : 'kke', 'ッケ' : 'kke',
        'っこ' : 'kko', 'ッコ' : 'kko',
        'っさ' : 'ssa', 'ッサ' : 'ssa',
        'っし' : 'sshi', 'ッシ' : 'sshi',
        'っす' : 'ssu', 'ッス' : 'ssu',
        'っせ' : 'sse', 'ッセ' : 'sse',
        'っそ' : 'sso', 'ッソ' : 'sso',
        'った' : 'tta', 'ッタ' : 'tta',
        'っち' : 'cchi', 'ッチ' : 'cchi',
        'っつ' : 'ttu', 'ッツ' : 'ttu',
        'って' : 'tte', 'ッテ' : 'tte',
        'っと' : 'tto', 'ット' : 'tto',
        'っな' : 'nna', 'ッナ' : 'nna',
        'っに' : 'nni', 'ッニ' : 'nni',
        'っぬ' : 'nnu', 'ッヌ' : 'nnu',
        'っね' : 'nne', 'ッネ' : 'nne',
        'っの' : 'nno', 'ッノ' : 'nno',
        'っは' : 'hha', 'ッハ' : 'hha',
        'っひ' : 'hhi', 'ッヒ' : 'hhi',
        'っふ' : 'ffu', 'ッフ' : 'ffu',
        'っへ' : 'hhe', 'ッヘ' : 'hhe',
        'っほ' : 'hho', 'ッホ' : 'hho',
        'っま' : 'mma', 'ッマ' : 'mma',
        'っみ' : 'mmi', 'ッミ' : 'mmi',
        'っむ' : 'mmu', 'ッム' : 'mmu',
        'っめ' : 'mme', 'ッメ' : 'mme',
        'っも' : 'mmo', 'ッモ' : 'mmo',
        'っや' : 'yya', 'ッヤ' : 'yya',
        'っゆ' : 'yyu', 'ッユ' : 'yyu',
        'っよ' : 'yyo', 'ッヨ' : 'yyo',
        'っら' : 'rra', 'ッラ' : 'rra',
        'っり' : 'rri', 'ッリ' : 'rri',
        'っる' : 'rru', 'ッル' : 'rru',
        'っれ' : 'rre', 'ッレ' : 'rre',
        'っろ' : 'rro', 'ッロ' : 'rro',
        'っわ' : 'wwa', 'ッワ' : 'wwa',
        'っが' : 'gga', 'ッガ' : 'gga',
        'っぎ' : 'ggi', 'ッギ' : 'ggi',
        'っぐ' : 'ggu', 'ッグ' : 'ggu',
        'っげ' : 'gge', 'ッゲ' : 'gge',
        'っご' : 'ggo', 'ッゴ' : 'ggo',
        'っざ' : 'zza', 'ッザ' : 'zza',
        'っじ' : 'jji', 'ッジ' : 'jji',
        'っず' : 'zzu', 'ッズ' : 'zzu',
        'っぜ' : 'zze', 'ッゼ' : 'zze',
        'っぞ' : 'zzo', 'ッゾ' : 'zzo',
        'っだ' : 'dda', 'ッダ' : 'dda',
        'っぢ' : 'ddi', 'ッヂ' : 'ddi',
        'っづ' : 'ddu', 'ッヅ' : 'ddu',
        'っで' : 'dde', 'ッデ' : 'dde',
        'っど' : 'ddo', 'ッド' : 'ddo',
        'っば' : 'bba', 'ッバ' : 'bba',
        'っび' : 'bbi', 'ッビ' : 'bbi',
        'っぶ' : 'bbu', 'ッブ' : 'bbu',
        'っべ' : 'bbe', 'ッベ' : 'bbe',
        'っぼ' : 'bbo', 'ッボ' : 'bbo',
        'っぱ' : 'ppa', 'ッパ' : 'ppa',
        'っぴ' : 'ppi', 'ッピ' : 'ppi',
        'っぷ' : 'ppu', 'ップ' : 'ppu',
        'っぺ' : 'ppe', 'ッペ' : 'ppe',
        'っぽ' : 'ppo', 'ッポ' : 'ppo'
    };    

	var uniTable = {
        'あ' : 'a','い' : 'i','う' : 'u','え' : 'e','お' : 'o',
        'か' : 'ka','き' : 'ki','く' : 'ku','け' : 'ke','こ' : 'ko',
        'さ' : 'sa','し' : 'shi','す' : 'su','せ' : 'se','そ' : 'so',
        'た' : 'ta','ち' : 'chi','つ' : 'tsu','て' : 'te','と' : 'to',
        'な' : 'na','に' : 'ni','ぬ' : 'nu','ね' : 'ne','の' : 'no',
        'は' : 'ha','ひ' : 'hi','ふ' : 'fu','へ' : 'he','ほ' : 'ho',
        'ま' : 'ma','み' : 'mi','む' : 'mu','め' : 'me','も' : 'mo',
        'や' : 'ya','ゆ' : 'yu','よ' : 'yo',
        'ら' : 'ra','り' : 'ri','る' : 'ru','れ' : 're','ろ' : 'ro',
        'わ' : 'wa','を' : 'wo','ん' : 'n',
        'が' : 'ga','ぎ' : 'gi','ぐ' : 'gu','げ' : 'ge','ご' : 'go',
        'ざ' : 'za','じ' : 'ji','ず' : 'zu','ぜ' : 'ze','ぞ' : 'zo',
        'だ' : 'da','ぢ' : 'di','づ' : 'du','で' : 'de','ど' : 'do',
        'ば' : 'ba','び' : 'bi','ぶ' : 'bu','べ' : 'be','ぼ' : 'bo',
        'ぱ' : 'pa','ぴ' : 'pi','ぷ' : 'pu','ぺ' : 'pe','ぽ' : 'po',
        'ぁ' : 'xa','ぃ' : 'xi','ぅ' : 'xu','ぇ' : 'xe','ぉ' : 'xo',
        'ゃ' : 'xya','ゅ' : 'xyu','ょ' : 'xyo','っ' : 'xtsu',
        // extra katakana mappings
        'ア' : 'a', 'イ' : 'i', 'ウ' : 'u', 'エ' : 'e', 'オ' : 'o',
        'カ' : 'ka', 'キ' : 'ki', 'ク' : 'ku', 'ケ' : 'ke', 'コ' : 'ko',
        'サ' : 'sa', 'シ' : 'shi', 'ス' : 'su', 'セ' : 'se', 'ソ' : 'so',
        'タ' : 'ta', 'チ' : 'chi', 'ツ' : 'tsu', 'テ' : 'te', 'ト' : 'to',
        'ナ' : 'na', 'ニ' : 'ni', 'ヌ' : 'nu', 'ネ' : 'ne', 'ノ' : 'no',
        'ハ' : 'ha', 'ヒ' : 'hi', 'フ' : 'fu', 'ヘ' : 'he', 'ホ' : 'ho',
        'マ' : 'ma', 'ミ' : 'mi', 'ム' : 'mu', 'メ' : 'me', 'モ' : 'mo',
        'ヤ' : 'ya', 'ユ' : 'yu', 'ヨ' : 'yo',
        'ラ' : 'ra', 'リ' : 'ri', 'ル' : 'ru', 'レ' : 're', 'ロ' : 'ro',
        'ワ' : 'wa', 'ヲ' : 'wo',
        'ン' : 'n',
        'ガ' : 'ga', 'ギ' : 'gi', 'グ' : 'gu', 'ゲ' : 'ge', 'ゴ' : 'go',
        'ザ' : 'za', 'ジ' : 'ji', 'ズ' : 'zu', 'ゼ' : 'ze', 'ゾ' : 'zo',
        'ダ' : 'da', 'ヂ' : 'di', 'ヅ' : 'du', 'デ' : 'de', 'ド' : 'do',
        'バ' : 'ba', 'ビ' : 'bi', 'ブ' : 'bu', 'ベ' : 'be', 'ボ' : 'bo',
        'パ' : 'pa', 'ピ' : 'pi', 'プ' : 'pu', 'ペ' : 'pe', 'ポ' : 'po',
        'ァ' : 'xa', 'ィ' : 'xi', 'ゥ' : 'xu', 'ェ' : 'xe', 'ォ' : 'xo',
        'ャ' : 'xya', 'ュ' : 'xyu', 'ョ' : 'xyo',
        'ッ' : 'xtsu'
	};

	if(triTable[string] !== undefined){
        return triTable[string];
	} else if(biTable[string] !== undefined) {
        return biTable[string];
	}

    var biCheck = new Object();
    for (var k in biTable){
        var tmp = k.split('');
        biCheck[tmp[0]] = true;
    }

    var triCheck = new Object();
    for (var tk in triTable){
        var tmp = tk.split('');
        triCheck[tmp[0] + tmp[1]] = true;
        biCheck[tmp[0]] = true; 
    }
    

	var buf = '';
	for(var i = 0; i < arrayedString.length ; i++){
        var str = arrayedString[i];
        buf += str;
        if(buf.length == 3){
            if(triTable[buf] !== undefined){
                value += triTable[buf];
            } else {
                tmp = buf.split('');
                value += biTable[tmp[0] + tmp[1]];
                value += uniTable[tmp[2]] === undefined ? tmp[2] : uniTable[tmp[2]];
                
            }

        } else if(buf.length == 2) {
            if(triCheck[buf] !== undefined) { 
            } else if(biTable[buf] !== undefined) {
                    value += biTable[buf];
                    buf = '';
                } else {
                    tmp = buf.split('');
                    value += uniTable[tmp[0]]; 
                    value += uniTable[tmp[1]] === undefined ? tmp[1] : uniTable[tmp[1]]; 
                    buf = '';
                } 
        } else if(biCheck[buf] !== undefined){
        } else { 
                value += uniTable[str] === undefined ? str : uniTable[str];
                buf = '';
        }


        }

        value += buf !== '' ? uniTable[buf] : '';

    value = value.replace(/([aiueo])ー/gi,'$1');
	return value;
}

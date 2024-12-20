/**
 * @author https://github.com/Huifusu
 * The codes following are modified from:
 * https://github.com/Huifusu/Hanzi2Kanji/blob/master/loadDictionary.js
 */

const dictionary_obj = {
    "罐":["缶"],"辨":["弁"],"瓣":["弁"],"辩":["弁"],"只":["隻"],"咒":["呪"],"叶":["葉"],
    "亚":["亜"],"爱":["愛"],"恶":["悪"],"苇":["葦"],"压":["圧"],"伟":["偉"],"围":["囲"],"为":["為"],"异":["異"],"维":["維"],"纬":["緯"],"违":["違"],"遗":["遺"],"壹":["壱"],"稻":["稲"],"员":["員"],"饮":["飲"],"阴":["陰"],"隐":["隠"],"韵":["韻"],"涡":["渦"],"运":["運"],"营":["営"],"荣":["栄"],"卫":["衛"],"咏":["詠"],"锐":["鋭"],"驿":["駅"],"谒":["謁"],"阅":["閲"],"园":["園"],"烟":["煙"],"缘":["縁"],"远":["遠"],"铅":["鉛"],"盐":["塩"],"污":["汚"],"应":["応"],"冲":["衝"],"亿":["億"],"忆":["憶"],"稳":["穏"],"假":["仮"],"价":["価"],"祸":["禍"],"华":["華"],"课":["課"],"货":["貨"],"过":["過"],"贺":["賀"],"饿":["餓"],"块":["塊"],"坏":["壊"],"怀":["懐"],"绘":["絵"],"开":["開"],"阶":["階"],"贝":["貝"],"该":["該"],"吓":["嚇"],"扩":["拡"],"壳":["殻"],"确":["確"],"觉":["覚"],"较":["較"],"阁":["閣"],"乐":["楽"],"额":["額"],"挂":["掛"],"舄":["潟"],"渴":["渇"],"辖":["轄"],"劝":["勧"],"卷":["巻"],"唤":["喚"],"奸":["姦"],"宽":["寛"],"惯":["慣"],"换":["換"],"欢":["歓"],"汉":["漢"],"环":["環"],"监":["監"],"简":["簡"],"缓":["緩"],"舰":["艦"],"观":["観"],"贯":["貫"],"还":["還"],"鉴":["鑑"],"间":["間"],"闲":["閑"],"关":["関"],"陷":["陥"],"馆":["館"],"顽":["頑"],"颜":["顔"],"愿":["願"],"几":["幾"],"挥":["揮"],"弃":["棄"],"归":["帰"],"气":["気"],"纪":["紀"],"规":["規"],"记":["記"],"贵":["貴"],"轨":["軌"],"辉":["輝"],"饥":["飢"],"骑":["騎"],"伪":["偽"],"仪":["儀"],"戏":["戯"],"拟":["擬"],"义":["義"],"议":["議"],"诘":["詰"],"宫":["宮"],"穷":["窮"],"级":["級"],"纠":["糾"],"给":["給"],"举":["挙"],"许":["許"],"渔":["漁"],"鱼":["魚"],"竞":["競"],"协":["協"],"强":["強"],"桥":["橋"],"况":["況"],"矫":["矯"],"胁":["脅"],"兴":["興"],"乡":["郷"],"镜":["鏡"],"响":["響"],"惊":["驚"],"晓":["暁"],"业":["業"],"极":["極"],"紧":["緊"],"谨":["謹"],"银":["銀"],"驱":["駆"],"缲":["繰"],"勋":["勲"],"熏":["薫"],"训":["訓"],"军":["軍"],"倾":["傾"],"启":["啓"],"惠":["恵"],"庆":["慶"],"揭":["掲"],"溪":["渓"],"经":["経"],"继":["継"],"萤":["蛍"],"计":["計"],"轻":["軽"],"鸡":["鶏"],"鲸":["鯨"],"剧":["劇"],"击":["撃"],"杰":["傑"],"决":["決"],"洁":["潔"],"结":["結"],"俭":["倹"],"剑":["剣"],"圈":["圏"],"坚":["堅"],"宪":["憲"],"悬":["懸"],"检":["検"],"权":["権"],"绢":["絹"],"见":["見"],"谦":["謙"],"贤":["賢"],"轩":["軒"],"险":["険"],"显":["顕"],"验":["験"],"严":["厳"],"减":["減"],"现":["現"],"个":["個"],"库":["庫"],"户":["戸"],"夸":["誇"],"顾":["顧"],"吴":["呉"],"娱":["娯"],"语":["語"],"误":["誤"],"护":["護"],"效":["効"],"广":["広"],"构":["構"],"沟":["溝"],"红":["紅"],"绞":["絞"],"纲":["綱"],"讲":["講"],"贡":["貢"],"购":["購"],"矿":["鉱"],"钢":["鋼"],"项":["項"],"刚":["剛"],"黑":["黒"],"狱":["獄"],"垦":["墾"],"恳":["懇"],"绀":["紺"],"查":["査"],"诈":["詐"],"锁":["鎖"],"债":["債"],"岁":["歳"],"济":["済"],"灾":["災"],"碎":["砕"],"斋":["斎"],"细":["細"],"载":["載"],"际":["際"],"剂":["剤"],"财":["財"],"错":["錯"],"樱":["桜"],"册":["冊"],"杀":["殺"],"杂":["雑"],"伞":["傘"],"栈":["桟"],"暂":["暫"],"姊":["姉"],"师":["師"],"纟":["糸"],"纸":["紙"],"视":["視"],"词":["詞"],"诗":["詩"],"试":["試"],"咨":["諮"],"资":["資"],"赐":["賜"],"饲":["飼"],"齿":["歯"],"儿":["児"],"时":["時"],"玺":["璽"],"识":["識"],"轴":["軸"],"执":["執"],"质":["質"],"实":["実"],"舍":["舎"],"谢":["謝"],"车":["車"],"释":["釈"],"种":["種"],"树":["樹"],"收":["収"],"终":["終"],"习":["習"],"袭":["襲"],"从":["従"],"涩":["渋"],"兽":["獣"],"纵":["縦"],"铳":["銃"],"缩":["縮"],"肃":["粛"],"术":["術"],"润":["潤"],"纯":["純"],"顺":["順"],"绪":["緒"],"书":["書"],"诸":["諸"],"伤":["傷"],"偿":["償"],"胜":["勝"],"奖":["奨"],"涉":["渉"],"烧":["焼"],"绍":["紹"],"讼":["訟"],"诏":["詔"],"详":["詳"],"赏":["賞"],"钟":["鐘"],"乘":["乗"],"剩":["剰"],"场":["場"],"壤":["壌"],"娘":["嬢"],"净":["浄"],"叠":["畳"],"让":["譲"],"酿":["醸"],"锭":["錠"],"饰":["飾"],"织":["織"],"职":["職"],"审":["審"],"绅":["紳"],"亲":["親"],"诊":["診"],"进":["進"],"针":["針"],"寻":["尋"],"阵":["陣"],"图":["図"],"帅":["帥"],"粹":["粋"],"醉":["酔"],"锤":["錘"],"髓":["髄"],"濑":["瀬"],"亩":["畝"],"势":["勢"],"圣":["聖"],"诚":["誠"],"请":["請"],"齐":["斉"],"积":["積"],"绩":["績"],"责":["責"],"迹":["跡"],"摄":["摂"],"设":["設"],"节":["節"],"绝":["絶"],"专":["専"],"战":["戦"],"缐":["線"],"纤":["繊"],"荐":["薦"],"选":["選"],"迁":["遷"],"钱":["銭"],"铣":["銑"],"鲜":["鮮"],"渐":["漸"],"缮":["繕"],"础":["礎"],"组":["組"],"诉":["訴"],"创":["創"],"仓":["倉"],"丧":["喪"],"层":["層"],"搜":["捜"],"扫":["掃"],"插":["挿"],"巢":["巣"],"窗":["窓"],"总":["総"],"骚":["騒"],"增":["増"],"脏":["臓"],"藏":["蔵"],"赠":["贈"],"侧":["側"],"则":["則"],"测":["測"],"贼":["賊"],"续":["続"],"孙":["孫"],"损":["損"],"驮":["駄"],"对":["対"],"带":["帯"],"态":["態"],"贷":["貸"],"队":["隊"],"题":["題"],"泷":["瀧"],"择":["択"],"泽":["沢","澤"],"浊":["濁"],"诺":["諾"],"达":["達"],"夺":["奪"],"单":["単"],"叹":["嘆"],"诞":["誕"],"锻":["鍛"],"团":["団"],"坛":["壇"],"弹":["弾"],"谈":["談"],"值":["値"],"耻":["恥"],"迟":["遅"],"驻":["駐"],"贮":["貯"],"帐":["帳"],"厅":["庁"],"张":["張"],"惩":["懲"],"听":["聴"],"胀":["脹"],"肠":["腸"],"调":["調"],"长":["長"],"顶":["頂"],"鸟":["鳥"],"敕":["勅"],"赁":["賃"],"镇":["鎮"],"陈":["陳"],"坠":["墜"],"冢":["塚"],"渍":["漬"],"钓":["釣"],"侦":["偵"],"贞":["貞"],"缔":["締"],"订":["訂"],"递":["逓"],"敌":["敵"],"适":["適"],"彻":["徹"],"转":["転"],"传":["伝"],"电":["電"],"涂":["塗"],"冻":["凍"],"岛":["島"],"东":["東"],"栋":["棟"],"汤":["湯"],"统":["統"],"讨":["討"],"誊":["謄"],"头":["頭"],"腾":["騰"],"动":["動","働"],"导":["導"],"铜":["銅"],"德":["徳"],"笃":["篤"],"读":["読"],"昙":["曇"],"钝":["鈍"],"绳":["縄"],"软":["軟"],"难":["難"],"贰":["弐"],"认":["認"],"宁":["寧"],"热":["熱"],"恼":["悩"],"浓":["濃"],"纳":["納"],"脑":["脳"],"农":["農"],"霸":["覇"],"马":["馬"],"废":["廃"],"拜":["拝"],"败":["敗"],"辈":["輩"],"买":["買"],"卖":["売"],"赔":["賠"],"缚":["縛"],"发":["発","髪"],"罚":["罰"],"拔":["抜"],"阀":["閥"],"贩":["販"],"范":["範"],"烦":["煩"],"颁":["頒"],"饭":["飯"],"盘":["盤"],"罢":["罷"],"费":["費"],"飞":["飛"],"备":["備"],"笔":["筆"],"标":["標"],"冰":["氷"],"评":["評"],"贫":["貧"],"宾":["賓"],"频":["頻"],"妇":["婦"],"肤":["膚"],"谱":["譜"],"负":["負"],"赋":["賦"],"风":["風"],"复":["復","複"],"拂":["払"],"佛":["仏"],"喷":["噴"],"坟":["墳"],"愤":["憤"],"奋":["奮"],"纷":["紛"],"氛":["雰"],"闻":["聞"],"币":["幣"],"并":["並"],"闭":["閉"],"别":["別"],"变":["変"],"编":["編"],"边":["辺"],"铺":["鋪"],"步":["歩"],"补":["補"],"穗":["穂"],"报":["報"],"缝":["縫"],"访":["訪"],"饱":["飽"],"纺":["紡"],"谋":["謀"],"贸":["貿"],"仆":["僕"],"扑":["撲"],"每":["毎"],"茧":["繭"],"满":["満"],"脉":["脈"],"务":["務"],"梦":["夢"],"无":["無"],"雾":["霧"],"铭":["銘"],"鸣":["鳴"],"灭":["滅"],"绵":["綿"],"网":["網"],"默":["黙"],"问":["問"],"闷":["悶"],"纹":["紋"],"门":["門"],"约":["約"],"药":["薬"],"译":["訳"],"跃":["躍"],"谕":["諭"],"输":["輸"],"优":["優"],"忧":["憂"],"犹":["猶"],"诱":["誘"],"游":["遊"],"邮":["郵"],"预":["預"],"扬":["揚"],"摇":["揺"],"拥":["擁"],"杨":["楊"],"样":["様"],"窑":["窯"],"谣":["謡"],"阳":["陽"],"养":["養"],"罗":["羅"],"赖":["頼"],"络":["絡"],"栏":["欄"],"滥":["濫"],"览":["覧"],"里":["裏","裡","里"],"离":["離"],"陆":["陸"],"虑":["慮"],"虏":["虜"],"两":["両"],"凉":["涼"],"猎":["猟"],"疗":["療"],"粮":["糧"],"领":["領"],"绿":["緑"],"伦":["倫"],"临":["臨"],"轮":["輪"],"垒":["塁"],"泪":["涙"],"类":["類"],"铃":["鈴"],"灵":["霊"],"丽":["麗"],"龄":["齢"],"历":["暦"],"练":["練"],"连":["連"],"炼":["錬"],"劳":["労"],"录":["録"],"论":["論"],"话":["話"],"贿":["賄"],"绚":["絢"],"绫":["綾"],"谓":["謂"],"荫":["陰","蔭"],"乌":["烏"],"窥":["窺"],"呗":["唄"],"鳗":["鰻"],"闰":["閏"],"饵":["餌"],"婴":["嬰"],"颖":["穎"],"颕":["頴"],"厌":["厭"],"焰":["焔"],"艳":["艶"],"鸳":["鴛"],"于":["於"],"袄":["襖"],"莺":["鴬"],"哗":["嘩"],"卧":["臥"],"驾":["駕"],"凯":["凱"],"盖":["蓋"],"铠":["鎧"],"钩":["鈎"],"划":["劃"],"搅":["撹"],"获":["獲"],"顎":["鰍"],"鲣":["鰹"],"桦":["樺"],"鸭":["鴨"],"涧":["澗"],"韩":["韓"],"赝":["贋"],"龟":["亀"],"牺":["犠"],"蚁":["蟻"],"谊":["誼"],"锯":["鋸"],"侨":["僑"],"乔":["喬"],"荞":["蕎"],"飨":["饗"],"仅":["僅"],"锦":["錦"],"钦":["欽"],"俱":["倶"],"驹":["駒"],"栉":["櫛"],"钏":["釧"],"辔":["轡"],"洼":["窪"],"锹":["鍬"],"诣":["詣"],"诀":["訣"],"牵":["牽"],"砚":["硯"],"县":["県"],"键":["鍵"],"谚":["諺"],"钴":["鈷"],"鲤":["鯉"],"纮":["紘"],"鸿":["鴻"],"轰":["轟"],"鹄":["鵠"],"顷":["頃"],"鹭":["鷺"],"栅":["柵"],"鲑":["鮭"],"萨":["薩"],"鲭":["鯖"],"锖":["錆"],"鲛":["鮫"],"灿":["燦"],"产":["産"],"赞":["賛"],"斩":["斬"],"尸":["屍"],"狮":["獅"],"尔":["爾"],"莳":["蒔"],"缟":["縞"],"纱":["紗"],"锡":["錫"],"肿":["腫"],"绶":["綬"],"众":["衆"],"辑":["輯"],"骏":["駿"],"准":["準","准"],"处":["処"],"锄":["鋤"],"尝":["嘗"],"厂":["廠"],"证":["証"],"酱":["醤"],"钲":["鉦"],"扰":["擾"],"烛":["蝕"],"尘":["塵"],"肾":["腎"],"讯":["訊"],"诹":["諏"],"须":["須"],"锥":["錐"],"趋":["趨"],"雏":["雛"],"颇":["頗"],"栖":["棲","栖"],"硕":["碩"],"说":["説"],"诠":["詮"],"贱":["賎"],"闪":["閃"],"苏":["蘇"],"丛":["叢"],"枪":["槍"],"综":["綜"],"苍":["蒼"],"逊":["遜"],"鲷":["鯛"],"鹰":["鷹"],"托":["託"],"铎":["鐸"],"竖":["竪"],"鳕":["鱈"],"谁":["誰"],"绽":["綻"],"驰":["馳"],"铸":["鋳"],"苎":["苧"],"宠":["寵"],"畅":["暢"],"谍":["諜"],"铫":["銚"],"茑":["蔦"],"缀":["綴"],"溃":["潰"],"壶":["壺"],"鹤":["鶴"],"祯":["禎"],"谛":["諦"],"郑":["鄭"],"钉":["釘"],"镝":["鏑"],"辙":["轍"],"铁":["鉄"],"缠":["纏"],"贴":["貼"],"颠":["顛"],"淀":["澱"],"兔":["兎"],"赌":["賭"],"镀":["鍍"],"荡":["蕩"],"镫":["鐙"],"鸨":["鴇"],"秃":["禿"],"鸢":["鳶"],"吨":["噸"],"顿":["頓"],"谜":["謎"],"滩":["灘"],"锅":["鍋"],"驯":["馴"],"赈":["賑"],"祢":["禰","祢"],"脓":["膿"],"骂":["罵"],"狈":["狽"],"这":["這"],"驳":["駁"],"栌":["櫨"],"钵":["鉢"],"鸠":["鳩"],"绯":["緋"],"诽":["誹"],"毕":["畢"],"纽":["紐"],"谬":["謬"],"庙":["廟"],"锚":["錨"],"鳍":["鰭"],"濒":["瀕"],"抚":["撫"],"芜":["蕪"],"枫":["楓"],"渊":["淵"],"鲋":["鮒"],"粪":["糞"],"页":["頁"],"辅":["輔"],"仿":["倣"],"丰":["豊"],"锋":["鋒"],"凤":["鳳"],"鹏":["鵬"],"颊":["頬"],"鲔":["鮪"],"鳟":["鱒"],"鹉":["鵡"],"缅":["緬"],"储":["儲"],"饼":["餅"],"贳":["貰"],"爷":["爺"],"涌":["湧","涌"],"舆":["輿"],"佣":["傭"],"欲":["欲","慾"],"岚":["嵐"],"蓝":["藍"],"兰":["蘭"],"刘":["劉"],"龙":["竜","龍"],"侣":["侶"],"谅":["諒"],"邻":["隣"],"鳞":["鱗"],"岭":["嶺"],"隶":["隷"],"涟":["漣"],"帘":["簾"],"怜":["怜","憐"],"联":["聯"],"莲":["蓮"],"吕":["呂"],"鲁":["魯"],"橹":["櫓"],"赂":["賂"],"娄":["婁"],"聋":["聾"],"鹫":["鷲"],"鳄":["鰐"],"诧":["詫"],"干":["干","乾"],"机":["機","机"]};
export const dictionary = new Map(Object.entries(dictionary_obj))

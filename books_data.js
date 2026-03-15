const booksData = [
  {
    "id": 1,
    "category": "ライフスタイル・インテリア誌",
    "title": "ONKUL (オンクル)",
    "author": "三栄",
    "image_url": "./ycover_final_1.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/neowing/neobk-3143880.html",
    "price": 1500
  },
  {
    "id": 2,
    "category": "ライフスタイル・インテリア誌",
    "title": "nice things. (ナイスシングス)",
    "author": "情熱の千鳥足",
    "image_url": "./ycover_final_2.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/edion-tsutayakaden/9784911053140.html",
    "price": 1500
  },
  {
    "id": 3,
    "category": "ライフスタイル・インテリア誌",
    "title": "GENIC (ジェニック)",
    "author": "ミツバチワークス",
    "image_url": "./ycover_final_3.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/windybooks/mag-4912052070466.html",
    "price": 1500
  },
  {
    "id": 4,
    "category": "ライフスタイル・インテリア誌",
    "title": "KINFOLK (キンフォーク)",
    "author": "ネコ・パブリッシング",
    "image_url": "./ycover_final_4.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/nara-tsutayabooks/boo000630i.html",
    "price": 1500
  },
  {
    "id": 5,
    "category": "ライフスタイル・インテリア誌",
    "title": "POPEYE (ポパイ)",
    "author": "マガジンハウス",
    "image_url": "./ycover_final_5.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/mt-4912180290460.html",
    "price": 1500
  },
  {
    "id": 6,
    "category": "ライフスタイル・インテリア誌",
    "title": "OZ magazine (オズマガジン)",
    "author": "スターツ出版",
    "image_url": "./ycover_final_6.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/neowing/neobk-3189617.html",
    "price": 1500
  },
  {
    "id": 7,
    "category": "ライフスタイル・インテリア誌",
    "title": "Casa BRUTUS (カーサ ブルータス)",
    "author": "マガジンハウス",
    "image_url": "./ycover_final_7.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/mt-4912125410465.html",
    "price": 1500
  },
  {
    "id": 8,
    "category": "ライフスタイル・インテリア誌",
    "title": "&Premium (アンド プレミアム)",
    "author": "マガジンハウス",
    "image_url": "./premium_12.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/B0DGQ66LG6",
    "price": 1200
  },
  {
    "id": 9,
    "category": "ライフスタイル・インテリア誌",
    "title": "ku:nel (クウネル)",
    "author": "マガジンハウス",
    "image_url": "./ycover_final_9.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/mt-4912132050364.html",
    "price": 1500
  },
  {
    "id": 10,
    "category": "ライフスタイル・インテリア誌",
    "title": "モダンリビング",
    "author": "ハースト婦人画報社",
    "image_url": "./ycover_final_10.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/neowing/neobk-3184470.html",
    "price": 1500
  },
  {
    "id": 11,
    "category": "暮らしと花のエッセイ",
    "title": "花の辞典",
    "author": "新井光史",
    "image_url": "./ycover_final_11.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/bk-484413728x.html",
    "price": 1500
  },
  {
    "id": 12,
    "category": "暮らしと花のエッセイ",
    "title": "植物図鑑",
    "author": "有川浩",
    "image_url": "./ycover_final_12.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/netoff/0011724035.html",
    "price": 1500
  },
  {
    "id": 13,
    "category": "暮らしと花のエッセイ",
    "title": "ボタニカル・ライフ 植物生活",
    "author": "いとうせいこう",
    "image_url": "./ycover_final_13.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/bk-4101250146.html",
    "price": 1500
  },
  {
    "id": 14,
    "category": "暮らしと花のエッセイ",
    "title": "日々の花、日々のこと",
    "author": "多田けい子",
    "image_url": "./hibinohana.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/4418255109",
    "price": 1760
  },
  {
    "id": 15,
    "category": "暮らしと花のエッセイ",
    "title": "美しい花言葉・花図鑑",
    "author": "二宮孝嗣",
    "image_url": "./ycover_final_15.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/bk-4816359265.html",
    "price": 1500
  },
  {
    "id": 16,
    "category": "暮らしと花のエッセイ",
    "title": "花を飾る 季節の草花で、彩りのある毎日に。",
    "author": "平井かずみ",
    "image_url": "./amazon_cover_16.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/481561053X",
    "price": 1650
  },
  {
    "id": 17,
    "category": "暮らしと花のエッセイ",
    "title": "花と短歌でめぐる 二十四節気花のこよみ",
    "author": "俵万智",
    "image_url": "./ycover_final_17.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/ebookjapan/b00162794565.html",
    "price": 1500
  },
  {
    "id": 18,
    "category": "暮らしと花のエッセイ",
    "title": "小さな花飾り",
    "author": "増田由希子",
    "image_url": "./amazon_cover_18.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/4048967332",
    "price": 1430
  },
  {
    "id": 19,
    "category": "暮らしと花のエッセイ",
    "title": "草花と飾る 日々の道具たち",
    "author": "誠文堂新光社",
    "image_url": "./amazon_cover_19.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/4416622244",
    "price": 1650
  },
  {
    "id": 20,
    "category": "暮らしと花のエッセイ",
    "title": "愛する花たちへ",
    "author": "ターシャ・テューダー",
    "image_url": "./amazon_cover_20.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/4040669294",
    "price": 1980
  },
  {
    "id": 21,
    "category": "絵本",
    "title": "はらぺこあおむし",
    "author": "エリック・カール",
    "image_url": "./ycover_final_21.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/bk-4032371105.html",
    "price": 1500
  },
  {
    "id": 22,
    "category": "絵本",
    "title": "ルピナスさん",
    "author": "バーバラ・クーニー",
    "image_url": "./ycover_final_22.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/bk-4593502098.html",
    "price": 1500
  },
  {
    "id": 23,
    "category": "絵本",
    "title": "はなをくんくん",
    "author": "ルース・クラウス",
    "image_url": "./ycover_final_23.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/netoff/0012181248.html",
    "price": 1500
  },
  {
    "id": 24,
    "category": "絵本",
    "title": "フラワーフェアリーズ (花の妖精たち)",
    "author": "シシリー・メアリー・バーカー",
    "image_url": "./ycover_final_24.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/bk-4499284902.html",
    "price": 1500
  },
  {
    "id": 25,
    "category": "絵本",
    "title": "はるのうた",
    "author": "エルサ・ベスコフ",
    "image_url": "./amazon_cover_25.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/4834015694",
    "price": 1540
  },
  {
    "id": 26,
    "category": "絵本",
    "title": "花さき山",
    "author": "滝平二郎",
    "image_url": "./ycover_final_26.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/bk-4265908209.html",
    "price": 1500
  },
  {
    "id": 27,
    "category": "絵本",
    "title": "ちいさいおうち",
    "author": "バージニア・リー・バートン",
    "image_url": "./ycover_final_27.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/bk-4001105535.html",
    "price": 1500
  },
  {
    "id": 28,
    "category": "絵本",
    "title": "ぼくのおおきな木",
    "author": "シェル・シルヴァスタイン",
    "image_url": "./amazon_cover_28.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/4413000806",
    "price": 1320
  },
  {
    "id": 29,
    "category": "絵本",
    "title": "うさこちゃんの はたけ",
    "author": "ディック・ブルーナ",
    "image_url": "./ycover_final_29.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/vaboo/va0894402483u30.html",
    "price": 1500
  },
  {
    "id": 30,
    "category": "絵本",
    "title": "よるくま",
    "author": "酒井駒子",
    "image_url": "./ycover_final_30.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bookfan/bk-4033312307.html",
    "price": 1500
  },
  {
    "id": 31,
    "category": "花にまつわる雑貨",
    "title": "坂源 ハンドクリエーション F170",
    "author": "坂源 (花鋏・日本製)",
    "image_url": "./ycover_final_31.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/fkjiyugaoka/hasami.html",
    "price": 1500
  },
  {
    "id": 32,
    "category": "花にまつわる雑貨",
    "title": "Botanicum Postcards",
    "author": "Katie Scott",
    "image_url": "./ycover_final_32.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/magicdoor/9781783706341.html",
    "price": 1500
  },
  {
    "id": 33,
    "category": "花にまつわる雑貨",
    "title": "KINTO (キントー) LUNA ベース 8x13cm 真鍮",
    "author": "KINTO (フラワーベース)",
    "image_url": "./ycover_final_33.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/colorfulbox/303025.html",
    "price": 1500
  },
  {
    "id": 34,
    "category": "花にまつわる雑貨",
    "title": "HAWS (ホーズ) 銅製インドアカン",
    "author": "HAWS (ジョウロ)",
    "image_url": "./ycover_final_34.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/baroness/ha-180-2.html",
    "price": 1500
  },
  {
    "id": 35,
    "category": "花にまつわる雑貨",
    "title": "HOLMEGAARD Flora ベース 12cm",
    "author": "HOLMEGAARD (フラワーベース)",
    "image_url": "./ycover_final_35.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/bellemessage/flora-s12.html",
    "price": 1500
  },
  {
    "id": 36,
    "category": "花にまつわる雑貨",
    "title": "ダルトン (Dulton) グラス スプレー",
    "author": "ダルトン (ガラス霧吹き)",
    "image_url": "./ycover_final_36.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/hutte/ftb80.html",
    "price": 1500
  },
  {
    "id": 37,
    "category": "花にまつわる雑貨",
    "title": "KINTO (キントー) AQUA CULTURE VASE L",
    "author": "KINTO (水耕栽培ベース)",
    "image_url": "./ycover_final_37.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/eclity/thc-kinto-kabin-l-.html",
    "price": 1500
  },
  {
    "id": 38,
    "category": "花にまつわる雑貨",
    "title": "Fritz Hansen (フリッツ・ハンセン) IKERU ハイベース",
    "author": "Fritz Hansen (一輪挿し)",
    "image_url": "./amazon_cover_38.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/B0CKVL375P",
    "price": 19580
  },
  {
    "id": 39,
    "category": "花にまつわる雑貨",
    "title": "松野屋 トタン豆バケツ",
    "author": "松野屋 (資材入れ)",
    "image_url": "./ycover_final_39.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/htdd/hd3078.html",
    "price": 1500
  },
  {
    "id": 40,
    "category": "花にまつわる雑貨",
    "title": "The Kinfolk Garden (洋書)",
    "author": "John Burns",
    "image_url": "./ycover_final_40.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/magicdoor/9781579659844.html",
    "price": 1500
  },
  {
    "id": 41,
    "category": "インセンス",
    "title": "APOTHEKE FRAGRANCE インセンススティック",
    "author": "アポテーケ フレグランス",
    "image_url": "./ycover_final_41.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/digstore/apotheke-13.html",
    "price": 1500
  },
  {
    "id": 42,
    "category": "インセンス",
    "title": "Aesop (イソップ) アロマティック ルームスプレー",
    "author": "Aesop (フレグランス)",
    "image_url": "./amazon_cover_42.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/B0CBPWZJ2R",
    "price": 6490
  },
  {
    "id": 43,
    "category": "インセンス",
    "title": "hibi (ヒビ) 10MINUTES AROMA 金木犀",
    "author": "神戸マッチ (マッチ型お香)",
    "image_url": "./ycover_final_43.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/santelabo/h0160010.html",
    "price": 1500
  },
  {
    "id": 44,
    "category": "インセンス",
    "title": "hibi (ヒビ) 10MINUTES AROMA ゼラニウム",
    "author": "神戸マッチ (マッチ型お香)",
    "image_url": "./ycover_final_44.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/santelabo/h0160010.html",
    "price": 1500
  },
  {
    "id": 45,
    "category": "インセンス",
    "title": "APOTHEKE FRAGRANCE ブラス インセンススタンド",
    "author": "アポテーケ フレグランス (お香立て)",
    "image_url": "./ycover_final_45.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/digstore/apotheke-05.html",
    "price": 1500
  },
  {
    "id": 46,
    "category": "インセンス",
    "title": "無印良品 お香・金木犀の香り",
    "author": "無印良品",
    "image_url": "./ycover_final_46.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/zozo/101705930.html",
    "price": 1500
  },
  {
    "id": 47,
    "category": "インセンス",
    "title": "お香立て ガラス製 アッシュトレイ",
    "author": "雑貨 (お香立て)",
    "image_url": "./ycover_final_47.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/nattyandco/item-0010.html",
    "price": 1500
  },
  {
    "id": 48,
    "category": "インセンス",
    "title": "松栄堂 芳輪 白川",
    "author": "松栄堂 (お香)",
    "image_url": "./ycover_final_48.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/incenseroad/shirakawa80x3.html",
    "price": 1500
  },
  {
    "id": 49,
    "category": "インセンス",
    "title": "Santa Maria Novella アルメニアペーパー",
    "author": "サンタ・マリア・ノヴェッラ (紙のお香)",
    "image_url": "./ycover_final_49.jpg",
    "amazon_link": "https://store.shopping.yahoo.co.jp/aquabouquet/smn033.html",
    "price": 1500
  },
  {
    "id": 50,
    "category": "インセンス",
    "title": "Aesop (イソップ) ブラス オイルバーナー",
    "author": "Aesop (アロマバーナー)",
    "image_url": "./amazon_cover_50.jpg",
    "amazon_link": "https://www.amazon.co.jp/dp/B07KKZ537G",
    "price": 24750
  }
];

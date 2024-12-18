# jotoba sentences
# {
#   "sentences": [
#     {
#       "content": "１行ずつ空けて書きなさい。",
#       "furigana": "[１行|いち|ぎょう]ずつ[空|あ]けて[書|か]きなさい。",
#       "translation": "Write on every other line.",
#       "language": "English",
#       "eng": "Write on every other line."
#     },
#     ...
#   ]
# }

# [
#   {
#     "slug": "行",
#     "is_common": true,
#     "tags": [],
#     "jlpt": [
#       "jlpt-n1"
#     ],
#     "japanese": [
#       {
#         "word": "行",
#         "reading": "ぎょう"
#       }
#     ],
#     "senses": [
#       {
#         "english_definitions": [
#           "line (of text)",
#           "row",
#           "verse"
#         ],
#         "parts_of_speech": [
#           "Noun"
#         ],
#         "links": [],
#         "tags": [],
#         "restrictions": [],
#         "see_also": [],
#         "antonyms": [],
#         "source": [],
#         "info": []
#       },
#       {
#         "english_definitions": [
#           "carya (austerities)"
#         ],
#         "parts_of_speech": [
#           "Noun"
#         ],
#         "links": [],
#         "tags": [
#           "Buddhism"
#         ],
#         "restrictions": [],
#         "see_also": [],
#         "antonyms": [],
#         "source": [],
#         "info": []
#       },
#       {
#         "english_definitions": [
#           "samskara (formations)"
#         ],
#         "parts_of_speech": [
#           "Noun"
#         ],
#         "links": [],
#         "tags": [
#           "Buddhism"
#         ],
#         "restrictions": [],
#         "see_also": [],
#         "antonyms": [],
#         "source": [],
#         "info": []
#       },
#       {
#         "english_definitions": [
#           "semi-cursive style (of writing Chinese characters)",
#           "running style"
#         ],
#         "parts_of_speech": [
#           "Noun"
#         ],
#         "links": [],
#         "tags": [
#           "Abbreviation"
#         ],
#         "restrictions": [],
#         "see_also": [
#           "行書"
#         ],
#         "antonyms": [],
#         "source": [],
#         "info": []
#       }
#     ],
#     "attribution": {
#       "jmdict": true,
#       "jmnedict": false,
#       "dbpedia": false
#     }
#   }
# ]

# tatoeba
# [
#   {
#       "id": 5035,
#       "text": "私には夢がある。",
#       "lang": "jpn",
#       "correctness": 0,
#       "script": null,
#       "license": "CC BY 2.0 FR",
#       "translations": [
#         [],
#         [
#           {
#             "id": 164497,
#             "text": "私には夢があります。",
#             "lang": "jpn",
#             "correctness": 0,
#             "script": null,
#             "transcriptions": [
#               {
#                 "id": 1756453,
#                 "sentence_id": 164497,
#                 "script": "Hrkt",
#                 "text": "[私|わたし]には[夢|ゆめ]があります。",
#                 "user_id": null,
#                 "needsReview": true,
#                 "modified": "2020-02-11T07:02:30+00:00",
#                 "user": null,
#                 "readonly": false,
#                 "type": "altscript",
#                 "html": "<ruby>私<rp>（</rp><rt>わたし</rt><rp>）</rp></ruby>には<ruby>夢<rp>（</rp><rt>ゆめ</rt><rp>）</rp></ruby>があります。",
#                 "markup": null,
#                 "info_message": "This alternative script was generated automatically and has not been reviewed."
#               }
#             ],
#             "audios": [],
#             "lang_name": "Japanese",
#             "dir": "ltr",
#             "lang_tag": "ja"
#           }
#         ]
#       ],
#       "transcriptions": [
#         {
#           "id": 1677983,
#           "sentence_id": 5035,
#           "script": "Hrkt",
#           "text": "[私|わたし]には[夢|ゆめ]がある。",
#           "user_id": null,
#           "needsReview": true,
#           "modified": "2020-02-11T06:39:35+00:00",
#           "user": null,
#           "readonly": false,
#           "type": "altscript",
#           "html": "<ruby>私<rp>（</rp><rt>わたし</rt><rp>）</rp></ruby>には<ruby>夢<rp>（</rp><rt>ゆめ</rt><rp>）</rp></ruby>がある。",
#           "markup": null,
#           "info_message": "This alternative script was generated automatically and has not been reviewed."
#         }
#       ],
#       "audios": [],
#       "user": {
#         "username": "bunbuku"
#       },
#       "lang_name": "Japanese",
#       "dir": "ltr",
#       "lang_tag": "ja",
#       "is_favorite": null,
#       "is_owned_by_current_user": false,
#       "permissions": null,
#       "max_visible_translations": 5,
#       "current_user_review": null
#     },
# ]

import glob
import json
import re
import requests
import time
from typing import TypedDict
from googletrans import Translator

JOTOBA_SENTENCES_URL = "https://jotoba.com/api/search/sentences"
TATOEBA_SENTENCES_URL = "https://tatoeba.org/en/api_v0/search?query={}&from=jpn&to=cmn&sort=relevance&trans_filter=limit&trans_unapproved=no&unapproved=no&word_count_max=&word_count_min=8"
JISHO_WORD_URL = "https://jisho.org/api/v1/search/words?keyword={}"
JISHO_WORD_MORE_URL = "https://jisho.org/api/v1/search/words?keyword={}?page=2"
translator = Translator()

class SentenceData(TypedDict):
    content: str
    furigana: str
    translation_zh_CN: str | None

class JapaneseData(TypedDict):
    word: str
    reading: str
class WordData(TypedDict):
    slug: str
    jlpt: list[str]
    japanese: list[JapaneseData]

def sentence_data_req(char: str) -> list[SentenceData]:
    def jotoba_request(char: str) -> list[SentenceData]:
        res = requests.post(JOTOBA_SENTENCES_URL, headers={
            "accept": "application/json",
            "content-type": "application/json"
        }, data=json.dumps({
            "query": char,
            "language": "English",
            "no_english": True
        }))
        json_data = res.json()
        filtered = []
        for data in json_data["sentences"]:
            translated = translator.translate(data["content"], src="ja", dest="zh-CN")
            filtered_data = {key: data[key] for key in sentence_data_keys if key in data}
            filtered_data["translation_zh_CN"] = translated.text
            filtered.append(filtered_data)
        return filtered
    def tatoeba_request(char: str) -> list[SentenceData]:
        res = requests.get(TATOEBA_SENTENCES_URL.format(char))
        json_data = res.json()
        filtered = []
        for data in json_data["results"]:
            translated = None
            for tran in data["translations"]:
                if len(tran) == 0: continue
                translated = tran[0]["text"]
                break
            filtered_data = SentenceData(
                content=data["text"],
                furigana=data["transcriptions"][0]["text"],
                translation_zh_CN=translated,
            )
            filtered.append(filtered_data)
        return filtered
    return jotoba_request(char) + tatoeba_request(char)

def word_data_req(char: str) -> list[WordData]:
    res = requests.get(JISHO_WORD_MORE_URL.format(char))
    json_data = res.json()
    if len(json_data["data"]) == 0:
        res = requests.get(JISHO_WORD_URL.format(char))
        json_data = res.json()

    unfiltered = json_data["data"]
    filtered = []
    for data in unfiltered:
        slug = data["slug"]
        if '-' in slug or char == slug: continue
        if re.fullmatch(r'^[a-zA-Z0-9]+$', slug): continue
        if len(slug) == 1 and char != slug: continue
        filtered.append({key: data[key] for key in word_data_keys if key in data})
    return filtered

sentence_data_keys = SentenceData.__annotations__.keys()
word_data_keys = WordData.__annotations__.keys()

# - - - - - - - - - -

for file in glob.glob("*.json"):
    char = file.split(".")[0]
    with open(file, "r", encoding="utf-8") as f:
        char_data = json.load(f)

    has_sentences = "sentences" in char_data # and len(char_data["sentences"])
    has_usages = "usages" in char_data # and len(char_data["usages"])
    # if has_sentences and has_usages:
    if has_sentences or has_usages:
        print(f"character {char} resolved, skip")
        continue
    if not has_sentences:
        sentence_data = sentence_data_req(char)
        if len(sentence_data) == 0: print(f"character '{char}' warning: sentence data empty")
        char_data["sentences"] = sentence_data
    if not has_usages:
        word_data = word_data_req(char)
        if len(word_data) == 0: print(f"character '{char}' warning: word data empty")
        char_data["usages"] = word_data

    with open(file, "w+", encoding="utf-8") as f:
        json.dump(char_data, f, indent=2, ensure_ascii=False)
    print(f"character {char} completed")
    time.sleep(2)

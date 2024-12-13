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

import glob
import json
import requests
import time
from typing import TypedDict
from googletrans import Translator

JOTOBA_SENTENCES_URL = "https://jotoba.com/api/search/sentences"
JISHO_WORD_URL = "https://jisho.org/api/v1/search/words?keyword={}?page=2"
translator = Translator()

class SentenceData(TypedDict):
    content: str
    furigana: str
    translation_zh_CN: str

class WordData(TypedDict):
    class JapaneseData(TypedDict):
        word: str
        reading: str
    slug: str
    jlpt: list[str]
    japanese: list[JapaneseData]

def sentence_data_req(char: str) -> list[SentenceData]:
    res = requests.post(JOTOBA_SENTENCES_URL, headers={
        "accept": "application/json",
        "content-type": "application/json"
    }, data=json.dumps({
        "query": char,
        "language": "English",
        "no_english": True
    }))
    json_data = res.json()
    unfiltered = json_data["sentences"]
    filtered = []
    for data in unfiltered:
        translated = translator.translate(data["content"], src="ja", dest="zh-CN")
        filtered_data = {key: data[key] for key in sentence_data_keys if key in data}
        filtered_data["translation_zh_CN"] = translated.text
        filtered.append(filtered_data)
    return filtered

def word_data_req(char: str) -> list[WordData]:
    res = requests.get(JISHO_WORD_URL.format(char))
    json_data = res.json()
    if json_data["meta"]["status"] != 200:
        print("Requesting " + char + " error")
    
    unfiltered = json_data["data"]
    filtered = []
    for data in unfiltered:
        slug = data["slug"]
        if char not in slug or '-' in slug or char == slug: continue
        filtered.append({key: data[key] for key in word_data_keys if key in data})
    return filtered

sentence_data_keys = SentenceData.__annotations__.keys()
word_data_keys = WordData.__annotations__.keys()

for file in glob.glob("*.json"):
# for file in ["両.json"]:
    char = file.split(".")[0]
    sentence_data = sentence_data_req(char)
    word_data = word_data_req(char)
    with open(file, "r", encoding="utf-8") as f:
        char_data = json.load(f)
    
    char_data["sentences"] = sentence_data
    char_data["usages"] = word_data
    with open(file, "w+", encoding="utf-8") as f:
        json.dump(char_data, f, indent=2, ensure_ascii=False)
    print(f"character {char} completed")
    time.sleep(0.5)

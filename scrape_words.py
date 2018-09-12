import requests, bs4
res = requests.get('http://www2.sharonherald.com/herald/nie/spellb/spelllist2.html')
res.raise_for_status()
words_soup = bs4.BeautifulSoup(res.text, "lxml")
# print(res.text)
word_file = open("words.txt", "w")
for word in words_soup.find_all('b'):
    word_file.write(word.text + ',')
    print('writing \"' + word.text + ',\"')
    # print(word.text)
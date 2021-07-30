import random
import crossref_commons.retrieval

deets = 'members_to_check.csv'
random_dois = random.sample(open('current_dois.csv', 'r').readlines(),60)
#doi = '10.1145/3377811.3380373'
for doi in random_dois:
    try:
        doi_json = crossref_commons.retrieval.get_publication_as_json(doi)
    except ValueError: # DOI not found
        continue
    venue = doi_json['event']['name'] #ICSE
    title = doi_json['title'][0]
    authors = []
    for person in doi_json['author']:
        # authors.append({'given': person['given'],'family': person['family']})
        authors.append(person['given'] + ' ' + person['family']) 
    authors = ' and '.join(authors)
    with open(deets, 'a') as df:
        df.write('https://dx.doi.org/'+ doi + ', ' + venue + ', ' + title + ', ' + authors + '\n')
import os
from email import generator
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import csv
import pandas as pd
import requests
crossref_endpoint = 'http://api.crossref.org/works/' 
# read the opening and closing boilerplate html
def create_htmlboilerplate():
    # read the opening and closing boilerplate html
    with open('boilerplate_open.txt', 'r') as bo:
        boiler_open = bo.read()

    with open('boilerplate_close.txt','r') as bc:
        boiler_close = bc.read()
    return boiler_open, boiler_close

def create_plainboilerplate():
    # read the opening and closing boilerplate html
    with open('boiler_open_plain.txt', 'r') as bo:
        boiler_open = bo.read()

    with open('boilerplate_close_plain.txt','r') as bc:
        boiler_close = bc.read()
    return boiler_open, boiler_close

boiler_open, boiler_close,  = create_htmlboilerplate()
plain_boiler_open, plain_boiler_close = create_plainboilerplate()

with open('members_to_check_emails_10.csv','r') as members_file:
    members = csv.DictReader(members_file)  
    for member in members:
        email_str = member['Email 1'] + ', ' + member['Email 2'] + ', ' + member['Email 3'] + ', ' + member['Email 4']
        title = member['Title'].strip()
        venue = member['Venue']
        paper_doi = str(member['DOI'])

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'artifact re-use - validation study on your paper "{title}"'
        msg['From'] = 'nernst@uvic.ca'
        msg['To'] = f'{email_str}'

        # given the DOI of the a paper find the things it reuses
        # TODO replace with JSON file Ben already creates
        df = pd.read_csv('todate.csv', dtype= {'paper_doi': str, 'reused_doi': str}) # todate.csv is the data from DONE
        reused_artifacts = df.loc[df['paper_doi']==paper_doi,['reuse_type', 'alt_url', 'reused_doi', 'comment']] # TODO ideally get title as well...
        if reused_artifacts.empty:
            print(f'no such DOI: {paper_doi}')
            break
        plainbody_string = htmlbody_string = ''
        #print(reused_artifacts)
        for index,row in reused_artifacts.iterrows(): 
            if pd.isna(row['reused_doi']):
                doi = row['alt_url']
            else:
                doi = 'https://dx.doi.org/'+str(row['reused_doi'])
            response = requests.get(crossref_endpoint+ str(row['reused_doi']))
            if response.status_code == 200:
                art_title = response.json()['message']['title'][0]
            else:
                art_title = 'N/A'
            htmlbody_string += f"""
                <tr> 
                <td>{index}</td>
                <td>{row['comment']}</td>
                <td>{art_title}</td>
                <td>{doi}</td>
                <td>{row["reuse_type"]}</td>
                </tr>
                """
            plainbody_string += f"""
                ID: {index}    
                Comment (if any): {row['comment']}  
                DOI: {doi}  
                Title: {art_title}
                Reuse Type: {row["reuse_type"]}
                """
            #print (body_string)
        htmlbody = f"""
        <p>
        <b>Your paper: {title}</b>
        <table>
        <tr>
        <th>Row Id</th>
        <th>Annotation Comment (if any)</th>
        <th>Title</th>
        <th>Reused URL or DOI</th>
        <th>Reuse Type Identified</th>
        </tr>
        {htmlbody_string}
        </table>
        """

        plainbody = f"""
    Your paper: {title}
    Artifacts Reused:
        {plainbody_string}
        """

        plain_part =  MIMEText(plain_boiler_open + plainbody + plain_boiler_close, 'plain')
        html_part = MIMEText(boiler_open + htmlbody + boiler_close, 'html')

        msg.attach(plain_part)
        # msg.attach(html_part) # last attached is first rendered

        outfile_name = os.path.join("/", "tmp", title+"_email_sample.eml")
        print (f"created email for {paper_doi}")
        with open(outfile_name, 'w') as outfile:
            gen = generator.Generator(outfile)
            gen.flatten(msg)

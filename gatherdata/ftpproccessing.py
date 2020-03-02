'''
This script is used to process the data retrieved from the api's ftp server
This script takes in a path to a file and grabs all of the dict items
in the file. Each item is a different animal/org so we can then send them to over to the output script
'''
import output
def processFTPDownload(fileName):
    '''
    This function proccesses the files downloaded via FTP each file consists of
    a lot of dictionaries each dictionary represents a new animal or organization
    It first finds out which item it is processing (org or animal) and then throws the data
    to be output
    Arguement: path to file to process
    '''    
    #open the file and loop through each line, convert each line to a dictionary
    
    processFile = open(fileName,'r')
    isOrgFile = False
    #check to see which item is being processed
    if 'orgs' in fileName:
        print("TRUE")
        isOrgFile = True

    for line in processFile:
        #convert each line into a dict
        item = eval(line)
        if isOrgFile:
            #have the file format match the search result format
            #so we can keep it DRY
            newOrg(item)
        else:
            newAnimal(item)

            
    

def newAnimal(animal):
    '''
    creates a new animal to be output
    it is here the animal shall be pruned for its data
    '''
    animalID = animal['animalID']
    #tasty animals will be given orgID
    #status, name, species, breed, sex, description
    wantedData = [
        'orgID','name','status','lastUpdated','species','breed','sex','size',
    ]

    animalOutput = {}
    for field in wantedData:
        animalOutput[field]=animal[field]
    #print(animalOutput)
    output.animal(animalID, animalOutput)

def newOrg(org):
    '''
    Create new org!
    '''
    orgID = org['orgID']
    #array of all of the fields we want to be included in the csv file
    wantedData =[
        'name','address', 'city', 'state', 'zip','country', 'phone', 'email', 'orgurl',
    ]
    orgOutput ={
    }
    for field in wantedData:
        orgOutput[field]=org[field]
    #print(orgOutput)
    output.organization(orgID, orgOutput)
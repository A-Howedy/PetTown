'''
takes inputs of either an animal object or a organization object and writes the data into a csv file
'''
import pathlib
import json
import requests

openFiles = []

def GetApiKey():
    '''
    gets the super secret api key which will be hidden later
    '''
    ak = "8f7a4a68e9154253a2f8ee5718ff741894556890"
    return ak


def PostData(path, data):
    '''
    posts the inputted data to the specififed URL with the appropriate headers

    '''
    ak = GetApiKey()
    #DO NOT HARD CODE THIS IN!
    PetTown = 'http://ec2-3-87-101-51.compute-1.amazonaws.com:8000/api'
    actualURL = PetTown + '/' + path
    headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': "Token " + ak,
    }
    print(data)
    jsonData = json.dumps(data)
    request = requests.Request('POST', actualURL, data=jsonData, headers=headers)
    prepared = request.prepare()
    s = requests.Session()
    response = s.send(prepared)

    print(response.status_code)
    print(str(response))


def animal(id, fieldData):
    useCSV = False
    if useCSV:    
        fields = []
        for keys in fieldData:
            fields.append(keys)
        csvFileName = "animals.csv"
        file = openFile(csvFileName,"animalID",fields)
        #check to see if there was an error with the file opening
        if file is None:
            return
        WriteDataIntoFile(file, id, fieldData)

    else:
        #Create some nice JSON data to POST to our api!!!
        animalData = {
            'id':id,
            'orgID':fieldData['orgID'],
            'name':fieldData['name'],
            'status':fieldData['status'],
            'lastUpdated':fieldData['lastUpdated'],
            'species':fieldData['species'],
            'breed':fieldData['breed'],
            'sex':fieldData['sex'],
            'size':fieldData['size']
        }
        PostData('animals/',animalData)



def organization(id, fieldData):
    '''
    writes a csv file containing the organization data
    '''
    useCSV = False
    if useCSV:
        fields = []
        for keys in fieldData:
            fields.append(keys)

        csvFileName = "organizations.csv"
        file = openFile(csvFileName,"orgID",fields)

        #check to see if there was an error with the file opening
        if file is None:
            return    

        WriteDataIntoFile(file, id, fieldData)
    else:
        #post some of that data to the tasty api
       
        orgData = {
            'id':id,
            'orgID':id,
            'name':fieldData['name'],
            'address':fieldData['address'],
            'city':fieldData['city'],
            'state':fieldData['state'],
            'zip':fieldData['zip'],
            'country':fieldData['country'],
            'phone':fieldData['phone'],
            'email':fieldData['email'],
            'orgurl':fieldData['orgurl'],
            #'created':fieldData['created']
        }
        print(orgData)
        PostData('organizations/', orgData)




def WriteDataIntoFile(file, itemID, fieldData):
    #Write item's id in first
    file.write(itemID)
    #write each value seperated by a comma
    for data in fieldData:
        try:
            file.write(',')
            file.write(fieldData[data])        
        except Exception as e:
            print(e)
            continue
    file.write('\n')





def openFile(fileName, IDType ,fields=''):
    #if the file is open then return that file
    global openFiles
    for file in openFiles:
        if fileName in file.name:
            return file
    #if it is a fresh spankin file then we will open it and slap it back
    try:
        gettinFile = open(fileName, "w")
        openFiles.append(gettinFile)
        if fields:

            #print out each field delimmited by a comma
            gettinFile.write(IDType)
            for field in fields:
                gettinFile.write(','+field)
            gettinFile.write("\n")

        return gettinFile
    except Exception as error:
        print(error)
    return None


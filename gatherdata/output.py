'''
takes inputs of either an animal object or a organization object and writes the data into a csv file
'''
import pathlib


openFiles = []

def animal(id, fieldData):    
    fields = []
    for keys in fieldData:
        fields.append(keys)
    csvFileName = "animals.csv"
    file = openFile(csvFileName,"animalID",fields)
    #check to see if there was an error with the file opening
    if file is None:
        return
    WriteDataIntoFile(file, id, fieldData)
    



def organization(id, fieldData):
    '''
    writes a csv file containing the organization data
    '''
    fields = []
    for keys in fieldData:
        fields.append(keys)

    csvFileName = "organizations.csv"
    file = openFile(csvFileName,"orgID",fields)

    #check to see if there was an error with the file opening
    if file is None:
        return    

    WriteDataIntoFile(file, id, fieldData)




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


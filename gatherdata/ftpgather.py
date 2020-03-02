'''
This script will download all available and updated files that contain adoptable pet
data from ftp.rescuegroups.org. The files being downloaded involve all of the adoptable pet information
as well as the organizations that are interacting with these pets. These are JSON files
'''
import ftplib
#the downloaded files are zipped up!
import zipfile
import os
import ftpproccessing


def GatherFilesFTP():
    hostName = 'ftp.rescuegroups.org'

    #=======================
    #putting the apikey in temporarily
    apikey = apikey = "E38aA1uJ"
    user = 'apikey-'+apikey
    password = 'BXWGQW'    
    #=================

    #open the ftp connection
    rgFTP = ftplib.FTP(hostName,user,password)
    #Create the path for the downloaded files
    path = 'DataFiles/'
    print(rgFTP.dir())
    #Create an array with all of the files available for download
    #ThisFTP site has no folders, all of the downloadable files are in the home directory
    #So that is pretty cool!
    filesToDownload = []
    for downloadableFiles in rgFTP.nlst():
        filesToDownload.append(downloadableFiles)
    #boolean for testing to cut down on time
    
    isDownloadTime = False
    if isDownloadTime:
        for files in filesToDownload:
            #create a file in the DataFiles folder
            print("Processing:"+ files)
            filepath = os.path.join(path, files)
            try:
                localFile = open(filepath, 'wb')
            except Exception as e:
                print(e)
                continue

            #download the file via binary in blocks of 1024
            try:
                rgFTP.retrbinary('RETR '+files, localFile.write, 1024)
            except Exception as e:
                print(e)
                continue
            #close out of the file!
            localFile.close()
            #unzip that bad boy!

            with zipfile.ZipFile(filepath, 'r')as z:
                z.extractall(path+'ExtractedFiles/')
            
        
    path = path+'ExtractedFiles/'
    #close out the ftp connection    
    rgFTP.quit()
    #get all the files recently downloaded
    for files in os.listdir(path):
        #Because of the one csv file we need to check extensions
        if(files.endswith('.json')):
            ftpproccessing.processFTPDownload(path+files)
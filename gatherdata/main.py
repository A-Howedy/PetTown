'''
Main script for the pet adoption website
gathers data by logging into the rescuegroup ftp webserver and downloading various files containing
information about pets available for adoption and the organizations involved
'''
import ftpgather
import requests

if __name__ == '__main__':
    
    
    #This function downloads and extracts all the files from the rescuegroups api ftp webserver
    #it then sends the extracted data to the processing script to be output as csv files
    ftpgather.GatherFilesFTP()

    

import { Account, Client, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.ahmed.aora',
    projectId: '67a8823e002a9e8db504',
    databaseId: '67a8848b000afd174d47',
    userCollectionId: '67a884ae0030a65406bf',
    videoCollectionId: '67a884f000095a1e4d78',
    storageId: '67a8888a0005fe9d82b6',
    
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}

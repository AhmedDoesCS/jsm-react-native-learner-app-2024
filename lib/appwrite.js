import { Account, Avatars, Client, ID, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.ahmed.aora',
    projectId: '67a8823e002a9e8db504',
    databaseId: '67a8848b000afd174d47',
    userCollectionId: '67a884ae0030a65406bf',
    videoCollectionId: '67a884f000095a1e4d78',
    storageId: '67a8888a0005fe9d82b6',
    
}

const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);
    await SignIn(email, password);
    const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique,
        {
            AccountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
    )

    return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.dataId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;
        
        return currentUser.documents[0];

    } catch (error) {
        console.log(error);
    }
}
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://147.182.228.223');

export const records = await pb.collection('emergencies').getFullList(200 /* batch size */, {
    sort: '-created',
});

export async function filtrar(inicioDate:string, finDate:string) {
    const filtro = await pb.collection('emergencies').getList(1, 200 ,{
        filter: `created > "${inicioDate}" && created < "${finDate}"`,
    });
    return filtro;
    
}
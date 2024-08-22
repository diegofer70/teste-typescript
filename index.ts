import axios from 'axios'

console.log(1);

interface Disco {
    artists_sort: string;
    title: string;
}

const execRequest = async () => {
    const res = await axios<Disco>('https://api.discogs.com/releases/23949476?&key=fDPuzDCZvRVudVyXTyMJ&secret=ncLniYJXSgMCoydevODixTIDrgULdzLM')
    console.log(res.data.artists_sort)
    console.log(res.data.title)
}

execRequest()
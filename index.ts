import axios from 'axios'

console.log(1);

const execRequest = async () => {
    const res = await axios('https://api.discogs.com/releases/23949476?&key=fDPuzDCZvRVudVyXTyMJ&secret=ncLniYJXSgMCoydevODixTIDrgULdzLM')
    console.log(res.data)
}

execRequest()
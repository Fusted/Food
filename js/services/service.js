const postData = (async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json'}
    })

    return await res.json()
})

async function getResourses(url) {
    const res = await fetch(url)

    if(!res){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json()
}


export {getResourses}
export {postData}
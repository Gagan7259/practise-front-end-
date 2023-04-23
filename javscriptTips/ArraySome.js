// 

const assets = [
    { id: 1, title: "V-1", type: "audio" },
    { id: 2, title: "V-1", type: "audio" },
    { id: 3, title: "V-1", type: "Video" }
]

const a = assets.some(asset => asset.type === "Video")
console.log(a)
const b = assets.some(assett => assett.type === "audio")
console.log(b)
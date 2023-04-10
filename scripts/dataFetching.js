export async function dataFetching() {
    const res = await fetch("./scripts/data.json")
    const data = await res.json()
    return data
}
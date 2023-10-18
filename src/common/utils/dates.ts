export const olderThan24Hours = (timestamp: number) => {
    const current = Date.now();
    console.log(`${current} - ${timestamp}`)
    const diffInMilliseconds = current - timestamp;
    console.log(diffInMilliseconds)
    return diffInMilliseconds / (3600 * 1000) > 24
}
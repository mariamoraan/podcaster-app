export const olderThan24Hours = (timestamp: number) => {
    if (timestamp < 0) return false;
    try {
    const current = Date.now();
    const diffInMilliseconds = current - timestamp;
    return diffInMilliseconds / (3600 * 1000) > 24
    } catch (error) {
        console.error(error)
        return false
    }
}
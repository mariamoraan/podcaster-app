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

export const getReadableDate = (date: Date): string => {
    const currentDate = new Date(date);
    return `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
}

export const millisecondsToSecondsAndMinutes = (milliseconds: number): string => {
    const seconds = Math.trunc(milliseconds / 1000)
    const minutes = Math.trunc(seconds / 60)
    return `${minutes}:${seconds - minutes*60}`
}
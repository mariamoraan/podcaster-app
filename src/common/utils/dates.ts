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
    const dd = currentDate.getDate()
    const mm = currentDate.getMonth() + 1
    return `${dd < 10 ? `0${dd}` : dd}/${mm < 10 ? `0${mm}` : mm}/${currentDate.getFullYear()}`
}

export const millisecondsToSecondsAndMinutes = (milliseconds: number): string => {
    const totalSeconds = Math.trunc(milliseconds / 1000)
    const minutes = Math.trunc(totalSeconds / 60)
    const seconds = totalSeconds - minutes*60
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}
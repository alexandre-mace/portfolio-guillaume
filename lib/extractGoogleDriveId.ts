function extractGoogleDriveId(url: string) {
    const regex = /\/d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

export default extractGoogleDriveId;